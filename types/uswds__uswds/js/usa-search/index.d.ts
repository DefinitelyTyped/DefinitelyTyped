interface Search {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    teardown(): void;
}

declare const search: Search;

export default search;
