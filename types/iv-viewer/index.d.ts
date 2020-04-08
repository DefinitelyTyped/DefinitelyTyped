// Type definitions for iv-viewer 2.0
// Project: https://github.com/s-yadav/iv-viewer#readme
// Definitions by: Robert Wettstädt <https://github.com/robert-wettstaedt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

interface Options {
    zoomValue?: number;
    snapView?: boolean;
    maxZoom?: number;
    refreshOnResize?: boolean;
    zoomOnMouseWheel?: boolean;
}

interface SliderOptions {
    isSliderEnabled: () => boolean;
    onStart: () => void;
    onMove: () => void;
    onEnd: () => void;
}

declare class Slider {
    constructor(container: Element | null, options: SliderOptions);

    container: Element | null;
    isSliderEnabled: () => boolean;
    onStart: () => void;
    onMove: () => void;
    onEnd: () => void;

    startHandler(event: Event): void;
    moveHandler(event: Event): void;
    endHandler(): void;
    removeListeners(): void;
    init(): void;
    destroy(): void;
}

interface Elements {
    container: Element | null;
    domElement: Element | null;
    image?: Element | null;
    imageWrap?: Element | null;
    snapHandle?: Element | null;
    snapImage?: Element | null;
    snapImageWrap?: Element | null;
    snapView?: Element | null;
    zoomHandle?: Element | null;
}

type IVEvent = () => void;

interface Events {
    hiResImageLoad?: IVEvent;
    imageLoad?: IVEvent;
    mouseEnterSnapView?: IVEvent;
    mouseLeaveSnapView?: IVEvent;
    onWindowResize?: IVEvent;
    pinchStart?: IVEvent;
    snapViewOnMouseMove?: IVEvent;
}

interface Frames {
    slideMomentumCheck?: number;
    sliderMomentumFrame?: number;
    snapViewTimeout?: number;
    zoomFrame?: number;
}

interface Sliders {
    imageSlider?: Slider;
    snapSlider?: Slider;
    zoomSlider?: Slider;
}

type IVImage = string | null;

interface Images {
    imageSrc: IVImage;
    hiResImageSrc: IVImage;
}

interface Dim {
    w: number;
    h: number;
}

interface State {
    containerDim?: Dim;
    imageDim?: Dim;
    loaded?: boolean;
    snapHandleDim?: Dim;
    snapImageDim?: Dim;
    snapViewVisible?: boolean;
    zooming?: boolean;
    zoomSliderLength?: number;
    zoomValue?: number;
}

declare class ImageViewer {
    constructor(element: Element | null, options?: Options);

    static defaults: Options;

    protected _elements: Elements;
    protected _events: Events;
    protected _frames: Frames;
    protected _images: Images;
    protected _options: Options;
    protected _sliders: Sliders;
    protected _state: State;

    protected _calculateDimensions(): void;
    protected _doubleTapToZoom(): void;
    protected _findContainerAndImageSrc(
        element: string | Element | null,
    ): {
        container: Element | null;
        domElement: Element | null;
        imageSrc: IVImage;
        hiResImageSrc: IVImage;
    };
    protected _getImageCurrentDim(): void;
    protected _init(): void;
    protected _initDom(): void;
    protected _initEvents(): void;
    protected _initImageSlider(): void;
    protected _initSnapSlider(): void;
    protected _initZoomSlider(): void;
    protected _loadHighResImage(): void;
    protected _loadImages(): void;
    protected _pinchAndZoom(): void;
    protected _scrollZoom(): void;
    protected _snapViewEvents(): void;

    destroy(): void;
    hideSnapView(): void;
    load(imageSrc: string, hiResImageSrc?: string): void;
    refresh(): void;
    resetZoom(animate?: boolean): void;
    showSnapView(noTimeout?: boolean): void;
    zoom(perc: number, point?: { x: number; y: number }): void;
}

interface FullScreenElements extends Elements {
    fullScreen: Element | null;
}

interface FullScreenEvents extends Events {
    onCloseBtnClick?: IVEvent;
    onWindowResize?: IVEvent;
}

declare class FullScreenViewer extends ImageViewer {
    constructor(options?: Options);

    protected _elements: FullScreenElements;
    protected _events: FullScreenEvents;

    protected _initFullScreenEvents(): void;
    hide(): void;
    show(imageSrc: string, hiResImageSrc?: string): void;
}

declare namespace ImageViewer {
    export {
        Elements,
        Events,
        Frames,
        FullScreenElements,
        FullScreenEvents,
        FullScreenViewer,
        Images,
        ImageViewer,
        Options,
        Sliders,
        State,
    };
}

export = ImageViewer;
