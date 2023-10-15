// Type definitions for npm-packlist 7.0
// Project: https://github.com/npm/npm-packlist, https://www.npmjs.com/package/npm-packlist
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
//                 Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

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
