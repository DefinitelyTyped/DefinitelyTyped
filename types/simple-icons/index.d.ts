// Type definitions for simple-icons 4.17
// Project: https://simpleicons.org
// Definitions by: Eric Cornelissen <https://github.com/ericcornelissen>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SimpleIcon {
    title: string;
    slug: string;
    svg: string;
    path: string;
    source: string;
    hex: string;
    guidelines?: string;
    license?: {
        type: string;
        url: string;
    };
}

declare const icons: Record<string, SimpleIcon> & {
    get(name: string): SimpleIcon;
};

declare const icon: SimpleIcon;

// tslint:disable-next-line no-declare-current-package we cannot declare 1000+ exports
declare module 'simple-icons' {
    export = icons;
}

// tslint:disable-next-line no-declare-current-package we cannot declare 1000+ exports
declare module 'simple-icons/icons/*' {
    export = icon;
}
