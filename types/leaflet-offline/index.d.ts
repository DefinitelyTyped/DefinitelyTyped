// Type definitions for leaflet-offline 1.1
// Project: https://github.com/robertomlsoares/leaflet-offline#readme
// Definitions by: roblo53@hotmail.com <https://github.com/BETOXL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import * as L from 'leaflet';
import * as LO from 'leaflet-offline';
declare module 'leaflet' {
  export class TileLayerOffline {
    constructor(urlTemplate: string, tilesDb: object, options?: TileLayerOptions);
    initialize(url: string, tilesDb: object, options: object): void;
    createTile(coords: object, done: DoneCallback): HTMLElement;
    getTileUrl(coords: object): string;
    getTileUrls(bounds: object, zoom: Number): any[];
  }
  export function tileLayer(urlTemplate: string, options?: TileLayerOptions): TileLayer;
  export namespace tileLayer {
    function offline(url: string, tilesDb: object, options: object): TileLayerOffline;
  }
  export class ControlOffline {
    constructor(baseLayer: object, tilesDb: object, options: object);
    initialize (baseLayer: object, tilesDb: object, options: object): void;
    onAdd(map: object): HTMLElement;
  }
  export function control();
  export namespace control {
    export function offline(baseLayer: object, tilesDb: object, options: object): ControlOffline;
  }
}
