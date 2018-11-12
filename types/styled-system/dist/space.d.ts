export type ResponsiveValue<T> = T | Array<T | null>;

export type SpaceValue = number | string;

/**
 * Converts shorthand margin and padding props to margin and padding CSS declarations
 *
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;

export interface SpaceProps {
    /** Margin on top, left, bottom and right */
    m?: ResponsiveSpaceValue;
    /** Margin for the top */
    mt?: ResponsiveSpaceValue;
    /** Margin for the right */
    mr?: ResponsiveSpaceValue;
    /** Margin for the bottom */
    mb?: ResponsiveSpaceValue;
    /** Margin for the left */
    ml?: ResponsiveSpaceValue;
    /** Margin for the left and right */
    mx?: ResponsiveSpaceValue;
    /** Margin for the top and bottom */
    my?: ResponsiveSpaceValue;
    /** Padding on top, left, bottom and right */
    p?: ResponsiveSpaceValue;
    /** Padding for the top */
    pt?: ResponsiveSpaceValue;
    /** Padding for the right */
    pr?: ResponsiveSpaceValue;
    /** Padding for the bottom */
    pb?: ResponsiveSpaceValue;
    /** Padding for the left */
    pl?: ResponsiveSpaceValue;
    /** Padding for the left and right */
    px?: ResponsiveSpaceValue;
    /** Padding for the top and bottom */
    py?: ResponsiveSpaceValue;
}

export function space(...args: any[]): any;
