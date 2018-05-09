// Type definitions for dom-to-image 2.6
// Project: https://github.com/tsayen/dom-to-image
// Definitions by: Jip Sterk <https://github.com/JipSterk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

export namespace DomToImage {
  interface Options {
    filter?: (node: Node) => boolean;
    bgcolor?: string;
    width?: number;
    height?: number;
    style?: {};
    quality?: number;
    imagePlaceholder?: string;
    cachebust?: boolean;
  }
}

export function toSvg(node: Node, options?: DomToImage.Options): Promise<string>;
export function toPng(node: Node, options?: DomToImage.Options): Promise<string>;
export function toJpeg(node: Node, options?: DomToImage.Options): Promise<string>;
export function toBlob(node: Node, options?: DomToImage.Options): Promise<string>;
export function toPixelData(node: Node, options?: DomToImage.Options): Promise<string>;
