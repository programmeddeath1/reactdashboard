// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YesterdayGraphIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YesterdayGraphIcon(props: YesterdayGraphIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 628 145"}
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

      <path
        d={
          "M1 56c76.47-37.5 76.948 53.449 129.435 53.449 52.487 0 37.695-54.76 98.294-63.605C289.328 37 327.5 144 376.647 144c49.147 0 72.051-143 89.229-143 17.177 0 7.634 72.5 50.101 72.5s68.99-47.84 111.654-49.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default YesterdayGraphIcon;
/* prettier-ignore-end */
