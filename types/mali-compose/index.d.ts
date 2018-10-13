// Type definitions for mali 1.1
// Project: https://github.com/malijs/mali-compose
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Context } from "mali";

declare function compose(
    middleware: ReadonlyArray<
        (ctx: Context, next: () => Promise<void>) => Promise<void>
    >
): (context: Context, next: () => Promise<void>) => Promise<void>;

export = compose;
