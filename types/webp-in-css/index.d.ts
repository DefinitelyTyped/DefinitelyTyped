/// <reference types="node" />

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "webp-in-css/polyfill" {
    // nothing here, global script
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "webp-in-css/plugin" {
    import { Declaration, PluginCreator } from "postcss";

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
