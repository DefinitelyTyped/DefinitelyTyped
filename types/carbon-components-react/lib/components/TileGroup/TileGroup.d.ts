import * as React from "react";
import { RadioTileChangeEvent } from "../RadioTile";

export interface TileGroupProps {
    children?: React.ReactNode,
    className?: string,
    defaultSelected?: TileGroupProps["valueSelected"],
    disabled?: boolean,
    legend?: string,
    name: string,
    onChange?(value: NonNullable<TileGroupProps["valueSelected"]>, name: NonNullable<TileGroupProps["name"]>, event: RadioTileChangeEvent): void,
    valueSelected?: string | number,
}

declare class TileGroup extends React.Component<TileGroupProps> { }

export default TileGroup;
