import * as React from "react";
import { EmbeddedIconProps, ReactLIAttr } from "../../../typings/shared";

interface InheritedProps extends ReactLIAttr, EmbeddedIconProps { }

export interface HeadingClickData {
    event: React.MouseEvent<HTMLElement>;
    isOpen: boolean;
}

export interface AccordionItemProps extends InheritedProps {
    onHeadingClick?(data: HeadingClickData): void,
    open?: boolean,
    renderExpando?: React.ReactNode,
}

declare class AccordionItem extends React.Component<AccordionItemProps> { }

export default AccordionItem;
