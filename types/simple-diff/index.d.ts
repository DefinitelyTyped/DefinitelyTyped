// Type definitions for simple-diff 1.6
// Project: https://github.com/redexp/simple-diff#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface AddEvent {
    oldPath: (string | number)[];
    newPath: (string | number)[];
    type: 'add';
    oldValue: undefined;
    newValue: unknown;
}

export interface RemoveEvent {
    oldPath: (string | number)[];
    newPath: (string | number)[];
    type: 'remove';
    oldValue: unknown;
    newValue: undefined;
}

export interface ChangeEvent {
    oldPath: (string | number)[];
    newPath: (string | number)[];
    type: 'change';
    oldValue: unknown;
    newValue: unknown;
}

export interface AddItemEvent {
    oldPath: (string | number)[];
    newPath: (string | number)[];
    type: 'add-item';
    oldIndex: -1;
    curIndex: -1;
    newIndex: number;
    newValue: unknown;
}

export interface RemoveItemEvent {
    oldPath: (string | number)[];
    newPath: (string | number)[];
    type: 'remove-item';
    oldIndex: number;
    curIndex: number;
    newIndex: -1;
    oldValue: unknown;
}

export interface MoveItemEvent {
    oldPath: (string | number)[];
    newPath: (string | number)[];
    type: 'move-item';
    oldIndex: number;
    curIndex: number;
    newIndex: number;
}

export type Event =
    | AddEvent
    | RemoveEvent
    | ChangeEvent
    | AddItemEvent
    | RemoveItemEvent
    | MoveItemEvent;

export interface Options {
    idProp?: string;
    idProps?: {
        [path: string]: string;
    }
    comparators?: [
        unknown,
        (
            oldValue: unknown,
            newValue: unknown,
            options: { oldPath: (string | number)[]; newPath: (string | number)[] }
        ) => boolean
    ][];
    ignore?: (
        oldValue: unknown,
        newValue: unknown,
        options: { oldPath: (string | number)[]; newPath: (string | number)[] }
    ) => boolean;
    callback?: (event: Event) => void;
    addEvent?: string;
    changeEvent?: string;
    removeEvent?: string;
    addItemEvent?: string;
    removeItemEvent?: string;
    moveItemEvent?: string;
}

export default function (oldObj: unknown, newObj: unknown, options?: Options): Event[];
