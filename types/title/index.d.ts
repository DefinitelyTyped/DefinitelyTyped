// Type definitions for title 3.4
// Project: https://github.com/vercel/title#readme
// Definitions by: Fahad <https://github.com/fa7ad>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This package correctly capitalizes your titles as per The Chicago Manual of Style.
 * Furthermore, all of Vercel's product names are capitalized properly as well.
 */
declare function title(string: string, options?: title.Options): string;

declare namespace title {
    interface Options {
        /**
         * @default undefined
         */
        special?: string[];
    }
}

export = title;
