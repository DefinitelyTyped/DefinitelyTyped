// Type definitions for siema 1.4
// Project: https://github.com/pawelgrzybek/siema
// Definitions by: Irmantas Zenkus <https://github.com/Irmiz>
//                 Sam Nau <https://github.com/samnau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare class Siema {
    currentSlide: number;

    constructor(options?: SiemaOptions);

    next(index?: number, callback?: () => void): void;
    prev(index?: number, callback?: () => void): void;
    goTo(index: number, callback?: () => void): void;
    remove(index: number, callback?: () => void): void;
    insert(item: any, index: number, callback?: () => void): void;
    prepend(item: any, callback?: () => void): void;
    append(item: any, callback?: () => void): void;
    destroy(restoreMarkup: boolean, callback?: () => void): void;
}

interface perPageInterface {
  [key: number]: number;
}

interface SiemaOptions {
    selector?: string | HTMLElement;
    duration?: number;
    easing?: string;
    perPage?: number | perPageInterface;
    startIndex?: number;
    draggable?: boolean;
    multipleDrag?: boolean;
    threshold?: number;
    loop?: boolean;
    onInit?(): void;
    onChange?(): void;
}

export = Siema;
