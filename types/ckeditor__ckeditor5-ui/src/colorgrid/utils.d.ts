import { Locale } from '@ckeditor/ckeditor5-utils';
import { ColorDefinition } from './colorgridview';

/**
 * Returns color configuration options as defined in `editor.config.(fontColor|fontBackgroundColor).colors` or
 * `editor.config.table.(tableProperties|tableCellProperties).(background|border).colors
 * but processed to account for editor localization in the correct language.
 *
 * Note: The reason behind this method is that there is no way to use {@link module:utils/locale~Locale#t}
 * when the user configuration is defined because the editor does not exist yet.
 */
export function getLocalizedColorOptions(locale: Locale, options: ColorDefinition[]): ColorDefinition[];

/**
 * Creates a unified color definition object from color configuration options.
 * The object contains the information necessary to both render the UI and initialize the conversion.
 */
export function normalizeColorOptions(options: ColorDefinition[]): ColorDefinition[];

/**
 * Creates a normalized color definition from the user-defined configuration.
 * The "normalization" means it will create full
 * {@link module:ui/colorgrid/colorgrid~ColorDefinition `ColorDefinition-like`}
 * object for string values, and add a `view` property, for each definition.
 */
export function normalizeSingleColorDefinition(color: string | ColorDefinition): ColorDefinition;
