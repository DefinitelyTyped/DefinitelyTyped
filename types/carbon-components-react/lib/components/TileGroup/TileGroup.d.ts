import * as React from "react";
import { RadioTileChangeEvent } from "../RadioTile";

export interface TileGroupProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    defaultSelected?: TileGroupProps["valueSelected"] | undefined;
    disabled?: boolean | undefined;
    legend?: string | undefined;
    name: string;
    onChange?(
        value: NonNullable<TileGroupProps["valueSelected"]>,
        name: NonNullable<TileGroupProps["name"]>,
        event: RadioTileChangeEvent,
    ): void;
    valueSelected?: string | number | undefined;
}

declare class TileGroup extends React.Component<TileGroupProps> {}

export default TileGroup;
