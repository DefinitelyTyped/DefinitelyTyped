// Type definitions for LESS
// Project: http://lesscss.org/
// Definitions by: Tom Hasner <https://github.com/thasner>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Less {
    // Promise definitions from ../es6-promise/es6-promise.d.ts
    interface Thenable<R> {
        then<U>(onFulfilled?: (value: R) => U | Thenable<U>,  onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    }

    class Promise<R> implements Thenable<R> {
        constructor(callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);

        then<U>(onFulfilled?: (value: R) => U | Thenable<U>,  onRejected?: (error: any) => U | Thenable<U>): Promise<U>;

        catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>;

        finally<U>(finallyCallback: () => any): Promise<U>;
    }

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
        sourceMapURL: string;
        sourceMapBasepath: string;
        sourceMapRootpath: string;
        outputSourceFiles: boolean;
        sourceMapFileInline: boolean;
    }

    interface Options {
        sourceMap?: SourceMapOption;
        filename?: string;
        plugins: Plugin[];
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
}

interface LessStatic {
    render(input: string, callback: (error: Less.RenderError, output: Less.RenderOutput) => void): void;
    render(input: string, options: Less.Options, callback: (error: Less.RenderError, output: Less.RenderOutput) => void): void;

    render(input: string): Less.Promise<Less.RenderOutput>;
    render(input: string, options: Less.Options): Less.Promise<Less.RenderOutput>;

    version: number[];
}

declare module "less" {
    export = less;
}

declare var less: LessStatic;
