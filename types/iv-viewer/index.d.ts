interface Options {
    zoomValue?: number | undefined;
    snapView?: boolean | undefined;
    maxZoom?: number | undefined;
    refreshOnResize?: boolean | undefined;
    zoomOnMouseWheel?: boolean | undefined;
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
    image?: Element | null | undefined;
    imageWrap?: Element | null | undefined;
    snapHandle?: Element | null | undefined;
    snapImage?: Element | null | undefined;
    snapImageWrap?: Element | null | undefined;
    snapView?: Element | null | undefined;
    zoomHandle?: Element | null | undefined;
}

type IVEvent = () => void;

interface Events {
    hiResImageLoad?: IVEvent | undefined;
    imageLoad?: IVEvent | undefined;
    mouseEnterSnapView?: IVEvent | undefined;
    mouseLeaveSnapView?: IVEvent | undefined;
    onWindowResize?: IVEvent | undefined;
    pinchStart?: IVEvent | undefined;
    snapViewOnMouseMove?: IVEvent | undefined;
}

interface Frames {
    slideMomentumCheck?: number | undefined;
    sliderMomentumFrame?: number | undefined;
    snapViewTimeout?: number | undefined;
    zoomFrame?: number | undefined;
}

interface Sliders {
    imageSlider?: Slider | undefined;
    snapSlider?: Slider | undefined;
    zoomSlider?: Slider | undefined;
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
    containerDim?: Dim | undefined;
    imageDim?: Dim | undefined;
    loaded?: boolean | undefined;
    snapHandleDim?: Dim | undefined;
    snapImageDim?: Dim | undefined;
    snapViewVisible?: boolean | undefined;
    zooming?: boolean | undefined;
    zoomSliderLength?: number | undefined;
    zoomValue?: number | undefined;
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
    onCloseBtnClick?: IVEvent | undefined;
    onWindowResize?: IVEvent | undefined;
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
