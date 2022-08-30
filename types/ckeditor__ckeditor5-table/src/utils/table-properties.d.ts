import { BoxSides } from '@ckeditor/ckeditor5-engine/src/view/stylesmap';

/**
 * Returns a string if all four values of box sides are equal.
 *
 * If a string is passed, it is treated as a single value (pass-through).
 *
 *    // Returns 'foo':
 *    getSingleValue( { top: 'foo', right: 'foo', bottom: 'foo', left: 'foo' } );
 *    getSingleValue( 'foo' );
 *
 *    // Returns undefined:
 *    getSingleValue( { top: 'foo', right: 'foo', bottom: 'bar', left: 'foo' } );
 *    getSingleValue( { top: 'foo', right: 'foo' } );
 *
 */
export function getSingleValue(objectOrString: string | Partial<BoxSides>): string;

/**
 * Adds a unit to a value if the value is a number or a string representing a number.
 *
 * **Note**: It does nothing to non-numeric values.
 *
 *    getSingleValue( 25, 'px' );    // '25px'
 *    getSingleValue( 25, 'em' );    // '25em'
 *    getSingleValue( '25em', 'px' );  // '25em'
 *    getSingleValue( 'foo', 'px' );  // 'foo'
 */
export function addDefaultUnitToNumericValue(value: string, defaultUnit: string): string;

/**
 * Returns the normalized configuration.
 */
export function getNormalizedDefaultProperties(
    config: { alignment?: string; padding?: string; verticalAlignment?: string; horizontalAlignment?: string },
    options?: {
        includeAlignmentProperty?: boolean;
        includePaddingProperty?: boolean;
        includeVerticalAlignmentProperty?: boolean;
        includeHorizontalAlignmentProperty?: boolean;
        isRightToLeftContent?: boolean;
    },
): {
    alignment: string;
    padding: string;
    verticalAlignment: string;
    horizontalAlignment: string;
    includeAlignmentProperty?: boolean;
    includePaddingProperty?: boolean;
    includeVerticalAlignmentProperty?: boolean;
    includeHorizontalAlignmentProperty?: boolean;
    isRightToLeftContent?: boolean;
};
