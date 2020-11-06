import * as React from "react";

export type TileProps = {
    backgroundImage?: string; //TODO does not work yet
    className?: string;
    disabled?: boolean;  //TODO does not work yet
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
    //TODO subTitleProps?: https://sap.github.io/fundamental-react/?path=/docs/component-api-tile--primary#properties
    //TODO titleProps?: 
} & { [x: string]: any };

declare const Tile: React.FC<TileProps> & {
    displayName: "Tile";
    Content: React.FC<TileContentProps> & {displayName: "Tile.Content"};
    Footer: React.FC<TileFooterProps> & {displayName: "Tile.Footer"};
    Header: React.FC<TileHeaderProps> & {displayName: "Tile.Header"};
}


export default Tile;
