// Type definitions for simple-icons 5.0
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

// tslint:disable-next-line no-declare-current-package
declare module 'simple-icons' {
    const icons: Record<string, SimpleIcon> & {
        Get(name: string): SimpleIcon;
    };

    export = icons;
}

// tslint:disable-next-line no-declare-current-package
declare module 'simple-icons/icons/*' {
    const icon: SimpleIcon;
    export = icon;
}
