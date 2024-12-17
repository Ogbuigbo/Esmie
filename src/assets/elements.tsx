import * as React from "react";
import { JSX } from "react/jsx-runtime";

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"  // Use currentColor to inherit the color
      strokeWidth={1.5}
      d="M1.5 18.333h15c0-3.682-3.358-6.666-7.5-6.666-4.142 0-7.5 2.984-7.5 6.666ZM12.75 5.417a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);

export default SvgComponent;
