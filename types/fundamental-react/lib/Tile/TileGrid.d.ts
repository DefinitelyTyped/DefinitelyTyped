export type TileGridProps = {
    className?: string;
    col?: 1 | 2 | 3 | 4 | 5 | 6;
} & { [x: string]: any };

declare const TileGrid: React.FunctionComponent<TileGridProps>;

export default TileGrid;
