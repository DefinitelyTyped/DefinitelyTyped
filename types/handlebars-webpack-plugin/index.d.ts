// Type definitions for handlebars-webpack-plugin 2.2
// Project: https://github.com/sagold/handlebars-webpack-plugin
// Definitions by: odas0R <https://github.com/Odas0R>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
// Minimum TypeScript Version: 3.7

import { Compiler, WebpackPluginInstance } from 'webpack';
import { HelperDeclareSpec } from 'handlebars';
import { Options } from 'html-webpack-plugin';

import HtmlWebpackPlugin = require('html-webpack-plugin');

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
        entry?: string;

        /**
         * Output path and filename(s).
         * This should lie within the webpacks output-folder
         * if omitted, the input filepath stripped of its extension will be used
         */
        output?: string;

        /**
         * You can also add a [path] variable, which will emit the files with their
         * relative path, like output:
         * path.join(process.cwd(), "build", [path], "[name].html
         *
         * data passed to main hbs template: `main-template(data)`
         */
        data?: object | string;

        /**
         * globbed path to partials, where folder/filename is unique
         */
        partials?: string[];

        /**
         * Register custom helpers. May be either a function or a glob-pattern
         */
        helpers?: HelperDeclareSpec | { projectHelpers: string };

        /**
         * Modify the default output path of each entry-template
         */
        getTargetFilepath?: (filepath: string, outputTemplate: string, rootFolder: string) => string | undefined;

        /**
         * Modify the hbs partial-id created for a loaded partial
         */
        getPartialId?: (filePath: string) => string | undefined;

        /**
         * onBeforeSetup hook, runs before setup of the plugin
         */
        onBeforeSetup?: (Handlebars: RuntimeOptions) => any;

        /**
         * onBeforeAddPartials hook, runs before the partials addition to the .html files
         */
        onBeforeAddPartials?: (Handlebars: RuntimeOptions, partialsMap: PartialsMap) => any;

        /**
         * onBeforeCompile hook, runs before the plugin compilation
         */
        onBeforeCompile?: (Handlebars: RuntimeOptions, templateContent: string) => any;

        /**
         * onBeforeRender hook, runs before rendering of the templates
         */
        onBeforeRender?: (Handlebars: RuntimeOptions, data: object, filename: string) => any;

        /**
         * onBeforeSave hook, runs before saving
         */
        onBeforeSave?: (Handlebars: RuntimeOptions, resultHtml: string, filename: string) => any;

        /**
         * onDone, runs before the final stages of the plugin
         */
        onDone?: (Handlebars: RuntimeOptions, filename: string) => any;

        /**
         * HtmlWebpackPlugin additional configurations
         */
        htmlWebpackPlugin?: Options | HtmlWebpackPlugin;
    }
}

export = HandlebarsWebpackPlugin;
