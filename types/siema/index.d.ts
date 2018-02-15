// Type definitions for siema 1.4
// Project: https://github.com/pawelgrzybek/siema
// Definitions by: Irmantas Zenkus <https://github.com/Irmiz>
//                 Pavel Puchkov <https://github.com/0x6368656174>
//                 Sam Nau <https://github.com/samnau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Siema {
    currentSlide: number;

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
    selector?: string | HTMLElement;
    duration?: number;
    easing?: string;
    perPage?: number | PageInterface;
    startIndex?: number;
    draggable?: boolean;
    multipleDrag?: boolean;
    threshold?: number;
    loop?: boolean;
    onInit?(): void;
    onChange?(): void;
}
