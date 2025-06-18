import * as React from "react";
import * as Rebass from "rebass";

export interface TilesProps extends Rebass.BoxProps {
    width?: Array<number | string | null> | undefined;
    columns?: Array<number | null> | undefined;
    gap?: number | undefined;
}
export const Tiles: React.FunctionComponent<TilesProps>;
