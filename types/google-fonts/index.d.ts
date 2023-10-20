interface List {
    [key: string]: boolean | string | string[];
}

declare function fonts(list: List): string;
declare namespace fonts {
    function add(list: List): void;
}

export = fonts;
