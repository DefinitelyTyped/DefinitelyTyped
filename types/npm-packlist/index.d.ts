import type { Node } from "@npmcli/arborist";
import type { Walker, WalkerOptions, WalkerSync } from "ignore-walk";

declare function packlist(tree: Node, options?: packlist.Options): Promise<string[]>;
declare function packlist<T>(
    tree: Node,
    options: packlist.Options | undefined,
    callback: (result: string[]) => T,
): Promise<T>;

declare namespace packlist {
    interface Options extends WalkerOptions {
        parent?: Walker | WalkerSync | null | undefined;
        /** Directory to walk recusively. Defaults to `process.cwd()`. */
        path?: string | undefined;
    }
}

export = packlist;
