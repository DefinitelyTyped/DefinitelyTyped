import Lasso, { LassoConfig, LassoPage, LassoResource } from './Lasso';
import LassoContext from './LassoContext';
import * as _writers from './writers';

export namespace transforms {
  function createTransformer(unfilteredTransforms: any[], lassoContext: LassoContext, callback: (err: Error | null, result?: any) => any): void;
}

export { _writers as writers };

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
