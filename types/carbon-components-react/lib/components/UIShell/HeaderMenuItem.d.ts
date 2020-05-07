import * as React from "react";
import { ReactAnchorAttr, RequiresChildrenProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

type ExcludedAttributes = "children" | "ref" | "tabIndex";
interface InheritedProps extends RequiresChildrenProps { }

export interface HeaderMenuItemPropsBase extends InheritedProps {
    isCurrentPage?: boolean,
}

export type HeaderMenuItemProps<E extends object = ReactAnchorAttr> = Omit<LinkProps<E>, ExcludedAttributes> & HeaderMenuItemPropsBase;

declare function HeaderMenuItem<E extends object = ReactAnchorAttr, R extends HTMLElement = HTMLElement>(
    props: React.PropsWithChildren<HeaderMenuItemProps<E>>, ref: React.Ref<R>
): React.ReactElement | null;

export default HeaderMenuItem;
