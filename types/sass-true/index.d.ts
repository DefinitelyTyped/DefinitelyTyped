// Type definitions for sass-true 6.0
// Project: https://github.com/oddbird/true
// Definitions by: robertmaier <https://github.com/robertmaier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import type { renderSync } from 'sass';
export type Options = Parameters<typeof renderSync>[0];

export interface TrueOptions {
    sass?: typeof import('sass');
    describe: (description: string, fn: () => void) => void;
    it: (description: string, fn: () => void) => void;
    contextLines?: number;
}

export interface Assertion {
    description: string;
    output?: string;
    assertionType?: string;
    expected?: string;
    details?: string;
    passed?: boolean;
}

export interface Test {
    test: string;
    assertions: Assertion[];
}

export interface Module {
    module: string;
    tests: Test[];
    modules?: Module[];
}

export function runSass(sassOptions: Options, trueOptions: TrueOptions): void;
export function formatFailureMessage(assertion: Readonly<Assertion>): string;
export function parse(rawCss: Readonly<string>, ctxLines?: Readonly<number>): Module[];
