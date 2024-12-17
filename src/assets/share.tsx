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
      stroke="currentColor" // Use currentColor to inherit parent text color
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 7c.774.16 1.359.429 1.828.876C21 8.992 21 10.788 21 14.38c0 3.592 0 5.388-1.172 6.504C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.116C3 19.768 3 17.972 3 14.38c0-3.592 0-5.388 1.172-6.504C4.642 7.429 5.226 7.16 6 7"
    />
    <path
      stroke="currentColor" // Inherit stroke color
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.025 2 12 14m.025-12a.685.685 0 0 0-.472.175C10.647 2.94 9 4.929 9 4.929M12.025 2c.146.006.291.064.422.174C13.353 2.94 15 4.93 15 4.93"
    />
  </svg>
);

export default SvgComponent;
