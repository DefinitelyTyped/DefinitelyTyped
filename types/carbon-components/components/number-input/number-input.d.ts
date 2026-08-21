interface NumberInputOptions {
    selectorInit: string;
    selectorInput: string;
}

declare const NumberInput_base: any;
declare class NumberInput extends NumberInput_base {
    constructor(element: HTMLElement, options?: Partial<NumberInputOptions>);
    _handleClick(event: MouseEvent): void;
    static components: WeakMap<object, any>;
    static get options(): NumberInputOptions;
}
export default NumberInput;
