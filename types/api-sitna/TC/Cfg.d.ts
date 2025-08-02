export interface MapOptions {
    baseLayers?: Array<object | string>;
    controls?: object;
    crossOrigin?: string;
    crs?: string;
    defaultBaseLayer?: string | number;
    initialExtent?: number[];
    layout?: string | object | null;
    locale?: string;
    maxExtent?: number[] | boolean;
    mouseWheelZoom?: boolean;
    stateful?: boolean;
    pixelTolerance?: number;
    proxy?: string;
    styles?: object;
    views?: object;
    workLayers?: object[];
    utmCrs?: string;
    geoCrs?: string;
    baselayerExtent?: number[];
    resolutions?: number[];
    pointBoundsRadius?: number;
    extentMargin?: number;
    attribution?: string;
    oldBrowserAlert?: boolean;
    notifyApplicationErrors?: boolean;
    loggingErrorsEnabled?: boolean;
    maxErrorCount?: number;
    view?: number;
    screenSize?: number;
    maxResolutionError?: number;
    toastDuration?: number;
    averageTileSize?: number;
    availableBaseLayers?: object[];
}

declare const Cfg: MapOptions;

export default Cfg;
