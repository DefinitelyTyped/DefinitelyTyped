// Type definitions for sandboxed-module v2.0.3
// Project: https://github.com/felixge/node-sandboxed-module
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "sandboxed-module" {

    interface SandboxOptions {
        /**
         * An object containing moduleIds and the values to inject for them when required by the sandboxed module.
         * This does not affect children of the sandboxed module.
         */
        requires?: Object;
        /**
         * An object of global variables to inject into the sandboxed module.
         */
        globals?: Object;
        /**
         * An object of local variables to inject into the sandboxed module.
         */
        locals?: Object;
        /**
         * An object of named functions which will transform the source code required with SandboxedModule.require.
         * For example, CoffeeScript & istanbul support is implemented with built-in sourceTransformer functions
         * (see #registerBuiltInSourceTransformer).
         *
         * A source transformer receives the source (as it's been transformed thus far) and must return the transformed
         * source (whether it's changed or unchanged).
         *
         * An example source transformer to change all instances of the number "3" to "5" would look like this:
         *
         * SandboxedModule.require('../fixture/baz', {
         *   sourceTransformers: {
         *     turn3sInto5s: function(source) {
         *       return source.replace(/3/g,'5');
         *     }
         *   }
         * })
         */
        sourceTransformers?: Object;
        /**
         * If false, modules that are required by the sandboxed module will not be sandboxed. By default all modules
         * required by the sandboxedModule will be sandboxed using the same options that were used for the original
         * sandboxed module.
         */
        singleOnly?: boolean;
        /**
         * If false, the source transformers will not be run against modules required by the sandboxed module.
         * By default it will take the same value as {@link SandboxOptions.singleOnly}.
         */
        sourceTransformersSingleOnly?: boolean;
    }

    class SandboxedModule {
        /**
         * See {@link SandboxOptions.requires}
         */
        required:Object;
        /**
         * See {@link SandboxOptions.globals}
         */
        globals:Object;
        /**
         * See {@link SandboxOptions.locals}
         */
        locals:Object;
        /**
         * See {@link SandboxOptions.sourceTransformers}.
         */
        sourceTransformers:Object;
        /**
         * The full path to the module.
         */
        filename:string;
        /**
         * The underlaying node.js Module instance.
         */
        module:string;
        /**
         * A getter returning the sandboxedModule.module.exports object.
         */
        exports:any;
        /**
         * Returns a new SandboxedModule where moduleId is a regular module path / id as you would normally pass into
         * require(). The new module will be loaded in its own v8 context, but otherwise have access to the normal
         * node.js environment.
         *
         * @param moduleId the ID of the module to load
         * @param options the loading options
         */
        static load(moduleId:string, options?:SandboxOptions):SandboxedModule

        /**
         * Identical to {@link SandboxedModule.load()}, but returns sandboxedModule.exports directly.
         *
         * @param moduleId the ID of the module to require
         * @param options the requiring options
         */
        static require(moduleId:string, options?:SandboxOptions):any
    }

    export = SandboxedModule;
}
