interface Footer {
    HIDE_MAX_WIDTH: number;
    init(): void;
    teardown(): void;
    on(el?: HTMLElement): void;
    off(el?: HTMLElement): void;
}

declare const footer: Footer;

export default footer;
