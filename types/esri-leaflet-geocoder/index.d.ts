// Type definitions for esri-leaflet-geocoder 2.2
// Project: https://github.com/Esri/esri-leaflet-geocoder
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as leaflet from 'leaflet';
import { esri as esriLeaflet } from 'esri-leaflet';

export = L;

declare global {
    namespace L.esri.Geocoding {
        type GeosearchConstructor = new (options?: GeosearchObject) => Geosearch;
        type Geosearch = GeosearchControl & leaflet.Evented;

        interface GeosearchControl extends leaflet.Control {
            clear(): this;
            clearSuggestions(): this;
            disable(): this;
            enable(): this;
        }

        const Geosearch: GeosearchConstructor;

        function geosearch(options?: GeosearchObject): Geosearch;

        interface GeosearchObject {
            position?: leaflet.ControlPosition;
            zoomToResult?: boolean;
            useMapBounds?: boolean | number;
            collapseAfterResult?: boolean;
            expanded?: boolean;
            allowMultipleResults?: boolean;
            providers?: GeosearchProvider[];
            placeholder?: string;
            title?: string;
            searchBounds?: leaflet.LatLngBoundsExpression | null;
        }

        class GeocodeService extends esriLeaflet.Service {
            constructor(options?: GeocodeServiceOptions);
            geocode(): Geocode;
            suggest(): Suggest;
            reverse(): ReverseGeocode;
        }

        function geocodeService(options?: GeocodeServiceOptions): GeocodeService;

        interface GeocodeServiceOptions extends esriLeaflet.ServiceOptions {
            supportsSuggest?: boolean;
        }

        class Geocode extends esriLeaflet.Task {
            constructor(options?: esriLeaflet.TaskOptions | esriLeaflet.Service);
            text(text: string): this;
            address(text: string): this;
            neighborhood(text: string): this;
            city(text: string): this;
            subregion(text: string): this;
            region(text: string): this;
            postal(text: string): this;
            country(text: string): this;
            category(text: string): this;
            within(bounds: leaflet.LatLngBoundsExpression): this;
            nearby(latlng: leaflet.LatLngExpression, distance: number): this;
            run(callback: (error: any | undefined, results: { results: any[] }, response: any) => void, context?: any): this;
        }

        function geocode(options?: esriLeaflet.TaskOptions | esriLeaflet.Service): Geocode;

        class Suggest extends esriLeaflet.Task {
            constructor(options?: esriLeaflet.TaskOptions | esriLeaflet.Service);
            text(text: string): this;
            category(text: string): this;
            within(bounds: leaflet.LatLngBoundsExpression): this;
            nearby(latlng: leaflet.LatLngExpression, distance: number): this;
            run(callback: (error: any | undefined, results: any, response: any) => void, context?: any): this;
        }

        function suggest(options?: esriLeaflet.TaskOptions | esriLeaflet.Service): Suggest;

        class ReverseGeocode extends esriLeaflet.Task {
            constructor(options?: esriLeaflet.TaskOptions | esriLeaflet.Service);
            latlng(latlng: leaflet.LatLngExpression): this;
            distance(distance: number): this;
            language(language: string): this;
            run(callback: (error: any | undefined, results: { latlng: leaflet.LatLng; address: string; }, response: any) => void, context?: any): this;
        }

        function reverseGeocode(options?: esriLeaflet.TaskOptions | esriLeaflet.Service): ReverseGeocode;

        interface GeosearchProvider {
            suggestions(text: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): esriLeaflet.Task;
            results(text: string, key: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): esriLeaflet.Task;
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
            suggestions(text: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Suggest;
            results(text: string, key: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Geocode;
        }

        function arcgisOnlineProvider(options?: ArcgisOnlineProviderOptions): ArcgisOnlineProvider;

        interface ArcgisOnlineProviderOptions extends BaseProviderOptions {
            countries?: string | string[];
            categories?: string | string[];
            forStorage?: boolean;
        }

        class GeocodeServiceProvider extends GeocodeService implements GeosearchProvider {
            constructor(options?: GeocodeServiceProviderOptions);
            suggestions(text: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Suggest;
            results(text: string, key: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): Geocode;
        }

        function geocodeServiceProvider(options?: GeocodeServiceProviderOptions): GeocodeServiceProvider;

        interface GeocodeServiceProviderOptions extends BaseProviderOptions {
            url: string;
        }

        class FeatureLayerProvider extends esriLeaflet.FeatureLayerService implements GeosearchProvider {
            constructor(options?: FeatureLayerProviderOptions);
            suggestions(text: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): esriLeaflet.Query;
            results(text: string, key: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): esriLeaflet.Query;
        }

        function featureLayerProvider(options?: FeatureLayerProviderOptions): FeatureLayerProvider;

        interface FeatureLayerProviderOptions extends BaseProviderOptions {
            url: string;
            searchFields?: string | string[];
            bufferRadius?: number;
            formatSuggestion?(featureInformation: any): string;
        }

        class MapServiceProvider extends esriLeaflet.MapService implements GeosearchProvider {
            constructor(options?: MapServiceProviderOptions);
            suggestions(text: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): esriLeaflet.Find;
            results(text: string, key: string, bounds: leaflet.LatLngBoundsExpression | undefined | null, callback: GeosearchCallback): esriLeaflet.Query | esriLeaflet.Find;
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
            bounds?: leaflet.LatLngBoundsExpression;
            latlng?: leaflet.LatLngExpression;
            properties?: any;
            geojson?: leaflet.GeoJSON;
            [key: string]: any;
        }

        interface Results {
            bounds: leaflet.LatLngBoundsExpression;
            latlng: leaflet.LatLngExpression;
            results: ResultObject[];
        }
    }
}
