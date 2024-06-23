import { compilation, Plugin } from "webpack";

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
        filename?: string | undefined;
        publicPath?: string | undefined;
        context?: PluginContext | undefined;
        /** Optional, use this for choosing chunks to include to your page. */
        chunks?: string[] | undefined;
        /** define a template function to generate your own code */
        template?: ((context: PluginContext) => string | Promise<string>) | undefined;
    }

    interface PluginContext {
        title?: string | undefined;
        /** Optional, defaults to `{ lang: 'en' }` */
        htmlAttributes?: AttributesType | undefined;
        /** Optional, any additional HTML attached within <head> */
        head?: string | undefined;
        /** Optional, any additional HTML attached within <body> */
        body?: string | undefined;
        css?: string[] | undefined;
        cssAttributes?: AttributesType | undefined;
        js?: string[] | undefined;
        jsAttributes?: AttributesType | undefined;
        publicPath?: string | undefined;
    }

    type GenerateCSSReferencesOptions = GenerateAttributesOptions & FilesOptions;

    type GenerateJSReferencesOptions = GenerateAttributesOptions & FilesOptions;

    interface FilesOptions {
        files?: string[] | undefined;
        publicPath?: string | undefined;
    }

    interface GenerateAttributesOptions {
        attributes?: AttributesType | undefined;
    }

    function defaultTemplate(options?: PluginContext): string;
    function generateAttributes(options?: GenerateAttributesOptions): string;
    function generateCSSReferences(options?: GenerateCSSReferencesOptions): string;
    function generateJSReferences(options?: GenerateJSReferencesOptions): string;
}

export = MiniHtmlWebpackPlugin;
