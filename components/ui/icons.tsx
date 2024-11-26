import * as React from "react";
import { SVGAttributes } from "react";
import classNames from 'classnames';

const MenuBar = ({ isOpen, ...props }: { isOpen: boolean } & React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      className={classNames("transition-transform duration-300", {
        "transform rotate-45 translate-x-1": isOpen
      })}
      d="M3 6h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"
      stroke="currentColor"
      strokeWidth=".1"
    />
    <path
      className={classNames("transition-opacity duration-300", {
        "opacity-0": isOpen
      })}
      d="M3 12h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path
      className={classNames("transition-transform duration-300", {
        "transform -rotate-45 -translate-x-3 translate-y-2": isOpen
      })}
      d="M3 18h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"
      stroke="currentColor"
      strokeWidth=".1"
    />
  </svg>
);

export default MenuBar;