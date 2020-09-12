import * as React from "react";
import {
    EmbeddedIconProps,
    ReactAnchorAttr,
    ReactDivAttr,
    ReactLabelAttr,
    ThemeProps, ReactButtonAttr
} from "../../../typings/shared";

// Tile

interface TileInheritedProps extends ReactDivAttr, ThemeProps { }

export interface TileProps extends TileInheritedProps { }

export declare class Tile extends React.Component<TileProps> { }

// ClickableTile

interface ClickableTileInheritedProps extends Omit<ReactAnchorAttr, "onClick" | "onKeyDown">, ThemeProps { }

export interface ClickableTileProps extends ClickableTileInheritedProps {
    handleClick?: ReactAnchorAttr["onClick"],
    handleKeyDown?: ReactAnchorAttr["onKeyDown"],
}

export declare class ClickableTile extends React.Component<ClickableTileProps> { }

// SelectableTile

type SelectedTileExcludedAttributes = "onChange" | "onClick" | "onKeyDown";
interface SelectableTileInheritedProps extends
    Omit<ReactLabelAttr, SelectedTileExcludedAttributes>,
    ThemeProps
{
    /**
     * @deprecated
     */
    iconDescription?: EmbeddedIconProps["iconDescription"],
}

export interface SelectableTileProps extends SelectableTileInheritedProps {
    handleClick?(e: React.MouseEvent<HTMLLabelElement>): void,
    handleKeyDown?(e: React.KeyboardEvent<HTMLLabelElement>): void,
    onChange(e: React.KeyboardEvent<HTMLLabelElement> | React.MouseEvent<HTMLLabelElement>): void,
    selected?: boolean,
    value: string | number,
}

export declare class SelectableTile extends React.Component<SelectableTileProps> { }

// ExpandableTile

interface ExpandableTileInheritedProps extends Omit<ReactButtonAttr, "onClick">, ThemeProps { }

export interface ExpandableTileProps extends ExpandableTileInheritedProps {
    expanded?: boolean,
    handleClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    onBeforeClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    tileCollapsedIconText?: string,
    tileExpandedIconText?: string,
    tileMaxHeight?: number,
    tilePadding?: number,
}

export declare class ExpandableTile extends React.Component<ExpandableTileProps> { }

// TileAboveTheFoldContent

export interface TileAboveTheFoldContentProps { }

export declare class TileAboveTheFoldContent extends React.Component<TileAboveTheFoldContentProps> { }

// TileBelowTheFoldContent

export interface TileBelowTheFoldContentProps { }

export declare class TileBelowTheFoldContent extends React.Component<TileBelowTheFoldContentProps> { }
