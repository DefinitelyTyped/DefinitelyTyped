// Type definitions for safe-regex 1.1
// Project: https://github.com/substack/safe-regex
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = safe_regex;
declare function safe_regex(re: string | RegExp, opts?: { limit?: number | undefined }): boolean;
