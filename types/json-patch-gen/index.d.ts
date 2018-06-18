// Type definitions for json-patch-gen 1.0
// Project: https://github.com/gregsexton/json-patch-gen
// Definitions by: Konstantin Rohde <https://github.com/RohdeK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type PatchOperation = "replace" | "add" | "remove";

interface JsonPatch {
    op: PatchOperation;
    path: string;
    value: any;
}

type Diff = (obj1: object, obj2: object) => JsonPatch[];

declare var diff: Diff;

declare module "json-patch-gen" {
    export = diff;
}
