declare namespace jsonpatch {
    type OpPatch = AddPatch | RemovePatch | ReplacePatch | MovePatch | CopyPatch | TestPatch;
    interface Patch {
        path: string;
    }
    interface AddPatch extends Patch {
        op: "add";
        value: any;
    }
    interface RemovePatch extends Patch {
        op: "remove";
    }
    interface ReplacePatch extends Patch {
        op: "replace";
        value: any;
    }
    interface MovePatch extends Patch {
        op: "move";
        from: string;
    }
    interface CopyPatch extends Patch {
        op: "copy";
        from: string;
    }
    interface TestPatch extends Patch {
        op: "test";
        value: any;
    }

    function apply(document: any, patches: OpPatch[]): any;
    function compile(patches: OpPatch[]): (document: any) => any;

    class JSONPatchError extends Error {}
    class InvalidPointerError extends Error {}
    class InvalidPatchError extends JSONPatchError {}
    class PatchConflictError extends JSONPatchError {}
    class PatchTestFailed extends Error {}
}

export = jsonpatch;
export as namespace jsonpatch;
