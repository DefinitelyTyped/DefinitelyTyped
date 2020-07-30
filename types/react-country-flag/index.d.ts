// Type definitions for react-country-flag 2.2
// Project: https://danalloway.github.io/react-country-flag
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

// @credits @r3wt
export interface ReactCountryFlagProps<T> extends React.DetailedHTMLProps<React.LabelHTMLAttributes<T>, T> {
    cdnSuffix?: string;
    /** @default 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/'' */
    cdnUrl?: string;
    countryCode: string;
    /** @default false */
    svg?: boolean;
    style?: React.CSSProperties;
}

/**
 * React component for emoji/svg country flags
 */
declare const ReactCountryFlag: React.FC<ReactCountryFlagProps<HTMLSpanElement | HTMLImageElement>>;

export default ReactCountryFlag;
