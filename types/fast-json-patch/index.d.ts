// Type definitions for JSON-Patch v1.1.8
// Project: https://github.com/Starcounter-Jack/JSON-Patch/releases
// Definitions by: Francis OBrien <https://github.com/itsFrank>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace fastjsonpatch {

    type Patch = AddPatch | RemovePatch | ReplacePatch | MovePatch | CopyPatch | TestPatch;

    interface PatchBase {
        path: string;
    }

    interface AddPatch extends PatchBase {
        op: 'add';
        value: any;
    }

    interface RemovePatch extends PatchBase {
        op: 'remove';
    }

    interface ReplacePatch extends PatchBase {
        op: 'replace';
        value: any;
    }

    interface MovePatch extends PatchBase {
        op: 'move';
        from: string;
    }

    interface CopyPatch extends PatchBase {
        op: 'copy';
        from: string;
    }

    interface TestPatch extends PatchBase {
        op: 'test';
        value: any;
    }

    interface Observer<T> {
        object: T
        patches: Patch[]
        unobserve(): void
    }

    type JsonPatchErrorName = 'SEQUENCE_NOT_AN_ARRAY' |
        'OPERATION_NOT_AN_OBJECT' |
        'OPERATION_OP_INVALID' |
        'OPERATION_PATH_INVALID' |
        'OPERATION_FROM_REQUIRED' |
        'OPERATION_VALUE_REQUIRED' |
        'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED' |
        'OPERATION_PATH_CANNOT_ADD' |
        'OPERATION_PATH_UNRESOLVABLE' |
        'OPERATION_FROM_UNRESOLVABLE' |
        'OPERATION_PATH_ILLEGAL_ARRAY_INDEX' |
        'OPERATION_VALUE_OUT_OF_BOUNDS';

    interface JsonPatchError {
        name: JsonPatchErrorName
        message: string
        index: number
        operation: any
        tree: any
    }

    /**
     * Applies an array of patch instructions to an object
     */
    function apply(object: any, patches: Patch[], validate?: boolean): any[]

    /**
     * Observes changes made to an object, which can then be retieved using generate
     */
    function observe<T>(object: T, callback?: () => void): Observer<T>

    /**
     * Detach an observer from an object
     */
    function unobserve<T>(object: T, observer: Observer<T>): void

    /**
     * Generate an array of patches from an observer
     */
    function generate<T>(observer: Observer<T>): Patch[]

    /**
     * Create an array of patches from the differences in two objects
     */
    function compare(object1: any, object2: any): Patch[]

    /**
     * Ensure a set of patch instructions is valid
     */
    function validate(patches: Patch[], tree?: any): JsonPatchError[]

}

declare module "fast-json-patch" {
    export = fastjsonpatch
}