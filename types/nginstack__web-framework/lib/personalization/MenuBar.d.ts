export = MenuBar;
declare function MenuBar(iTheme: any): void;
declare class MenuBar {
    constructor(iTheme: any);
    iTheme: any;
    items: any[];
    sortItems(): void;
    private _loadFromDataset;
    toHtml(): string;
}
declare namespace MenuBar {
    function create(themeKey: any, basedTheme: any): void;
}
