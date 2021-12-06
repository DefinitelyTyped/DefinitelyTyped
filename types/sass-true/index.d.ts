// Type definitions for sass-true 6.0
// Project: https://github.com/oddbird/true
// Definitions by: robertmaier <https://github.com/robertmaier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import type { Options } from 'sass';

export interface TrueOptions {
    sass?: typeof import('sass');
    describe: (description: string) => void;
    it: (description: string) => void;
}

export interface Assertion {
    description: string;
    output: string;
    assertionType: string;
    expected: string;
    details?: string;
    passed: boolean;
}

export interface Test {
    assertions: Assertion[];
}

export interface Module {
    module: string;
    tests: Test[];
}

export function runSass(sassOptions: Options, trueOptions: TrueOptions): void;
export function formatFailureMessage(assertion: Readonly<Assertion>): string;
export function parse(rawCss: Readonly<string>, ctxLines?: Readonly<number>): Module[];
