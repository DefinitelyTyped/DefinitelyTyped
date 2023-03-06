// Type definitions for webp-in-css 0.7
// Project: https://www.npmjs.com/package/webp-in-css
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// tslint:disable-next-line  no-declare-current-package keeping it simple
declare module 'webp-in-css/polyfill' {
    // nothing here, global script
}

// tslint:disable-next-line  no-declare-current-package keeping it simple
declare module 'webp-in-css/plugin' {
    import { Declaration, PluginCreator } from 'postcss';

    namespace webpInCss {
        interface Options {
            /** @default false */
            modules?: boolean | undefined;
            /** @default 'webp' */
            webpClass?: string | undefined;
            /** @default 'no-webp' */
            noWebpClass?: string | undefined;
            /** @default true */
            addNoJs?: boolean | undefined;
            /** @default 'no-js' */
            noJsClass?: string | undefined;
            /** @default decl => /\.(jpe?g|png)(?!(\.webp|.*[&?]format=webp))/i.test(decl.value) */
            check?: (decl: Declaration) => boolean;
            /** @default oldName => oldName.replace(/\.(jpe?g|png)/gi, '.webp') */
            rename?: (url: string) => string;
        }

        type Plugin = PluginCreator<Options>;
    }

    const webpInCss: webpInCss.Plugin;

    export = webpInCss;
}
