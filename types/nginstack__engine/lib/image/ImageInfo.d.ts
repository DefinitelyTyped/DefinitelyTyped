export = ImageInfo;
declare function ImageInfo(): void;
declare class ImageInfo {}
declare namespace ImageInfo {
    export { fromFile, fromBytes, ColorType, Orientation, ImageInfoResult };
}
declare function fromFile(path: string): ImageInfoResult;
declare function fromBytes(bytes: Uint8Array | ArrayBuffer | string): ImageInfoResult;
type ColorType =
    | ''
    | 'a8'
    | 'l1'
    | 'la1'
    | 'rgb1'
    | 'rgba1'
    | 'l2'
    | 'la2'
    | 'rgb2'
    | 'rgba2'
    | 'l4'
    | 'la4'
    | 'rgb4'
    | 'rgba4'
    | 'l8'
    | 'rgb8'
    | 'rgba8'
    | 'l16'
    | 'la16'
    | 'rgb16'
    | 'rgba16'
    | 'bgr8'
    | 'bgra8';
type Orientation =
    | ''
    | 'noTransforms'
    | 'rotate90'
    | 'rotate180'
    | 'rotate270'
    | 'flipHorizontal'
    | 'flipVertical'
    | 'rotate90FlipH'
    | 'rotate270FlipH';
interface ImageInfoResult {
    mimeType: string;
    width: number;
    height: number;
    hasAnimation: boolean;
    colorType: ColorType;
    orientation: Orientation;
    exif: Record<string, any> | null;
}
