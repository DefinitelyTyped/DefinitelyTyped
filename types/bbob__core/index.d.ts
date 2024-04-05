import { parse } from "@bbob/parser";
import { Node, TagNode } from "@bbob/plugin-helper";
import { iterate, match } from "./utils";

export type Tree = TagNode[] & {
    messages: string[];
    options: ProcessOptions;
    walk(cb: (val: TagNode) => TagNode): Tree;
    match: typeof match;
};

export type Plugins = Plugin[] | Plugin;
export interface PluginOptions {
    parse: ProcessOptions["parser"];
    render: ProcessOptions["render"];
    iterate: typeof iterate;
    match: typeof match;
    data: any;
}
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type Plugin = (tree: Tree, options: PluginOptions) => Tree | void;

export interface ProcessOptions {
    parser?: typeof parse;
    render(val: Node): string;
    data?: any;
    skipParse?: boolean;
}

export interface ProcessResponse {
    html: string;
    tree: Tree;
    raw: string;
    messages: string[];
}

export default function bbob(plugs?: Plugins): {
    process(input: string, opts?: ProcessOptions): ProcessResponse;
};
