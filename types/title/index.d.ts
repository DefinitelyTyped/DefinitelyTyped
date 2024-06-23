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
        special?: string[] | undefined;
    }
}

export = title;
