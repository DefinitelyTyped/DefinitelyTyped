// Type definitions for json-patch
// Project: https://github.com/bruth/jsonpatch-js
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jsonpatch {
    type OpPatch = AddPath | RemovePath | ReplacePath | MovePath | CopyPath | TestPath;
    interface Patch {
        op: string;
    }
    interface AddPath extends Patch {
        path: string;
        value: any;
    }
    interface RemovePath extends Patch {
        path: string;
    }
    interface ReplacePath extends Patch {
        path: string;
        value: any;
    }
    interface MovePath extends Patch {
        from: string;
        path: string;
    }
    interface CopyPath extends Patch {
        from: string;
        path: string;
    }
    interface TestPath extends Patch {
        path: string;
        value: any;
    }

    function apply(document: any, patches: OpPatch[]): any;
    function compile(patches: OpPatch[]): (document: any) => any;
}

export = jsonpatch;
export as namespace jsonpatch;
