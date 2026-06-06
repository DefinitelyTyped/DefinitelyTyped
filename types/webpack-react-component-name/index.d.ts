import { Compiler, WebpackPluginInstance } from "webpack";

declare namespace WebpackReactComponentNamePlugin {
    /**
     * If the item is a string, it will use standard glob syntax. If the item is a Regular Expression, the path will be tested against it.
     * If the item is a function, the path will be passed into it for testing.
     */
    type PathMatch = string | RegExp | ((path: string) => boolean);

    interface Options {
        /**
         * If set true, the plugin will name the components exported from node_modules
         * @defaultValue false
         */
        parseDependencies?: boolean;

        /**
         * If the path matches any of the elements in this array, it will be included if it isn't explicitly excluded
         * @defaultValue []
         */
        include?: readonly PathMatch[];

        /**
         * If the path matches any of the elements in this array, it will be excluded
         * @defaultValue []
         */
        exclude?: readonly PathMatch[];
    }
}

/** Normally React component names are minified during compilation. This plugin makes these component names available through the `displayName` property in production bundles */
declare class WebpackReactComponentNamePlugin implements WebpackPluginInstance {
    constructor(options?: WebpackReactComponentNamePlugin.Options);

    /**
     * The run point of the plugin, required method.
     */
    apply: (compiler: Compiler) => void;
}

export = WebpackReactComponentNamePlugin;
