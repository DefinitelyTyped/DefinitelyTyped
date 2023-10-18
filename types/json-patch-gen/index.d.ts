declare function diff(obj1: object | null, obj2: object | null): diff.JsonPatch[];

declare namespace diff {
    type PatchOperation = "replace" | "add" | "remove";

    interface JsonPatch {
        op: PatchOperation;
        path: string;
        value: any;
    }
}

export = diff;
export as namespace diff;
