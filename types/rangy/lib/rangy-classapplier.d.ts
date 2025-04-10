import "./rangy-core";

declare global {
    namespace rangy {
        interface RangyClassApplierOptions {
            elementTagName?: string;
            elementProperties?: { [key: string]: string };
            elementAttributes?: { [key: string]: string };
            ignoreWhiteSpace?: boolean;
            applyToEditableOnly?: boolean;
            tagNames?: string[] | string;
            normalize?: boolean;
            onElementCreate?: ((element: Element, classApplier: RangyClassApplier) => any) | undefined;
            useExistingElements?: boolean;
        }

        interface RangyClassApplier {
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

        function createClassApplier(
            className: string,
            options?: RangyClassApplierOptions,
            tagNames?: string[] | string,
        ): RangyClassApplier;
    }
}

export = rangy;
