import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";

export interface HeadingClickData {
    event: React.MouseEvent<HTMLElement>;
    isOpen: boolean;
}

export interface AccordionItemProps extends Omit<ReactLIAttr, "title"> {
    disabled?: boolean;
    /**
     * @deprecated
     */
    iconDescription?: string;
    onHeadingClick?(data: HeadingClickData): void,
    open?: boolean,
    renderExpando?: React.ReactNode,
    /** The accordion title. */
    title?: React.ReactNode;
}

declare class AccordionItem extends React.Component<AccordionItemProps> { }

export default AccordionItem;
