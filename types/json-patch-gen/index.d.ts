// Type definitions for json-patch-gen 1.0
// Project: https://github.com/gregsexton/json-patch-gen
// Definitions by: Konstantin Rohde <https://github.com/RohdeK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
