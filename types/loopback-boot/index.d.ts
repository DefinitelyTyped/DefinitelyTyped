/************************************************
 *                                               *
 *               LoopBack-Boot v2.x API          *
 *                                               *
 ************************************************/

import * as loopback from "loopback";

/**
 * Use this API in the app.js file of your server-side Node.js application.
 * ```
 * var loopback= require('loopback');
 * var boot = require('loopback-boot');
 *
 * var app = module.exports = loopback();
 *
 * boot(app, __dirname);
 *
 * ```
 *
 * Initialize an application from an options object or a set of JSON and JavaScript files.
 *
 * NOTE: This module is primarily intended for use with LoopBack 2.0. It does work with LoopBack 1.x applications,
 * but none of the LoopBack 1.x examples or generated code (scaffolding) use it.
 *
 * This function takes an optional argument that is either a string or an object.
 *
 * If the argument is a string, then it sets the application root directory based on the string value. Then it:
 *    Creates DataSources from the datasources.json file in the application root directory.
 *
 *    Configures Models from the model-config.json file in the application root directory.
 *
 *    Configures the LoopBack Application object from the config.json file in the application root directory.
 * These properties can be accessed using app.get('propname').
 *
 *    If the argument is an object, then it looks for models, dataSources, 'config', modelsRootDir, dsRootDir,
 *  appConfigRootDir and appRootDir properties of the object.
 *
 * If the object has no appRootDir property then it sets the current working directory as the application root directory.
 *
 * The execution environment, {env}, is established from, in order,
 *
 * options.env
 * process.env.NODE_ENV,
 * the literal development.
 * Then it:
 * Creates DataSources from the options.dataSources object, if provided; otherwise, it searches for the files
 * datasources.json,
 * datasources.local.js or datasources.local.json (only one),
 * datasources.{env}.js or datasources.{env}.json (only one)
 * in the directory designated by 'options.dsRootDir', if present, or the application root directory. It merges the data source definitions from the files found.
 * Creates Models from the options.models object, if provided; otherwise, it searches for the files
 * model-config.json,
 * model-config.local.js or model-config.local.json (only one),
 * model-config.{env}.js or model-config.{env}.json (only one)
 * in the directory designated by 'options.modelsRootDir', if present, or the application root directory. It merges the model definitions from the files found.
 * Configures the Application object from the options.config object, if provided; otherwise, it searches for the files
 * config.json,
 * config.local.js or config.local.json (only one),
 * config.{env}.js or config.{env}.json (only one)
 *
 * in the directory designated by 'options.appConfigRootDir', if present, or the application root directory.
 *  It merges the properties from the files found.
 *
 * In both cases, the function loads JavaScript files in the /boot subdirectory of the application root directory
 * with require().
 *
 * NOTE: The version 2.0 of loopback-boot changed the way how models are created.
 *  The model-config.json file contains only configuration options like dataSource and extra relations.
 * To define a model, create a per-model JSON file in models/ directory.
 *
 * NOTE: Mixing bootLoopBackApp(app, bootConfig) and app.model(name, modelConfig) in multiple files may result in models being undefined due to race conditions.
 * To avoid this when using bootLoopBackApp() make sure all models are passed as part of the models definition.
 * Throws an error if the config object is not valid or if boot fails.
 *
 * @param app LoopBack application created by loopback().
 * @param options Boot options; If String, this is the application root directory; if object, has below properties.
 */

declare function lb(
    app: loopback.LoopBackApplication,
    options: string | OptionsLB,
    callback?: (err: Error) => void,
): void;

interface OptionsLB {
    /**
     * Directory to use when loading JSON and JavaScript files.
     * Defaults to the current directory (process.cwd()).
     */
    appRootDir: string;

    /**
     * Directory to use when loading config.json. Defaults to appRootDir.
     */
    appConfigRootDir: string;

    /**
     * Object containing Model configurations.
     */
    models: any;

    /**
     * List of model definitions to use. When options.modelDefinitions is provided,
     * loopback-boot does not search filesystem and use only the models provided in this argument.
     */
    modelDefinitions: any[];

    /**
     * Object containing DataSource definitions.
     */
    dataSources: any;

    /**
     * Directory to use when loading model-config.json. Defaults to appRootDir.
     */
    modelsRootDir: string;

    /**
     * Directory to use when loading datasources.json. Defaults to appRootDir.
     */
    dsRootDir: string;

    /**
     * Directory to use when loading middleware.json. Defaults to appRootDir.
     */
    middlewareRootDir: string;

    /**
     * Directory to use when loading component-config.json. Defaults to appRootDir.
     */
    componentRootDir: string;

    /**
     * Environment type, defaults to process.env.NODE_ENV or development.
     * Common values are development, staging and production;
     * however the applications are free to use any names.
     */
    env: string;

    /**
     * List of directories where to look for files containing model definitions.
     */
    modelSources: string[];

    /**
     * Middleware configuration to use instead of {appRootDir}/middleware.json
     */
    middleware: any;

    /**
     * Component configuration to use instead of {appRootDir}/component-config.json
     */
    components: any;

    /**
     * List of directories where to look for files containing model mixin definitions.
     * All files (mixins) found in these directory are loaded.
     */
    mixinDirs: string[];

    /**
     * List of directories where to look for files containing model mixin definitions.
     *  Only mixins used by application models are loaded from these directories.
     */
    mixinSources: string[];

    /**
     * List of directories where to look for boot scripts.
     */
    bootDirs: string[];

    /**
     * List of script files to execute on boot.
     */
    bootScripts: string[];

    /**
     * Mixin normalization format: false, 'none', 'classify', 'dasherize' - defaults to 'classify'.
     */
    normalization: string | boolean | any;
}

declare namespace lb {
    /**
     * compileToBrowserify
     *
     * Compile boot instructions and add them to a browserify bundler.
     * @param options as described in bootLoopBackApp above.
     * @param bundler A browserify bundler created by browserify().
     */
    class compileToBrowserify {
        /**
         * Application identifier used to load the correct boot configuration when
         * building multiple applications using browserify.
         */
        appId: string;
        constructor(options: string | any, bundler: any);
    }
}

export = lb;
