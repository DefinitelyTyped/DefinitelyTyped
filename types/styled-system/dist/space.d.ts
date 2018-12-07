import * as CSS from 'csstype';
export type TLengthStyledSystem = string | 0 | number;
export type ResponsiveValue<T> = T | Array<T | null>;

/**
 * Converts shorthand margin and padding props to margin and padding CSS declarations
 *
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */

export interface SpaceProps<TLength = TLengthStyledSystem> {
    /** Margin on top, left, bottom and right */
    m?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    /** Margin for the top */
    mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    /** Margin for the right */
    mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    /** Margin for the bottom */
    mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    /** Margin for the left */
    ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    /** Margin for the left and right */
    mx?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Margin for the top and bottom */
    my?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding on top, left, bottom and right */
    p?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding for the top */
    pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    /** Padding for the right */
    pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    /** Padding for the bottom */
    pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    /** Padding for the left */
    pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    /** Padding for the left and right */
    px?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding for the top and bottom */
    py?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
}

export function space(...args: any[]): any;
