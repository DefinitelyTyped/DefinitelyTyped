import { Config, ConfigOptions, ServerCallback } from '../';

/**
 * This function will signal a running server to stop. The equivalent of karma stop.
 */
export function stop(options?: Config, callback?: ServerCallback): void;
/** @deprecated */
// tslint:disable-next-line:unified-signatures to correctly show deprecated overload
export function stop(options?: ConfigOptions, callback?: ServerCallback): void;
