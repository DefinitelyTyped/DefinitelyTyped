// Type definitions for rtlcss 3.1
// Project: https://github.com/MohammadYounes/rtlcss
// Definitions by: Adam Zerella <https://github.com/adamzerella>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { PluginCreator } from 'postcss';
import Processor from 'postcss/lib/processor';

declare namespace rtlcss {
    interface MapOptions {
        scope: string;
        ignoreCase: boolean;
        greedy?: boolean;
    }

    interface StringMap {
        name: string;
        priority: number;
        exclusive?: boolean;
        search: string | string[];
        replace: string | string[];
        options: MapOptions;
    }

    interface ConfigOptions {
        /**
         * Applies to CSS rules containing no directional properties,
         * it will update the selector by applying String Map.
         */
        autoRename: boolean;
        /**
         * Ensures autoRename is applied only if pair exists.
         */
        autoRenameStrict: boolean;
        /**
         * An object map of disabled plugins directives,
         * where keys are plugin names and value are object
         * hash of disabled directives. e.g. {'rtlcss':{'config':true}}.
         */
        blacklist: object;
        /**
         * Removes directives comments from output CSS.
         */
        clean: boolean;
        /**
         * Fallback value for String Map options.
         */
        greedy: boolean;
        /**
         * Applies String Map to URLs. You can also target specific node types using an object literal.
         * e.g. {'atrule': true, 'decl': false}.
         */
        processUrls: boolean | object;
        /**
         * The default array of String Map.
         */
        stringMap: StringMap[];
        /**
         * When enabled, flips background-position expressed in length units using calc.
         */
        useCalc: boolean;
    }

    interface HookOptions {
        /**
         * The function to be called before processing the CSS.
         */
        pre: () => void;
        /**
         * The function to be called after processing the CSS.
         */
        post: () => void;
    }

    interface ExportedAPI {
        /**
         * Creates a new RTLCSS instance, process the input and return its result.
         * @param  css  A string containing input CSS.
         * @param options  An object containing RTLCSS settings.
         * @param plugins An array containing a list of RTLCSS plugins or a single RTLCSS plugin.
         * @param hooks An object containing pre/post hooks.
         * @returns A string containing the RTLed css.
         */
        process(css: string, options?: object, plugins?: object | string[], hooks?: HookOptions): string;

        /**
         * Creates a new instance of RTLCSS using the passed configuration object
         * @param config  An object containing RTLCSS options, plugins and hooks.
         * @returns A new RTLCSS instance.
         */
        configure(config: ConfigOptions): Processor;
    }

    type RtlCss = PluginCreator<ConfigOptions> & ExportedAPI;
}

/**
 * RTLCSS is a framework for converting Left-To-Right (LTR) Cascading Style Sheets(CSS) to Right-To-Left (RTL).
 */
declare const rtlcss: rtlcss.RtlCss;
export = rtlcss;
