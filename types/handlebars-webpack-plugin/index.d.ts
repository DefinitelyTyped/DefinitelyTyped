import { HelperDeclareSpec } from "handlebars";
import { Options } from "html-webpack-plugin";
import { Compiler, WebpackPluginInstance } from "webpack";

import HtmlWebpackPlugin = require("html-webpack-plugin");

declare class HandlebarsWebpackPlugin implements WebpackPluginInstance {
    constructor(options?: HandlebarsWebpackPlugin.PluginOptions);

    /**
     * Apply the plugin
     */
    apply(compiler: Compiler): void;
}

declare namespace HandlebarsWebpackPlugin {
    /**
     * Type for the object partials that the plugin creates in other to process all partials
     */
    interface PartialsMap {
        [partial: string]: string;
    }

    /**
     * Handlebars Webpack Plugin Options
     */
    interface PluginOptions {
        /**
         * Path to hbs entry file(s).
         * Also supports nested directories if write
         * path.join(process.cwd(), "app", "src", "**", "*.hbs"),
         */
        entry?: string | undefined;

        /**
         * Output path and filename(s).
         * This should lie within the webpacks output-folder
         * if omitted, the input filepath stripped of its extension will be used
         */
        output?: string | undefined;

        /**
         * You can also add a [path] variable, which will emit the files with their
         * relative path, like output:
         * path.join(process.cwd(), "build", [path], "[name].html
         *
         * data passed to main hbs template: `main-template(data)`
         */
        data?: object | string | undefined;

        /**
         * globbed path to partials, where folder/filename is unique
         */
        partials?: string[] | undefined;

        /**
         * Register custom helpers. May be either a function or a glob-pattern
         */
        helpers?: HelperDeclareSpec | { projectHelpers: string } | undefined;

        /**
         * Modify the default output path of each entry-template
         */
        getTargetFilepath?:
            | ((filepath: string, outputTemplate: string, rootFolder: string) => string | undefined)
            | undefined;

        /**
         * Modify the hbs partial-id created for a loaded partial
         */
        getPartialId?: ((filePath: string) => string | undefined) | undefined;

        /**
         * onBeforeSetup hook, runs before setup of the plugin
         */
        onBeforeSetup?: ((Handlebars: RuntimeOptions) => any) | undefined;

        /**
         * onBeforeAddPartials hook, runs before the partials addition to the .html files
         */
        onBeforeAddPartials?: ((Handlebars: RuntimeOptions, partialsMap: PartialsMap) => any) | undefined;

        /**
         * onBeforeCompile hook, runs before the plugin compilation
         */
        onBeforeCompile?: ((Handlebars: RuntimeOptions, templateContent: string) => any) | undefined;

        /**
         * onBeforeRender hook, runs before rendering of the templates
         */
        onBeforeRender?: ((Handlebars: RuntimeOptions, data: object, filename: string) => any) | undefined;

        /**
         * onBeforeSave hook, runs before saving
         */
        onBeforeSave?: ((Handlebars: RuntimeOptions, resultHtml: string, filename: string) => any) | undefined;

        /**
         * onDone, runs before the final stages of the plugin
         */
        onDone?: ((Handlebars: RuntimeOptions, filename: string) => any) | undefined;

        /**
         * HtmlWebpackPlugin additional configurations
         */
        htmlWebpackPlugin?: Options | HtmlWebpackPlugin | undefined;
    }
}

export = HandlebarsWebpackPlugin;
