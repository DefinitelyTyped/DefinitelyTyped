// Type definitions for simple-icons 5.8
// Project: https://simpleicons.org
// Definitions by: Eric Cornelissen <https://github.com/ericcornelissen>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// tslint:disable:no-declare-current-package

declare const icons: Record<string, icons.SimpleIcon> & {
    get(name: string): icons.SimpleIcon;
    Get(name: string): icons.SimpleIcon;
};

declare namespace icons {
    interface SimpleIcon {
        title: string;
        slug: string;
        svg: string;
        path: string;
        source: string;
        hex: string;
        guidelines?: string | undefined;
        license?:
            | {
                  type: string;
                  url: string;
              }
            | undefined;
    }
}

declare const icon: icons.SimpleIcon;

declare module 'simple-icons' {
    export = icons;
}

declare module 'simple-icons/icons/*' {
    export = icon;
}
