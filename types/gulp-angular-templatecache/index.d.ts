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
            filename?: string | undefined;

            /**
             * Prefix for template URLs.
             */
            root?: string | undefined;

            /**
             * Name of AngularJS module.
             */
            module?: string | undefined;

            /**
             * Create a new AngularJS module, instead of using an existing.
             */
            standalone?: boolean | undefined;

            /**
             * Override file base path.
             */
            base?: string | Function | undefined;

            /**
             * Wrap the templateCache in a module system. Currently supported systems: RequireJS, Browserify, ES6 and IIFE (Immediately-Invoked Function Expression).
             */
            moduleSystem?: string | undefined;

            /**
             * Transform the generated URL before it's put into $templateCache.
             */
            transformUrl?: Function | undefined;

            /**
             * Override template header.
             */
            templateHeader?: string | undefined;

            /**
             * Override template body.
             */
            templateBody?: string | undefined;

            /**
             * Override template footer.
             */
            templateFooter?: string | undefined;
        }
    }

    export = templatecache;
}
