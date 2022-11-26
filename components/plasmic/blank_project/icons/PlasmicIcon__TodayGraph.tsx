// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TodayGraphIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TodayGraphIcon(props: TodayGraphIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 604 229"}
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
          "M1 228.151c12.02-32.518 56.435-110.502 103.142-108.841 9.731 0 24.968 7.194 37.778 6.226 9.158-.692 30.909-14.114 44.647-62.268C200.304 15.114 213.709.969 222.627 1c5.315 0 16.141 9.962 25.758 58.117 10.875 42.895 43.272 128.271 85.858 126.61 9.158.692 31.939-7.472 49.798-45.663 21.751-42.895 60.315-124.535 103.03-124.535s60.337 56.395 116.06 58.895"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TodayGraphIcon;
/* prettier-ignore-end */
