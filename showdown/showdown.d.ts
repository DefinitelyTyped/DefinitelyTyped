// Type definitions for Showdown 0.3.1
// Project: https://github.com/coreyti/showdown
// Definitions by: cbowdon <https://github.com/cbowdon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Showdown {

    /** Defined for information only - used in union type */
    interface Replace {
        /**
         * This is just the replacer function argument to String.prototype.replace, signature from lib.d.ts
         */
        replace(substring: string, ...args: any[]): string;
    }

    interface Extension {
        /**
         * Describes what type of extension - language ext or output modifier.
         * If absent, 'output modifier' type is assumed (contrary to comments in source).
         */
        type?: string;
    }

    interface LangExtension extends Extension {
        filter? (text: string): string;
    }

    interface OutputModifier extends Extension {
        /** Used to build a Regex */
        regex?: string;
        /** Similar to arg to String.prototype.replace (which is in fact called under the hood) */
        replace?: any; // string | Replace
    }

    /**
     * Defines a plugin/extension
     * Each single extension can be one of two types:
     *
     * + Language Extension -- Language extensions are ones that that add new markdown syntax to showdown. For example, say you wanted ^^youtube http://www.youtube.com/watch?v=oHg5SJYRHA0 to automatically render as an embedded YouTube video, that would be a language extension.
     * + Output Modifiers -- After showdown has run, and generated HTML, an output modifier would change that HTML. For example, say you wanted to change <div class="header"> to be <header>, that would be an output modifier.
     *
     * Each extension can provide two combinations of interfaces for showdown.
     */
    interface ShowdownExtension extends LangExtension, OutputModifier {
    }

    /** Defined for information only - used in union type */
    interface Plugin {
        (converter: Converter): ShowdownExtension[];
    }

    interface ConverterOptions {
        extensions: any[]; // (string | Plugin)[]
    }

    interface Converter {
        /**
         * @param text The input text (markdown)
         * @return The output HTML
         */
        makeHtml(text: string): string;
    }

    interface ConverterStatic {
        /**
         * @constructor
         * @param converter_options Configuration object, describes which extensions to apply
         */
        new(converter_options?: ConverterOptions): Converter;
    }

    /** Constructor function for a Converter */
    var converter: ConverterStatic;

    /** Registered extensions */
    var extensions: { [name: string]: ShowdownExtension };

    /**
     * Showdown defers to the ES5 native or other predefined forEach where available, otherwise simple loop
     * @param obj An array of items
     * @param callback Applied once to each item (signature here is from forEach in lib.d.ts)
     */
    function forEach<T>(obj: T[], callback: (value: T, index: number, array: T[]) => any): void;
}

declare module "showdown" {
    export = Showdown;
}
