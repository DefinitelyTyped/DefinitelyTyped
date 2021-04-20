interface TextInputOptions {
    selectorInit: string;
    selectorPasswordField: string;
    selectorPasswordVisibilityButton: string;
    selectorPasswordVisibilityTooltip: string;
    passwordIsVisible: string;
    svgIconVisibilityOn: string;
    svgIconVisibilityOff: string;
}

declare const TextInput_base: any;
export default class TextInput extends TextInput_base {
    constructor(element: HTMLElement, options?: Partial<TextInputOptions>);
    _setIconVisibility: ({
        iconVisibilityOn,
        iconVisibilityOff,
        passwordIsVisible,
        selectorPasswordVisibilityTooltip,
    }: {
        iconVisibilityOn: HTMLElement;
        iconVisibilityOff: HTMLElement;
        passwordIsVisible: boolean;
        selectorPasswordVisibilityTooltip: HTMLElement;
    }) => void;
    _toggle: ({ element, button }: { element: HTMLElement; button: Element }) => void;
    static get options(): TextInputOptions;
    static components: WeakMap<object, any>;
}
export {};
