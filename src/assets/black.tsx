import * as React from "react"
import { JSX } from "react/jsx-runtime"
const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#344054"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.688}
      d="M12 14.813V5.437m0 9.375c-.656 0-1.883-1.87-2.344-2.343M12 14.813c.656 0 1.883-1.87 2.344-2.344M5.438 18.563h13.125"
    />
  </svg>
)
export default SvgComponent
