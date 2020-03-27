import * as React from "react";
import { EmbeddedIconProps, ReactAnchorAttr, ReactDivAttr, ReactInputAttr, ReactLabelAttr } from "../../../typings/shared";

// Tile

interface TileInheritedProps extends ReactDivAttr { }

export interface TileProps extends TileInheritedProps { }

export declare class Tile extends React.Component<TileProps> { }

// ClickableTile

interface ClickableTileInheritedProps extends ReactAnchorAttr { }

export interface ClickableTileProps extends ClickableTileInheritedProps { }

export declare class ClickableTile extends React.Component<ClickableTileProps> { }

// SelectableTile

type SelectedTileExcludedAttributes = "onChange" | "onClick" | "onKeyDown";
interface SelectableTileInheritedProps extends
    Omit<ReactLabelAttr, SelectedTileExcludedAttributes>,
    EmbeddedIconProps
{
    onChange?: ReactInputAttr["onChange"],
}

export interface SelectableTileProps extends SelectableTileInheritedProps {
    handleClick?(e: React.MouseEvent<HTMLLabelElement>): void,
    handleKeyDown?(e: React.KeyboardEvent<HTMLLabelElement>): void,
    value: string | number,
}

export declare class SelectableTile extends React.Component<SelectableTileProps> { }

// ExpandableTile

interface ExpandableTileInheritedProps extends Omit<ReactDivAttr, "onClick"> { }

export interface ExpandableTileProps extends ExpandableTileInheritedProps {
    expanded?: boolean,
    handleClick?(e: React.MouseEvent<HTMLDivElement>): void,
    tileCollapsedIconText?: string,
    tileExpandedIconText?: string,
}

export declare class ExpandableTile extends React.Component<ExpandableTileProps> { }

// TileAboveTheFoldContent

export interface TileAboveTheFoldContentProps { }

export declare class TileAboveTheFoldContent extends React.Component<TileAboveTheFoldContentProps> { }

// TileBelowTheFoldContent

export interface TileBelowTheFoldContentProps { }

export declare class TileBelowTheFoldContent extends React.Component<TileBelowTheFoldContentProps> { }
