declare const Tile_base: any;
declare class Tile extends Tile_base {
    constructor(element: any, options: any);
    _getClass: (type: any) => any;
    _hookActions: (tileClass: any) => void;
    _setTileHeight: () => void;
    release(): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorAboveTheFold: string;
        selectorTileInput: string;
        classExpandedTile: string;
        classClickableTile: string;
        classSelectableTile: string;
    };
}
export default Tile;
