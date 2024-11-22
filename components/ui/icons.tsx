import * as React from "react";
import { SVGAttributes } from "react";

const MenuBar = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="32"
    height="32"
    {...props}
  >
    <path
      d="M3 6h8c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"
      stroke="currentColor"
      strokeWidth=".5"
    />
    <path
      d="M3 12h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"
      stroke="currentColor"
      strokeWidth="0.2" // Adjusted stroke width for a finer line
    />
    <path
      d="M13 18h8c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1s0.45 1 1 1z"
      stroke="currentColor"
      strokeWidth=".5"
    />
  </svg>
);

export default MenuBar;