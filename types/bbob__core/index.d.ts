// Type definitions for @bbob/core 3.0
// Project: https://github.com/JiLiZART/bbob
// Definitions by: shme-e <https://github.com/shme-e>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Node, TagNode } from "@bbob/plugin-helper";
import { parse } from "@bbob/parser"
import { match } from "./utils";

export * from "./utils";

type Tree = TagNode[] & {
    messages: string[],
    options: ProcessOptions,
    walk(cb: (val: TagNode) => TagNode): Tree,
    match: typeof match
};

export type Plugin = (tree: Tree, options: {parse: any, render: any, iterate: any, match: any, data: any}) => Tree | null

export interface ProcessOptions {
    parser?: typeof parse,
    render(val: any): string,
    data?: any
}

export interface ProcessResponse {
    html: string,
    tree: Tree,
    raw: string,
    messages: string[]
}

export default function bbob(plugs?: Plugin[] | Plugin): {
    process(input: string, opts?: ProcessOptions): ProcessResponse
};
