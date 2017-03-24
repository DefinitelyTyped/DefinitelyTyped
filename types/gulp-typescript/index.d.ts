// Type definitions for gulp-typescript
// Project: https://github.com/ivogabe/gulp-typescript
// Definitions by: Asana <https://asana.com>, Thomas Corbière <https://github.com/tomc974>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


declare function GulpTypescript(params?: GulpTypescript.Params, filters?: GulpTypescript.FilterSettings, reporter?: GulpTypescript.Reporter): GulpTypescript.CompilationStream;

declare namespace GulpTypescript {
    export function createProject(params?: Params): Project;
    export function createProject(file: string, params?: Params): Project;
    export function filter(filters: FilterSettings): CompilationStream;
    interface Params {
        declarationFiles?: boolean;
        module?: string;
        noEmitOnError?: boolean;
        noExternalResolve?: boolean;
        noImplicitAny?: boolean;
        noLib?: boolean;
        removeComments?: boolean;
        sourceRoot?: string; // use gulp-sourcemaps instead
        sortOutput?: boolean;
        target?: string;
        typescript?: any;
        outFile?: string;
        outDir?: string;
        suppressImplicitAnyIndexErrors?: boolean;
        jsx?: string;
        declaration?: boolean;
        emitDecoratorMetadata?: boolean;
        experimentalDecorators?: boolean;
        experimentalAsyncFunctions?: boolean;
        moduleResolution?: string;
        noEmitHelpers?: boolean;
        preserveConstEnums?: boolean;
        isolatedModules?: boolean;
        skipLibCheck?: boolean;
    }

    interface TsConfig {
        files?: string[];
        exclude?: string[];
        compilerOptions?: any;
    }

    interface Project {
        config: TsConfig;
        src(): NodeJS.ReadWriteStream;
    }

    interface FilterSettings {
        referencedFrom?: string[];
    }

    interface Reporter {
        error(error: any): void;
    }

    interface CompilationStream extends NodeJS.ReadWriteStream {
        dts: NodeJS.ReadWriteStream;
        js: NodeJS.ReadWriteStream;
    }

    namespace reporter {
        function nullReporter(): Reporter;
        function defaultReporter(): Reporter;
        function fullReporter(showFullFilename?: boolean): Reporter;
    }
}

export = GulpTypescript;
