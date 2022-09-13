import { Locale } from '@ckeditor/ckeditor5-utils';
import { AlignmentFormat } from './alignmentediting';
/**
 * The list of supported alignment options:
 *
 * * `'left'`,
 * * `'right'`,
 * * `'center'`,
 * * `'justify'`
 */
export const supportedOptions: readonly ['left', 'right', 'center', 'justify'];
/**
 * Checks whether the passed option is supported by {@link module:alignment/alignmentediting~AlignmentEditing}.
 */
export function isSupported(option: unknown): option is 'left' | 'right' | 'center' | 'justify';
/**
 * Checks whether alignment is the default one considering the direction
 * of the editor content.
 */
export function isDefault(alignment: string | undefined, locale: Locale): boolean;
/**
 * Brings the configuration to the common form, an array of objects.
 */
export function normalizeAlignmentOptions(
    configuredOptions: Array<AlignmentFormat['name'] | AlignmentFormat>,
): AlignmentFormat[];
