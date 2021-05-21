import { Config, ConfigFile, ConfigOptions, ServerCallback } from '../';

export function run(options?: Config, callback?: ServerCallback): void;
/** @deprecated */
// tslint:disable-next-line:unified-signatures to correctly show deprecated overload
export function run(options?: ConfigOptions | ConfigFile, callback?: ServerCallback): void;
