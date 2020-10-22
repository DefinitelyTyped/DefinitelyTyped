// Type definitions for cordova-plugin-mapsforge
// Project: https://github.com/afsuarez/mapsforge-cordova-plugin
// Definitions by: rafw87 <https://github.com/rafw87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Window {
    mapsforge: MapsforgePlugin;
}

declare var mapsforge: MapsforgePlugin;

interface MapsforgePlugin {
    embedded: MapsforgeEmbeddedPlugin;
    cache: MapsforgeCachePlugin;
}

interface MapsforgeEmbeddedPlugin {

    COLOR_DKGRAY: number|string;
    COLOR_CYAN: number|string;
    COLOR_BLACK: number|string;
    COLOR_BLUE: number|string;
    COLOR_GREEN: number|string;
    COLOR_RED: number|string;
    COLOR_WHITE: number|string;
    COLOR_TRANSPARENT: number|string;
    COLOR_YELLOW: number|string;

    MARKER_RED: number|string;
    MARKER_GREEN: number|string;
    MARKER_BLUE: number|string;
    MARKER_YELLOW: number|string;
    MARKER_BLACK: number|string;
    MARKER_WHITE: number|string;

    /**
     * The map file path provided must be the absolute file path. You can specify the width and height values for the view that will be added,
     * or you can set them to 0 for set the value to MATCH_PARENT. You must call this method before any other method.
     * @param args Array in the following form: [String mapFilePath, int viewWidth, int viewHeight].
     * @param success Success callback.
     * @param error Error callback
     */
    initialize(args: any[], success?: () => void, error?: (message: string) => void): void;

    /**
     * To show the map view.
     * @param success Success callback.
     * @param error Error callback
     */
    show(success?: () => void, error?: (message: string) => void): void;

    /**
     * To hide the map view.
     * @param success Success callback.
     * @param error Error callback
     */
    hide(success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the center of the map to the given coordinates.
     * @param lat Latitude of the new center.
     * @param lng Longitude of the new center.
     * @param success Success callback.
     * @param error Error callback
     */
    setCenter(lat: number, lng: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the zoom to the specified value (if it is between the zoom limits).
     * @param zoomLevel New zoom level.
     * @param success Success callback.
     * @param error Error callback
     */
    setZoom(zoomLevel: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the maximum zoom level.
     * @param maxZoom New maximum zoom level.
     * @param success Success callback.
     * @param error Error callback
     */
    setMaxZoom(maxZoom: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the minimum zoom level.
     * @param minZoom New minimum zoom level.
     * @param success Success callback.
     * @param error Error callback
     */
    setMinZoom(minZoom: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * The path to the map ile is required, and the path to the render theme may be null in order to apply the default render theme.
     * @param args Array in the following form: [String mapFilePath, String renderThemePath]
     * @param success Success callback.
     * @param error Error callback
     */
    setOfflineTileLayer(args: any[], success?: () => void, error?: (message: string) => void): void;

    /**
     *
     * @param args Array in the following form: [String providerName, String host, String baseUrl, String extension, int port]
     * @param success Success callback.
     * @param error Error callback
     */
    setOnlineTileLayer(args: any[], success?: () => void, error?: (message: string) => void): void;

    /**
     * Adds a marker to the map in the specified coordinates and returns the key for that marker to the success function.
     * @param arg Array in the following form: [String marker_color, double lat, double lng].
     * The color of the marker should be one of the constants from mapsforge.embedded object; if the marker doesn't exist a green marker will be used instead.
     * @param success Success callback. Gets the key of created marker. That key is the one you have to use if you want to delete it.
     * @param error Error callback
     */
    addMarker(arg: any[], success?: (key: number) => void, error?: (message: string) => void): void;

    /**
     *
     * @param arg Array in the following form: [int color, int strokeWidth,[double points]].
     * The color can be one of the constants specified before, or the new color you want.
     * This function will use the odd positions of the array of points for the latitudes and the even positions for the longitudes.
     * Example: [lat1, lng1, lat2, lng2, lat3, lng3].
     * If the length of the array is not even, the function will throw an exception and return the error message to the error function.
     * @param success Success callback. Gets the key of created polyline.
     * @param error Error callback
     */
    addPolyline(arg: any[], success?: (key: number) => void, error?: (message: string) => void): void;

    /**
     * Deletes the layer(markers or polylines) with the specified key from the map.
     * @param key Key of marker or polyline.
     * @param success Success callback.
     * @param error Error callback
     */
    deleteLayer(key: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * Initializes again the map if the onStop method was called.
     * @param success Success callback.
     * @param error Error callback
     */
    onStart(success?: () => void, error?: (message: string) => void): void;


    /**
     * Stops the rendering. Useful for when the app goes to the background. You have to call the onStart method to restart it.
     * @param success Success callback.
     * @param error Error callback
     */
    onStop(success?: () => void, error?: (message: string) => void): void;

    /**
     * Stops and cleans the resources that have been used.
     * @param success Success callback.
     * @param error Error callback
     */
    onDestroy(success?: () => void, error?: (message: string) => void): void;
}

interface MapsforgeCachePlugin {

    /**
     * You should call this method before any other one, and provide it with the absolute map file path.
     * @param mapFilePath Absolute map file path.
     * @param success Success callback.
     * @param error Error callback
     */
    initialize(mapFilePath: string, success?: () => void, error?: (message: string) => void): void;

    /**
     * This method is the one that provides the tiles, generating them if their are not in the cache.
     * @param args Array in the following form: [double lat, double lng, byte zoom]
     * @param success Success callback. Gets the tile path.
     * @param error Error callback
     */
    getTile(args: any[], success?: (tilePath: string) => void, error?: (message: string) => void): void;

    /**
     * Enables or disables the cache. If disabled, the plugin will generate the tiles always from scratch. Cache is enabled by default.
     * @param enabled Cache enabled or disabled.
     * @param success Success callback.
     * @param error Error callback
     */
    setCacheEnabled(enabled: boolean, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets whether or not the cache should be placed in the internal memory or in the SD card.
     * By default it is placed in SD card, so devices with not too much memory have a better performance.
     * @param external Cache external or internal.
     * @param success Success callback.
     * @param error Error callback
     */
    setExternalCache(external: boolean, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the map file to be used for rendering to the map specified by its absolute path.
     * @param absolutePath Absolute map file path.
     * @param success Success callback.
     * @param error Error callback
     */
    setMapFile(absolutePath: string, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the age for the generated images. This means that when the cache is being cleaned, all images younger than the specified value will be kept in the cache in order to avoid deleting images that are being used at the moment.
     * @param milliseconds Max cache age in milliseconds.
     * @param success Success callback.
     * @param error Error callback
     */
    setMaxCacheAge(milliseconds: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the maximum size for the cache. This size must be specified in megabytes. If there is not that space available, the cache will fit the maximum size.
     * @param sizeInMB Max cache size in megabytes.
     * @param success Success callback.
     * @param error Error callback
     */
    setMaxCacheSize(sizeInMB: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets the tile size. By default the tile size is set to 256.
     * @param size Tile size.
     * @param success Success callback.
     * @param error Error callback
     */
    setMaxCacheSize(size: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * This method sets the size in megabytes that will remain always available in memory in order to avoid that the application uses all space available.
     * @param sizeInMB Size in megabytes that will remain always available in memory.
     * @param success Success callback.
     * @param error Error callback
     */
    setCacheCleaningTrigger(sizeInMB: number, success?: () => void, error?: (message: string) => void): void;

    /**
     * Sets a flag to destroy the cache when the onDestroy method is called.
     * @param destroy If true, cache will be destroyed when the onDestroy method will be called.
     * @param success Success callback.
     * @param error Error callback
     */
    destroyCacheOnExit(destroy: boolean, success?: () => void, error?: (message: string) => void): void;

    /**
     * Deletes the cache depending on the flag state.
     * @param success Success callback.
     * @param error Error callback
     */
    onDestroy(success?: () => void, error?: (message: string) => void): void;
}
