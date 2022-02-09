import * as React from "react";
import { ReactAnchorAttr, ReactDivAttr, ReactLabelAttr, ReactButtonAttr } from "../../../typings/shared";
import { LinkProps } from "../Link";

// Tile

export interface TileProps extends ReactDivAttr {
    light?: boolean | undefined,
}

export declare class Tile extends React.Component<TileProps> { }

// ClickableTile

export interface ClickableTileProps extends LinkProps {
    /**
     * @deprecated
     */
    handleClick?: ReactAnchorAttr["onClick"] | undefined,
    /**
     * @deprecated
     */
    handleKeyDown?: ReactAnchorAttr["onKeyDown"] | undefined,
    light?: boolean | undefined,
}

export declare class ClickableTile extends React.Component<ClickableTileProps> { }

// SelectableTile

export interface SelectableTileProps extends Omit<ReactLabelAttr, "onChange"> {
    disabled?: boolean | undefined;
    /**
     * @deprecated
     */
    handleClick?(e: React.MouseEvent<HTMLLabelElement>): void,
    /**
     * @deprecated
     */
    handleKeyDown?(e: React.KeyboardEvent<HTMLLabelElement>): void,
    /**
     * @deprecated
     */
    iconDescription?: string | undefined,
    light?: boolean | undefined,
    onChange?(e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLLabelElement> | React.KeyboardEvent<HTMLLabelElement>): void,
    selected?: boolean | undefined,
    value: string | number,
}

export declare const SelectableTile: React.FC<SelectableTileProps>;

// ExpandableTile

export interface ExpandableTileProps extends ReactButtonAttr {
    expanded?: boolean | undefined,
    /**
     * @deprecated
     */
    handleClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    light?: boolean | undefined,
    onBeforeClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    tileCollapsedIconText?: string | undefined,
    tileCollapsedLabel?: string | undefined,
    tileExpandedIconText?: string | undefined,
    tileExpandedLabel?: string | undefined,
    tileMaxHeight?: number | undefined,
    tilePadding?: number | undefined,
}

export declare class ExpandableTile extends React.Component<ExpandableTileProps> { }

// TileAboveTheFoldContent

export interface TileAboveTheFoldContentProps {
    children?: React.ReactNode | undefined,
}

export declare class TileAboveTheFoldContent extends React.Component<TileAboveTheFoldContentProps> { }

// TileBelowTheFoldContent

export interface TileBelowTheFoldContentProps {
    children?: React.ReactNode | undefined,
}

export declare class TileBelowTheFoldContent extends React.Component<TileBelowTheFoldContentProps> { }
