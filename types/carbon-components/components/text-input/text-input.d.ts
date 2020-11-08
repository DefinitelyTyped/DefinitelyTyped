declare const TextInput_base: any;
export default class TextInput extends TextInput_base {
    constructor(element: any, options: any);
    _setIconVisibility: ({ iconVisibilityOn, iconVisibilityOff, passwordIsVisible, selectorPasswordVisibilityTooltip }: any) => void;
    _toggle: ({ element, button }: any) => void;
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
