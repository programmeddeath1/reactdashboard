// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DividerLineHorizontal2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DividerLineHorizontal2Icon(
  props: DividerLineHorizontal2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 342 2"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 1h342"} stroke={"currentColor"}></path>
    </svg>
  );
}

export default DividerLineHorizontal2Icon;
/* prettier-ignore-end */
