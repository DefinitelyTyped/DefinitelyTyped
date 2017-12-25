// Type definitions for lasso 2.4
// Project: https://github.com/lasso-js/lasso
// Definitions by: Timur Manyanov <https://github.com/darkwebdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import Lasso, { LassoConfig, LassoResource, LassoPage } from './lib/Lasso';
import LassoContext from './lib/LassoContext';

export namespace transforms {
  function createTransformer(unfilteredTransforms: any[], lassoContext: LassoContext, callback: (err: Error | null, result?: any) => any): void;
}

export namespace writers {
  interface Writer {
    lasso: Lasso;
    config: LassoConfig;
  }

  function Writer(impl: any): Writer;
  function fileWriter(fileWriterConfig: any, lassoConfig: LassoConfig): any;
  function createWriter(impl: any): Writer;
}

export const defaultConfig: LassoConfig;

export const defaultConfigBaseDir: string;

export const defaultConfigFilename: string | null;

export const lassoPage: LassoPage;

export const lassoResource: LassoResource;

export function getDefaultLasso(): Lasso;

export function create(config?: LassoConfig | string, baseDir?: string, filename?: string): Lasso;

export function configure(config?: LassoConfig | string, baseDir?: string, filename?: string): void;

export function setDevelopmentMode(): void;

export function createFlagSet(flags: any): any;

export function isFlagSet(o: any): boolean;

export function flushAllCaches(callback?: any): void;

export function handleWatchedFileChanged(path: string): void;

export function clearCaches(): void;

export function getClientPath(path: string, options?: any): string;
