import * as React from "react";
import { ReactAnchorAttr, ReactDivAttr, ReactLabelAttr, ReactButtonAttr } from "../../../typings/shared";

// Tile

export interface TileProps extends ReactDivAttr {
    light?: boolean,
}

export declare class Tile extends React.Component<TileProps> { }

// ClickableTile

export interface ClickableTileProps extends Omit<ReactAnchorAttr, "onClick" | "onKeyDown"> {
    handleClick?: ReactAnchorAttr["onClick"],
    handleKeyDown?: ReactAnchorAttr["onKeyDown"],
    light?: boolean,
}

export declare class ClickableTile extends React.Component<ClickableTileProps> { }

// SelectableTile

type SelectedTileExcludedAttributes = "onChange" | "onClick" | "onKeyDown";

export interface SelectableTileProps extends Omit<ReactLabelAttr, SelectedTileExcludedAttributes> {
    handleClick?(e: React.MouseEvent<HTMLLabelElement>): void,
    handleKeyDown?(e: React.KeyboardEvent<HTMLLabelElement>): void,
    /**
     * @deprecated
     */
    iconDescription?: string,
    light?: boolean,
    onChange(e: React.KeyboardEvent<HTMLLabelElement> | React.MouseEvent<HTMLLabelElement>): void,
    selected?: boolean,
    value: string | number,
}

export declare class SelectableTile extends React.Component<SelectableTileProps> { }

// ExpandableTile

export interface ExpandableTileProps extends Omit<ReactButtonAttr, "onClick"> {
    expanded?: boolean,
    handleClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    light?: boolean,
    onBeforeClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    tileCollapsedIconText?: string,
    tileExpandedIconText?: string,
    tileMaxHeight?: number,
    tilePadding?: number,
}

export declare class ExpandableTile extends React.Component<ExpandableTileProps> { }

// TileAboveTheFoldContent

export interface TileAboveTheFoldContentProps {
    children?: React.ReactNode,
}

export declare class TileAboveTheFoldContent extends React.Component<TileAboveTheFoldContentProps> { }

// TileBelowTheFoldContent

export interface TileBelowTheFoldContentProps {
    children?: React.ReactNode,
}

export declare class TileBelowTheFoldContent extends React.Component<TileBelowTheFoldContentProps> { }
