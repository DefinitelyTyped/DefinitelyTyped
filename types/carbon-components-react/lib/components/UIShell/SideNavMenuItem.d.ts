import * as React from "react";
import { ReactAttr } from "../../../typings/shared";
import { LinkProps } from "./Link";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
}

export interface SideNavMenuItemPropsBase extends InheritedProps {
    isActive?: boolean,
}

export type SideNavMenuItemProps<E extends object = {}> = LinkProps<E> & SideNavMenuItemPropsBase;

declare function SideNavMenuItem<E extends object = {}>(props: React.PropsWithChildren<SideNavMenuItemProps<E>>, ref: React.Ref<HTMLElement>): React.ReactElement | null;

export default SideNavMenuItem;
