export default Zoomist;
declare class Zoomist {
    /**
     *
     * @param {Element} element - target element
     * @param {Object} options - the configuration options
     */
    constructor(element: Element, options?: ZoomistOptions);

    __events__: {
        destroy: Function;
        drag: Function;
        dragEnd: Function;
        dragStart: Function;
        pinch: Function;
        pinchEnd: Function;
        pinchStart: Function;
        ready: Function;
        reset: Function;
        resize: Function;
        slide: Function;
        slideEnd: Function;
        slideStart: Function;
        update: Function;
        wheel: Function;
        zoom: Function;
    };
    __modules__: {
        slider: {
            direction: string;
            el: string;
            isCustomEl: boolean;
            maxRatio: number;
            mounted: boolean;
            sldierBar: HTMLElement;
            sliderEl: HTMLElement;
            sliderButton: HTMLElement;
            sliderMain: HTMLElement;
            sliding: boolean;
            value: number;
        };
        zoomer: {
            disableOnBounds: boolean;
            inEl: string;
            isCustomInEl: boolean;
            isCustomOutEl: boolean;
            mounted: boolean;
            outEl: string;
            zoomerEl: HTMLElement;
            zoomerInEl: HTMLElement;
            zoomerOutEl: HTMLElement;
        };
    };
    data: {
        containerData: {
            aspectRatio: number;
            height: number;
            width: number;
        };
        dragData: {
            startX: number;
            startY: number;
            transX: number;
            transY: number;
        };
        imageData: {
            aspectRatio: number;
            height: number;
            width: number;
            left: number;
            top: number;
            naturalWidth: number;
            naturalHeight: number;
        };
        originalImageData: {
            aspectRatio: number;
            height: number;
            width: number;
            left: number;
            top: number;
            naturalWidth: number;
            naturalHeight: number;
        };
        pinchData: {
            dist: number;
            startX: number;
            startY: number;
        };
    };

    init(): void;
    create(url: string): void;
    mount(): void;
    render(): void;

    element: HTMLElement;
    options: ZoomistOptions;
    wrapper: HTMLDivElement;
    image: HTMLImageElement;
    mounted: boolean;
    dragging: boolean;
    pinching: boolean;
    ratio: number;
    url: string;
    wheeling: boolean;

    /* Methods */
    getContainerData(): { width: number; height: number; aspectRatio: number };
    getImageData(): {
        width: number;
        height: number;
        aspectRatio: number;
        top: number;
        left: number;
        naturalWidth: number;
        naturalHeight: number;
    };
    getSliderValue(): number;
    getZoomRation(): number;
    zoom(ratio: number): void;
    zoomTo(ratio: number): void;
    move(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    slideTo(value: number, isOnlySlide: boolean): void;
    on(
        event:
            | 'ready'
            | 'zoom'
            | 'wheel'
            | 'dragStart'
            | 'drag'
            | 'dragEnd'
            | 'slideStart'
            | 'slide'
            | 'slideEnd'
            | 'pinchStart'
            | 'pinch'
            | 'pinchEnd'
            | 'resize'
            | 'reset'
            | 'destroy'
            | 'update',
        handler: Function,
    ): void;

    reset(): void;
    update(): void;
    destroy(): void;
}

interface ZoomistOptions {
    src?: string | HTMLImageElement;
    fill?: 'cover' | 'contain' | 'none';
    draggable?: boolean;
    wheelable?: boolean;
    pinchable?: boolean;
    bounds?: boolean;
    zoomRatio?: number;
    maxRatio?: number | false;
    height?: 'auto' | `${number}%` | number | false;
    slider?: {
        el?: string | HTMLElement | false;
        direction?: 'horizontal' | 'vertical';
        maxRatio?: number;
    };
    zoomer?: {
        inEl?: string | HTMLElement | false;
        outEl?: string | HTMLElement | false;
        disableOnBounds?: boolean;
    };
    on?: {
        ready?(): void;
        zoom?(ratio: number): void;
        wheel?(event: WheelEvent): void;
        dragStart?(transform: { x: number; y: number }, event: Event): void;
        drag?(transform: { x: number; y: number }, event: Event): void;
        dragEnd?(transform: { x: number; y: number }, event: Event): void;
        slideStart?(value: number, event: Event): void;
        slide?(value: number, event: Event): void;
        slideEnd?(value: number, event: Event): void;
        pinchStart?(event: Event): void;
        pinch?(event: Event): void;
        pinchEnd?(event: Event): void;
        resize?(): void;
        reset?(): void;
        destroy?(): void;
        update?(): void;
    };
}
