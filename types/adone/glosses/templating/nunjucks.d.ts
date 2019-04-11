declare namespace adone.templating {
    namespace nunjucks {
        namespace I {
            interface EnvironmentOptions {
                dev?: boolean;
                autoescape?: boolean;
                throOnUndefined?: boolean;
                trimBlocks?: boolean;
                lstripBlocks?: boolean;
            }

            interface FileSystemLoaderOptions {
                watch?: boolean;
                noCache?: boolean;
            }

            type ConfigureOptions = EnvironmentOptions & FileSystemLoaderOptions & {
                tags?: {
                    blockStart?: string,
                    blockEnd?: string,
                    variableStart?: string,
                    variableEnd?: string,
                    commentStart?: string,
                    commentEnd?: string
                };
            };

            interface PrecompileOptions {
                name?: string;
                asFunction?: boolean;
                force?: boolean;
                env?: Environment;
                include?: string[];
                exclude?: string[];
                wrapper?(templates: { name: string, template: string }, opts: PrecompileOptions): string;
            }

            interface Extension {
                tags: string[];
                parse(parser: any, nodes: any, lexer: any): any;
            }

            interface LoaderSource {
                src: string;
                path: string;
                noCache: boolean;
            }

            interface Loader {
                async?: boolean;
                getSource(name: string): LoaderSource;
                extend?(extender: Loader): Loader;
            }
        }

        class Environment {
            options: {
                autoescape: boolean;
            };

            constructor(loader?: I.Loader | I.Loader[] | null, opts?: I.EnvironmentOptions);
            render(name: string, context?: object): string;
            render(name: string, context?: object, callback?: (err: any, res: string) => any): void;

            renderString(name: string, context?: object): string;
            renderString(name: string, context?: object, callback?: (err: any, res: string) => any): void;

            addFilter(name: string, func: (...args: any[]) => any, async?: boolean): void;
            getFilter(name: string): (...args: any[]) => any;

            addExtension(name: string, ext: I.Extension): void;
            removeExtension(name: string): void;
            getExtension(name: string): I.Extension;
            hasExtension(name: string): boolean;

            addGlobal(name: string, value: any): this;

            getTemplate(name: string, eagerCompile?: boolean): Template;
            getTemplate(name: string, eagerCompile?: boolean, callback?: (err: any, templ: Template) => Template): void;

            express(app: object): void;
        }

        class Template {
            constructor(src: string, env?: Environment, eagerCompile?: boolean);
            render(context?: object): string;
            render(context?: object, callback?: (err: any, res: string) => any): void;
        }

        class Loader {
            on(name: string, func: (...args: any[]) => any): void;
            emit(name: string, ...args: any[]): void;
            resolve(from: string, to: string): string;
            isRelative(filename: string): boolean;
            extend(toExtend: I.Loader): I.Loader;
        }

        class FileSystemLoader extends Loader implements I.Loader {
            constructor(searchPaths?: string | string[], opts?: I.FileSystemLoaderOptions);

            getSource(name: string): I.LoaderSource;
        }

        class PrecompiledLoader extends Loader implements I.Loader {
            getSource(name: string): I.LoaderSource;
        }

        function renderSync(name: string, context?: object): string;
        function render(name: string, context?: object): Promise<string>;

        function renderString(src: string, context?: object): Promise<string>;
        function renderStringSync(src: string, context?: object): string;

        function compile(src: string, env?: Environment, path?: string, eagerCompile?: boolean): Template;

        function configure(options?: I.ConfigureOptions): Environment;
        function configure(path: string | string[], options?: I.ConfigureOptions): Environment;

        function installJinjaCompat(): void;
    }
}
