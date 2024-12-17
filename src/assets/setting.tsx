import * as React from "react";
import { JSX } from "react/jsx-runtime";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor" // Use currentColor for dynamic color changes
      strokeWidth={1.5}
      d="M12.917 10a2.917 2.917 0 1 1-5.834 0 2.917 2.917 0 0 1 5.834 0Z"
    />
    <path
      stroke="currentColor" // Use currentColor for dynamic color changes
      strokeWidth={1.5}
      d="M17.326 7.627c.671 1.158 1.007 1.737 1.007 2.373 0 .636-.336 1.215-1.007 2.373l-1.604 2.764c-.669 1.153-1.003 1.73-1.554 2.046-.55.317-1.218.317-2.553.317h-3.23c-1.335 0-2.003 0-2.553-.317-.55-.316-.885-.893-1.554-2.046l-1.603-2.764C2.003 11.215 1.667 10.636 1.667 10c0-.636.336-1.215 1.008-2.373l1.603-2.763c.669-1.154 1.003-1.73 1.554-2.047C6.382 2.5 7.05 2.5 8.386 2.5h3.229c1.335 0 2.003 0 2.553.317.55.316.885.893 1.554 2.047l1.604 2.763Z"
    />
  </svg>
);

export default SvgComponent;

