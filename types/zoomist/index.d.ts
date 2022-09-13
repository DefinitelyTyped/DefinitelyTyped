// Type definitions for zoomist 1.1
// Project: https://github.com/cotton123236/zoomist
// Definitions by: scriptSQD <https://github.com/scriptSQD>
//                 Wilson Wu <https://github.com/cotton123236>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 4.1

export as namespace Zoomist;

export = Zoomist;
declare class Zoomist {
    constructor(element: Element, options?: ZoomistOptions);

    __events__: {
        drag: Array<(transform?: { x: number; y: number }, event?: Event) => void>;
        dragEnd: Array<(transform?: { x: number; y: number }, event?: Event) => void>;
        dragStart: Array<(transform?: { x: number; y: number }, event?: Event) => void>;
        pinch: Array<(event?: Event) => void>;
        pinchEnd: Array<(event?: Event) => void>;
        pinchStart: Array<(event?: Event) => void>;
        slide: Array<(value?: number, event?: Event) => void>;
        slideEnd: Array<(value?: number, event?: Event) => void>;
        slideStart: Array<(value?: number, event?: Event) => void>;
        wheel: Array<(event?: WheelEvent) => void>;
        zoom: Array<(ratio?: number) => void>;

        ready: Array<() => void>;
        reset: Array<() => void>;
        resize: Array<() => void>;
        destroy: Array<() => void>;
        update: Array<() => void>;
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
    on(event: 'ready' | 'update' | 'destroy' | 'resize' | 'reset', handler: () => void): void;
    on(event: 'zoom', handler: (ratio: number) => void): void;
    on(event: 'wheel', handler: (event: WheelEvent) => void): void;
    on(
        event: 'drag' | 'dragStart' | 'dragEnd',
        handler: (transform: { x: number; y: number }, event: Event) => void,
    ): void;
    on(event: 'slide' | 'slideStart' | 'slideEnd', handler: (value: number, event: Event) => void): void;
    on(event: 'pinch' | 'pinchStart' | 'pinchEnd', handler: (event: Event) => void): void;

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
