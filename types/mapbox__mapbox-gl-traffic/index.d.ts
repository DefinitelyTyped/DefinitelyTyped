/// <reference types="mapbox-gl" />
/// <reference types="node" />

export as namespace MapboxTraffic;
export = MapboxTraffic;

declare class MapboxTraffic {
    /**
     * Create a new [Mapbox GL JS plugin](https://www.mapbox.com/blog/build-mapbox-gl-js-plugins/) that allows you to hide and show
     * traffic layers in your map and an optional toggle button.
     *
     * @param options - Options to configure the plugin.
     */
    constructor(options?: MapboxTraffic.Options);
    _hasTraffic(): boolean;
    _hideTraffic(): void;
    _showTraffic(): void;
    onAdd(map: mapboxgl.Map): HTMLDivElement;
    onRemove(): void;
    render(): void;
    /**
     * Toggle visibility of traffic layer.
     */
    toggleTraffic(): void;
}

declare namespace MapboxTraffic {
    /** Options to configure the `MapboxTraffic` plugin. */
    interface Options {
        /**
         * Show or hide traffic overlay by default.
         *
         * @default false
         */
        showTraffic?: boolean;
        /**
         * Show a toggle button to turn traffic on and off.
         *
         * @default true
         */
        showTrafficButton?: boolean;
        /**
         * The traffic source regex used to determine whether a layer displays traffic or not.
         *
         * @default /mapbox-traffic-v\d/
         */
        trafficSource?: RegExp;
    }
}
