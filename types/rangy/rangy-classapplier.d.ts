/// <reference path="index.d.ts"/>

interface RangyStatic {
    createClassApplier(
        theClass: string,
        options?: RangyClassApplierOptions,
        tagNames?: string | string[],
    ): RangyClassApplier;
}

interface RangyClassApplierOptions {
    elementTagName?: string | undefined;
    elementProperties?: { [property: string]: string } | undefined;
    elementAttributes?: { [attribute: string]: string } | undefined;
    ignoreWhiteSpace?: boolean | undefined;
    applyToEditableOnly?: boolean | undefined;
    tagNames?: string | string[] | undefined;
    normalize?: boolean | undefined;
    onElementCreate?: ((element: Element, classApplier: RangyClassApplier) => void) | undefined;
    useExistingElements?: boolean | undefined;
}

interface RangyClassApplier extends RangyClassApplierOptions {
    applyToSelection(win?: Window): void;
    undoToSelection(win?: Window): void;
    isAppliedToSelection(win?: Window): boolean;
    toggleSelection(win?: Window): void;
    applyToRange(range: RangyRange): void;
    undoToRange(range: RangyRange): void;
    isAppliedToRange(range: RangyRange): boolean;
    toggleRange(range: RangyRange): void;
    detach(doc?: Document | Window | HTMLIFrameElement): void;
    className: string;
    cssClass: string;
}
