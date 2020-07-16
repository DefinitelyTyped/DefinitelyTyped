// Type definitions for istanbul-lib-source-maps 4.0
// Project: https://istanbul.js.org, https://github.com/istanbuljs/istanbuljs
// Definitions by: Jason Cheatham <https://github.com/jason0x43>
//                 Sridhar Mallela <https://github.com/sridharmallela>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { CoverageMap } from 'istanbul-lib-coverage';
import { RawSourceMap } from 'source-map';

export function createSourceMapStore(options?: Partial<MapStoreOptions>): MapStore;

export interface MapStoreOptions {
    verbose: boolean;
    baseDir: string;
    sourceStore: 'memory' | 'file';
    tmpdir: string;
}

export interface MapStore {
    baseDir: string | null;
    verbose: boolean;
    sourceStore: SourceStore;
    data: {
        [filepath: string]: {
            type: string;
            data: any;
        };
    };

    registerURL(transformedFilePath: string, sourceMapUrl: string): void;
    registerMap(filename: string, sourceMap: RawSourceMap): void;
    getSourceMapSync(filePath: string): any;
    addInputSourceMapsSync(coverageData: any): void;
    sourceFinder(filePath: string): string;
    transformCoverage(coverageMap: CoverageMap): Promise<CoverageMap>;
    dispose(): void;
}

export class SourceStore {
    getSource(filepath: string): string | null;
    registerSource(filepath: string, sourceText: string): void;
}
