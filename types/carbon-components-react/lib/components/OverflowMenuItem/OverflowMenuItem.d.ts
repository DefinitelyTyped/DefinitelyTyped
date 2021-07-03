import * as React from "react";
import { ReactAnchorAttr, ReactButtonAttr } from "../../../typings/shared";

type ExcludedAttributes = "disabled" | "href" | "ref" | "title" | "tabIndex";

interface SharedProps {
    // closeMenu is supplied by Overflow parent component
    disabled?: boolean,
    hasDivider?: boolean,
    isDelete?: boolean,
    itemText: NonNullable<React.ReactNode>,
    /**
     * @deprecated
     */
    primaryFocus?: boolean,
    requireTitle?: boolean,
    wrapperClassName?: string,
}

export interface OverflowMenuItemButtonProps extends Omit<ReactButtonAttr, ExcludedAttributes>, SharedProps {
    href?: null,
}

export interface OverflowMenuItemAnchorProps extends Omit<ReactAnchorAttr, ExcludedAttributes>, SharedProps {
    href: string,
}

export type AllOverflowMenuItemProps = OverflowMenuItemAnchorProps | OverflowMenuItemButtonProps;

declare class OverflowMenuItem extends React.Component<AllOverflowMenuItemProps> { }

export default OverflowMenuItem;
