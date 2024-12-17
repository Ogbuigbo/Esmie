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
      strokeWidth={1.2}
      d="M10 16.667H1.667c0-3.222 2.984-5.834 6.666-5.834 1.577 0 3.026.48 4.167 1.28M11.667 5A3.333 3.333 0 1 1 5 5a3.333 3.333 0 0 1 6.667 0ZM15 18.333v-6.666M11.667 15h6.666"
    />
  </svg>
);

export default SvgComponent;
