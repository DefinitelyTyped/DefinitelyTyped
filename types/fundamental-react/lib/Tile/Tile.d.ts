import * as React from "react";

export type TileProps = {
    className?: string | undefined;
    isDouble?: boolean | undefined;
    size?: "s" | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
} & { [x: string]: any };

export type TileContentProps = {
    className?: string | undefined;
    twoColumns?: boolean | undefined;
} & { [x: string]: any };

export type TileFooterProps = {
    className?: string | undefined;
} & { [x: string]: any };

export type TileHeaderProps = {
    className?: string | undefined;
    subtitle?: string | undefined;
} & { [x: string]: any };

declare const Tile: React.FC<TileProps> & {
    displayName: "Tile";
    Content: React.FC<TileContentProps> & { displayName: "Tile.Content" };
    Footer: React.FC<TileFooterProps> & { displayName: "Tile.Footer" };
    Header: React.FC<TileHeaderProps> & { displayName: "Tile.Header" };
};

export default Tile;
