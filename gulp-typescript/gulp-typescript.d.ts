// Type definitions for gulp-typescript
// Project: https://github.com/ivogabe/gulp-typescript
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-typescript" {
    function GulpTypescript(params: GulpTypescript.Params, filters?: GulpTypescript.FilterSettings, reporter?: GulpTypescript.Reporter): GulpTypescript.CompilationStream;

    module GulpTypescript {
        export interface TsConfig {
            files?: string[];
            compilerOptions?: any;
        }
        export interface Project {
            input: any;
            output: any;
            previousOutput: any;
            compiler: any;
            configFileName: string;
            config: TsConfig;
            typescript: any;
            options: any;
            noExternalResolve: boolean;
            sortOutput: boolean;
            filterSettings: any;
            singleOutput: boolean;
            reporter: Reporter;
            currentDirectory: string;
            reset(outputJs: NodeJS.ReadableStream, outputDts: NodeJS.ReadableStream);
            src(): NodeJS.ReadWriteStream;
        }
        export function createProject(params: Params): Project;
        export function createProject(tsconfig: string): Project;
        export function filter(filters: FilterSettings): CompilationStream;
        interface Params {
            declarationFiles?: boolean;
            module?: string;
            noEmitOnError?: boolean;
            noExternalResolve?: boolean;
            noImplicitAny?: boolean;
            noLib?: boolean;
            removeComments?: boolean;
            sourceRoot?: string;
            sortOutput?: boolean;
            target?: string;
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

        module reporter {
            function nullReporter(): Reporter;
            function defaultReporter(): Reporter;
            function fullReporter(showFullFilename?: boolean): Reporter;
        }
    }

    export = GulpTypescript;
}
