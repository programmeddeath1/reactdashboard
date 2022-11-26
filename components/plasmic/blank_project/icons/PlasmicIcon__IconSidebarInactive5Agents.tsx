// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSidebarInactive5AgentsIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IconSidebarInactive5AgentsIcon(
  props: IconSidebarInactive5AgentsIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={
          "M8 8a4 4 0 100-8 4 4 0 000 8zm2.994 1.019L9.5 15l-1-4.25L9.5 9h-3l1 1.75-1 4.25-1.494-5.981C2.778 9.125 1 10.947 1 13.2v1.3A1.5 1.5 0 002.5 16h11a1.5 1.5 0 001.5-1.5v-1.3c0-2.253-1.778-4.075-4.006-4.181z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSidebarInactive5AgentsIcon;
/* prettier-ignore-end */
