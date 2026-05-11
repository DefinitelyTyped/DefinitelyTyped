interface TileOptions {
    selectorInit: string;
    selectorAboveTheFold: string;
    selectorTileInput: string;
    classExpandedTile: string;
    classClickableTile: string;
    classSelectableTile: string;
}

declare const Tile_base: any;
declare class Tile extends Tile_base {
    constructor(element: HTMLElement, options?: TileOptions);
    _getClass: (type: "expandable" | "clickable" | "selectable") => string;
    _hookActions: (tileClass: string) => void;
    _setTileHeight: () => void;
    release(): void;
    static components: WeakMap<object, any>;
    static get options(): TileOptions;
}
export default Tile;
