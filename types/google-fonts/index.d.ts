// Type definitions for google-fonts 1.0
// Project: https://github.com/hughsk/google-fonts#readme
// Definitions by: Rafa Mel <https://github.com/rafamel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface List {
    [key: string]: boolean | string | string[];
}

declare function fonts(list: List): string;
declare namespace fonts {
    function add(list: List): void;
}

export = fonts;
