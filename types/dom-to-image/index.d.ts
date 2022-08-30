// Type definitions for dom-to-image 2.6
// Project: https://github.com/tsayen/dom-to-image
// Definitions by: Jip Sterk <https://github.com/JipSterk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface DomToImage {
  toSvg(node: Node, options?: Options): Promise<string>;
  toPng(node: Node, options?: Options): Promise<string>;
  toJpeg(node: Node, options?: Options): Promise<string>;
  toBlob(node: Node, options?: Options): Promise<Blob>;
  toPixelData(node: Node, options?: Options): Promise<Uint8ClampedArray>;
}

export interface Options {
  filter?: ((node: Node) => boolean) | undefined;
  bgcolor?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  style?: {} | undefined;
  quality?: number | undefined;
  imagePlaceholder?: string | undefined;
  cacheBust?: boolean | undefined;
}

export const DomToImage: DomToImage;

type DomToImage_ = DomToImage;
type Options_ = Options;

export default DomToImage;

declare global {
  namespace DomToImage {
    type Options = Options_;
    type DomToImage = DomToImage_;
  }

  const DomToImage: DomToImage.DomToImage;
}
