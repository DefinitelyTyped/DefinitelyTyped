interface AccordionOptions {
    selectorInit: string;
    selectorAccordionItem: string;
    selectorAccordionItemHeading: string;
    selectorAccordionContent: string;
    classActive: string;
}

declare const Accordion_base: any;
declare class Accordion extends Accordion_base {
    constructor(element: HTMLElement, options?: Partial<AccordionOptions>);
    _checkIfButton(): boolean;
    _handleKeypress(event: any): void;
    _toggle(element: HTMLElement): void;
    static get options(): AccordionOptions;
    static components: WeakMap<object, any>;
}
export default Accordion;
