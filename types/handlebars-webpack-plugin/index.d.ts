// Type definitions for handlebars-webpack-plugin 2.2
// Project: https://github.com/sagold/handlebars-webpack-plugin
// Definitions by: odas0R <https://github.com/Odas0R>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Compiler, WebpackPluginInstance } from 'webpack';
import { HelperDeclareSpec } from 'handlebars';
import { Options } from 'html-webpack-plugin';

import HtmlWebpackPlugin = require('html-webpack-plugin');

declare class HandlebarsPlugin implements WebpackPluginInstance {
    constructor(options?: HandlebarsPlugin.PluginOptions);

    /**
     * Apply the plugin
     */
    apply(compiler: Compiler): void;
}

declare namespace HandlebarsPlugin {
    /**
     * Type for Handlebars helpers object
     */
    type Helpers = HelperDeclareSpec | { projectHelpers: string };

    /**
     * Type for HtmlWebpackPlugin Options
     */
    type HtmlWebpackOptions = Options | HtmlWebpackPlugin;

    /**
     * Type for the object partials that the plugin creates in other to process all partials
     */
    type PartialsMap = { [partial: string]: string };

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
        helpers?: Helpers;

        /**
         * Modify the default output path of each entry-template
         * @param {String} filepath     - the source of the template
         * @param {String} outputTemplate - the filepath template defined in `output`
         * @param {String} rootFolder   - the filepaths rootFolder
         * @return {String} final path, where the rendered html-file should be saved
         */
        getTargetFilepath?: (filepath: string, outputTemplate: string, rootFolder: string) => string | undefined;

        /**
         * Modify the hbs partial-id created for a loaded partial
         * @param {String} filePath   - filePath to the loaded partial
         * @return {String} hbs-partialId, per default folder/partialName is used
         */
        getPartialId?: (filePath: string) => string | undefined;

        /**
         * onBeforeSetup hook, runs before setup of the plugin
         * @param {RuntimeOptions} Handlebars - runtime handlebar options
         */
        onBeforeSetup?: (Handlebars: RuntimeOptions) => any;

        /**
         * onBeforeAddPartials hook, runs before the partials addition to the .html files
         * @param {RuntimeOptions} Handlebars - runtime handlebar options
         * @param {PartialsMap} partialsMap - project partials
         */
        onBeforeAddPartials?: (Handlebars: RuntimeOptions, partialsMap: PartialsMap) => any;

        /**
         * onBeforeCompile hook, runs before the plugin compilation
         * @param {RuntimeOptions} Handlebars - runtime handlebar options
         * @param {String} templateContent - html of the template
         */
        onBeforeCompile?: (Handlebars: RuntimeOptions, templateContent: string) => any;

        /**
         * onBeforeRender hook, runs before rendering of the templates
         * @param {RuntimeOptions} Handlebars - runtime handlebar options
         * @param {Object} data - data passed to the template
         * @param {String} filename - name of the file
         */
        onBeforeRender?: (Handlebars: RuntimeOptions, data: object, filename: string) => any;

        /**
         * onBeforeSave hook, runs before saving
         * @param {RuntimeOptions} Handlebars - runtime handlebar options
         * @param {String} resultHtml - the result html
         * @param {String} filename - name of the file
         */
        onBeforeSave?: (Handlebars: RuntimeOptions, resultHtml: string, filename: string) => any;

        /**
         * onDone, runs before the final stages of the plugin
         * @param {RuntimeOptions} Handlebars - runtime handlebar options
         * @param {String} filename - name of the file
         */
        onDone?: (Handlebars: RuntimeOptions, filename: string) => any;

        /**
         * HtmlWebpackPlugin additional configurations
         */
        htmlWebpackPlugin?: HtmlWebpackOptions;
    }
}

export = HandlebarsPlugin;
