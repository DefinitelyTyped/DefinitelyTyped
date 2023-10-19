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
