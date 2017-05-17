// Type definitions for get-node-dimensions 1.2
// Project: https://github.com/souporserious/get-node-dimensions
// Definitions by: Kovács Vince <https://github.com/vincekovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface NodeDimensions {
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface NodeDimensionsOptions {
  margin: boolean;
  clone: boolean;
  display: string;
  width: string;
  height: string;
}

declare function getNodeDimensions(element: HTMLElement, options?: NodeDimensionsOptions): NodeDimensions;

export default getNodeDimensions;
