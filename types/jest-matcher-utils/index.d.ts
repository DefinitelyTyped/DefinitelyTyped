// Type definitions for jest-matcher-utils 21.0
// Project: https://github.com/facebook/jest/tree/master/packages/jest-get-type
// Definitions by: Alex Coles <https://github.com/myabc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Chalk } from 'chalk';

export const EXPECTED_COLOR: Chalk;
export const RECEIVED_COLOR: Chalk;
export const EXPECTED_BG: Chalk; // TODO: removed in b430e51a
export const RECEIVED_BG: Chalk; // TODO: removed in b430e51a
export const SUGGEST_TO_EQUAL: string;

export function stringify(object: any, maxDepth?: number): string;

export function highlightTrailingWhitespace(
    text: string,
    bgColor: Chalk // removed in b430e51a
): string;

export function printReceived(object: any): string;
export function printExpected(value: any): string;
export function printWithType(
  name: string,
  received: any,
  print: (value: any) => string
): string;

export function ensureNoExpected(actual: any, matcherName?: string): void;
export function ensureActualIsNumber(actual: any, matcherName?: string): void;
export function ensureExpectedIsNumber(actual: any, matcherName?: string): void;
export function ensureNumbers(
  actual: any,
  expected: any,
  matcherName?: string
): void;

export function pluralize(word: string, count: number): string;
export function matcherHint(
  matcherName: string,
  received?: string,
  expected?: string,
  options?: { secondArgument?: string; isDirectExpectCall?: boolean }
): string;
