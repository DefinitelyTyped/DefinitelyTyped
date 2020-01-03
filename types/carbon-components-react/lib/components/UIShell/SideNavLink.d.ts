import * as React from "react";
import {
    ReactAttr,
    ReactAnchorAttr,
    RenderIconProps,
    RequiresChildrenProps,
    SideNavSharedProps,
    SideNavSizingProps,
} from '../../../typings/shared';
import { LinkProps } from "./Link";

interface InheritedProps extends
    RenderIconProps,
    RequiresChildrenProps<string>,
    SideNavSharedProps,
    SideNavSizingProps
{
    className?: ReactAttr["className"],
}

export interface SideNavLinkPropsBase extends InheritedProps { }

export type SideNavLinkProps<E extends object = ReactAnchorAttr> = LinkProps<E> & SideNavLinkPropsBase;

declare interface SideNavLinkFC<E extends object = {}> extends React.FC<SideNavLinkProps<E>> { }
export declare function createCustomSideNavLink<E extends object = {}>(
    element: SideNavLinkProps['element']
): SideNavLinkFC<Omit<E, 'element'>>;

declare function SideNavLink<E extends object = ReactAnchorAttr>(props: React.PropsWithChildren<SideNavLinkProps<E>>): React.ReactElement | null;

export default SideNavLink;
