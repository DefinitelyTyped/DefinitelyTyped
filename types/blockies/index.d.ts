// Type definitions for blockies 0.0
// Project: https://github.com/goldylucks/blockies-npm
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function blockies(config?: blockies.BlockiesConfig): HTMLCanvasElement;
export = blockies;

declare namespace blockies {
    interface BlockiesConfig {
        size?: number;
        scale?: number;
        seed?: string;
        color?: string;
        bgcolor?: string;
        spotcolor?: string;
    }
}
