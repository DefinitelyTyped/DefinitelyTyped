interface Range {
    on(el?: HTMLElement): void;
    off(el?: HTMLElement): void;
    init(root?: HTMLElement): void;
    updateCallout(targetRange: HTMLInputElement): void;
}

declare const range: Range;

export default range;
