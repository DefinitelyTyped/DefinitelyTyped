interface InPageNavigation {
    init(root?: HTMLElement | Document): void;
    on(root?: HTMLElement | Document): void;
    off(root?: HTMLElement | Document): void;
}

declare const inPageNavigation: InPageNavigation;

export default inPageNavigation;
