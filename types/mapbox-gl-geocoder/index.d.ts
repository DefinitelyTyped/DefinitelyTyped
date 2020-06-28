// Type definitions for Mapbox GL Geocoder 4.5.1
// Project: https://github.com/mapbox/mapbox-gl-geocoder
// Definitions by: Dmytro Oriekhov <https://github.com/detrixreborn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8.3


import GeoJSON = require('geojson');
import mapboxgl = require('mapbox-gl');

declare module '@mapbox/mapbox-gl-geocoder' {
    export default MapboxGeocoder;
}

declare namespace __MapboxGeocoder {
    interface LngLatLiteral {
        lat: number;
        lng: number;
    }

    type Bbox = [number, number, number, number];

    interface Options {
        accessToken?: string;
        /** On geocoded result what zoom level should the map animate to when a bbox isn't found in the response. If a bbox is found the map will fit to the bbox. (optional, default 16) */
        zoom?: number;
        /** Override the default placeholder attribute value. (optional, default "Search") */
        placeholder?: string;
        /** If false, animating the map to a selected result is disabled. (optional, default true) */
        flyTo?: boolean;
        /** a proximity argument: this is a geographical point given as an object with latitude and longitude properties. Search results closer to this point will be given higher priority. */
        proximity?: LngLatLiteral;
        /** a bounding box argument: this is a bounding box given as an array in the format [minX, minY, maxX, maxY]. Search results will be limited to the bounding box. */
        bbox?: Bbox;
        /** a comma seperated list of types that filter results to match those specified. See https://www.mapbox.com/developers/api/geocoding/#filter-type for available types. */
        types?: string;
        /** ONE or MANY countries from ISO 3166 alpha 2, IMPORTANT separated by comma, example "sa, uk, pl" | "ua" */
        countries?: string;
        // Specify the user’s language.  ISO 639-1 language code
        language?: string;
        /** Minimum number of characters to enter before results are shown. (optional, default 2) */
        minLength?: number;

        /*
         * use next..
         *
         *  1) import mapboxglLib from 'mapbox-gl';
         *  2)  new MapboxGeocoder({
            3)     accessToken: mapboxgl.accessToken,
            4)     mapboxgl,
            5)  })
         */
        mapboxgl: any;

        /** Maximum number of results to show. (optional, default 5) */
        limit?: number;
    }

    interface Results extends GeoJSON.FeatureCollection<GeoJSON.Point> {
        attribution: string;
        query: string[];
    }

    interface Result extends GeoJSON.Feature<GeoJSON.Point> {
        bbox: Bbox;
        center: number[];
        place_name: string;
        place_type: string[];
        relevance: number;
        text: string;
    }
}

export class MapboxGeocoder extends mapboxgl.Control {
    constructor(options?: __MapboxGeocoder.Options);
    /**
     * Set & query the input
     * @param searchInput location name or other search input
     */
    public query(searchInput: string): this;
    /**
     * Set input
     * @param value // location name or other search input
     */
    public setInput(value: string): this;
    /**
     * Set proximity
     * @param proximity The new options.proximity value. This is a geographical point given as an object with latitude and longitude properties.
     * @return { MapboxGeocoder } this
     */
    public setProximity(proximity: __MapboxGeocoder.LngLatLiteral): this;
    /**
     * Get proximity
     * @returns The geocoder proximity
     */
    public getProximity(): __MapboxGeocoder.LngLatLiteral;
    /**
     * Subscribe to events that happen within the plugin.
     * @param type name of event. Available events and the data passed into their respective event objects are:
     *
     * - __clear__ `Emitted when the input is cleared`
     * - __loading__ `{ query } Emitted when the geocoder is looking up a query`
     * - __results__ `{ results } Fired when the geocoder returns a response`
     * - __result__ `{ result } Fired when input is set`
     * - __error__ `{ error } Error as string
     * @param fn function that's called when the event is emitted.
     */
    
    /**
     * Set the render function used in the results dropdown
     * @param {Function} fn The function to use as a render function. This function accepts a single [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) object as input and returns a string.
     * @returns {MapboxGeocoder} this
     */
    public setRenderFunction (fn: Function): this;
    
    /**
     * Get the function used to render the results dropdown
     *
     * @returns {Function} the render function
     */
    public getRenderFunction (): Function;
    
    /**
     * Get the language to use in UI elements and when making search requests
     *
     * Look first at the explicitly set options otherwise use the browser's language settings
     * @param {String} language Specify the language to use for response text and query result weighting. Options are IETF language tags comprised of a mandatory ISO 639-1 language code and optionally one or more IETF subtags for country or script. More than one value can also be specified, separated by commas.
     * @returns {MapboxGeocoder} this
     */
    public setLanguage(language: string): this;
    
    /**
     * Get the language to use in UI elements and when making search requests
     * @returns {String} The language(s) used by the plugin, if any
     */
    public getLanguage(): string;
    
    /**
     * Get the zoom level the map will move to when there is no bounding box on the selected result
     * @returns {Number} the map zoom
     */
    public getZoom(): number;
    
    /**
     * Set the zoom level
     * @param {Number} zoom The zoom level that the map should animate to when a `bbox` isn't found in the response. If a `bbox` is found the map will fit to the `bbox`.
     * @returns {MapboxGeocoder} this
     */
    public setZoom(zoom: number): this;
    
    /**
     * Get the parameters used to fly to the selected response, if any
     * @returns {Boolean|Object} The `flyTo` option
     */
    public getFlyTo(): boolean | Object;
    
    /**
     * Set the flyTo options
     * @param {Boolean|Object} flyTo If false, animating the map to a selected result is disabled. If true, animating the map will use the default animation parameters. If an object, it will be passed as `options` to the map [`flyTo`](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto) or [`fitBounds`](https://docs.mapbox.com/mapbox-gl-js/api/#map#fitbounds) method providing control over the animation of the transition.
     */
    public setFlyTo(): boolean | Object;
    
    /**
     * Get the value of the placeholder string
     * @returns {String} The input element's placeholder value
     */
    public getPlaceholder(): string;
    
    /**
     * Set the value of the input element's placeholder
     * @param {String} placeholder the text to use as the input element's placeholder
     * @returns {MapboxGeocoder} this
     */
    
    public setPlaceholder(placeholder: string): this;
    
    /**
     * Get the bounding box used by the plugin
     * @returns {Array<Number>} the bounding box, if any
     */
    public getBbox(): __MapboxGeocoder.Bbox;
    
    /**
     * Set the bounding box to limit search results to
     * @param {Array<Number>} bbox a bounding box given as an array in the format [minX, minY, maxX, maxY].
     * @returns {MapboxGeocoder} this
     */
    public setBbox(bbox: __MapboxGeocoder.Bbox): this;
    
    /**
     * Get a list of the countries to limit search results to
     * @returns {String} a comma separated list of countries to limit to, if any
     */
    public getCountries(): string;
    
    /**
     * Set the countries to limit search results to
     * @param {String} countries a comma separated list of countries to limit to
     * @returns {MapboxGeocoder} this
     */
    public setCountries(countries: string): this;
    
    /**
     * Get a list of the types to limit search results to
     * @returns {String} a comma separated list of types to limit to
     */
    public getTypes(): string;
    
    /**
     * Set the types to limit search results to
     * @param {String} types a comma separated list of types to limit to
     * @returns {MapboxGeocoder} this
     */
    public setTypes(types: string): this;
    
    /**
     * Get the minimum number of characters typed to trigger results used in the plugin
     * @returns {Number} The minimum length in characters before a search is triggered
     */
    public getMinLength(): number;
    
    /**
     * Set the minimum number of characters typed to trigger results used by the plugin
     * @param {Number} minLength the minimum length in characters
     * @returns {MapboxGeocoder} this
     */
    public setMinLength(minLength: number): this;
    
    /**
     * Get the limit value for the number of results to display used by the plugin
     * @returns {Number} The limit value for the number of results to display used by the plugin
     */
    public getLimit(): number;
    
    /**
     * Set the limit value for the number of results to display used by the plugin
     * @param {Number} limit the number of search results to return
     * @returns {MapboxGeocoder}
     */
    
    public setLimit(limit: number): this;
    
    /**
     * Get the filter function used by the plugin
     * @returns {Function} the filter function
     */
    public getFilter(): Function;
    
    /**
     * Set the filter function used by the plugin.
     * @param {Function} filter A function which accepts a Feature in the [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) format to filter out results from the Geocoding API response before they are included in the suggestions list. Return `true` to keep the item, `false` otherwise.
     * @returns {MapboxGeocoder} this
     */
    public setFilter(filter: Function): this;
    
    /**
     * Set the geocoding endpoint used by the plugin.
     * @param {Function} origin A function which accepts an HTTPS URL to specify the endpoint to query results from.
     * @returns {MapboxGeocoder} this
     */
    
    public setOrigin(origin: Function): this;
    
    /**
     * Get the geocoding endpoint the plugin is currently set to
     * @returns {Function} the endpoint URL
     */
    
    public getOrigin(): Function;
    
    /**
     * Add the geocoder to a container. The container can be either a `mapboxgl.Map` or a reference to an HTML `class` or `id`.
     *
     * If the container is a `mapboxgl.Map`, this function will behave identically to `Map.addControl(geocoder)`.
     * If the container is an HTML `id` or `class`, the geocoder will be appended to that element.
     *
     * This function will throw an error if the container is not either a map or a `class`/`id` reference.
     * It will also throw an error if the referenced HTML element cannot be found in the `document.body`.
     *
     * For example, if the HTML body contains the element `<div id='geocoder-container'></div>`, the following script will append the geocoder to `#geocoder-container`:
     *
     * ```javascript
     * var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
     * geocoder.addTo('#geocoder-container');
     * ```
     * @param {String|mapboxgl.Map} container A reference to the container to which to add the geocoder
     */
    public addTo(container: mapboxgl.Map | string): this;
    
    
    public on(type: 'clear', listener: () => any): this;
    public on(type: 'loading', listener: (ev: { query: string; }) => any): this;
    public on(type: 'results', listener: (results: __MapboxGeocoder.Results) => any): this;
    public on(type: 'result', listener: (ev: { result: __MapboxGeocoder.Result}) => any): this;
    public on(type: 'error', listener: (e: { error: any }) => any): this;
    public on(type: string, listener: Function): this;
    public on(type: string, layer: string, listener: Function): this;
    /**
     * Remove an event
     * @param type Event name.
     * @param fn Function that should unsubscribe to the event emitted.
     */
    public off(type: string, listener: Function): this;
    public off(type: string, layer: string, listener: Function): this;
}
