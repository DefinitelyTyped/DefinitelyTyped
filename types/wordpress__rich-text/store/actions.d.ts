import { NamedFormatConfiguration } from '@wordpress/rich-text';

/**
 * Returns an action object used in signalling that format types have been added.
 */
export function addFormatTypes(configs: NamedFormatConfiguration | NamedFormatConfiguration[]): void;

/**
 * Returns an action object used to remove a registered format type.
 */
export function removeFormatTypes(names: string | string[]): void;
