"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

const VIEW_X = -229.7
const VIEW_Y = -42
const VIEW_W = 681.11
const VIEW_H = 434

/**
 * Isometric "NS" mark, built as a voxel extrusion of the same letter grid
 * used by the flat mark (see ns-mark.tsx), rather than hand-drawn
 * per-vertex art.
 */
export function NsMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `ns-face-pattern-${id}`,
    radialGradient: `ns-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(
    useTransform(mouseX, [0, 1], [VIEW_X, VIEW_X + VIEW_W]),
    {
      stiffness: 300,
      damping: 30,
      mass: 0.1,
    }
  )

  const cy = useSpring(
    useTransform(mouseY, [0, 1], [VIEW_Y, VIEW_Y + VIEW_H]),
    {
      stiffness: 300,
      damping: 30,
      mass: 0.1,
    }
  )

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox={`${VIEW_X} ${VIEW_Y} ${VIEW_W} ${VIEW_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect width="10" height="10" className="fill-background" />
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1.5"
          />
        </pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <g transform="translate(0, -32)">
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "0,-34 55.43,-2 0,30 -55.43,-2" },
            pressed: { points: "0,-18 55.43,14 0,46 -55.43,14" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "55.43,-2 0,30 0,64 55.43,32" },
            pressed: { points: "55.43,14 0,46 0,64 55.43,32" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M0 -34L55.43 -2" },
            pressed: { d: "M0 -18L55.43 14" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 -34L55.43 -2" },
            pressed: { d: "M0 -18L55.43 14" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 -2L0 30" },
            pressed: { d: "M55.43 14L0 46" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 -2L0 30" },
            pressed: { d: "M55.43 14L0 46" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 -2L0 -34" },
            pressed: { d: "M-55.43 14L0 -18" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 -2L0 -34" },
            pressed: { d: "M-55.43 14L0 -18" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 32L0 64" },
            pressed: { d: "M55.43 32L0 64" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 32L0 64" },
            pressed: { d: "M55.43 32L0 64" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 -2L55.43 32" },
            pressed: { d: "M55.43 14L55.43 32" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 -2L55.43 32" },
            pressed: { d: "M55.43 14L55.43 32" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 30L0 64" },
            pressed: { d: "M0 46L0 64" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 30L0 64" },
            pressed: { d: "M0 46L0 64" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "-55.43,-2 0,30 -55.43,62 -110.85,30" },
            pressed: { points: "-55.43,14 0,46 -55.43,78 -110.85,46" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M-110.85 30L-55.43 -2" },
            pressed: { d: "M-110.85 46L-55.43 14" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-110.85 30L-55.43 -2" },
            pressed: { d: "M-110.85 46L-55.43 14" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "-110.85,30 -55.43,62 -110.85,94 -166.28,62" },
            pressed: { points: "-110.85,46 -55.43,78 -110.85,110 -166.28,78" },
          }}
          transition={transition}
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "0,30 55.43,62 0,94 -55.43,62" },
            pressed: { points: "0,46 55.43,78 0,110 -55.43,78" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "-55.43,62 -110.85,94 -110.85,128 -55.43,96" },
            pressed: { points: "-55.43,78 -110.85,110 -110.85,128 -55.43,96" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "55.43,62 0,94 0,128 55.43,96" },
            pressed: { points: "55.43,78 0,110 0,128 55.43,96" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "0,94 -55.43,62 -55.43,96 0,128" },
            pressed: { points: "0,110 -55.43,78 -55.43,96 0,128" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 62L-110.85 94" },
            pressed: { d: "M-55.43 78L-110.85 110" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 62L-110.85 94" },
            pressed: { d: "M-55.43 78L-110.85 110" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-166.28 62L-110.85 30" },
            pressed: { d: "M-166.28 78L-110.85 46" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-166.28 62L-110.85 30" },
            pressed: { d: "M-166.28 78L-110.85 46" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 30L55.43 62" },
            pressed: { d: "M0 46L55.43 78" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 30L55.43 62" },
            pressed: { d: "M0 46L55.43 78" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 62L0 94" },
            pressed: { d: "M55.43 78L0 110" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 62L0 94" },
            pressed: { d: "M55.43 78L0 110" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 94L-55.43 62" },
            pressed: { d: "M0 110L-55.43 78" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 94L-55.43 62" },
            pressed: { d: "M0 110L-55.43 78" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 96L-110.85 128" },
            pressed: { d: "M-55.43 96L-110.85 128" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 96L-110.85 128" },
            pressed: { d: "M-55.43 96L-110.85 128" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 62L-55.43 96" },
            pressed: { d: "M-55.43 78L-55.43 96" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 62L-55.43 96" },
            pressed: { d: "M-55.43 78L-55.43 96" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 96L0 128" },
            pressed: { d: "M55.43 96L0 128" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 96L0 128" },
            pressed: { d: "M55.43 96L0 128" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 62L55.43 96" },
            pressed: { d: "M55.43 78L55.43 96" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 62L55.43 96" },
            pressed: { d: "M55.43 78L55.43 96" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 94L0 128" },
            pressed: { d: "M0 110L0 128" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 94L0 128" },
            pressed: { d: "M0 110L0 128" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 96L0 128" },
            pressed: { d: "M-55.43 96L0 128" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 96L0 128" },
            pressed: { d: "M-55.43 96L0 128" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "166.28,62 221.7,94 166.28,126 110.85,94" },
            pressed: { points: "166.28,78 221.7,110 166.28,142 110.85,110" },
          }}
          transition={transition}
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "-166.28,62 -110.85,94 -166.28,126 -221.7,94" },
            pressed: {
              points: "-166.28,78 -110.85,110 -166.28,142 -221.7,110",
            },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "221.7,94 166.28,126 166.28,160 221.7,128" },
            pressed: { points: "221.7,110 166.28,142 166.28,160 221.7,128" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: {
              points: "-110.85,94 -166.28,126 -166.28,160 -110.85,128",
            },
            pressed: {
              points: "-110.85,110 -166.28,142 -166.28,160 -110.85,128",
            },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "-166.28,126 -221.7,94 -221.7,128 -166.28,160" },
            pressed: {
              points: "-166.28,142 -221.7,110 -221.7,128 -166.28,160",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 62L221.7 94" },
            pressed: { d: "M166.28 78L221.7 110" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 62L221.7 94" },
            pressed: { d: "M166.28 78L221.7 110" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 94L166.28 126" },
            pressed: { d: "M221.7 110L166.28 142" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 94L166.28 126" },
            pressed: { d: "M221.7 110L166.28 142" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 94L166.28 62" },
            pressed: { d: "M110.85 110L166.28 78" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 94L166.28 62" },
            pressed: { d: "M110.85 110L166.28 78" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-110.85 94L-166.28 126" },
            pressed: { d: "M-110.85 110L-166.28 142" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-110.85 94L-166.28 126" },
            pressed: { d: "M-110.85 110L-166.28 142" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-166.28 126L-221.7 94" },
            pressed: { d: "M-166.28 142L-221.7 110" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-166.28 126L-221.7 94" },
            pressed: { d: "M-166.28 142L-221.7 110" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-221.7 94L-166.28 62" },
            pressed: { d: "M-221.7 110L-166.28 78" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-221.7 94L-166.28 62" },
            pressed: { d: "M-221.7 110L-166.28 78" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 128L166.28 160" },
            pressed: { d: "M221.7 128L166.28 160" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 128L166.28 160" },
            pressed: { d: "M221.7 128L166.28 160" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 94L221.7 128" },
            pressed: { d: "M221.7 110L221.7 128" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 94L221.7 128" },
            pressed: { d: "M221.7 110L221.7 128" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-110.85 128L-166.28 160" },
            pressed: { d: "M-110.85 128L-166.28 160" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-110.85 128L-166.28 160" },
            pressed: { d: "M-110.85 128L-166.28 160" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-166.28 126L-166.28 160" },
            pressed: { d: "M-166.28 142L-166.28 160" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-166.28 126L-166.28 160" },
            pressed: { d: "M-166.28 142L-166.28 160" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-221.7 128L-166.28 160" },
            pressed: { d: "M-221.7 128L-166.28 160" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-221.7 128L-166.28 160" },
            pressed: { d: "M-221.7 128L-166.28 160" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-221.7 94L-221.7 128" },
            pressed: { d: "M-221.7 110L-221.7 128" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-221.7 94L-221.7 128" },
            pressed: { d: "M-221.7 110L-221.7 128" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "110.85,94 166.28,126 110.85,158 55.43,126" },
            pressed: { points: "110.85,110 166.28,142 110.85,174 55.43,142" },
          }}
          transition={transition}
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "0,94 55.43,126 0,158 -55.43,126" },
            pressed: { points: "0,110 55.43,142 0,174 -55.43,142" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "166.28,126 110.85,158 110.85,192 166.28,160" },
            pressed: { points: "166.28,142 110.85,174 110.85,192 166.28,160" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "0,158 -55.43,126 -55.43,160 0,192" },
            pressed: { points: "0,174 -55.43,142 -55.43,160 0,192" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 126L110.85 158" },
            pressed: { d: "M166.28 142L110.85 174" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 126L110.85 158" },
            pressed: { d: "M166.28 142L110.85 174" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 126L110.85 94" },
            pressed: { d: "M55.43 142L110.85 110" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 126L110.85 94" },
            pressed: { d: "M55.43 142L110.85 110" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 94L55.43 126" },
            pressed: { d: "M0 110L55.43 142" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 94L55.43 126" },
            pressed: { d: "M0 110L55.43 142" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 158L-55.43 126" },
            pressed: { d: "M0 174L-55.43 142" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 158L-55.43 126" },
            pressed: { d: "M0 174L-55.43 142" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 126L0 94" },
            pressed: { d: "M-55.43 142L0 110" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 126L0 94" },
            pressed: { d: "M-55.43 142L0 110" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 160L110.85 192" },
            pressed: { d: "M166.28 160L110.85 192" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 160L110.85 192" },
            pressed: { d: "M166.28 160L110.85 192" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 160L0 192" },
            pressed: { d: "M-55.43 160L0 192" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 160L0 192" },
            pressed: { d: "M-55.43 160L0 192" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 126L-55.43 160" },
            pressed: { d: "M-55.43 142L-55.43 160" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 126L-55.43 160" },
            pressed: { d: "M-55.43 142L-55.43 160" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 158L0 192" },
            pressed: { d: "M0 174L0 192" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 158L0 192" },
            pressed: { d: "M0 174L0 192" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "55.43,126 110.85,158 55.43,190 0,158" },
            pressed: { points: "55.43,142 110.85,174 55.43,206 0,174" },
          }}
          transition={transition}
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "277.13,126 332.55,158 277.13,190 221.7,158" },
            pressed: { points: "277.13,142 332.55,174 277.13,206 221.7,174" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "110.85,158 55.43,190 55.43,224 110.85,192" },
            pressed: { points: "110.85,174 55.43,206 55.43,224 110.85,192" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 158L55.43 190" },
            pressed: { d: "M110.85 174L55.43 206" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 158L55.43 190" },
            pressed: { d: "M110.85 174L55.43 206" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 126L332.55 158" },
            pressed: { d: "M277.13 142L332.55 174" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 126L332.55 158" },
            pressed: { d: "M277.13 142L332.55 174" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 158L277.13 126" },
            pressed: { d: "M221.7 174L277.13 142" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 158L277.13 126" },
            pressed: { d: "M221.7 174L277.13 142" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 192L55.43 224" },
            pressed: { d: "M110.85 192L55.43 224" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 192L55.43 224" },
            pressed: { d: "M110.85 192L55.43 224" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "0,158 55.43,190 0,222 -55.43,190" },
            pressed: { points: "0,174 55.43,206 0,238 -55.43,206" },
          }}
          transition={transition}
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "332.55,158 387.98,190 332.55,222 277.13,190" },
            pressed: { points: "332.55,174 387.98,206 332.55,238 277.13,206" },
          }}
          transition={transition}
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "221.7,158 277.13,190 221.7,222 166.28,190" },
            pressed: { points: "221.7,174 277.13,206 221.7,238 166.28,206" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "55.43,190 0,222 0,256 55.43,224" },
            pressed: { points: "55.43,206 0,238 0,256 55.43,224" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "0,222 -55.43,190 -55.43,224 0,256" },
            pressed: { points: "0,238 -55.43,206 -55.43,224 0,256" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "332.55,222 277.13,190 277.13,224 332.55,256" },
            pressed: { points: "332.55,238 277.13,206 277.13,224 332.55,256" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "277.13,190 221.7,222 221.7,256 277.13,224" },
            pressed: { points: "277.13,206 221.7,238 221.7,256 277.13,224" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "221.7,222 166.28,190 166.28,224 221.7,256" },
            pressed: { points: "221.7,238 166.28,206 166.28,224 221.7,256" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 190L0 222" },
            pressed: { d: "M55.43 206L0 238" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 190L0 222" },
            pressed: { d: "M55.43 206L0 238" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 222L-55.43 190" },
            pressed: { d: "M0 238L-55.43 206" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 222L-55.43 190" },
            pressed: { d: "M0 238L-55.43 206" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 190L0 158" },
            pressed: { d: "M-55.43 206L0 174" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 190L0 158" },
            pressed: { d: "M-55.43 206L0 174" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 158L387.98 190" },
            pressed: { d: "M332.55 174L387.98 206" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 158L387.98 190" },
            pressed: { d: "M332.55 174L387.98 206" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 222L277.13 190" },
            pressed: { d: "M332.55 238L277.13 206" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 222L277.13 190" },
            pressed: { d: "M332.55 238L277.13 206" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 190L221.7 222" },
            pressed: { d: "M277.13 206L221.7 238" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 190L221.7 222" },
            pressed: { d: "M277.13 206L221.7 238" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 222L166.28 190" },
            pressed: { d: "M221.7 238L166.28 206" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 222L166.28 190" },
            pressed: { d: "M221.7 238L166.28 206" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 190L221.7 158" },
            pressed: { d: "M166.28 206L221.7 174" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 190L221.7 158" },
            pressed: { d: "M166.28 206L221.7 174" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 224L0 256" },
            pressed: { d: "M55.43 224L0 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 224L0 256" },
            pressed: { d: "M55.43 224L0 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 222L0 256" },
            pressed: { d: "M0 238L0 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M0 222L0 256" },
            pressed: { d: "M0 238L0 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 224L0 256" },
            pressed: { d: "M-55.43 224L0 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 224L0 256" },
            pressed: { d: "M-55.43 224L0 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 190L-55.43 224" },
            pressed: { d: "M-55.43 206L-55.43 224" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M-55.43 190L-55.43 224" },
            pressed: { d: "M-55.43 206L-55.43 224" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 224L332.55 256" },
            pressed: { d: "M277.13 224L332.55 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 224L332.55 256" },
            pressed: { d: "M277.13 224L332.55 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 190L277.13 224" },
            pressed: { d: "M277.13 206L277.13 224" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 190L277.13 224" },
            pressed: { d: "M277.13 206L277.13 224" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 224L221.7 256" },
            pressed: { d: "M277.13 224L221.7 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 224L221.7 256" },
            pressed: { d: "M277.13 224L221.7 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 222L221.7 256" },
            pressed: { d: "M221.7 238L221.7 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 222L221.7 256" },
            pressed: { d: "M221.7 238L221.7 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 224L221.7 256" },
            pressed: { d: "M166.28 224L221.7 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 224L221.7 256" },
            pressed: { d: "M166.28 224L221.7 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 190L166.28 224" },
            pressed: { d: "M166.28 206L166.28 224" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 190L166.28 224" },
            pressed: { d: "M166.28 206L166.28 224" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "387.98,190 443.41,222 387.98,254 332.55,222" },
            pressed: { points: "387.98,206 443.41,238 387.98,270 332.55,238" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "443.41,222 387.98,254 387.98,288 443.41,256" },
            pressed: { points: "443.41,238 387.98,270 387.98,288 443.41,256" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "387.98,254 332.55,222 332.55,256 387.98,288" },
            pressed: { points: "387.98,270 332.55,238 332.55,256 387.98,288" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M387.98 190L443.41 222" },
            pressed: { d: "M387.98 206L443.41 238" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M387.98 190L443.41 222" },
            pressed: { d: "M387.98 206L443.41 238" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M443.41 222L387.98 254" },
            pressed: { d: "M443.41 238L387.98 270" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M443.41 222L387.98 254" },
            pressed: { d: "M443.41 238L387.98 270" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M387.98 254L332.55 222" },
            pressed: { d: "M387.98 270L332.55 238" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M387.98 254L332.55 222" },
            pressed: { d: "M387.98 270L332.55 238" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M443.41 256L387.98 288" },
            pressed: { d: "M443.41 256L387.98 288" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M443.41 256L387.98 288" },
            pressed: { d: "M443.41 256L387.98 288" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M443.41 222L443.41 256" },
            pressed: { d: "M443.41 238L443.41 256" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M443.41 222L443.41 256" },
            pressed: { d: "M443.41 238L443.41 256" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M387.98 254L387.98 288" },
            pressed: { d: "M387.98 270L387.98 288" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M387.98 254L387.98 288" },
            pressed: { d: "M387.98 270L387.98 288" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 256L387.98 288" },
            pressed: { d: "M332.55 256L387.98 288" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 256L387.98 288" },
            pressed: { d: "M332.55 256L387.98 288" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "110.85,222 166.28,254 110.85,286 55.43,254" },
            pressed: { points: "110.85,238 166.28,270 110.85,302 55.43,270" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "110.85,286 55.43,254 55.43,288 110.85,320" },
            pressed: { points: "110.85,302 55.43,270 55.43,288 110.85,320" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 222L166.28 254" },
            pressed: { d: "M110.85 238L166.28 270" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 222L166.28 254" },
            pressed: { d: "M110.85 238L166.28 270" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 286L55.43 254" },
            pressed: { d: "M110.85 302L55.43 270" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 286L55.43 254" },
            pressed: { d: "M110.85 302L55.43 270" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 254L110.85 222" },
            pressed: { d: "M55.43 270L110.85 238" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 254L110.85 222" },
            pressed: { d: "M55.43 270L110.85 238" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 288L110.85 320" },
            pressed: { d: "M55.43 288L110.85 320" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 288L110.85 320" },
            pressed: { d: "M55.43 288L110.85 320" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 254L55.43 288" },
            pressed: { d: "M55.43 270L55.43 288" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M55.43 254L55.43 288" },
            pressed: { d: "M55.43 270L55.43 288" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "277.13,254 332.55,286 277.13,318 221.7,286" },
            pressed: { points: "277.13,270 332.55,302 277.13,334 221.7,302" },
          }}
          transition={transition}
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "166.28,254 221.7,286 166.28,318 110.85,286" },
            pressed: { points: "166.28,270 221.7,302 166.28,334 110.85,302" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "332.55,286 277.13,318 277.13,352 332.55,320" },
            pressed: { points: "332.55,302 277.13,334 277.13,352 332.55,320" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "166.28,318 110.85,286 110.85,320 166.28,352" },
            pressed: { points: "166.28,334 110.85,302 110.85,320 166.28,352" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 254L332.55 286" },
            pressed: { d: "M277.13 270L332.55 302" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 254L332.55 286" },
            pressed: { d: "M277.13 270L332.55 302" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 286L277.13 318" },
            pressed: { d: "M332.55 302L277.13 334" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 286L277.13 318" },
            pressed: { d: "M332.55 302L277.13 334" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 286L277.13 254" },
            pressed: { d: "M221.7 302L277.13 270" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 286L277.13 254" },
            pressed: { d: "M221.7 302L277.13 270" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 254L221.7 286" },
            pressed: { d: "M166.28 270L221.7 302" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 254L221.7 286" },
            pressed: { d: "M166.28 270L221.7 302" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 318L110.85 286" },
            pressed: { d: "M166.28 334L110.85 302" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 318L110.85 286" },
            pressed: { d: "M166.28 334L110.85 302" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 320L277.13 352" },
            pressed: { d: "M332.55 320L277.13 352" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 320L277.13 352" },
            pressed: { d: "M332.55 320L277.13 352" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 286L332.55 320" },
            pressed: { d: "M332.55 302L332.55 320" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M332.55 286L332.55 320" },
            pressed: { d: "M332.55 302L332.55 320" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 320L166.28 352" },
            pressed: { d: "M110.85 320L166.28 352" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M110.85 320L166.28 352" },
            pressed: { d: "M110.85 320L166.28 352" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.polygon
          fill={`url(#${ids.facePattern})`}
          variants={{
            normal: { points: "221.7,286 277.13,318 221.7,350 166.28,318" },
            pressed: { points: "221.7,302 277.13,334 221.7,366 166.28,334" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "277.13,318 221.7,350 221.7,384 277.13,352" },
            pressed: { points: "277.13,334 221.7,366 221.7,384 277.13,352" },
          }}
          transition={transition}
        />
        <motion.polygon
          className="fill-background"
          variants={{
            normal: { points: "221.7,350 166.28,318 166.28,352 221.7,384" },
            pressed: { points: "221.7,366 166.28,334 166.28,352 221.7,384" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 318L221.7 350" },
            pressed: { d: "M277.13 334L221.7 366" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 318L221.7 350" },
            pressed: { d: "M277.13 334L221.7 366" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 350L166.28 318" },
            pressed: { d: "M221.7 366L166.28 334" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 350L166.28 318" },
            pressed: { d: "M221.7 366L166.28 334" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 352L221.7 384" },
            pressed: { d: "M277.13 352L221.7 384" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M277.13 352L221.7 384" },
            pressed: { d: "M277.13 352L221.7 384" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 350L221.7 384" },
            pressed: { d: "M221.7 366L221.7 384" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M221.7 350L221.7 384" },
            pressed: { d: "M221.7 366L221.7 384" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 352L221.7 384" },
            pressed: { d: "M166.28 352L221.7 384" },
          }}
          transition={transition}
          stroke="var(--stroke)"
          strokeWidth="1.5"
        />
        <motion.path
          variants={{
            normal: { d: "M166.28 352L221.7 384" },
            pressed: { d: "M166.28 352L221.7 384" },
          }}
          transition={transition}
          stroke={`url(#${ids.radialGradient})`}
          strokeWidth="1.5"
        />
      </g>
    </motion.svg>
  )
}
