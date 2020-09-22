// Type definitions for simple-diff 1.6
// Project: https://github.com/redexp/simple-diff#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace diff {
    export type Path = Array<string | number>;

    export interface AddEvent {
        oldPath: Path;
        newPath: Path;
        type: 'add';
        oldValue: undefined;
        newValue: unknown;
    }

    export interface RemoveEvent {
        oldPath: Path;
        newPath: Path;
        type: 'remove';
        oldValue: unknown;
        newValue: undefined;
    }

    export interface ChangeEvent {
        oldPath: Path;
        newPath: Path;
        type: 'change';
        oldValue: unknown;
        newValue: unknown;
    }

    export interface AddItemEvent {
        oldPath: Path;
        newPath: Path;
        type: 'add-item';
        oldIndex: -1;
        curIndex: -1;
        newIndex: number;
        newValue: unknown;
    }

    export interface RemoveItemEvent {
        oldPath: Path;
        newPath: Path;
        type: 'remove-item';
        oldIndex: number;
        curIndex: number;
        newIndex: -1;
        oldValue: unknown;
    }

    export interface MoveItemEvent {
        oldPath: Path;
        newPath: Path;
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
        comparators?: Array<[
            unknown,
            (
                oldValue: unknown,
                newValue: unknown,
                options: { oldPath: Path; newPath: Path }
            ) => boolean
        ]>;
        ignore?: (
            oldValue: unknown,
            newValue: unknown,
            options: { oldPath: Path; newPath: Path }
        ) => boolean;
        callback?: (event: Event) => void;
        addEvent?: string;
        changeEvent?: string;
        removeEvent?: string;
        addItemEvent?: string;
        removeItemEvent?: string;
        moveItemEvent?: string;
    }
}

declare function diff(oldObj: unknown, newObj: unknown, options?: diff.Options): diff.Event[];

export as namespace diff;
export = diff;
