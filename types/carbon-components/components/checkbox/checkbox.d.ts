declare const Checkbox_base: any;
declare class Checkbox extends Checkbox_base {
    constructor(element: any, options: any);
    _handleClick(): void;
    _handleFocus(): void;
    _handleBlur(): void;
    setState(state: any): void;
    setDisabled(value: any): void;
    _indeterminateCheckbox(): void;
    _initCheckbox(): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorContainedCheckboxState: string;
        selectorContainedCheckboxDisabled: string;
        classLabel: string;
        classLabelFocused: string;
        attribContainedCheckboxState: string;
        attribContainedCheckboxDisabled: string;
    };
    static stateChangeTypes: {
        true: string;
        false: string;
        mixed: string;
    };
}
export default Checkbox;
