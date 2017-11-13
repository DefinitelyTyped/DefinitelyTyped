// Type definitions for esri-leaflet-geocoder 2.2
// Project: https://github.com/Esri/esri-leaflet-geocoder
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as L from 'leaflet';
import 'esri-leaflet';

declare module 'leaflet' {
    namespace esri.Geocoding {
        type GeosearchConstructor = new (options?: GeosearchObject) => Geosearch;
        type Geosearch = GeosearchControl & Evented;

        interface GeosearchControl extends Control {
            clear(): this;
            clearSuggestions(): this;
            disable(): this;
            enable(): this;
        }

        const Geosearch: GeosearchConstructor;

        function geosearch(options?: GeosearchObject): Geosearch;

        interface GeosearchObject {
            position?: ControlPosition;
            zoomToResult?: boolean;
            useMapBounds?: boolean | number;
            collapseAfterResult?: boolean;
            expanded?: boolean;
            allowMultipleResults?: boolean;
            providers?: GeosearchProvider[];
            placeholder?: string;
            title?: string;
            searchBounds?: LatLngBoundsExpression | null;
        }

        class GeocodeService extends Service {
            constructor(options?: GeocodeServiceOptions);
            geocode(): Geocode;
            suggest(): Suggest;
            reverse(): ReverseGeocode;
        }

        function geocodeService(options?: GeocodeServiceOptions): GeocodeService;

        interface GeocodeServiceOptions extends ServiceOptions {
            supportsSuggest?: boolean;
        }

        class Geocode extends Task {
            constructor(options?: TaskOptions | Service);
            text(text: string): this;
            address(text: string): this;
            neighborhood(text: string): this;
            city(text: string): this;
            subregion(text: string): this;
            region(text: string): this;
            postal(text: string): this;
            country(text: string): this;
            category(text: string): this;
            within(bounds: LatLngBoundsExpression): this;
            nearby(latlng: LatLngExpression, distance: number): this;
            run(callback: (error: any | undefined, results: { results: any[] }, response: any) => void, context?: any): this;
        }

        function geocode(options?: TaskOptions | Service): Geocode;

        class Suggest extends Task {
            constructor(options?: TaskOptions | Service);
            text(text: string): this;
            category(text: string): this;
            within(bounds: LatLngBoundsExpression): this;
            nearby(latlng: LatLngExpression, distance: number): this;
            run(callback: (error: any | undefined, results: any, response: any) => void, context?: any): this;
        }

        function suggest(options?: TaskOptions | Service): Suggest;

        class ReverseGeocode extends Task {
            constructor(options?: TaskOptions | Service);
            latlng(latlng: LatLngExpression): this;
            distance(distance: number): this;
            language(language: string): this;
            run(callback: (error: any | undefined, results: { latlng: LatLng; address: string; }, response: any) => void, context?: any): this;
        }

        function reverseGeocode(options?: TaskOptions | Service): ReverseGeocode;

        interface GeosearchProvider {
            suggestions(text: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Task;
            results(text: string, key: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Task;
        }
        type GeosearchCallback = (error: any | undefined, results: any) => void;

        interface BaseProviderOptions {
            label?: string;
            maxResults?: number;
            attribution?: string;
            token?: string | null;
        }

        class ArcgisOnlineProvider extends GeocodeService implements GeosearchProvider {
            constructor(options?: ArcgisOnlineProviderOptions);
            suggestions(text: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Suggest;
            results(text: string, key: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Geocode;
        }

        function arcgisOnlineProvider(options?: ArcgisOnlineProviderOptions): ArcgisOnlineProvider;

        interface ArcgisOnlineProviderOptions extends BaseProviderOptions {
            countries?: string | string[];
            categories?: string | string[];
            forStorage?: boolean;
        }

        class GeocodeServiceProvider extends GeocodeService implements GeosearchProvider {
            constructor(options?: GeocodeServiceProviderOptions);
            suggestions(text: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Suggest;
            results(text: string, key: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Geocode;
        }

        function geocodeServiceProvider(options?: GeocodeServiceProviderOptions): GeocodeServiceProvider;

        interface GeocodeServiceProviderOptions extends BaseProviderOptions {
            url: string;
        }

        class FeatureLayerProvider extends FeatureLayerService implements GeosearchProvider {
            constructor(options?: FeatureLayerProviderOptions);
            suggestions(text: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Query;
            results(text: string, key: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Query;
        }

        function featureLayerProvider(options?: FeatureLayerProviderOptions): FeatureLayerProvider;

        interface FeatureLayerProviderOptions extends BaseProviderOptions {
            url: string;
            searchFields?: string | string[];
            bufferRadius?: number;
            formatSuggestion?(featureInformation: any): string;
        }

        class MapServiceProvider extends MapService implements GeosearchProvider {
            constructor(options?: MapServiceProviderOptions);
            suggestions(text: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Find;
            results(text: string, key: string, bounds: LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Query | Find;
        }

        function mapServiceProvider(options?: MapServiceProviderOptions): MapServiceProvider;

        interface MapServiceProviderOptions extends BaseProviderOptions {
            url: string;
            searchFields: string | string[];
            layers: number | number[];
            bufferRadius: number | number[];
            formatSuggestion(featureInformation: any): string;
        }

        interface ResultObject {
            text?: string;
            bounds?: LatLngBoundsExpression;
            latlng?: LatLngExpression;
            properties?: any;
            geojson?: GeoJSON;
            [key: string]: any;
        }

        interface Results {
            bounds: LatLngBoundsExpression;
            latlng: LatLngExpression;
            results: ResultObject[];
        }
    }
}
