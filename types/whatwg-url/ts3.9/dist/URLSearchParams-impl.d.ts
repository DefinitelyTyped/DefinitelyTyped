declare class URLSearchParamsImpl {
    constructor(
        globalObject: object,
        [init]: readonly [
            (
                | ReadonlyArray<readonly [string, string]>
                | { readonly [name: string]: string }
                | string
            )?,
        ],
        privateData: { readonly doNotStripQMark?: boolean },
    );

    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    sort(): void;

    [Symbol.iterator](): IterableIterator<[string, string]>;
}
export { URLSearchParamsImpl as implementation };
