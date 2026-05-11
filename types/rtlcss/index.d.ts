import { PluginCreator, Postcss, Root } from "postcss";
import Processor = require("postcss/lib/processor");

declare namespace rtlcss {
    interface MapOptions {
        scope: string;
        ignoreCase: boolean;
        greedy?: boolean | undefined;
    }

    interface StringMap {
        name: string;
        priority: number;
        exclusive?: boolean | undefined;
        search: string | string[];
        replace: string | string[];
        options: MapOptions;
    }

    interface ConfigOptions {
        /**
         * An object map of property-name Aliases,
         * where keys are variable names and values are property names.
         * e.g. {"aliases": {"--small-padding": "padding"}}
         */
        aliases?: Record<string, string> | undefined;
        /**
         * Applies to CSS rules containing no directional properties,
         * it will update the selector by applying String Map.
         */
        autoRename?: boolean | undefined;
        /**
         * Ensures autoRename is applied only if pair exists.
         */
        autoRenameStrict?: boolean | undefined;
        /**
         * An object map of disabled plugins directives,
         * where keys are plugin names and value are object
         * hash of disabled directives. e.g. {'rtlcss':{'config':true}}.
         */
        blacklist?:
            | {
                [pluginName: string]: Record<string, unknown>;
            }
            | undefined;
        /**
         * Removes directives comments from output CSS.
         */
        clean?: boolean | undefined;
        /**
         * Fallback value for String Map options.
         */
        greedy?: boolean | undefined;
        /**
         * Applies String Map to URLs. You can also target specific node types using an object literal.
         * e.g. {'atrule': true, 'decl': false}.
         */
        processUrls?:
            | boolean
            | {
                [key: string]: boolean;
            }
            | undefined;
        /**
         * The default array of String Map.
         */
        stringMap?: StringMap[] | undefined;
        /**
         * When enabled, flips background-position expressed in length units using calc.
         */
        useCalc?: boolean | undefined;
        /**
         * When disabled, prevents flipping agent-defined environment variables
         * safe-area-inset-left, safe-area-inset-right.
         */
        processEnv?: boolean | undefined;
    }

    interface HookOptions {
        /**
         * The function to be called before processing the CSS.
         */
        pre?: Hook | undefined;
        /**
         * The function to be called after processing the CSS.
         */
        post?: Hook | undefined;
    }

    interface Plugin {
        name: string;
        [key: string]: unknown;
    }

    interface ConfigureOptions {
        options?: ConfigOptions | undefined;
        plugins?: Plugin[] | undefined;
        hooks?: HookOptions | undefined;
    }

    /**
     * Hooks provides you with the ability to manipulate the css before/after it is processed,
     */
    interface Hook {
        (root: Root, postcss: Postcss): void;
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
        process(css: string, options?: ConfigOptions, plugins?: Plugin[], hooks?: HookOptions): string;

        /**
         * Creates a new instance of RTLCSS using the passed configuration object
         * @param config  An object containing RTLCSS options, plugins and hooks.
         * @returns A new RTLCSS instance.
         */
        configure(config: ConfigureOptions): Processor;
    }

    type RtlCss = PluginCreator<ConfigOptions> & ExportedAPI;
}

/**
 * RTLCSS is a framework for converting Left-To-Right (LTR) Cascading Style Sheets(CSS) to Right-To-Left (RTL).
 */
declare const rtlcss: rtlcss.RtlCss;
export = rtlcss;
