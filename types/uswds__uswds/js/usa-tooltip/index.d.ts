interface Tooltip {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const tooltip: Tooltip;

export default tooltip;
