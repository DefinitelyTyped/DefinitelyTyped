interface Search {
    init(target?: HTMLElement | Document): void;
    teardown(): void;
    on(el?: HTMLElement): void;
    off(el?: HTMLElement): void;
}

declare const search: Search;

export default search;
