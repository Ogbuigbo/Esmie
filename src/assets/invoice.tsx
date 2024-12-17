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
      stroke="currentColor"  // Use currentColor for color inheritance
      strokeWidth={1.2}
      d="M16.68 1.667c-.928 0-1.68 2.238-1.68 5h1.68c.81 0 1.215 0 1.465-.28s.207-.648.12-1.384c-.23-1.943-.853-3.336-1.585-3.336Z"
    />
    <path
      stroke="currentColor"  // Use currentColor for color inheritance
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M15 6.712v8.826c0 1.26 0 1.89-.385 2.138-.629.405-1.602-.445-2.09-.753-.405-.255-.607-.383-.831-.39-.243-.008-.448.114-.885.39l-1.592 1.004c-.43.27-.645.406-.884.406s-.453-.135-.883-.406l-1.592-1.004c-.405-.255-.607-.383-.83-.39-.243-.008-.449.114-.886.39-.489.308-1.461 1.158-2.09.753-.385-.248-.385-.878-.385-2.138V6.712c0-2.378 0-3.568.732-4.306.732-.74 1.91-.74 4.268-.74h10M5 5h6.667M6.667 8.333H5"
    />
    <path
      stroke="currentColor"  // Use currentColor for color inheritance
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M10.417 9.062c-.69 0-1.25.49-1.25 1.094 0 .604.56 1.094 1.25 1.094s1.25.49 1.25 1.094c0 .604-.56 1.094-1.25 1.094m0-4.376c.544 0 1.007.305 1.179.73m-1.18-.73v-.729m0 5.104c-.544 0-1.007-.304-1.178-.729m1.179.73v.729"
    />
  </svg>
);

export default SvgComponent;
