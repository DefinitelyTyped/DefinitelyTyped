// Type definitions for get-node-dimensions 1.2
// Project: https://github.com/souporserious/get-node-dimensions
// Definitions by: Kovács Vince <https://github.com/vincekovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
