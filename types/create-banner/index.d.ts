// Type definitions for create-banner 1.0
// Project: https://github.com/fengyuanchen/create-banner
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/**
 * Create a banner from a package.json file
 */
declare function createBanner(options?: createBanner.Options): string;

declare namespace createBanner {
    interface Options {
        /**
         * The case of the package name in the banner. Not to change the package name case by default.
         * @default ''
         */
        case?: LiteralUnion<
            | 'camel-case'
            | 'capital-case'
            | 'constant-case'
            | 'dot-case'
            | 'header-case'
            | 'no-case'
            | 'param-case'
            | 'pascal-case'
            | 'path-case'
            | 'sentence-case'
            | 'snake-case',
            string
        >;
        /**
         * The extra data for creating banner, will be merged into package data.
         */
        data?: BannerData;
        /**
         * The package data for creating banner.
         * If it is null, will read from the closest package.json file by default using the `read-pkg-up` package
         * @default null;
         */
        pkg?: {
            [key: string]: unknown;
        } | null;
        /**
         * The template for creating banner.
         * Property using a dot path is supported by the `dot-prop` package.
         * Other values will be used directly as a custom template.
         * @default 'normal'
         */
        template?: LiteralUnion<'normal' | 'simple' | 'inline', string>;
    }

    interface BannerData {
        /**
         * @default new Date().toISOString()
         */
        date?: string;
        /**
         * @default new Date().getFullYear()
         */
        year?: string;
        [key: string]: unknown;
    }

    // @credit @sindresorhus/type-fest
    type Primitive = null | undefined | string | number | boolean | symbol | bigint;
    // @credit @sindresorhus/type-fest
    type LiteralUnion<LiteralType extends BaseType, BaseType extends Primitive> =
        | LiteralType
        | (BaseType & { _?: never });
}

export = createBanner;
