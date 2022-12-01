interface Validator {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const validator: Validator;

export default validator;
