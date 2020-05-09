// Type definitions for postcss-custom-properties 9.1
// Project: https://github.com/postcss/postcss-custom-properties#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Result, LazyResult } from 'postcss';

declare namespace postcssCustomProperties {
    /**
     * Sources where Custom Properties can be imported from or export to,
     * which might be CSS, JS, and JSON files, functions, and directly passed objects
     */
    type ImportSources =
        | string
        | (() => CustomPropertiesObject)
        | CustomPropertiesObject
        | (() => CustomPropertiesObject)
        | Promise<CustomPropertiesObject>;
    /**
     * Sources where Custom Properties can be imported from or export to,
     * which might be CSS, JS, and JSON files, functions, and directly passed objects
     */
    type ExportSources =
        | string
        | CustomPropertiesObject
        | ((customProperties: CustomPropertiesObject) => any)
        | Promise<CustomPropertiesObject>;

    interface CustomPropertiesObject {
        customProperties?: {
            [name: string]: string;
        };
        ['custom-properties']?: {
            [name: string]: string;
        };
    }

    interface Options {
        /**
         * The preserve option determines whether Custom Properties
         * and properties using custom properties should be preserved in their original form.
         * By default, both of these are preserved
         * @see {@link https://github.com/postcss/postcss-custom-properties#preserve}
         */
        preserve?: boolean;
        /**
         * The importFrom option specifies sources where Custom Properties can be imported from,
         * which might be CSS, JS, and JSON files, functions, and directly passed objects.
         * Multiple sources can be passed into this option, and they will be parsed in the order they are received.
         * JavaScript files, JSON files, functions, and objects will need to namespace Custom Properties using the customProperties or custom-properties key.
         * @see {@link https://github.com/postcss/postcss-custom-properties#importfrom}
         */
        importFrom?: ImportSources | ImportSources[];
        /**
         * The exportTo option specifies destinations where Custom Properties can be exported to,
         * which might be CSS, JS, and JSON files, functions, and directly passed objects.
         * Multiple destinations can be passed into this option, and they will be parsed in the order they are received.
         * JavaScript files, JSON files, and objects will need to namespace Custom Properties using the customProperties or custom-properties key.
         * @see {@link https://github.com/postcss/postcss-custom-properties#exportto}
         */
        exportTo?: ExportSources | ExportSources[];
    }

    type CustomPropertiesPlugin = Plugin<Options> & {
        process: (
            css:
                | string
                | {
                      toString(): string;
                  }
                | Result,
            opts?: any,
            pluginOptions?: Options,
        ) => LazyResult;
    };
}

declare const postcssCustomProperties: postcssCustomProperties.CustomPropertiesPlugin;

export = postcssCustomProperties;
