import { UIkitElement, UIkitNode } from "../utils";

export type UIkitAccordionOptions = {
    active?: number;
    animation?: boolean;
    collapsible?: boolean;	
    content?: string;	
    duration?: number;
    multiple?: boolean;
    targets?: string;
    toggle?: string;
    transition?: string;
}

interface UIkitAccordionElement {
    toggle(index: string | number | UIkitNode, animate: boolean): void;
}

export type Accordion = (element: UIkitElement, options?: UIkitAccordionOptions) => UIkitAccordionElement;