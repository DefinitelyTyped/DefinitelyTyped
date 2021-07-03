// Type definitions for @rebass/layout 4.0
// Project: https://github.com/rebassjs/rebass#readme
// Definitions by: Rafael Almeida <https://github.com/rafaelalmeidatk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as Rebass from 'rebass';

export interface TilesProps extends Rebass.BoxProps {
    width?: Array<number | string | null>;
    columns?: Array<number | null>;
    gap?: number;
}
export const Tiles: React.FunctionComponent<TilesProps>;
