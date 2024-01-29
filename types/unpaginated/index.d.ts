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
