// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProfileCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProfileCircleIcon(props: ProfileCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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

      <circle
        cx={"24"}
        cy={"24"}
        r={"22.75"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></circle>
    </svg>
  );
}

export default ProfileCircleIcon;
/* prettier-ignore-end */
