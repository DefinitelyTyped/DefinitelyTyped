import * as babelTypes from "babel-types";
import { FileCoverage, FileCoverageData, Range } from "istanbul-lib-coverage";
import { RawSourceMap } from "source-map";

export interface InstrumenterOptions {
    coverageVariable: string;
    preserveComments: boolean;
    compact: boolean;
    esModules: boolean;
    autoWrap: boolean;
    produceSourceMap: boolean;
    sourceMapUrlCallback(filename: string, url: string): void;
    debug: boolean;
}

export type InstrumenterCallback = (error: Error | null, code: string) => void;

export class Instrumenter {
    fileCoverage: FileCoverage;
    sourceMap: RawSourceMap | null;
    opts: InstrumenterOptions;

    constructor(options?: Partial<InstrumenterOptions>);

    normalizeOpts(options?: Partial<InstrumenterOptions>): InstrumenterOptions;

    instrumentSync(
        code: string,
        filename: string,
        inputSourceMap?: RawSourceMap,
    ): string;

    instrument(
        code: string,
        filenameOrCallback: string | InstrumenterCallback,
        callback?: InstrumenterCallback,
        inputSourceMap?: RawSourceMap,
    ): void;

    lastFileCoverage(): FileCoverageData;
    lastSourceMap(): RawSourceMap;
}

export function createInstrumenter(
    options?: Partial<InstrumenterOptions>,
): Instrumenter;

export interface InitialCoverage {
    path: string;
    hash: string;
    gcv: any;
    coverageData: any;
}

export function readInitialCoverage(code: string): InitialCoverage;

export interface Visitor {
    enter(path: string): void;
    exit(path: string): { fileCoverage: FileCoverage; sourceMappingURL: string };
}

export interface VisitorOptions {
    coverageVariable: string;
    inputSourceMap: RawSourceMap;
}

export function programVisitor(
    types: typeof babelTypes,
    sourceFilePath?: string,
    opts?: Partial<VisitorOptions>,
): Visitor;
