// Type definitions for istanbul-lib-report 3.0
// Project: https://istanbul.js.org, https://github.com/istanbuljs/istanbuljs
// Definitions by: Jason Cheatham <https://github.com/jason0x43>
//                 Zacharias Björngren <https://github.com/zache>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { CoverageMap, FileCoverage, CoverageSummary } from 'istanbul-lib-coverage';

export function createContext(options?: Partial<ContextOptions>): Context;
export function getDefaultWatermarks(): Watermarks;

export const summarizers: {
    flat(coverageMap: CoverageMap): Tree;
    nested(coverageMap: CoverageMap): Tree;
    pkg(coverageMap: CoverageMap): Tree;
};

export interface ContextOptions {
    dir: string;
    watermarks: Partial<Watermarks>;
    sourceFinder(filepath: string): string;
}

export interface Context {
    data: any;
    dir: string;
    sourceFinder(filepath: string): string;
    watermarks: Watermarks;
    writer: FileWriter;
}

export interface ContentWriter {
    write(str: string): void;
    colorize(str: string, cls?: string): string;
    println(str: string): void;
    close(): void;
}

export interface FileWriter {
    writeForDir(subdir: string): FileWriter;
    copyFile(source: string, dest: string): void;
    writeFile(file: string | null): ContentWriter;
}

export type Watermark = [number, number];

export interface Watermarks {
    statements: Watermark;
    functions: Watermark;
    branches: Watermark;
    lines: Watermark;
}

export interface Node {
    getQualifiedName(): string;
    getRelativeName(): string;
    isRoot(): boolean;
    getParent(): Node;
    getChildren(): Node[];
    isSummary(): boolean;
    getCoverageSummary(filesOnly: boolean): CoverageSummary;
    getFileCoverage(): FileCoverage;
    visit(visitor: Visitor, state: any): void;
}

export interface ReportNode extends Node {
    path: string;
    parent: ReportNode | null;
    fileCoverage: FileCoverage;
    children: ReportNode[];
    addChild(child: ReportNode): void;
    asRelative(p: string): string;
    visit(visitor: Visitor<ReportNode>, state: any): void;
}

export interface Visitor<N extends Node = Node> {
    onStart(root: N, state: any): void;
    onSummary(root: N, state: any): void;
    onDetail(root: N, state: any): void;
    onSummaryEnd(root: N, state: any): void;
    onEnd(root: N, state: any): void;
}

export interface Tree<N extends Node = Node> {
    getRoot(): N;
    visit(visitor: Partial<Visitor<N>>, state: any): void;
}
