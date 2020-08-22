// Type definitions for it-all 1.0
// Project: https://github.com/achingbrain/it-all
// Definitions by: nlisgo <https://github.com/nlisgo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function all<T>(iterable: AsyncIterable<T>): Promise<T[]>;

export = all;
