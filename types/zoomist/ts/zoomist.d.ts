export default Zoomist;
declare class Zoomist {
    /**
     *
     * @param {Element} element - target element
     * @param {Object} options - the configuration options
     */
    constructor(element: Element, options?: ZoomistOptions);
    element: any;
    options: ZoomistOptions;
    init(): void;
    create(url: any): void;
    url: any;
    data: {};
    ratio: number;
    mount(): void;
    wrapper: HTMLDivElement;
    image: HTMLImageElement;
    mounted: boolean;
    render(): void;

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
    getSliderValue(): number;
    zoom(ratio: number): void;
    zoomTo(ratio: number): void;
    slideTo(value: number, isOnlySlide: boolean): void;
    on(event: string, handler: Function): void;

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
        el: string | HTMLElement;
        direction: 'horizontal' | 'vertical';
        maxRatio: number;
    };
    zoomer?: {
        inEl: string | HTMLElement;
        outEl: string | HTMLElement;
        disableOnBounds: boolean;
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
