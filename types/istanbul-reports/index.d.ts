import { Node, ReportBase } from "istanbul-lib-report";

export function create<T extends keyof ReportOptions>(name: T, options?: Partial<ReportOptions[T]>): ReportBase;

export interface FileOptions {
    file: string;
}

export interface ProjectOptions {
    projectRoot: string;
}

export interface ReportOptions {
    clover: CloverOptions;
    cobertura: CoberturaOptions;
    "html-spa": HtmlSpaOptions;
    html: HtmlOptions;
    json: JsonOptions;
    "json-summary": JsonSummaryOptions;
    lcov: LcovOptions;
    lcovonly: LcovOnlyOptions;
    none: never;
    teamcity: TeamcityOptions;
    text: TextOptions;
    "text-lcov": TextLcovOptions;
    "text-summary": TextSummaryOptions;
}

export type ReportType = keyof ReportOptions;

export interface CloverOptions extends FileOptions, ProjectOptions {}

export interface CoberturaOptions extends FileOptions, ProjectOptions {}

export interface HtmlSpaOptions extends HtmlOptions {
    metricsToShow: Array<"lines" | "branches" | "functions" | "statements">;
}
export interface HtmlOptions {
    verbose: boolean;
    skipEmpty: boolean;
    subdir: string;
    linkMapper: LinkMapper;
}

export type JsonOptions = FileOptions;
export type JsonSummaryOptions = FileOptions;

export interface LcovOptions extends FileOptions, ProjectOptions {}
export interface LcovOnlyOptions extends FileOptions, ProjectOptions {}

export interface TeamcityOptions extends FileOptions {
    blockName: string;
}

export interface TextOptions extends FileOptions {
    maxCols: number;
    skipEmpty: boolean;
    skipFull: boolean;
}
export type TextLcovOptions = ProjectOptions;
export type TextSummaryOptions = FileOptions;

export interface LinkMapper {
    getPath(node: string | Node): string;
    relativePath(source: string | Node, target: string | Node): string;
    assetPath(node: Node, name: string): string;
}
