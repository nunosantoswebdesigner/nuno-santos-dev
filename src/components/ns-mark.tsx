export function NsMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0H64V256H0ZM192 0H256V256H192ZM64 64H128V128H64ZM128 128H192V192H128ZM320 0H512V64H320ZM320 64H384V128H320ZM448 128H512V192H448ZM320 192H512V256H320Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M0 0H32V128H0ZM96 0H128V128H96ZM32 32H64V64H32ZM64 64H96V96H64ZM160 0H256V32H160ZM160 32H192V64H160ZM224 64H256V96H224ZM160 96H256V128H160Z"/></svg>`
}
