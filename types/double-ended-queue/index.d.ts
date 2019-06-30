// Type definitions for double-ended-queue 2.1
// Project: https://github.com/petkaantonov/deque
// Definitions by: Dmitry <https://github.com/dsagal>
//                 Dmitry Parzhitsky <https://github.com/parzh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Deque<Item> {
    readonly length: number;
    push(...items: Item[]): number;
    enqueue(...items: Item[]): number;
    insertBack(...items: Item[]): number;
    unshift(...items: Item[]): number;
    insertFront(...items: Item[]): number;
    pop(): Item | undefined;
    removeBack(): Item | undefined;
    shift(): Item | undefined;
    removeFront(): Item | undefined;
    dequeue(): Item | undefined;
    toArray(): Item[];
    toJSON(): Item[];
    peekBack(): Item | undefined;
    peekFront(): Item | undefined;
    get(index: number): Item | undefined;
    isEmpty(): boolean;
    clear(): void;
}

// tslint:disable:no-unnecessary-generics unified-signatures

declare const Deque: {
    prototype: Deque<any>;
    new <Item>(): Deque<Item>;
    new <Item>(items: ReadonlyArray<Item>): Deque<Item>;
    new <Item>(capacity: number): Deque<Item>;
};

export = Deque;
