// Type definitions for gulp-angular-templatecache v2.0.0
// Project: https://github.com/miickel/gulp-angular-templatecache
// Definitions by: Aman Mahajan <https://github.com/amanmahajan7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module "gulp-angular-templatecache" {
    function templatecache(): NodeJS.ReadWriteStream;
    function templatecache(filename: string): NodeJS.ReadWriteStream;
    function templatecache(options: templatecache.Options): NodeJS.ReadWriteStream;
    function templatecache(filename: string, options: templatecache.Options): NodeJS.ReadWriteStream;

    namespace templatecache {
        interface Options {
            /**
             * Name to use when concatenating.
             */
            filename?: string;

            /**
             * Prefix for template URLs.
             */
            root?: string;

            /**
             * Name of AngularJS module.
             */
            module?: string;

            /**
             * Create a new AngularJS module, instead of using an existing.
             */
            standalone?: boolean;

            /**
             * Override file base path.
             */
            base?: string | Function;

            /**
             * Wrap the templateCache in a module system. Currently supported systems: RequireJS, Browserify, ES6 and IIFE (Immediately-Invoked Function Expression).
             */
            moduleSystem?: string;

            /**
             * Transform the generated URL before it's put into $templateCache.
             */
            transformUrl?: Function;

            /**
             * Override template header.
             */
            templateHeader?: string;

            /**
             * Override template body.
             */
            templateBody?: string;

            /**
             * Override template footer.
             */
            templateFooter?: string;
        }
    }

    export = templatecache;
}