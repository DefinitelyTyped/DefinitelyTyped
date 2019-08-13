// tslint:disable:no-unnecessary-generics
import { ComponentType } from '@wordpress/element';

import { EditorColor } from '../';

/**
 * A higher-order component factory for creating a 'withCustomColors' HOC, which handles color logic
 * for class generation color value, retrieval and color attribute setting.
 *
 * @remarks
 * Use this higher-order component to work with a custom set of colors.
 *
 * NOTE: this function is poorly designed and is thereby not able to have strong types associated.
 *
 * @example
 * ```jsx
 * const CUSTOM_COLORS = [ { name: 'Red', slug: 'red', color: '#ff0000' }, { name: 'Blue', slug: 'blue', color: '#0000ff' } ];
 * const withCustomColors = createCustomColorsHOC( CUSTOM_COLORS );
 * // ...
 * export default compose(
 *     withCustomColors( 'backgroundColor', 'borderColor' ),
 *     MyColorfulComponent,
 * );
 * ```
 */
export function createCustomColorsHOC<T extends string[]>(
    colorsArray: EditorColor[]
): (...colorNames: T) => (component: ComponentType<any>) => ComponentType<any>;

/**
 * Returns a class based on the context a color is being used and its slug.
 *
 * @param colorContextName - Context/place where color is being used e.g: background, text etc...
 * @param colorSlug - Slug of the color.
 */
export function getColorClassName(colorContextName: string, colorSlug: string): string;
export function getColorClassName(
    colorContextName: string | undefined,
    colorSlug: string | undefined
): string | undefined;

/**
 * Provided an array of color objects as set by the theme or by the editor defaults, and the values
 * of the defined color or custom color returns a color object describing the color.
 *
 * @remarks
 * If `definedColor` is passed and the name is found in `colors`, the color object exactly as
 * set by the theme or editor defaults is returned.  Otherwise, an object that just sets the color
 * is defined.
 *
 * @param colors - Array of color objects as set by the theme or by the editor defaults.
 * @param definedColor - A string containing the color slug.
 * @param customColor - A string containing the customColor value.
 */
export function getColorObjectByAttributeValues(
    colors: EditorColor[],
    definedColor: string | undefined,
    customColor: string
): EditorColor | Pick<EditorColor, 'color'>;

/**
 * Provided an array of color objects as set by the theme or by the editor defaults, and a color
 * value, returns the color object matching that value or undefined.
 *
 * @param colors - Array of color objects as set by the theme or by the editor defaults.
 * @param colorValue - A string containing the color value.
 */
export function getColorObjectByColorValue(colors: EditorColor[], colorValue: string | undefined): EditorColor | undefined;

/**
 * A higher-order component, which handles color logic for class generation color value, retrieval and color attribute setting.
 *
 * @remarks
 * For use with the default editor/theme color palette.
 *
 * NOTE: this function is poorly designed and is thereby not able to have strong types associated.
 *
 * @example
 * ```jsx
 * export default compose(
 *     withColors( 'backgroundColor', { textColor: 'color' } ),
 *     MyColorfulComponent,
 * );
 * ```
 *
 * @param colorTypes - The arguments can be strings or objects. If the argument is an object, it
 *                     should contain the color attribute name as key and the color context as
 *                     value. If the argument is a string the value should be the color attribute
 *                     name, the color context is computed by applying a kebab case transform to the
 *                     value. Color context represents the context/place where the color is going
 *                     to be used. The class name of the color is generated using 'has' followed by
 *                     the color name and ending with the color context all in kebab case e.g:
 *                     has-green-background-color.
 */
export function withColors(
    ...colorTypes: Array<string | Record<string, string>>
): (component: ComponentType<any>) => ComponentType<any>;
