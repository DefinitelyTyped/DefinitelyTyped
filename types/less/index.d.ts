export as namespace Less;

declare var Less: LessStatic;
export = Less;

declare namespace Less {
    // https://github.com/less/less.js/blob/master/lib/less/import-manager.js#L10
    interface RootFileInfo {
        /** whether to adjust URL's to be relative */
        rewriteUrls?: "all" | "local" | "off" | boolean | undefined;
        /** full resolved filename of current file */
        filename: string;
        relativeUrls: boolean;
        /** path to append to normal URLs for this node */
        rootpath: string;
        /** path to the current file, absolute */
        currentDirectory: string;
        /** absolute path to the entry file */
        entryPath: string;
        /** filename of the base file */
        rootFilename: string;
        /** whether the file should not be output and only output parts that are referenced */
        reference: boolean;
        /** whether to use the file cache */
        useFileCache?: boolean | undefined;
    }

    interface Plugin {
        install: (less: LessStatic, pluginManager: PluginManager) => void;
        minVersion?: [number, number, number] | undefined;
    }

    interface PreProcessor {
        process: (src: string, extra: PreProcessorExtraInfo) => string;
    }

    interface PreProcessorExtraInfo {
        context: {
            pluginManager: PluginManager;
        };

        fileInfo: RootFileInfo;

        imports: {
            [key: string]: any;
        };
    }

    interface FileLoadResult {
        /** Full resolved path to file. */
        filename: string;

        /** The contents of the file, as a string. */
        contents: string;
    }

    interface FileLoadError {
        /** Error object if an error occurs. */
        error: unknown;
    }

    interface LoadFileOptions {
        paths?: string[] | undefined;
        prefixes?: string[] | undefined;
        ext?: string | undefined;
        rawBuffer?: any;
        syncImport?: boolean | undefined;
    }

    interface Environment {
        /**
         * Converts a string to a base 64 string
         */
        encodeBase64(str: string): string;

        /**
         * Lookup the mime-type of a filename
         */
        mimeLookup(filename: string): string;

        /**
         * Look up the charset of a mime type
         */
        charsetLookup(mime: string): string;

        /**
         * Gets a source map generator
         */
        getSourceMapGenerator(): any;
    }

    interface SourceMapOption {
        sourceMapURL?: string | undefined;
        sourceMapBasepath?: string | undefined;
        sourceMapRootpath?: string | undefined;
        outputSourceFiles?: boolean | undefined;
        sourceMapFileInline?: boolean | undefined;
    }

    interface StaticOptions {
        async: boolean;
        fileAsync: boolean;
        modifyVars: { [variable: string]: string };
    }

    interface ImportManager {
        contents: { [fileName: string]: string };
    }

    /**
     * Reference to:
     * * https://github.com/less/less.js/blob/master/bin/lessc
     * * http://lesscss.org/usage/#less-options
     *
     * @interface Options
     */
    interface Options {
        sourceMap?: SourceMapOption | undefined;
        /** Filename of the main file to be passed to less.render() */
        filename?: string | undefined;
        /** The locations for less looking for files in @import rules */
        paths?: string[] | undefined;
        /** True, if run the less parser and just reports errors without any output. */
        lint?: boolean | undefined;
        /** Pre-load global Less.js plugins */
        plugins?: Plugin[] | undefined;
        /** @deprecated If true, compress using less built-in compression. */
        compress?: boolean | undefined;
        strictImports?: boolean | undefined;
        /** If true, allow imports from insecure https hosts. */
        insecure?: boolean | undefined;
        depends?: boolean | undefined;
        maxLineLen?: number | undefined;
        /** @deprecated If false, No color in compiling. */
        color?: boolean | undefined;
        /** @deprecated If true, enable evaluation of JavaScript inline in `.less` files. */
        javascriptEnabled?: boolean | undefined;
        /** Whether output file information and line numbers in compiled CSS code. */
        dumpLineNumbers?: "comment" | string | undefined;
        /** Add a path to every generated import and url in output css files. */
        rootpath?: string | undefined;
        /** Math mode options for avoiding symbol conflicts on math expressions. */
        math?: "always" | "strict" | "parens-division" | "parens" | "strict-legacy" | number | undefined;
        /** If true, stops any warnings from being shown. */
        silent?: boolean | undefined;
        /** Without this option, Less attempts to guess at the output unit when it does maths. */
        strictUnits?: boolean | undefined;
        /** Defines a variable that can be referenced by the file. */
        globalVars?: {
            [key: string]: string;
        } | undefined;
        /** Puts Var declaration at the end of base file. */
        modifyVars?: {
            [key: string]: string;
        } | undefined;
        /** Read files synchronously in Node.js */
        syncImport?: boolean | undefined;
        /** Adds params into url tokens (e.g. 42, cb=42 or 'a=1&b=2') */
        urlArgs?: string | undefined;
        /** Disallow @plugin statements */
        disablePluginRule?: boolean | undefined;
        /** @deprecated Legacy parens-only math. Use "math" option */
        strictMath?: boolean | undefined;
    }

    interface RenderError {
        column: number;
        extract: string[];
        filename: string;
        index: number;
        line: number;
        message: string;
        type: string;
    }

    interface RenderOutput {
        css: string;
        map: string;
        imports: string[];
    }

    interface RefreshOutput {
        endTime: Date;
        startTime: Date;
        sheets: number;
        totalMilliseconds: number;
    }
}
interface LessStatic {
    options: Less.StaticOptions;

    importManager?: Less.ImportManager | undefined;
    sheets: HTMLLinkElement[];

    modifyVars(vars: { [name: string]: string }): Promise<Less.RefreshOutput>;

    refreshStyles(): void;

    render(input: string, callback: (error: Less.RenderError, output: Less.RenderOutput | undefined) => void): void;
    render(
        input: string,
        options: Less.Options,
        callback: (error: Less.RenderError, output: Less.RenderOutput | undefined) => void,
    ): void;

    render(input: string): Promise<Less.RenderOutput>;
    render(input: string, options: Less.Options): Promise<Less.RenderOutput>;

    refresh(
        reload?: boolean,
        modifyVars?: { [variable: string]: string },
        clearFileCache?: boolean,
    ): Promise<Less.RefreshOutput>;

    version: number[];

    watch(): void;

    FileManager: typeof FileManager;
    PluginManager: typeof PluginManager;
}

declare class PluginManager {
    constructor(less: LessStatic);

    addPreProcessor(preProcessor: Less.PreProcessor, priority?: number): void;

    addFileManager(fileManager: FileManager): void;
}

declare class FileManager extends AbstractFileManager {
    /**
     * Returns whether this file manager supports this file for file retrieval
     * If true is returned, loadFile will then be called with the file.
     */
    supports(
        filename: string,
        currentDirectory: string,
        options: Less.LoadFileOptions,
        environment: Less.Environment,
    ): boolean;

    /**
     * Loads a file asynchronously. Expects a promise that either rejects with an error or fulfills with a FileLoadResult.
     */
    loadFile(
        filename: string,
        currentDirectory: string,
        options: Less.LoadFileOptions,
        environment: Less.Environment,
    ): Promise<Less.FileLoadResult>;

    /**
     * Loads a file synchronously. Expects an immediate return with wither a FileLoadResult or FileLoadError.
     */
    loadFileSync(
        filename: string,
        currentDirectory: string,
        options: Less.LoadFileOptions,
        environment: Less.Environment,
    ): Less.FileLoadResult | Less.FileLoadError;
}

declare class AbstractFileManager {
    /**
     * Given the full path to a file, return the path component.
     */
    getPath(filename: string): string;

    /**
     * Append a .less extension if appropriate. Only called if less thinks one could be added.
     */
    tryAppendLessExtension(filename: string): string;

    /**
     * Whether the rootpath should be converted to be absolute.
     * The browser overrides this to return true because urls must be absolute.
     */
    alwaysMakePathsAbsolute(): boolean;

    /**
     * Returns whether a path is absolute.
     */
    isPathAbsolute(path: string): boolean;

    /**
     * Joins together 2 paths.
     */
    join(basePath: string, laterPath: string): string;

    /**
     * Returns the difference between 2 paths
     * E.g. url = a/ baseUrl = a/b/ returns ../
     * url = a/b/ baseUrl = a/ returns b/
     */
    pathDiff(url: string, baseUrl: string): string;

    /**
     * Returns whether this file manager supports this file for synchronous file retrieval
     * If true is returned, loadFileSync will then be called with the file.
     */
    supportsSync(
        filename: string,
        currentDirectory: string,
        options: Less.LoadFileOptions,
        environment: Less.Environment,
    ): boolean;
}
