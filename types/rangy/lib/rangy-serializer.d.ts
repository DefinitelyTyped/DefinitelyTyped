/// <reference path="../index.d.ts"/>

declare namespace rangy {
  interface DomPosition {
    node: Node;
    offset: number;
  }

  interface CookieOptions {
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
  }

  interface RangyStatic {
    serializeSelection(selection?: RangySelection, omitChecksum?: boolean, root?: Node): string;
    canDeserializeSelection(serializedSelection: string, root?: Node, win?: Window): boolean;
    deserializeSelection(serializedSelection: string, root?: Node, win?: Window): RangySelection;
    serializeRange(range: RangyRange, omitChecksum?: boolean, root?: Node): string;
    canDeserializeRange(serializedRange: string, root?: Node, doc?: Document): boolean;
    deserializeRange(serializedRange: string, root?: Node, doc?: Document): RangyRange;
    serializePosition(node: Node, offset: number, root?: Node): string;
    deserializePosition(serializedPosition: string, root?: Node, doc?: Document): DomPosition;
    saveSelectionCookie(win?: Window, props?: CookieOptions): void;
    restoreSelectionFromCookie(win?: Window): boolean;
  }
}

declare module 'rangy/lib/rangy-serializer' {}