declare function blockies(config?: blockies.BlockiesConfig): HTMLCanvasElement;
export = blockies;

declare namespace blockies {
    interface BlockiesConfig {
        size?: number | undefined;
        scale?: number | undefined;
        seed?: string | undefined;
        color?: string | undefined;
        bgcolor?: string | undefined;
        spotcolor?: string | undefined;
    }
}
