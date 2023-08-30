// Type definitions for unpaginated 3.0
// Project: https://github.com/manuscriptmastr/unpaginated#readme
// Definitions by: Wes Reed <https://github.com/reediculous456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function unpaginated<T>(fn: (page: number) => Promise<T[] | { data: T[]; total: number }>): Promise<T[]>;

declare namespace unpaginated {
    function byPage<T>(fn: (page: number) => Promise<T[] | { data: T[]; total: number }>): Promise<T[]>;
    function byOffset<T>(fn: (offset: number) => Promise<T[] | { data: T[]; total: number }>): Promise<T[]>;
    function byCursor<T>(
        fn:
            | ((cursor: number) => Promise<{ data: T[]; cursor: number }>)
            | ((cursor: string) => Promise<{ data: T[]; cursor: string }>),
    ): Promise<T[]>;
}

export as namespace unpaginated;
export = unpaginated;
