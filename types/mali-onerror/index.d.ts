// Type definitions for mali-onerror 0.1
// Project: https://github.com/malijs/onerror
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Context } from "mali";

declare function onError(
    fn: (err: Error, ctx: Context) => void
): (ctx: Context, next: () => Promise<void>) => Promise<void>; // ? next (I know it s a function)

export = onError;
