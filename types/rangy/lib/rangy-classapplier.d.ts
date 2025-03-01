/// <reference path="../index.d.ts"/>

declare namespace rangy {
  interface RangyStatic {
      createClassApplier(
          theClass: string,
          options?: RangyClassApplierOptions,
          tagNames?: string | string[],
      ): RangyClassApplier;
  }

  interface RangyClassApplierOptions {
      elementTagName?: string
      elementProperties?: { [property: string]: string };
      elementAttributes?: { [attribute: string]: string };
      ignoreWhiteSpace?: boolean;
      applyToEditableOnly?: boolean;
      tagNames?: string | string[];
      normalize?: boolean;
      onElementCreate?: ((element: Element, classApplier: RangyClassApplier) => void);
      useExistingElements?: boolean;
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
}

declare module 'rangy/lib/rangy-classapplier' {}