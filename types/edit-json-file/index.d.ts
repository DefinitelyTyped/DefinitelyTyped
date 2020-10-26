// Type definitions for edit-json-file 1.4
// Project: https://github.com/IonicaBizau/edit-json-file#readme
// Definitions by: Twixes <https://github.com/Twixes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types= "node" />

import { NoParamCallback } from 'fs';

declare namespace editJsonFile {
    /** JSON file editor options. */
    interface Options {
        stringify_width?: number;
        stringify_fn?: (data: object) => string;
        stringify_eol?: boolean;
        autosave?: boolean;
    }

    /** JSON file editor. */
    interface JsonEditor {
        /** Get value at path. */
        get(path?: string): any;
        /** Set value at path. */
        set(path: string, value: any): JsonEditor;
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
