// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DividerLineHorizontal3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DividerLineHorizontal3Icon(
  props: DividerLineHorizontal3IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 255 2"}
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

      <path d={"M0 1h255"} stroke={"currentColor"} opacity={".06"}></path>
    </svg>
  );
}

export default DividerLineHorizontal3Icon;
/* prettier-ignore-end */
