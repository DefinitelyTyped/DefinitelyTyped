// Type definitions for @rebass/layout 4.0
// Project: https://github.com/rebassjs/rebass#readme
// Definitions by: Rafael Almeida <https://github.com/rafaelalmeidatk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";
import * as Rebass from "rebass";

export interface TilesProps extends Rebass.BoxProps {
    width?: Array<number | string | null> | undefined;
    columns?: Array<number | null> | undefined;
    gap?: number | undefined;
}
export const Tiles: React.FunctionComponent<TilesProps>;
