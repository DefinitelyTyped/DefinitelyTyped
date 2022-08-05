interface Validator {
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const validator: Validator;

export default validator;
