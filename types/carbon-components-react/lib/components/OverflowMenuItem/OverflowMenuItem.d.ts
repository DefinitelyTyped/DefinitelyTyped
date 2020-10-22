import * as React from "react";
import { ReactAnchorAttr, ReactButtonAttr } from "../../../typings/shared";

type ExcludedAttributes = "disabled" | "href" | "onClick" | "onKeyDown" | "ref" | "title" | "tabIndex";

interface InheritedButtonProps extends Omit<ReactButtonAttr, ExcludedAttributes> {
    onClick?(e: React.MouseEvent<HTMLButtonElement>): void,
}

interface InheritedAnchorProps extends Omit<ReactAnchorAttr, ExcludedAttributes> {
    onClick?(e: React.MouseEvent<HTMLAnchorElement>): void,
}

interface SharedProps {
    // closeMenu is supplied by Overflow parent component
    disabled?: boolean,
    hasDivider?: boolean,
    href?: string,
    isDelete?: boolean,
    itemText: NonNullable<React.ReactNode>,
    primaryFocus?: boolean,
    requireTitle?: boolean,
    wrapperClassName?: string,
}

export interface OverflowMenuItemButtonProps extends InheritedButtonProps, SharedProps { }

export interface OverflowMenuItemAnchorProps extends InheritedAnchorProps, SharedProps { }

export type AllOverflowMenuItemProps = OverflowMenuItemAnchorProps | OverflowMenuItemButtonProps;

declare class OverflowMenuItem extends React.Component<AllOverflowMenuItemProps> { }

export default OverflowMenuItem;
