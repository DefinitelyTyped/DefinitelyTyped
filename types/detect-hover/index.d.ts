interface detectHover {
    anyHover: boolean;
    anyNone: boolean;
    hover: boolean;
    none: boolean;

    update(): void;
}

declare const detectHover: detectHover;
export default detectHover;
