/// <reference types="geojson" />

import mapboxgl = require("mapbox-gl");

export as namespace MapboxGeocoder;
export = MapboxGeocoder;

declare namespace MapboxGeocoder {
    interface LngLatLiteral {
        latitude: number;
        longitude: number;
    }
    interface Results extends GeoJSON.FeatureCollection<GeoJSON.Point> {
        attribution: string;
        query: string[];
    }
    interface Result extends GeoJSON.Feature<GeoJSON.Point> {
        bbox: [number, number, number, number];
        center: number[];
        place_name: string;
        place_type: string[];
        relevance: number;
        text: string;
        address: string;
        context: any[];
    }
    type Bbox = [number, number, number, number];
    interface GeocoderOptions {
        accessToken: string;
        /**
         * Use to set a custom API origin. (optional, default "https://api.mapbox.com"
         */
        origin?: string | undefined;
        /**
         * A [mapbox-gl](https://github.com/mapbox/mapbox-gl-js) instance to use when creating [Markers](https://docs.mapbox.com/mapbox-gl-js/api/#marker). Required if `options.marker` is `true`.
         */
        mapboxgl?: typeof mapboxgl | undefined;
        /**
         * On geocoded result what zoom level should the map animate to when a bbox isn't found in the response. If a bbox is found the map will fit to the bbox. (optional, default 16)
         */
        zoom?: number | undefined;
        /**
         * Override the default placeholder attribute value. (optional, default "Search")
         */
        placeholder?: string | undefined;
        /**
         * If `false`, animating the map to a selected result is disabled. If `true`, animating the map will use the default animation parameters.
         * If an object, it will be passed as `options` to the map [`flyTo`](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto)
         * or [`fitBounds`](https://docs.mapbox.com/mapbox-gl-js/api/#map#fitbounds) method providing control over the animation of the transition. (optional, default true)
         */
        flyTo?: boolean | mapboxgl.FlyToOptions | mapboxgl.FitBoundsOptions | undefined;
        /**
         * a proximity argument: this is a geographical point given as an object with latitude and longitude properties. Search results closer to this point will be given higher priority.
         */
        proximity?: LngLatLiteral | undefined;
        /**
         * If `true`, the geocoder proximity will automatically update based on the map view. (optional, default true)
         */
        trackProximity?: boolean | undefined;
        /**
         * If `true`, the geocoder control will collapse until hovered or in focus. (optional, default false)
         */
        collapsed?: boolean | undefined;
        /**
         * If `true`, the geocoder control will clear it's contents and blur when user presses the escape key. (optional, default false)
         */
        clearAndBlurOnEsc?: boolean | undefined;
        /**
         * If `true`, the geocoder control will clear its value when the input blurs. (optional, default false)
         */
        clearOnBlur?: boolean | undefined;
        /**
         * a bounding box argument: this is a bounding box given as an array in the format [minX, minY, maxX, maxY].
         * Search results will be limited to the bounding box.
         */
        bbox?: Bbox | undefined;
        /**
         * a comma seperated list of types that filter results to match those specified. See https://www.mapbox.com/developers/api/geocoding/#filter-type for available types.
         */
        types?: string | undefined;
        /**
         * a comma separated list of country codes to limit results to specified country or countries.
         */
        countries?: string | undefined;
        /**
         * Minimum number of characters to enter before results are shown. (optional, default 2)
         */
        minLength?: number | undefined;
        /**
         * Maximum number of results to show. (optional, default 5)
         */
        limit?: number | undefined;
        /**
         * Specify the language to use for response text and query result weighting.
         * Options are IETF language tags comprised of a mandatory ISO 639-1 language code and optionally one or more IETF subtags for country or script.
         * More than one value can also be specified, separated by commas. Defaults to the browser's language settings.
         */
        language?: string | undefined;
        /**
         * A function which accepts a Feature in the [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md)
         * format to filter out results from the Geocoding API response before they are included in the suggestions list.
         * Return `true` to keep the item, `false` otherwise.
         */
        filter?: ((feature: Result) => boolean) | undefined;
        /**
         * A function accepting the query string and current features list which performs geocoding to supplement results from the Mapbox Geocoding API.
         * Expected to return a Promise which resolves to an Array of GeoJSON Features in the [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) format.
         */
        externalGeocoder?:
            | ((
                searchInput: string,
                features: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
            ) => Promise<GeoJSON.FeatureCollection>)
            | undefined;
        /**
         * If `true`, enable reverse geocoding mode. In reverse geocoding, search input is expected to be coordinates in the form `lat, lon`, with suggestions being the reverse geocodes.
         * (optional, default false)
         */
        reverseGeocode?: boolean | undefined;
        /**
         * Allow Mapbox to collect anonymous usage statistics from the plugin. (optional, default true)
         */
        enableEventLogging?: boolean | undefined;
        /**
         * If `true`, a [Marker](https://docs.mapbox.com/mapbox-gl-js/api/#marker) will be added to the map at the location of the user-selected result using a default set of Marker options.
         * If the value is an object, the marker will be constructed using these options. If `false`, no marker will be added to the map.
         * Requires that `options.mapboxgl` also be set. (optional, default true)
         */
        marker?: boolean | mapboxgl.Marker | undefined;
        /**
         * A function that specifies how the results should be rendered in the dropdown menu.
         * This function should accepts a single [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md)
         * object as input and return a string. Any HTML in the returned string will be rendered.
         */
        render?: ((feature: Result) => string) | undefined;
        /**
         * A function that specifies how the selected result should be rendered in the search bar.
         * This function should accept a single [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) object as input and return a string.
         * HTML tags in the output string will not be rendered. Defaults to `(item) => item.place_name`.
         */
        getItemValue?: ((feature: Result) => string) | undefined;
        /**
         *  A string specifying the geocoding [endpoint](https://docs.mapbox.com/api/search/#endpoints) to query.
         * Options are `mapbox.places` and `mapbox.places`. The `mapbox.places-permanent` mode requires an enterprise license for permanent geocodes. (optional, default "mapbox.places")
         */
        mode?: "mapbox.places" | "mapbox.places-permanent" | undefined;
        /**
         * A function accepting the query string which performs local geocoding to supplement results from the Mapbox Geocoding API.
         * Expected to return an Array of GeoJSON Features in the [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) format.
         */
        localGeocoder?: ((query: string) => Result[]) | undefined;
        /**
         * If `true`, indicates that the `localGeocoder` results should be the only ones returned to the user.
         * If `false`, indicates that the `localGeocoder` results should be combined with those from the Mapbox API with the `localGeocoder` results ranked higher. (optional, default false)
         */
        localGeocoderOnly?: boolean | undefined;
        /**
         * Specify whether to return autocomplete results or not. When autocomplete is enabled,
         * results will be included that start with the requested string, rather than just responses
         * that match it exactly. (optional, default true)
         */
        autocomplete?: boolean | undefined;
        /**
         *  Specify whether the Geocoding API should attempt approximate, as well as exact, matching
         *  when performing searches, or whether it should opt out of this behavior and only attempt
         *  exact matching. (optional, default true)
         */
        fuzzyMatch?: boolean | undefined;
        /**
         * Specify whether to request additional metadata about the recommended navigation
         * destination corresponding to the feature or not. Only applicable for address features.
         * (optional, default false)
         */
        routing?: boolean | undefined;
        /**
         * Filter results to geographic features whose characteristics are defined differently by
         * audiences belonging to various regional, cultural, or political groups. (optional,
         * default "us")
         */
        worldview?: string | undefined;
    }
}
declare class MapboxGeocoder implements mapboxgl.IControl {
    constructor(options?: MapboxGeocoder.GeocoderOptions);
    addTo(container: string | HTMLElement | mapboxgl.Map): this;
    onAdd(map: mapboxgl.Map): HTMLElement;
    createIcon(name: string, path: any): SVGSVGElement;
    onRemove(): this;
    /**
     * Clear and then focus the input.
     * [ev] the event that triggered the clear, if available
     */
    clear(ev?: Event): void;
    /**
     * Set & query the input
     */
    query(searchInput: string): this;
    /**
     * Set input
     * searchInput location name or other search input
     */
    setInput(searchInput: string): this;
    /**
     * Set proximity The new `options.proximity` value. This is a geographical point given as an object with `latitude` and `longitude` properties.
     */
    setProximity(proximity: MapboxGeocoder.LngLatLiteral): this;
    /**
     * Get the geocoder proximity
     */
    getProximity(): MapboxGeocoder.LngLatLiteral;
    /**
     * Set the render function used in the results dropdown
     * The function to use as a render function. This function accepts a single [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) object as input and returns a string.
     */
    setRenderFunction(fn: (feature: MapboxGeocoder.Result) => string): this;
    /**
     * Get the function used to render the results dropdown
     */
    getRenderFunction(): (feature: MapboxGeocoder.Result) => string;
    /**
     * Get the language to use in UI elements and when making search requests
     *
     * Look first at the explicitly set options otherwise use the browser's language settings
     * language Specify the language to use for response text and query result weighting.
     * Options are IETF language tags comprised of a mandatory ISO 639-1 language code and optionally one or more IETF subtags for country or script.
     * More than one value can also be specified, separated by commas.
     */
    setLanguage(language: string): this;
    /**
     * Get the language to use in UI elements and when making search requests
     */
    getLanguage(): string;
    /**
     * Get the zoom level the map will move to when there is no bounding box on the selected result
     */
    getZoom(): number;
    /**
     * Set the zoom level that the map should animate to when a `bbox` isn't found in the response. If a `bbox` is found the map will fit to the `bbox`.
     */
    setZoom(zoom: number): this;
    /**
     * Set the flyTo options
     * If false, animating the map to a selected result is disabled. If true, animating the map will use the default animation parameters.
     * If an object, it will be passed as `options` to the map [`flyTo`](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto) or [`fitBounds`](https://docs.mapbox.com/mapbox-gl-js/api/#map#fitbounds)
     * method providing control over the animation of the transition.
     */
    setFlyTo(flyTo: boolean | mapboxgl.FlyToOptions | mapboxgl.FitBoundsOptions): this;
    /**
     * Get the parameters used to fly to the selected response, if any
     */
    getFlyTo(): boolean | mapboxgl.FlyToOptions | mapboxgl.FitBoundsOptions;
    /**
     * Get the value of the placeholder string
     */
    getPlaceholder(): string;
    /**
     * Set the value of the input element's placeholder
     * placeholder the text to use as the input element's placeholder
     */
    setPlaceholder(placeholder: string): this;
    getBbox(): MapboxGeocoder.Bbox;
    setBbox(bbox: MapboxGeocoder.Bbox): this;
    getCountries(): string;
    setCountries(countries: string): this;
    getTypes(): string;
    setTypes(types: string): this;
    getMinLength(): number;
    setMinLength(minLength: number): this;
    getLimit(): number;
    setLimit(limit: number): this;
    getFilter(): (feature: MapboxGeocoder.Result) => boolean;
    setFilter(filter: (feature: MapboxGeocoder.Result) => boolean): this;
    setOrigin(origin: string): this;
    getOrigin(): string;
    setAutocomplete(value: boolean): this;
    getAutocomplete(): boolean;
    setFuzzyMatch(value: boolean): this;
    getFuzzyMatch(): boolean;
    setRouting(value: boolean): this;
    getRouting(): boolean;
    setWorldview(code: string): this;
    getWorldview(): string;
    /**
     * Subscribe to events that happen within the plugin.
     * type name of event. Available events and the data passed into their respective event objects are:
     *
     * - __clear__ `Emitted when the input is cleared`
     * - __loading__ `{ query } Emitted when the geocoder is looking up a query`
     * - __results__ `{ results } Fired when the geocoder returns a response`
     * - __result__ `{ result } Fired when input is set`
     * - __error__ `{ error } Error as string`
     */
    on(type: string, fn: (...args: any[]) => void): this;
    off(type: string, fn: (...args: any[]) => void): this;
}
