// Type definitions for siema 1.4
// Project: https://github.com/pawelgrzybek/siema
// Definitions by: Irmantas Zenkus <https://github.com/Irmiz>
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

interface SiemaOptions {
    selector?: string;
    duration?: number;
    easing?: string;
    perPage?: number;
    startIndex?: number;
    draggable?: boolean;
    multipleDrag?: boolean;
    threshold?: number;
    loop?: boolean;
    onInit(): void;
    onChange?(): void;
}

export = Siema;
