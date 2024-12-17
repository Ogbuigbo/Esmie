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
    <g stroke="currentColor" clipPath="url(#a)">
      <path
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.833 5.558c-.888 0-1.733-.099-2.5-.278-.8-.188-1.666.388-1.666 1.227v9.174c0 .674 0 1.01.161 1.358.093.198.303.468.471.604.295.238.542.296 1.034.412.767.179 1.612.278 2.5.278 1.598 0 3.057-.321 4.167-.851 1.11-.53 2.57-.852 4.167-.852.888 0 1.733.1 2.5.279.8.187 1.666-.389 1.666-1.228V6.507c0-.673 0-1.01-.161-1.358a2.011 2.011 0 0 0-.471-.603C16.667 3.699 15 4.536 15 4.536"
      />
      <path
        strokeWidth={1.5}
        d="M12.083 11.25a2.083 2.083 0 1 1-4.166 0 2.083 2.083 0 0 1 4.166 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.583 12.083v.008M15.417 10.41v.008"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.917 3.75c.41-.421 1.5-2.083 2.083-2.083m2.083 2.083c-.41-.421-1.5-2.083-2.083-2.083m0 0v5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
