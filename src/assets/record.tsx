import * as React from "react";
import { JSX } from "react/jsx-runtime";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor" // Use currentColor to inherit text color
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 4.442s2-1.003 3.241.013c.202.163.454.486.565.724C21 5.596 21 6 21 6.81v11.008c0 1.007-1.04 1.698-2 1.474a13.227 13.227 0 0 0-3-.335c-1.917 0-3.668.386-5 1.022C9.667 20.614 7.917 21 6 21c-1.066 0-2.08-.12-3-.335-.591-.138-.887-.207-1.241-.494a2.41 2.41 0 0 1-.565-.724C1 19.03 1 18.626 1 17.817V6.81C1 5.802 2.04 5.11 3 5.335c.775.182 1.617.295 2.5.326"
    />
    <path
      stroke="currentColor" // Inherit stroke color from parent
      strokeWidth={1.5}
      d="M13.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
    <path
      stroke="currentColor" // Inherit stroke color from parent
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.5 13.5v.009M17.5 11.492v.01M8.5 4.5C8.992 5.006 10.3 7 11 7m2.5-2.5C13.008 5.006 11.7 7 11 7m0 0V1"
    />
  </svg>
);

export default SvgComponent;
