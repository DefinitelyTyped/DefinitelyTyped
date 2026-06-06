export {};

declare global {
    var TILE_PARAMS: {
        /**
         * @default [200000,200000,200000,200000,200000,60000,60000,10000,5000,2500,2500,800,300,0,0];
         */
        ZOOM_TO_LINK_LENGTH: number[];

        /**
         * @default [8,8,8,8,7,7,7,6,6,5,4,4,3,2,2,1,1];
         */
        ZOOM_TO_LEVEL: number[];

        /**
         * @default  [1,1,1,40,40,80,80,320,1000,2000,2000,4000,8000,16000,16000,32000];
         */
        TILES_PER_EDGE: number[];
    };

    /**
     * Ingress Intel splits up requests for map data (portals, links,fields) into tiles. To get data for the current viewport
     * (i.e. what is currently visible) it first calculates which tiles intersect.
     * For all those tiles, it then calculates the lat/lng bounds of that tile and a quadkey.
     * Both the bounds and the quadkey are “somewhat” required to get complete data.
     *
     * Conversion functions courtesy of @link http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
     */
    function setupDataTileParams(): void;

    interface MapZoomTileParameters {
        level: number;
        tilesPerEdge: number;
        minLinkLength: number;
        hasPortals: boolean;
        zoom: number;
    }

    function getMapZoomTileParameters(zoom: number): MapZoomTileParameters;

    /**
     * we can fetch data at a zoom level different to the map zoom.
     * To improve the cacheing performance, we try and limit the number of zoom levels we retrieve data for
     * to avoid impacting server load, we keep ourselves restricted to a zoom level with the sane number
     * of tilesPerEdge and portal levels visible
     */
    function getDataZoomForMapZoom(mapZoom: number): number;

    function lngToTile(lng: number, params: MapZoomTileParameters): number;
    function latToTile(lat: number, params: MapZoomTileParameters): number;
    function tileToLng(x: number, params: MapZoomTileParameters): number;
    function tileToLat(y: number, params: MapZoomTileParameters): number;

    function pointToTileId(params: MapZoomTileParameters, x: number, y: number): string;
}
