// Type definitions for double-ended-queue 2.1
// Project: https://github.com/petkaantonov/deque
// Definitions by: Dmitry <https://github.com/dsagal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Deque<T> {
    constructor(items?: ReadonlyArray<T>);
    constructor(capacity: number);
    readonly length: number;
    push(...items: T[]): number;
    unshift(...items: T[]): number;
    pop(): T|undefined;
    shift(): T|undefined;
    toArray(): T[];
    peekBack(): T|undefined;
    peekFront(): T|undefined;
    get(index: number): T|undefined;
    isEmpty(): boolean;
    clear(): void;
}

export = Deque;
