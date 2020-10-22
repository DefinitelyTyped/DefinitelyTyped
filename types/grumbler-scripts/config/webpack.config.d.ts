import { WebpackConfigOptions } from './types';

export function getCurrentVersion(pkg: { version: string }): string;
export function getNextVersion(pkg: { version: string }, level?: string): string;
export function getWebpackConfig(options?: WebpackConfigOptions): object;
