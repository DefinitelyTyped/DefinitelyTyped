// Type definitions for ink-testing-library 1.0
// Project: https://github.com/vadimdemedes/ink-testing-library#readme
// Definitions by: Sam Palmer <https://github.com/MancunianSam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { Component, InkElement } from "ink";
export interface RenderResponse {
    rerender: (tree: InkElement) => void;
    unmount: () => void;
    stdin: {
        write: (data: any) => boolean;
    };
    frames: ReadonlyArray<string>;
    lastFrame: () => string;
}
export function cleanup(): void;
export function render(tree: InkElement): RenderResponse;
