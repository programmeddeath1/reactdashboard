// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSidebarInactive4ContactsIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IconSidebarInactive4ContactsIcon(
  props: IconSidebarInactive4ContactsIconProps
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
          "M2.4 7.2c.883 0 1.6-.718 1.6-1.6C4 4.718 3.283 4 2.4 4 1.518 4 .8 4.718.8 5.6c0 .883.718 1.6 1.6 1.6zm11.2 0c.883 0 1.6-.718 1.6-1.6 0-.882-.717-1.6-1.6-1.6a1.6 1.6 0 000 3.2zm.8.8h-1.6c-.44 0-.838.178-1.128.465A3.657 3.657 0 0113.55 11.2h1.65a.8.8 0 00.8-.8v-.8A1.6 1.6 0 0014.4 8zM8 8a2.8 2.8 0 100-5.6 2.799 2.799 0 00-2.8 2.8C5.2 6.747 6.452 8 8 8zm1.92.8h-.207c-.52.25-1.098.4-1.713.4s-1.19-.15-1.713-.4H6.08a2.88 2.88 0 00-2.88 2.88v.72a1.2 1.2 0 001.2 1.2h7.2a1.2 1.2 0 001.2-1.2v-.72A2.88 2.88 0 009.92 8.8zm-5.593-.335A1.595 1.595 0 003.2 8H1.6A1.6 1.6 0 000 9.6v.8a.8.8 0 00.8.8h1.647a3.666 3.666 0 011.88-2.735z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSidebarInactive4ContactsIcon;
/* prettier-ignore-end */
