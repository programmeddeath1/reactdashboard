// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSidebarInactive2TicketsIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IconSidebarInactive2TicketsIcon(
  props: IconSidebarInactive2TicketsIconProps
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
          "M3.556 5.333h8.888v5.334H3.556V5.333zM14.666 8c0 .736.598 1.333 1.334 1.333V12c0 .736-.597 1.333-1.333 1.333H1.333A1.333 1.333 0 010 12V9.333a1.333 1.333 0 100-2.666V4c0-.736.597-1.333 1.333-1.333h13.334C15.403 2.667 16 3.264 16 4v2.667c-.736 0-1.333.597-1.333 1.333zm-1.333-2.889a.667.667 0 00-.666-.667H3.333a.667.667 0 00-.666.667v5.778c0 .368.298.667.666.667h9.334a.667.667 0 00.666-.667V5.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSidebarInactive2TicketsIcon;
/* prettier-ignore-end */
