declare const Accordion_base: any;
declare class Accordion extends Accordion_base {
    constructor(element: any, options: any);
    _checkIfButton(): boolean;
    _handleKeypress(event: any): void;
    _toggle(element: any): void;
    static get options(): {
        selectorInit: string;
        selectorAccordionItem: string;
        selectorAccordionItemHeading: string;
        selectorAccordionContent: string;
        classActive: string;
    };
    static components: WeakMap<object, any>;
}
export default Accordion;
