// Type definitions for double-ended-queue 2.1
// Project: https://github.com/petkaantonov/deque
// Definitions by: Dmitry <https://github.com/dsagal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Deque<T> {
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

declare const Deque: {
    prototype: Deque<any>;
    new <T>(items?: ReadonlyArray<T>): Deque<T>;
    new <T>(capacity: number): Deque<T>;  // tslint:disable-line:no-unnecessary-generics
};

export = Deque;
