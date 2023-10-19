import { Block } from "webpack-blocks";

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
        mode?: string | undefined;
        localIdentName?: string | undefined;
        context?: string | undefined;
        hashPrefix?: string | undefined;
        getLocalIdent?: GetLocalIdent | undefined;
        localIdentRegExp?: string | RegExp | undefined;
        /**
         * 0 => no loaders (default);
         * 1 => postcss-loader;
         * 2 => postcss-loader, sass-loader
         */
        importLoaders?: 0 | 1 | 2 | undefined;
        localsConvention?: "asIs" | "camelCase" | "camelCaseOnly" | "dashes" | "dashesOnly" | undefined;
        onlyLocals?: boolean | undefined;
    }

    interface CssOptions {
        url?: boolean | UrlFilter | undefined;
        import?: boolean | ImportFilter | undefined;
        modules?: boolean | string | ModuleOptions | undefined;
        sourceMap?: boolean | undefined;
    }

    interface FileOptions {
        name?: string | NameFunction | undefined;
        outputPath?: string | PathFunction | undefined;
        publicPath?: string | PathFunction | undefined;
        postTransformPublicPath?: ((p: string) => string) | undefined;
        context?: string | undefined;
        emitFile?: boolean | undefined;
        regExp?: RegExp | undefined;
    }

    interface UrlOptions {
        fallback?: string | undefined;
        limit?: number | boolean | string | undefined;
        mimetype?: string | undefined;
    }

    function modules(options?: ModuleOptions): any;
}

export function css(options?: css.CssOptions): Block;

export function file(options?: css.FileOptions): Block;

export function url(options?: css.UrlOptions): Block;
