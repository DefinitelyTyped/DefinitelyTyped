interface detectPointer {
    anyCoarse: boolean;
    anyFine: boolean;
    anyNone: boolean;

    coarse: boolean;
    fine: boolean;
    none: boolean;

    update(): void;
}

declare const detectPointer: detectPointer;
export default detectPointer;
