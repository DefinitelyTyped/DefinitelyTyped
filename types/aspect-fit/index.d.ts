interface Output {
    scale: number;
    width: number;
    height: number;
}
declare function aspectFit(width: number, height: number, parentWidth: number, parentHeight: number): Output;

export = aspectFit;
