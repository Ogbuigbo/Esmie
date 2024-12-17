import * as React from "react";
import { JSX } from "react/jsx-runtime";

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"  // Use currentColor to inherit the parent's text color
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.5 17.5H8.333c-2.75 0-4.124 0-4.979-.854-.854-.855-.854-2.23-.854-4.98V2.5"
    />
    <path
      stroke="currentColor"  // Use currentColor to inherit the parent's text color
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.754 7.778-2.395 3.876c-.349.565-.745 1.418-1.463 1.291-.845-.148-1.25-1.408-1.977-1.825-.592-.34-1.02.07-1.365.547M17.5 3.333l-1.545 2.5M4.167 16.667l2.105-3.111"
    />
  </svg>
);

export default SvgComponent;
