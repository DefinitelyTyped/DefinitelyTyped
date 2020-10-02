export type TileProps = {
    active?: boolean,
    backgroundImage?: string,
    className?: string,
    disabled?: boolean,
    disableStyles?: boolean,
    productTile?: boolean,
    tabIndex?: number,
    onClick?: (...args: any[]) => any
} & { [x: string]: any };

export type TileActionsProps = {
    className?: string;
} & { [x: string]: any };

export type TileContentProps = {
    title: string,
    className?: string,
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    productTile?: boolean,
    titleProps?: any
} & { [x: string]: any };

export type TileMediaProps = {
    className?: string;
    productTile?: boolean;
} & { [x: string]: any };

declare const Tile: React.FunctionComponent<TileProps> & {
    displayName: "Tile";
    Actions: React.FunctionComponent<TileActionsProps> & {displayName: "Tile.Actions"};
    Content: React.FunctionComponent<TileContentProps> & {displayName: "Tile.Content"};
    Media: React.FunctionComponent<TileMediaProps> & {displayName: "Tile.Media"};
};

export default Tile;
