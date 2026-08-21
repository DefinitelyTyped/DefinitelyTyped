interface StructuredListOptions {
    selectorInit: string;
    selectorRow: string;
    selectorListInput: (id: string) => string;
    classActive: string;
}

declare const StructuredList_base: any;
declare class StructuredList extends StructuredList_base {
    constructor(element: HTMLElement, options?: Partial<StructuredListOptions>);
    _direction(evt: Event): number;
    _nextIndex(array: Element[], arrayItem: Element, direction: number): number;
    _getInput(index: number): HTMLElement;
    _handleInputChecked(index: number): void;
    _handleClick(evt: MouseEvent): void;
    _handleKeydownChecked(evt: KeyboardEvent): void;
    _handleKeydownArrow(evt: KeyboardEvent): void;
    static components: WeakMap<object, any>;
    static get options(): StructuredListOptions;
}
export default StructuredList;
