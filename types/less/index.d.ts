// Type definitions for LESS
// Project: http://lesscss.org/
// Definitions by: Tom Hasner <https://github.com/thasner>
//                 Pranay Prakash <https://github.com/pranaygp>
//                 Daniel Waxweiler <https://github.com/dwaxweiler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Less {
    interface RootFileInfo {
        filename: string;
        relativeUrls: boolean;
        rootpath: string;
        currentDirectory: string;
        entryPath: string;
        rootFilename: string;
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

    interface Options {
        sourceMap?: SourceMapOption;
        filename?: string;
        plugins?: Plugin[];
        rootFileInfo?: RootFileInfo;
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

    render(input: string, callback: (error: Less.RenderError, output: Less.RenderOutput) => void): void;
    render(input: string, options: Less.Options, callback: (error: Less.RenderError, output: Less.RenderOutput) => void): void;

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
