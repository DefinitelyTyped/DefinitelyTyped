interface Footer {
    HIDE_MAX_WIDTH: number;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    teardown(): void;
}

declare const footer: Footer;

export default footer;
