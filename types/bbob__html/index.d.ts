// Type definitions for @bbob/html 3.0
// Project: https://github.com/JiLiZART/bbob
// Definitions by: shmee <https://github.com/shme-e>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugins, ProcessOptions } from "@bbob/core";
import { Node } from "@bbob/plugin-helper";

export interface RenderOptions {
    stripTags?: boolean;
}

export type HTMLOptions = Omit<ProcessOptions & RenderOptions, "render">;

export function render(nodes: Node[], options?: RenderOptions): string;

export default function toHTML(source: string, plugins?: Plugins, options?: HTMLOptions): string;
