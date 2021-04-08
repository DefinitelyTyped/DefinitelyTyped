// Type definitions for leaflet-offline 1.1.0
// Project: https://github.com/robertomlsoares/leaflet-offline#readme
// Definitions by: roblo53@hotmail.com <https://github.com/BETOXL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import * as L from 'leaflet';
import * as LO from 'leaflet-offline';
declare module 'leaflet' {
  export class TileLayerOffline {
    constructor(urlTemplate: string, tilesDb: Object, options?: L.TileLayerOptions);
    initialize(url: String, tilesDb: Object, options: Object): void;
    createTile(coords: Object, done: Function): HTMLElement;
    getTileUrl(coords: Object): String;
    getTileUrls(bounds: Object, zoom: Number): Array<any>;
  }
  export function tileLayer(urlTemplate: string, options?: L.TileLayerOptions): L.TileLayer;
  export namespace tileLayer {
    function offline(url: String, tilesDb: Object, options: Object): TileLayerOffline;
  }
  export class ControlOffline {
    constructor(baseLayer: Object, tilesDb: Object, options: Object);
    initialize (baseLayer: Object, tilesDb: Object, options: Object): void;
    onAdd(map: Object): HTMLElement;
  }
  export function control();
  export namespace control {
    export function offline(baseLayer: Object, tilesDb: Object, options: Object):      ControlOffline;
  }
} 
