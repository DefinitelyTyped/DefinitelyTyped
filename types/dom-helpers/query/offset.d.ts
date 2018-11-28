declare namespace DomHelpersOffset {
    interface DomHelpersRect {
        bottom: number;
        left: number;
        right: number;
        top: number;
    }
}

declare const DomHelpersOffset: (element: Element) => DomHelpersOffset.DomHelpersRect;
export = DomHelpersOffset;
