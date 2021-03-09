// Type definitions for jest-summarizing-reporter 1.1
// Project: https://github.com/sunfit/jest-summary-reporter
// Definitions by: Xinyi Li <https://github.com/aXises>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import { Context } from '@jest/reporters/build/types';
import BaseReporter from '@jest/reporters/build/BaseReporter';
import type { AggregatedResult } from '@jest/test-result';
import type { Config } from '@jest/types';

export interface ReporterOptions {
    diffs: boolean;
}

export default class JestSummaryReporter extends BaseReporter {
    protected globalConfig: Config.ConfigGlobals;
    protected options: ReporterOptions;
    constructor(globalConfig: Config.ConfigGlobals, options: Partial<ReporterOptions>);
    onRunStart(): void;
    onRunComplete(contexts: Set<Context>, results: AggregatedResult): void;
}
