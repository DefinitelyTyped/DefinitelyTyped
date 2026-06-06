import "./rangy-core";

declare global {
    namespace rangy {
        function serializeSelection(selection?: RangySelection, omitChecksum?: boolean, root?: Node): string;
        function canDeserializeSelection(serializedSelection: string, root?: Node, win?: Window): boolean;
        function deserializeSelection(serializedSelection: string, root?: Node, win?: Window): RangySelection;
        function serializeRange(range: RangyRange, omitChecksum?: boolean, root?: Node): string;
        function canDeserializeRange(serializedRange: string, root?: Node, doc?: Document): boolean;
        function deserializeRange(serializedRange: string, root?: Node, doc?: Document): RangyRange;
        function serializePosition(node: Node, offset: number, root?: Node): string;
        function deserializePosition(serializedPosition: string, root?: Node, doc?: Document): DomPosition;
        function saveSelectionCookie(win?: Window, props?: CookieOptions): void;
        function restoreSelectionFromCookie(win?: Window): boolean;
    }
}

export = rangy;
