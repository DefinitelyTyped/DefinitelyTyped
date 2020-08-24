import * as React from "react";
import { ReactAttr, ReactInputAttr } from "../../../typings/shared";
import { RadioTileChangeEvent } from "../RadioTile";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    disabled?: ReactInputAttr["disabled"],
    name: NonNullable<ReactInputAttr["name"]>,
}

export interface TileGroupProps extends InheritedProps {
    defaultSelected?: TileGroupProps["valueSelected"],
    legend?: string,
    onChange?(value: NonNullable<TileGroupProps["valueSelected"]>, name: NonNullable<TileGroupProps["name"]>, event: RadioTileChangeEvent): void,
    valueSelected?: string | number,
}

declare class TileGroup extends React.Component<TileGroupProps> { }

export default TileGroup;
