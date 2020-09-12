import {
    ReactAnchorAttr,
    RequiresChildrenProps,
    FCReturn,
    ForwardRefProps,
} from '../../../typings/shared';
import { LinkProps } from "./Link";

type ExcludedAttributes = "children" | "ref" | "tabIndex";
interface InheritedProps extends RequiresChildrenProps { }

export interface HeaderMenuItemPropsBase extends InheritedProps {
    isCurrentPage?: boolean,
}

export type HeaderMenuItemProps<E extends object = ReactAnchorAttr> = Omit<LinkProps<E>, ExcludedAttributes> & HeaderMenuItemPropsBase;

declare function HeaderMenuItem<E extends object = ReactAnchorAttr, R = HTMLElement>(
    props: ForwardRefProps<R, HeaderMenuItemProps<E>>
): FCReturn;

export default HeaderMenuItem;
