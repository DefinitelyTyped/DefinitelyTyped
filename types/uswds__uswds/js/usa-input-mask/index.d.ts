interface InputMask {
    init(root?: HTMLElement | Document): void;
    on(root?: HTMLElement | Document): void;
    off(root?: HTMLElement | Document): void;
}

declare const inputMask: InputMask;

export default inputMask;
