import * as React from "react";
import {
    FCReturn,
    ForwardRefProps,
    ReactAnchorAttr,
    RenderIconProps,
    RequiresChildrenProps,
    SideNavSharedProps,
    SideNavSizingProps,
} from "../../../typings/shared";
import { LinkProps } from "./Link";

export interface SideNavLinkPropsBase
    extends RenderIconProps, RequiresChildrenProps<string>, SideNavSharedProps, SideNavSizingProps
{
    className?: string | undefined;
}

export type SideNavLinkProps<E extends object = ReactAnchorAttr> = LinkProps<E> & SideNavLinkPropsBase;

declare interface SideNavLinkFC<E extends object = {}> extends React.FC<SideNavLinkProps<E>> {}
export declare function createCustomSideNavLink<E extends object = {}>(
    element: SideNavLinkProps["element"],
): SideNavLinkFC<Omit<E, "element">>;

declare function SideNavLink<E extends object = ReactAnchorAttr>(
    props: ForwardRefProps<HTMLElement, SideNavLinkProps<E>>,
): FCReturn;

export default SideNavLink;
