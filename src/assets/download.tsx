import * as React from "react";
import { JSX } from "react/jsx-runtime";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor" // Inherit the current text color
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15V5m0 10c-.7 0-2.008-1.994-2.5-2.5M12 15c.7 0 2.008-1.994 2.5-2.5M5 19h14"
    />
  </svg>
);

export default SvgComponent;