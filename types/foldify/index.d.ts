// Type definitions for foldify
// Project: https://github.com/cellvia/foldify
// Definitions by: Ufuk Bakan <https://github.com/ufukbakan>
type FoldifyOptions = {
    recursive?: boolean,
    tree?: boolean,
    output?: "object" | "string" | "array",
    whitelist?: string | string[],
    blacklist?: string | string[],
    includeExt?: boolean,
    fullPath?: boolean,
    jsToString?: boolean,
    encoding?: string
}
declare function fold<T = any>(path: string | string[], options?: FoldifyOptions): { [key: string]: T };
export default fold;