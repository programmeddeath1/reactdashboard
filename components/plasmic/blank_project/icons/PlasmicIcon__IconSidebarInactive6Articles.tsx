// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSidebarInactive6ArticlesIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IconSidebarInactive6ArticlesIcon(
  props: IconSidebarInactive6ArticlesIconProps
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
          "M15 11.25V.75a.748.748 0 00-.75-.75H4a3 3 0 00-3 3v10a3 3 0 003 3h10.25c.416 0 .75-.334.75-.75v-.5a.756.756 0 00-.278-.584c-.131-.482-.131-1.854 0-2.335A.745.745 0 0015 11.25zM5 4.187C5 4.085 5.084 4 5.188 4h6.625c.103 0 .187.084.187.188v.625a.188.188 0 01-.188.187H5.189A.188.188 0 015 4.812v-.625zm0 2C5 6.085 5.084 6 5.188 6h6.625c.103 0 .187.084.187.188v.625a.188.188 0 01-.188.187H5.189A.188.188 0 015 6.812v-.625zM12.919 14H4a.999.999 0 110-2h8.919c-.06.534-.06 1.466 0 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSidebarInactive6ArticlesIcon;
/* prettier-ignore-end */
