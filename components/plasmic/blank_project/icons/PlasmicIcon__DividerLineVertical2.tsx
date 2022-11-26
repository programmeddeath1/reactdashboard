// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DividerLineVertical2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DividerLineVertical2Icon(props: DividerLineVertical2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 32"}
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

      <path d={"M1 0v32"} stroke={"currentColor"}></path>
    </svg>
  );
}

export default DividerLineVertical2Icon;
/* prettier-ignore-end */
