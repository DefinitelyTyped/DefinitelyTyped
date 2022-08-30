// Type definitions for @dhis2/ui-constants 7.8
// Project: https://github.com/dhis2/ui/tree/master/constants
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

// https://github.com/dhis2/ui/blob/master/constants/src/colors.js
export type ColorBase = 'blue' | 'teal' | 'red' | 'yellow' | 'green' | 'grey';
export type ColorVariant = '900' | '800' | '700' | '600' | '500' | '400' | '300' | '200' | '100' | '050';
export type ColorProp = `${ColorBase}${ColorVariant}` | 'white';
export const colors: Record<ColorProp, string>;

// https://github.com/dhis2/ui/blob/master/constants/src/elevations.js
export type ElevantionVariant = 'e100' | 'e200' | 'e300' | 'e400';
export const elevations: Record<ElevantionVariant, string>;

// https://github.com/dhis2/ui/blob/master/constants/src/theme.js
export type ThemeBase = 'primary' | 'secondary';
export type ThemeVariant = '900' | '800' | '700' | '600' | '500' | '400' | '300' | '200' | '100' | '050';
export type ThemeProp =
    | `${ThemeBase}${ThemeVariant}`
    | 'default'
    | 'error'
    | 'valid'
    | 'warning'
    | 'disabled'
    | 'focus'
    | 'fonts';
export const theme: Record<ThemeProp, string>;

// https://github.com/dhis2/ui/blob/master/constants/src/spacers.js
export type SpacerVariant =
    | 'dp4'
    | 'dp8'
    | 'dp12'
    | 'dp16'
    | 'dp24'
    | 'dp32'
    | 'dp48'
    | 'dp64'
    | 'dp96'
    | 'dp128'
    | 'dp192'
    | 'dp256'
    | 'dp384'
    | 'dp512'
    | 'dp640';
export const spacersNum: Record<SpacerVariant, number>;
export const spacers: Record<SpacerVariant, string>;

// https://github.com/dhis2/ui/blob/master/constants/src/layers.js
export type LayerVariant = 'applicationTop' | 'blocking' | 'alert';
export const layer: Record<LayerVariant, number>;
