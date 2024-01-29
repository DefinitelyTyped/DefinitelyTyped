import { Format, Value } from "../create";

export interface VirtualAnchorElement {
    getBoundingClientRect(): DOMRect;
    ownerDocument: Document;
}

export function useAnchor(
    param: { editableContentElement: HTMLElement | null; value: Value; settings?: Format },
): Element | VirtualAnchorElement | undefined | null;
