"use client"

import { useState } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

const VIEWBOX_WIDTH = 1441
const VIEWBOX_HEIGHT = 193

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()
  const [isHovering, setIsHovering] = useState(false)

  const spotlightXRaw = useMotionValue(VIEWBOX_WIDTH / 2)
  const spotlightYRaw = useMotionValue(VIEWBOX_HEIGHT / 2)
  const spotlightX = useSpring(spotlightXRaw, { stiffness: 150, damping: 25 })
  const spotlightY = useSpring(spotlightYRaw, { stiffness: 150, damping: 25 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    spotlightXRaw.set(
      ((event.clientX - containerRect.left) / containerRect.width) *
        VIEWBOX_WIDTH
    )
    spotlightYRaw.set(
      ((event.clientY - containerRect.top) / containerRect.height) *
        VIEWBOX_HEIGHT
    )
  }

  const handleMouseEnter = () => {
    if (shouldReduceMotion) return
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full items-end justify-center pt-12">
          <svg
            className="container size-full max-w-2xl"
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 1H33V193H1V1ZM97 1H129V193H97V1ZM33 65H65V97H33V65ZM65 97H97V129H65V97ZM161 1H193V161H161V1ZM225 1H257V161H225V1ZM161 161H257V193H161V161ZM289 1H321V193H289V1ZM385 1H417V193H385V1ZM321 65H353V97H321V65ZM353 97H385V129H353V97ZM449 1H545V193H449V1ZM481 33H513V161H481V33ZM673 1H769V33H673V1ZM673 33H705V97H673V33ZM737 97H769V161H737V97ZM673 161H769V193H673V161ZM801 1H897V33H801V1ZM801 33H833V97H801V33ZM865 33H897V97H865V33ZM801 97H897V129H801V97ZM801 129H833V193H801V129ZM865 129H897V193H865V129ZM929 1H961V193H929V1ZM1025 1H1057V193H1025V1ZM961 65H993V97H961V65ZM993 97H1025V129H993V97ZM1089 1H1185V33H1089V1ZM1121 33H1153V193H1121V33ZM1217 1H1313V193H1217V1ZM1249 33H1281V161H1249V33ZM1345 1H1441V33H1345V1ZM1345 33H1377V97H1345V33ZM1409 97H1441V161H1409V97ZM1345 161H1441V193H1345V161Z"
              fill="url(#paint0_radial_1145_73)"
              animate={{ opacity: isHovering ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            />
            <path
              className="stroke-foreground/10"
              d="M1 1H33V193H1V1ZM97 1H129V193H97V1ZM33 65H65V97H33V65ZM65 97H97V129H65V97ZM161 1H193V161H161V1ZM225 1H257V161H225V1ZM161 161H257V193H161V161ZM289 1H321V193H289V1ZM385 1H417V193H385V1ZM321 65H353V97H321V65ZM353 97H385V129H353V97ZM449 1H545V193H449V1ZM481 33H513V161H481V33ZM673 1H769V33H673V1ZM673 33H705V97H673V33ZM737 97H769V161H737V97ZM673 161H769V193H673V161ZM801 1H897V33H801V1ZM801 33H833V97H801V33ZM865 33H897V97H865V33ZM801 97H897V129H801V97ZM801 129H833V193H801V129ZM865 129H897V193H865V129ZM929 1H961V193H929V1ZM1025 1H1057V193H1025V1ZM961 65H993V97H961V65ZM993 97H1025V129H993V97ZM1089 1H1185V33H1089V1ZM1121 33H1153V193H1121V33ZM1217 1H1313V193H1217V1ZM1249 33H1281V161H1249V33ZM1345 1H1441V33H1345V1ZM1345 33H1377V97H1345V33ZM1409 97H1441V161H1409V97ZM1345 161H1441V193H1345V161Z"
              strokeWidth="2"
            />
            <defs>
              <motion.radialGradient
                id="paint0_radial_1145_73"
                cx={spotlightX}
                cy={spotlightY}
                r="220"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="var(--foreground)" />
                <stop
                  offset="1"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
              </motion.radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
