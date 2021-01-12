declare const NumberInput_base: any;
declare class NumberInput extends NumberInput_base {
    constructor(element: any, options: any);
    _handleClick(event: any): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorInput: string;
    };
}
export default NumberInput;
