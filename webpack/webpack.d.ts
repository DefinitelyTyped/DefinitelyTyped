// Type definitions for webpack
// Project: https://github.com/webpack/webpack
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "webpack" {
    namespace webpack {
        interface Configuration {
            entry?: string|Entry;
            output?: Output;
            module?: Module;
            plugins?: (Plugin|Function)[];
        }

        interface Entry {
            [name: string]: string|string[];
        }

        interface Output {
            path?: string;
            filename?: string;
            chunkFilename?: string;
            publicPath?: string;
        }

        interface Module {
            loaders?: Loader[];
        }

        interface Loader {
            test: RegExp;
            loader?: string;
            loaders?: string[];
            query?: {
                [name: string]: any;
            }
        }

        interface Plugin {
        }

        interface ResolverPlugin extends Plugin {
        }

        interface ResolverPluginStatic {
            new(plugins: Plugin[], files: string[]): ResolverPlugin;
            DirectoryDescriptionFilePlugin: DirectoryDescriptionFilePluginStatic;
        }

        interface DirectoryDescriptionFilePlugin extends Plugin {
        }

        interface DirectoryDescriptionFilePluginStatic {
            new(file: string, files: string[]): DirectoryDescriptionFilePlugin;
        }

        interface Webpack {
            ResolverPlugin: ResolverPluginStatic;
            optimize: Optimize;
        }

        interface Optimize {
            CommonsChunkPlugin: CommonsChunkPluginStatic;
        }

        interface CommonsChunkPlugin {
        }

        interface CommonsChunkPluginStatic {
            new(chunkName: string, filenames?: string|string[]): CommonsChunkPlugin;
        }

        interface UglifyJsPlugin {

        }

        interface DedupePlugin {

        }
    }

    var webpack: webpack.Webpack;

    export default webpack;
    //export = webpack;
}

