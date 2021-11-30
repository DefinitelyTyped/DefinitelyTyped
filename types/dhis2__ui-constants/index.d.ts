// Type definitions for @dhis2/ui-constants 7.8.1
// Project: https://github.com/dhis2/ui/tree/master/constants
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@dhis2/ui-constants' {
    // https://github.com/dhis2/ui/blob/master/constants/src/colors.js
    type ColorBase = 'blue' | 'teal' | 'red' | 'yellow' | 'green' | 'grey';
    type ColorVariant = '900' | '800' | '700' | '600' | '500' | '400' | '300' | '200' | '100' | '050';
    type ColorProp = `${ColorBase}${ColorVariant}` | 'white';
    export const colors: Record<ColorProp, string>;

    // https://github.com/dhis2/ui/blob/master/constants/src/elevations.js
    type ElevantionVariant = 'e100' | 'e200' | 'e300' | 'e400';
    export const elevations: Record<ElevantionVariant, string>;

    // https://github.com/dhis2/ui/blob/master/constants/src/theme.js
    type ThemeBase = 'primary' | 'secondary';
    type ThemeVariant = '900' | '800' | '700' | '600' | '500' | '400' | '300' | '200' | '100' | '050';
    type ThemeProp =
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
    type SpacerVariant =
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
    type LayerVariant = 'applicationTop' | 'blocking' | 'alert';
    export const layer: Record<LayerVariant, number>;
}
