import { Plugins, ProcessOptions } from "@bbob/core";
import { Node } from "@bbob/plugin-helper";

export interface RenderOptions {
    stripTags?: boolean;
}

export type HTMLOptions = Omit<ProcessOptions & RenderOptions, "render">;

export function render(nodes: readonly Node[], options?: RenderOptions): string;

export default function toHTML(source: string, plugins?: Plugins, options?: HTMLOptions): string;
