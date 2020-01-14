export type TileProps = {
    /* Sets a background color class. */
    backgroundColor?: number;
    className?: string;
    customStyles?: {[x: string]: any};
    /* Sets a background color accent class. Options include numbers from 1 to 9. */
    colorAccent?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    /* Number of columns the tile covers. */
    columnSpan?: 1 | 2 | 3 | 4 | 5 | 6;
    disabled?: boolean;
    disableStyles?: boolean;
    /* Set to **true** to mark component as a product tile. */
    productTile?: boolean;
    /* Number of rows the tile covers. */
    rowSpan?: number;
} & { [x: string]: any };

export type TileActionsProps = {
    className?: string;
} & { [x: string]: any };

export type TileContentProps = {
    title: string;
    className?: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    titleProps?: { [x: string]: any };
} & { [x: string]: any };

export type TileMediaProps = {
    className?: string;
} & { [x: string]: any };

declare const Tile: React.FunctionComponent<TileProps> & {
    displayName: "Tile";
    Actions: React.FunctionComponent<TileActionsProps> & {displayName: "Tile.Actions"};
    Content: React.FunctionComponent<TileContentProps> & {displayName: "Tile.Content"};
    Media: React.FunctionComponent<TileMediaProps> & {displayName: "Tile.Media"};
};

export default Tile;
