import * as React from "react";
import { ReactAttr, ReactAnchorAttr } from "../../../typings/shared";
import { LinkProps } from "./Link";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
}

export interface SideNavMenuItemPropsBase extends InheritedProps {
    isActive?: boolean,
}

export type SideNavMenuItemProps<E extends object = ReactAnchorAttr> = LinkProps<E> & SideNavMenuItemPropsBase;

declare function SideNavMenuItem<E extends object = ReactAnchorAttr>(props: React.PropsWithChildren<SideNavMenuItemProps<E>>, ref: React.Ref<HTMLElement>): React.ReactElement | null;

export default SideNavMenuItem;
