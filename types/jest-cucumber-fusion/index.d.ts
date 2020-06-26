// Type definitions for jest-cucumber-fusion 0.6
// Project: https://github.com/b-yond-infinite-network/jest-cucumber-fusion#readme
// Definitions by: Pelle Johnsen <https://github.com/pjoe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import { loadFeature } from 'jest-cucumber';

export type CallBack = (...args: ReadonlyArray<string | Array<Record<string, string>>>) => void | Promise<void>;

export function Given(name: string | RegExp, callback: CallBack): void;
export function When(name: string | RegExp, callback: CallBack): void;
export function Then(name: string | RegExp, callback: CallBack): void;
export function And(name: string | RegExp, callback: CallBack): void;
export function But(name: string | RegExp, callback: CallBack): void;

export function Before(callback: () => void | Promise<void>): void;
export function After(callback: () => void | Promise<void>): void;

export function Fusion(feature: string, options?: Parameters<typeof loadFeature>[1]): void;
