import * as L from "leaflet";
declare module "leaflet" {
    class TileLayerOffline {
        constructor(urlTemplate: string, tilesDb: object, options?: TileLayerOptions);
        initialize(url: string, tilesDb: object, options: object): void;
        createTile(coords: object, done: DoneCallback): HTMLElement;
        getTileUrl(coords: object): string;
        getTileUrls(bounds: object, zoom: number): any[];
    }
    function tileLayer(urlTemplate: string, options?: TileLayerOptions): TileLayer;
    namespace tileLayer {
        function offline(url: string, tilesDb: object, options: object): TileLayerOffline;
    }
    class ControlOffline {
        constructor(baseLayer: object, tilesDb: object, options: object);
        initialize(baseLayer: object, tilesDb: object, options: object): void;
        onAdd(map: object): HTMLElement;
    }
    function control(): Control;
    namespace control {
        function offline(baseLayer: object, tilesDb: object, options: object): ControlOffline;
    }
}
