declare const TextInput_base: any;
export default class TextInput extends TextInput_base {
    constructor(element: any, options: any);
    _setIconVisibility: ({ iconVisibilityOn, iconVisibilityOff, passwordIsVisible, selectorPasswordVisibilityTooltip, }: {
        iconVisibilityOn: any;
        iconVisibilityOff: any;
        passwordIsVisible: any;
        selectorPasswordVisibilityTooltip: any;
    }) => void;
    _toggle: ({ element, button }: {
        element: any;
        button: any;
    }) => void;
    static get options(): {
        selectorInit: string;
        selectorPasswordField: string;
        selectorPasswordVisibilityButton: string;
        selectorPasswordVisibilityTooltip: string;
        passwordIsVisible: string;
        svgIconVisibilityOn: string;
        svgIconVisibilityOff: string;
    };
    static components: WeakMap<object, any>;
}
export {};
