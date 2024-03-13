declare namespace simpleDiff {
    type Path = Array<string | number>;

    interface AddEvent {
        oldPath: Path;
        newPath: Path;
        type: "add";
        oldValue: undefined;
        newValue: unknown;
    }

    interface RemoveEvent {
        oldPath: Path;
        newPath: Path;
        type: "remove";
        oldValue: unknown;
        newValue: undefined;
    }

    interface ChangeEvent {
        oldPath: Path;
        newPath: Path;
        type: "change";
        oldValue: unknown;
        newValue: unknown;
    }

    interface AddItemEvent {
        oldPath: Path;
        newPath: Path;
        type: "add-item";
        oldIndex: -1;
        curIndex: -1;
        newIndex: number;
        newValue: unknown;
    }

    interface RemoveItemEvent {
        oldPath: Path;
        newPath: Path;
        type: "remove-item";
        oldIndex: number;
        curIndex: number;
        newIndex: -1;
        oldValue: unknown;
    }

    interface MoveItemEvent {
        oldPath: Path;
        newPath: Path;
        type: "move-item";
        oldIndex: number;
        curIndex: number;
        newIndex: number;
    }

    type Event =
        | AddEvent
        | RemoveEvent
        | ChangeEvent
        | AddItemEvent
        | RemoveItemEvent
        | MoveItemEvent;

    interface Options {
        idProp?: string | undefined;
        idProps?: {
            [path: string]: string;
        } | undefined;
        comparators?:
            | Array<[
                unknown,
                (
                    oldValue: unknown,
                    newValue: unknown,
                    options: { oldPath: Path; newPath: Path },
                ) => boolean,
            ]>
            | undefined;
        ignore?:
            | ((
                oldValue: unknown,
                newValue: unknown,
                options: { oldPath: Path; newPath: Path },
            ) => boolean)
            | undefined;
        callback?: ((event: Event) => void) | undefined;
        addEvent?: string | undefined;
        changeEvent?: string | undefined;
        removeEvent?: string | undefined;
        addItemEvent?: string | undefined;
        removeItemEvent?: string | undefined;
        moveItemEvent?: string | undefined;
    }
}

declare function simpleDiff(oldObj: unknown, newObj: unknown, options?: simpleDiff.Options): simpleDiff.Event[];

export as namespace simpleDiff;
export = simpleDiff;
