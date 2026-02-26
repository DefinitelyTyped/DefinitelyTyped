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
         * Use to set a custom API origin.
         * @default "https://api.mapbox.com"
         */
        origin?: string | undefined;
        /**
         * A [mapbox-gl](https://github.com/mapbox/mapbox-gl-js/api/#marker) instance to use when creating [Markers](https://docs.mapbox.com/mapbox-gl-js/api/#marker).
         * Required if `options.marker` is `true`.
         */
        mapboxgl?: typeof mapboxgl | undefined;
        /**
         * On geocoded result what zoom level should the map animate to when a bbox isn't found in the response. If a bbox is found the map will fit to the bbox.
         * @default 16
         */
        zoom?: number | undefined;
        /**
         * Override the default placeholder attribute value.
         * @default "Search"
         */
        placeholder?: string | undefined;
        /**
         * If `false`, animating the map to a selected result is disabled. If `true`, animating the map will use the default animation parameters.
         * If an object, it will be passed as `options` to the map [`flyTo`](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto)
         * or [`fitBounds`](https://docs.mapbox.com/mapbox-gl-js/api/#map#fitbounds) method providing control over the animation of the transition.
         * @default true
         */
        flyTo?: boolean | mapboxgl.EasingOptions | undefined;
        /**
         * a geographical point given as an object with `latitude` and `longitude` properties, or the string 'ip' to use a user's IP address location. Search results closer to this point will be given higher priority.
         */
        proximity?: LngLatLiteral | "ip" | undefined;
        /**
         * If `true`, the geocoder proximity will automatically update based on the map view.
         * @default true
         */
        trackProximity?: boolean | undefined;
        /**
         * If `true`, the geocoder control will collapse until hovered or in focus.
         * @default false
         */
        collapsed?: boolean | undefined;
        /**
         * If `true`, the geocoder control will clear it's contents and blur when user presses the escape key.
         * @default false
         */
        clearAndBlurOnEsc?: boolean | undefined;
        /**
         * If `true`, the geocoder control will clear its value when the input blurs.
         * @default false
         */
        clearOnBlur?: boolean | undefined;
        /**
         * a bounding box argument: this is a bounding box given as an array in the format [minX, minY, maxX, maxY].
         * Search results will be limited to the bounding box.
         */
        bbox?: Bbox | undefined;
        /**
         * If `true`, search input coordinates for reverse geocoding is expected to be in the form `lon, lat` instead of the default `lat, lon`.
         * @default false
         */
        flipCoordinates?: boolean | undefined;
        /**
         * a comma seperated list of types that filter results to match those specified. See https://www.mapbox.com/developers/api/geocoding/#filter-type for available types.
         */
        types?: string | undefined;
        /**
         * a comma separated list of country codes to limit results to specified country or countries.
         */
        countries?: string | undefined;
        /**
         * Minimum number of characters to enter before results are shown.
         * @default 2
         */
        minLength?: number | undefined;
        /**
         * Maximum number of results to show.
         * @default 5
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
            ) => Promise<GeoJSON.FeatureCollection["features"]>)
            | undefined;
        /**
         * If `true`, enable reverse geocoding mode. In reverse geocoding, search input is expected to be coordinates in the form `lat, lon`, with suggestions being the reverse geocodes.
         * @default false
         */
        reverseGeocode?: boolean | undefined;
        /**
         * Allow Mapbox to collect anonymous usage statistics from the plugin.
         * @default true
         */
        enableEventLogging?: boolean | undefined;
        /**
         * If `true` enable user geolocation feature.
         * @default false
         */
        enableGeolocation?: boolean | undefined;
        /**
         * The accuracy for the geolocation feature with which we define the address line to fill. The browser API returns the user's position with accuracy, and sometimes we can get the neighbor's address. To prevent receiving an incorrect address, you can reduce the accuracy of the definition.
         * @default "street"
         */
        addressAccuracy?: "address" | "street" | "place" | "country" | undefined;
        /**
         * If `true`, a [Marker](https://docs.mapbox.com/mapbox-gl-js/api/#marker) will be added to the map at the location of the user-selected result using a default set of Marker options.
         * If the value is an object, the marker will be constructed using these options. If `false`, no marker will be added to the map.
         * Requires that `options.mapboxgl` also be set.
         * @default true
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
         * HTML tags in the output string will not be rendered.
         * @default (item) => item.place_name
         */
        getItemValue?: ((feature: Result) => string) | undefined;
        /**
         *  A string specifying the geocoding [endpoint](https://docs.mapbox.com/api/search/#endpoints) to query.
         * Options are `mapbox.places` and `mapbox.places`. The `mapbox.places-permanent` mode requires an enterprise license for permanent geocodes.
         * @default "mapbox.places"
         */
        mode?: "mapbox.places" | "mapbox.places-permanent" | undefined;
        /**
         * A function accepting the query string which performs local geocoding to supplement results from the Mapbox Geocoding API.
         * Expected to return an Array of GeoJSON Features in the [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) format.
         */
        localGeocoder?: ((query: string) => Result[]) | undefined;
        /**
         * If `true`, indicates that the `localGeocoder` results should be the only ones returned to the user.
         * If `false`, indicates that the `localGeocoder` results should be combined with those from the Mapbox API with the `localGeocoder` results ranked higher.
         * @default false
         */
        localGeocoderOnly?: boolean | undefined;
        /**
         * Specify whether to return autocomplete results or not. When autocomplete is enabled,
         * results will be included that start with the requested string, rather than just responses
         * that match it exactly.
         * @default true
         */
        autocomplete?: boolean | undefined;
        /**
         *  Specify whether the Geocoding API should attempt approximate, as well as exact, matching
         *  when performing searches, or whether it should opt out of this behavior and only attempt
         *  exact matching.
         * @default true
         */
        fuzzyMatch?: boolean | undefined;
        /**
         * Specify whether to request additional metadata about the recommended navigation
         * destination corresponding to the feature or not. Only applicable for address features.
         * @default false
         */
        routing?: boolean | undefined;
        /**
         * Filter results to geographic features whose characteristics are defined differently by
         * audiences belonging to various regional, cultural, or political groups.
         * @default "us"
         */
        worldview?: string | undefined;
        /**
         * If `true`, the geocoder will use the browser's focus event to show suggestions.
         * If `false`, it will only highlight active suggestions and Tab will not propagate to the suggestions list.
         * @default false
         */
        useBrowserFocus?: boolean | undefined;

        /**
         * Set the factors that are used to sort nearby results.
         * @default "distance"
         */
        reverseMode?: "distance" | "score" | undefined;
    }
}
/**
 * A geocoder component using the [Mapbox Geocoding API](https://docs.mapbox.com/api/search/#geocoding)
 */
declare class MapboxGeocoder implements mapboxgl.IControl {
    constructor(options?: MapboxGeocoder.GeocoderOptions);
    /**
     * The input element created by the geocoder's internal operations.
     */
    _inputEl?: HTMLInputElement;
    /**
     * Add the geocoder to a container. The container can be either a `mapboxgl.Map`, an `HTMLElement` or a CSS selector string.
     *
     * If the container is a [`mapboxgl.Map`](https://docs.mapbox.com/mapbox-gl-js/api/map/), this function will behave identically to [`Map.addControl(geocoder)`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addcontrol).
     * If the container is an instance of [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), then the geocoder will be appended as a child of that [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
     * If the container is a [CSS selector string](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), the geocoder will be appended to the element returned from the query.
     *
     * This function will throw an error if the container is none of the above.
     * It will also throw an error if the referenced HTML element cannot be found in the `document.body`.
     *
     * For example, if the HTML body contains the element `<div id='geocoder-container'></div>`, the following script will append the geocoder to `#geocoder-container`:
     *
     * ```javascript
     * var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
     * geocoder.addTo('#geocoder-container');
     * ```
     * @param container A reference to the container to which to add the geocoder
     */
    addTo(container: string | HTMLElement | mapboxgl.Map): this;
    onAdd(map: mapboxgl.Map): HTMLElement;
    /**
     * Set the accessToken option used for the geocoding request endpoint.
     * @param accessToken value
     */
    setAccessToken(accessToken: string): MapboxGeocoder;
    /**
     * Create icon
     * @param name The name of the icon
     * @param path The SVG path of the icon
     */
    createIcon(name: string, path: any): SVGSVGElement;
    /**
     * Remove control
     */
    onRemove(): this;
    /**
     * Clear and then focus the input.
     * @param ev the event that triggered the clear, if available
     */
    clear(ev?: Event): void;
    /**
     * Set & query the input
     * @param searchInput location name or other search input
     */
    query(searchInput: string): this;
    /**
     * Set input
     * @param searchInput location name or other search input
     * @param showSuggestions display suggestion on setInput call
     */
    setInput(searchInput: string, showSuggestions?: boolean): this;
    /**
     * @param proximity The new `options.proximity` value. This is a geographical point given as an object with `latitude` and `longitude` properties or the string 'ip'.
     * @param disableTrackProximity If true, sets `trackProximity` to false. True by default to prevent `trackProximity` from unintentionally overriding an explicitly set proximity value.
     */
    setProximity(proximity: MapboxGeocoder.LngLatLiteral | "ip", disableTrackProximity?: boolean): this;
    /**
     * Get the geocoder proximity
     */
    getProximity(): MapboxGeocoder.LngLatLiteral;
    /**
     * Set the render function used in the results dropdown
     * @param fn The function to use as a render function. This function accepts a single [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) object as input and returns a string.
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
     * @param language Specify the language to use for response text and query result weighting.
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
     * @param zoom The zoom level that the map should animate to when a `bbox` isn't found in the response. If a `bbox` is found the map will fit to the `bbox`.
     */
    setZoom(zoom: number): this;
    /**
     * Set the flyTo options
     * @param flyTo If false, animating the map to a selected result is disabled. If true, animating the map will use the default animation parameters.
     * If an object, it will be passed as `options` to the map [`flyTo`](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto) or [`fitBounds`](https://docs.mapbox.com/mapbox-gl-js/api/#map#fitbounds)
     * method providing control over the animation of the transition.
     */
    setFlyTo(flyTo: boolean | mapboxgl.EasingOptions): this;
    /**
     * Get the parameters used to fly to the selected response, if any
     */
    getFlyTo(): boolean | mapboxgl.EasingOptions;
    /**
     * Get the value of the placeholder string
     */
    getPlaceholder(): string;
    /**
     * Set the value of the input element's placeholder
     * @param placeholder the text to use as the input element's placeholder
     */
    setPlaceholder(placeholder: string): this;
    /**
     * Get the bounding box used by the plugin
     */
    getBbox(): MapboxGeocoder.Bbox;
    /**
     * Set the bounding box to limit search results to
     * @param bbox a bounding box given as an array in the format [minX, minY, maxX, maxY].
     */
    setBbox(bbox: MapboxGeocoder.Bbox): this;
    /**
     * Get a list of the countries to limit search results to
     */
    getCountries(): string;
    /**
     * Set the countries to limit search results to
     * @param countries a comma separated list of countries to limit to
     */
    setCountries(countries: string): this;
    /**
     * Get a list of the types to limit search results to
     */
    getTypes(): string;
    /**
     * Set the types to limit search results to
     * @param types a comma separated list of types to limit to
     */
    setTypes(types: string): this;
    /**
     * Get the minimum number of characters typed to trigger results used in the plugin
     */
    getMinLength(): number;
    /**
     * Set the minimum number of characters typed to trigger results used by the plugin
     * @param minLength the minimum length in characters
     */
    setMinLength(minLength: number): this;
    /**
     * Get the limit value for the number of results to display used by the plugin
     */
    getLimit(): number;
    /**
     * Set the limit value for the number of results to display used by the plugin
     * @param limit the number of search results to return
     */
    setLimit(limit: number): this;
    /**
     * Get the filter function used by the plugin
     */
    getFilter(): (feature: MapboxGeocoder.Result) => boolean;
    /**
     * Set the filter function used by the plugin.
     * @param filter A function which accepts a Feature in the [extended GeoJSON](https://docs.mapbox.com/api/search/geocoding-v5/#geocoding-response-object) format to filter out results from the Geocoding API response before they are included in the suggestions list. Return `true` to keep the item, `false` otherwise.
     */
    setFilter(filter: (feature: MapboxGeocoder.Result) => boolean): this;
    /**
     * Set the geocoding endpoint used by the plugin.
     * @param origin A function which accepts an HTTPS URL to specify the endpoint to query results from.
     */
    setOrigin(origin: string): this;
    /**
     * Get the geocoding endpoint the plugin is currently set to
     */
    getOrigin(): string;
    /**
     * Set the autocomplete option used for geocoding requests
     * @param value The boolean value to set autocomplete to
     */
    setAutocomplete(value: boolean): this;
    /**
     * Get the current autocomplete parameter value used for requests
     */
    getAutocomplete(): boolean;
    /**
     * Set the fuzzyMatch option used for approximate matching in geocoding requests
     * @param value The boolean value to set fuzzyMatch to
     */
    setFuzzyMatch(value: boolean): this;
    /**
     * Get the current fuzzyMatch parameter value used for requests
     */
    getFuzzyMatch(): boolean;
    /**
     * Set the routing parameter used to ask for routable point metadata in geocoding requests
     * @param value The boolean value to set routing to
     */
    setRouting(value: boolean): this;
    /**
     * Get the current routing parameter value used for requests
     */
    getRouting(): boolean;
    /**
     * Set the worldview parameter
     * @param code The country code representing the worldview (e.g. "us" | "cn" | "jp", "in")
     */
    setWorldview(code: string): this;
    /**
     *  Get the current worldview parameter value used for requests
     */
    getWorldview(): string;
    /**
     * Subscribe to events that happen within the plugin.
     * @param type name of event. Available events and the data passed into their respective event objects are:
     *
     * - __clear__ `Emitted when the input is cleared`
     * - __loading__ `{ query } Emitted when the geocoder is looking up a query`
     * - __results__ `{ results } Fired when the geocoder returns a response`
     * - __result__ `{ result } Fired when input is set`
     * - __error__ `{ error } Error as string`
     * @param fn function that's called when the event is emitted.
     */
    on(type: "clear"): this;
    on(type: "loading", listener: (args: { query: string }) => void): this;
    on(type: "results", listener: (args: { results: MapboxGeocoder.Results }) => void): this;
    on(type: "result", listener: (args: { result: MapboxGeocoder.Result }) => void): this;
    on(type: "error", listener: (args: { error: unknown }) => void): this;
    on(type: string, listener: (...args: any[]) => void): this;
    /**
     * Remove an event
     * @param type Event name.
     * @param fn Function that should unsubscribe to the event emitted.
     */
    off(type: "clear"): this;
    off(type: "loading", listener: (args: { query: string }) => void): this;
    off(type: "results", listener: (args: { results: MapboxGeocoder.Results }) => void): this;
    off(type: "result", listener: (args: { result: MapboxGeocoder.Result }) => void): this;
    off(type: "error", listener: (args: { error: unknown }) => void): this;
    off(type: string, listener: (...args: any[]) => void): this;
}
