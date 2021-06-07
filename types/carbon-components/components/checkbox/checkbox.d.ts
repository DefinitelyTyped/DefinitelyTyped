interface CheckboxOptions {
    selectorInit: string;
    selectorContainedCheckboxState: string;
    selectorContainedCheckboxDisabled: string;
    classLabel: string;
    classLabelFocused: string;
    attribContainedCheckboxState: string;
    attribContainedCheckboxDisabled: string;
}

declare const Checkbox_base: any;
declare class Checkbox extends Checkbox_base {
    constructor(element: HTMLElement, options?: Partial<CheckboxOptions>);
    _handleClick(): void;
    _handleFocus(): void;
    _handleBlur(): void;
    setState(state?: boolean | string): void;
    setDisabled(value?: boolean | string): void;
    _indeterminateCheckbox(): void;
    _initCheckbox(): void;
    static components: WeakMap<object, any>;
    static get options(): CheckboxOptions;
    static stateChangeTypes: {
        true: string;
        false: string;
        mixed: string;
    };
}
export default Checkbox;
