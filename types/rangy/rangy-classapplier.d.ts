// Type definitions for Rangy Class Applier module
// Project: https://github.com/timdown/rangy
// Definitions by: Maxime Kjaer <https://github.com/MaximeKjaer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="index.d.ts"/>

interface RangyStatic {
    createClassApplier(theClass: string, options?: RangyClassApplierOptions, tagNames?: Array<string>): RangyClassApplier;
}

interface RangyClassApplier {
    applyToSelection(win?: Window): any;
    undoToSelection(win?: Window): any;
    isAppliedToSelection(win?: Window): boolean;
    toggleSelection(win?: Window): any
    applyToRange(range: RangyRange): any;
    undoToRange(range: RangyRange): any;
    isAppliedToRange(range: RangyRange): boolean;
    toggleRange(range: RangyRange): any;
    detach(doc?: Document|Window|HTMLIFrameElement): any;
    className: string;
    cssClass: string;
}

interface RangyClassApplierOptions {
    elementTagName?: string;
    elementProperties?: {[property: string]: any};
    elementAttributes?: {[attribute: string]: any};
    ignoreWhiteSpace?: boolean;
    applyToEditableOnly?: boolean;
    tagNames?: Array<string> | string;
    normalize?: boolean;
    onElementCreate?: (element: Element, classApplier: RangyClassApplier) => void;
    useExistingElements?: boolean;
}
