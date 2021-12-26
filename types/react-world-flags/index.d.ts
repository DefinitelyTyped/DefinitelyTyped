// Type definitions for react-world-flags 1.4
// Project: https://github.com/smucode/react-world-flags#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface FlagProps extends React.HTMLProps<HTMLImageElement> {
    /**
     * code is the two letter, three letter or three digit country code.
     */
    code?: string | undefined;

    /**
     * You can also pass an optional fallback which renders if the given code doesn't correspond to a flag
     */
    fallback?: React.ReactNode | null | undefined;
}

/**
 * Easy to use SVG flags of the world for react
 */
declare const Flag: React.FC<FlagProps>;

export default Flag;
