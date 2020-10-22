import * as React from "react";
import { EmbeddedIconProps, ReactLIAttr } from "../../../typings/shared";

interface InheritedProps extends ReactLIAttr, EmbeddedIconProps { }

export interface HeadingClickData {
    event: React.MouseEvent<HTMLElement>;
    isOpen: boolean;
}

export interface AccordionItemProps extends Omit<InheritedProps, "title"> {
    onHeadingClick?(data: HeadingClickData): void,
    open?: boolean,
    renderExpando?: React.ReactNode,
    /** The accordion title. */
    title?: React.ReactNode;
}

declare class AccordionItem extends React.Component<AccordionItemProps> { }

export default AccordionItem;
