import {
    ReactAttr,
    ReactAnchorAttr,
    FCReturn,
    ForwardRefProps,
} from '../../../typings/shared';
import { LinkProps } from "./Link";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
}

export interface SideNavMenuItemPropsBase extends InheritedProps {
    isActive?: boolean,
}

export type SideNavMenuItemProps<E extends object = ReactAnchorAttr> = LinkProps<E> & SideNavMenuItemPropsBase;

declare function SideNavMenuItem<E extends object = ReactAnchorAttr, R = HTMLElement>(
    props: ForwardRefProps<R, SideNavMenuItemProps<E>>
): FCReturn;

export default SideNavMenuItem;
