// Type definitions for LESS 3.x
// Project: http://lesscss.org/
// Definitions by: Tom Hasner <https://github.com/thasner>
//                 Pranay Prakash <https://github.com/pranaygp>
//                 Daniel Waxweiler <https://github.com/dwaxweiler>
//                 Richard Lea <https://github.com/chigix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Less {
    // https://github.com/less/less.js/blob/master/lib/less/import-manager.js#L10
    interface RootFileInfo {
        /** whether to adjust URL's to be relative */
        rewriteUrls?: boolean;
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
    }

    class PluginManager {
        constructor(less: LessStatic);

        addPreProcessor(preProcessor: PreProcessor, priority?: number): void;
    }

    interface Plugin {
        install: (less: LessStatic, pluginManager: PluginManager) => void;
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

    interface SourceMapOption {
        sourceMapURL?: string;
        sourceMapBasepath?: string;
        sourceMapRootpath?: string;
        outputSourceFiles?: boolean;
        sourceMapFileInline?: boolean;
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
        sourceMap?: SourceMapOption;
        /** Filename of the main file to be passed to less.render() */
        filename?: string;
        /** The locations for less looking for files in @import rules */
        paths?: string[];
        /** True, if run the less parser and just reports errors without any output. */
        lint?: boolean;
        /** Pre-load global Less.js plugins */
        plugins?: Plugin[];
        /** @deprecated If true, compress using less built-in compression. */
        compress?: boolean;
        strictImports?: boolean;
        /** If true, allow imports from insecure https hosts. */
        insecure?: boolean;
        depends?: boolean;
        maxLineLen?: number;
        /** @deprecated If false, No color in compiling. */
        color?: boolean;
        /** @deprecated False by default. */
        ieCompat?: boolean;
        /** @deprecated If true, enable evaluation of JavaScript inline in `.less` files. */
        javascriptEnabled?: boolean;
        /** Whether output file information and line numbers in compiled CSS code. */
        dumpLineNumbers?: "comment" | string;
        /** Add a path to every generated import and url in output css files. */
        rootpath?: string;
        /** Math mode options for avoiding symbol conficts on math expressions. */
        math?: 'always' | 'strict' | 'parens-division' | 'parens' | 'strict-legacy' | number;
        /** If true, stops any warnings from being shown. */
        silent?: boolean;
        /** Without this option, Less attempts to guess at the output unit when it does maths. */
        strictUnits?: boolean;
        /** Defines a variable that can be referenced by the file. */
        globalVars?: {
          [key: string] : string,
        };
        /** Puts Var declaration at the end of base file. */
        modifyVars?: {
          [key: string] : string,
        };
        /** Read files synchronously in Node.js */
        syncImport?: boolean;
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

    importManager?: Less.ImportManager;
    sheets: HTMLLinkElement[];

    modifyVars(vars: { [name: string]: string }): Promise<Less.RefreshOutput>;

    refreshStyles(): void;

    render(input: string, callback: (error: Less.RenderError, output: Less.RenderOutput | undefined) => void): void;
    render(input: string, options: Less.Options, callback: (error: Less.RenderError, output: Less.RenderOutput | undefined) => void): void;

    render(input: string): Promise<Less.RenderOutput>;
    render(input: string, options: Less.Options): Promise<Less.RenderOutput>;

    refresh(reload?: boolean, modifyVars?: { [variable: string]: string }, clearFileCache?: boolean): Promise<Less.RefreshOutput>;

    version: number[];

    watch(): void;
}

declare module "less" {
    export = less;
}

declare var less: LessStatic;
