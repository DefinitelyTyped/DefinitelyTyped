import * as React from "react";

export type TileProps = {
    className?: string;
    isDouble?: boolean;
    size?: "s";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & { [x: string]: any };

export type TileContentProps = {
    className?: string;
    twoColumns?: boolean,
} & { [x: string]: any };

export type TileFooterProps = {
    className?: string;
} & { [x: string]: any };

export type TileHeaderProps = {
    className?: string;
    subtitle?: string;
} & { [x: string]: any };

declare const Tile: React.FC<TileProps> & {
    displayName: "Tile";
    Content: React.FC<TileContentProps> & {displayName: "Tile.Content"};
    Footer: React.FC<TileFooterProps> & {displayName: "Tile.Footer"};
    Header: React.FC<TileHeaderProps> & {displayName: "Tile.Header"};
};

export default Tile;
