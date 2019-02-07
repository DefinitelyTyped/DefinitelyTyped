// Type definitions for open-editor 1.2
// Project: https://github.com/sindresorhus/open-editor#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { PathSpec } from 'line-column-path';

export = openEditor;

declare function openEditor(files: PathSpec[], options?: openEditor.Options): void;

declare namespace openEditor {
    function make(files: PathSpec[], options?: Options): EditorRunConfig;

    interface Options {
        editor?: string;
    }

    interface EditorRunConfig {
        bin: string;
        args: string[];
        isTerminalEditor: boolean;
    }
}
