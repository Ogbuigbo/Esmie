import * as React from "react"
import { JSX } from "react/jsx-runtime"
const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#044E97"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="m6.333 9.667 3.334-3.334M11.23 9.74 12.97 8A3.515 3.515 0 0 0 8 3.03L6.26 4.77m3.48 6.46L8 12.97A3.515 3.515 0 1 1 3.03 8l1.74-1.74"
    />
  </svg>
)
export default SvgComponent