interface Table {
    TABLE: string;
    SORTABLE_HEADER: string;
    SORT_BUTTON: string;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const table: Table;

export default table;
