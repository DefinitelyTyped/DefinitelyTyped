// Type definitions for resolve-pkg 1.0
// Project: https://github.com/sindresorhus/resolve-pkg
// Definitions by: Meno Abels <https://github.com/mabels>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

interface ResolvePkgOptions {
  cwd?: boolean;
}

type ResolveFunction = (moduleId: string, options?: ResolvePkgOptions) => string;
declare const resolveFunction: ResolveFunction;

export = resolveFunction;
