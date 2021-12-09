import * as React from "react";
import { ReactAnchorAttr, ReactButtonAttr } from "../../../typings/shared";

type ExcludedAttributes = "disabled" | "href" | "ref" | "tabIndex";

interface SharedProps {
    // closeMenu is supplied by Overflow parent component
    disabled?: boolean | undefined,
    hasDivider?: boolean | undefined,
    isDelete?: boolean | undefined,
    itemText: NonNullable<React.ReactNode>,
    /**
     * @deprecated
     */
    primaryFocus?: boolean | undefined,
    requireTitle?: boolean | undefined,
    wrapperClassName?: string | undefined,
}

export interface OverflowMenuItemButtonProps extends Omit<ReactButtonAttr, ExcludedAttributes>, SharedProps {
    href?: null | undefined,
}

export interface OverflowMenuItemAnchorProps extends Omit<ReactAnchorAttr, ExcludedAttributes>, SharedProps {
    href: string,
}

export type AllOverflowMenuItemProps = OverflowMenuItemAnchorProps | OverflowMenuItemButtonProps;

declare class OverflowMenuItem extends React.Component<AllOverflowMenuItemProps> { }

export default OverflowMenuItem;
