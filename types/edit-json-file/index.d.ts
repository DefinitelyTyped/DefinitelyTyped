/// <reference types= "node" />

import { NoParamCallback } from "fs";
import * as set from "set-value";

declare namespace editJsonFile {
    /** JSON file editor options. */
    interface Options {
        stringify_width?: number | undefined;
        stringify_fn?: ((data: object) => string) | undefined;
        stringify_eol?: boolean | undefined;
        autosave?: boolean | undefined;
        ignore_dots?: boolean | undefined;
    }

    /** JSON file editor. */
    interface JsonEditor {
        /** Get value at path. */
        get(path?: string): any;
        /** Set value at path. */
        set(path: string, value: any, options?: set.Options): JsonEditor;
        /** Appends a value/object to a specific path. */
        append(path: string, value: any): JsonEditor;
        /** Pop an array from a specific path. */
        pop(path: string): JsonEditor;
        /** Unset value at path. */
        unset(path: string): JsonEditor;
        /** Read the JSON file. */
        read(cb?: NoParamCallback): object;
        /** Overwrite the JSON file. */
        write(content: string, cb?: NoParamCallback): JsonEditor;
        /** Empty the JSON file. */
        empty(cb?: NoParamCallback): JsonEditor;
        /** Save the JSON file back to disk. */
        save(cb?: NoParamCallback): JsonEditor;
        /** Get full object. */
        toObject(): object;
    }
}

/** Create a JSON file editor. */
declare function editJsonFile(path: string, options?: editJsonFile.Options): editJsonFile.JsonEditor;

export = editJsonFile;
