interface ImageCutterOption {
    coverColor?: string,
    coverOpacity?: number,
    defaultWidth?: number,
    defaultHeight?: number,
    fixedRatio?: boolean,
    minWidth?: number,
    minHeight?: number,
    post?: string,
    get?: string
}
interface ImageData {
    originWidth: number,
    originHeight: number,
    scaled: boolean,
    scaleHeight: number,
    scaleWidth: number,
    width: number,
    height: number,
    left: number,
    right: number,
    top: number,
    bottom: number
}
interface ImageCutter {
    resetImage(img: string): any;
    getData(): ImageData;
}

interface JQuery {
    imgCutter(option: ImageCutterOption): JQuery;
    data(cmd: string): ImageCutter;
}