// Type definitions for env-editor 0.3
// Project: https://github.com/sindresorhus/env-editor#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function(): Editor;
export function get(editor: string): Editor;
export function all(): Editor[];

export interface Editor {
    id: string;
    name: string;
    bin: string;
    isTerminalEditor: boolean;
    paths: string[];
    keywords: string[];
}
