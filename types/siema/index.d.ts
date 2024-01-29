export default class Siema {
    currentSlide: number;
    perPage: number;

    constructor(options?: SiemaOptions);

    next(index?: number, callback?: () => void): void;
    prev(index?: number, callback?: () => void): void;
    goTo(index: number, callback?: () => void): void;
    remove(index: number, callback?: () => void): void;
    insert(item: HTMLElement, index: number, callback?: () => void): void;
    prepend(item: HTMLElement, callback?: () => void): void;
    append(item: HTMLElement, callback?: () => void): void;
    destroy(restoreMarkup?: boolean, callback?: () => void): void;
}

export interface PageInterface {
    [key: number]: number;
}

export interface SiemaOptions {
    selector?: string | HTMLElement | undefined;
    duration?: number | undefined;
    easing?: string | undefined;
    perPage?: number | PageInterface | undefined;
    startIndex?: number | undefined;
    draggable?: boolean | undefined;
    multipleDrag?: boolean | undefined;
    threshold?: number | undefined;
    loop?: boolean | undefined;
    rtl?: boolean | undefined;
    onInit?(): void;
    onChange?(): void;
}
