// Type definitions for @webpack-blocks/assets 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/assets
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Block } from 'webpack-blocks';

export namespace css {
    type UrlFilter = (url: string, resourcePath: string) => boolean;
    type ImportFilter = (parseImport: ParseImportOptions, resourcePath: string) => boolean;
    type GetLocalIdent = (context: any, localIdentName: any, localName: any, options: any) => string;
    type NameFunction = (file: string) => any;
    type PathFunction = (url: string, resourcePath: string, context: string) => any;

    interface ParseImportOptions {
        url: string;
        media: string;
    }

    interface ModuleOptions {
        mode?: string;
        localIdentName?: string;
        context?: string;
        hashPrefix?: string;
        getLocalIdent?: GetLocalIdent;
        localIdentRegExp?: string | RegExp;
        /**
         * 0 => no loaders (default);
         * 1 => postcss-loader;
         * 2 => postcss-loader, sass-loader
         */
        importLoaders?: 0 | 1 | 2;
        localsConvention?: 'asIs'  | 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly';
        onlyLocals?: boolean;
    }

    interface CssOptions {
        url?: boolean | UrlFilter;
        import?: boolean | ImportFilter;
        modules?: boolean | string | ModuleOptions;
        sourceMap?: boolean;
    }

    interface FileOptions {
        name?: string | NameFunction;
        outputPath?: string | PathFunction;
        publicPath?: string | PathFunction;
        postTransformPublicPath?: (p: string) => string;
        context?: string;
        emitFile?: boolean;
        regExp?: RegExp;
    }

    interface UrlOptions {
        fallback?: string;
        limit?: number | boolean | string;
        mimetype?: string;
    }

    function modules(options?: ModuleOptions): any;
}

export function css(options?: css.CssOptions): Block;

export function file(options?: css.FileOptions): Block;

export function url(options?: css.UrlOptions): Block;
