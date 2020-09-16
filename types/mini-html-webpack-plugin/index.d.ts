// Type definitions for mini-html-webpack-plugin 2.2
// Project: https://github.com/styleguidist/mini-html-webpack-plugin
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { compilation, Plugin } from 'webpack';

/**
 * A miniature version of html-webpack-plugin with only necessary features
 * see {@link https://www.npmjs.com/package/mini-html-webpack-plugin}
 */
declare class MiniHtmlWebpackPlugin extends Plugin {
    constructor(options?: MiniHtmlWebpackPlugin.PluginOptions);
    plugin(compilation: compilation.Compilation, callback: () => void): void;
}

declare namespace MiniHtmlWebpackPlugin {
    interface AttributesType {
        [attributeName: string]: string | boolean;
    }

    interface PluginOptions {
        /** Optional, defaults to `index.html` */
        filename?: string;
        publicPath?: string;
        context?: PluginContext;
        /** Optional, use this for choosing chunks to include to your page. */
        chunks?: string[];
        /** define a template function to generate your own code */
        template?: (context: PluginContext) => string | Promise<string>;
    }

    interface PluginContext {
        title?: string;
        /** Optional, defaults to `{ lang: 'en' }` */
        htmlAttributes?: AttributesType;
        /** Optional, any additional HTML attached within <head> */
        head?: string;
        /** Optional, any additional HTML attached within <body> */
        body?: string;
        css?: string[];
        cssAttributes?: AttributesType;
        js?: string[];
        jsAttributes?: AttributesType;
        publicPath?: string;
    }

    type GenerateCSSReferencesOptions = GenerateAttributesOptions & FilesOptions;

    type GenerateJSReferencesOptions = GenerateAttributesOptions & FilesOptions;

    interface FilesOptions {
        files?: string[];
        publicPath?: string;
    }

    interface GenerateAttributesOptions {
        attributes?: AttributesType;
    }

    function defaultTemplate(options?: PluginContext): string;
    function generateAttributes(options?: GenerateAttributesOptions): string;
    function generateCSSReferences(options?: GenerateCSSReferencesOptions): string;
    function generateJSReferences(options?: GenerateJSReferencesOptions): string;
}

export = MiniHtmlWebpackPlugin;
