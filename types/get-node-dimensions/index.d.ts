interface NodeDimensions {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}

interface NodeDimensionsOptions {
    margin?: boolean | undefined;
    clone?: boolean | undefined;
    display?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
}

declare function getNodeDimensions(element: HTMLElement, options?: NodeDimensionsOptions): NodeDimensions;

export = getNodeDimensions;
