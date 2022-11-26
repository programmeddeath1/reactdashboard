// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Sheet2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Sheet2Icon(props: Sheet2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 255 56"}
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

      <path opacity={".08"} d={"M0 0h255v56H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Sheet2Icon;
/* prettier-ignore-end */
