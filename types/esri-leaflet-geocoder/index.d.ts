import * as L from "leaflet";
import "esri-leaflet";

declare module "leaflet" {
    namespace esri.Geocoding {
        type GeosearchConstructor = new(options?: GeosearchObject) => Geosearch;
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
            position?: ControlPosition | undefined;
            zoomToResult?: boolean | undefined;
            useMapBounds?: boolean | number | undefined;
            collapseAfterResult?: boolean | undefined;
            expanded?: boolean | undefined;
            allowMultipleResults?: boolean | undefined;
            providers?: GeosearchProvider[] | undefined;
            placeholder?: string | undefined;
            title?: string | undefined;
            searchBounds?: LatLngBoundsExpression | null | undefined;
        }

        class GeocodeService extends Service {
            constructor(options?: GeocodeServiceOptions);
            geocode(): Geocode;
            suggest(): Suggest;
            reverse(): ReverseGeocode;
        }

        function geocodeService(options?: GeocodeServiceOptions): GeocodeService;

        interface GeocodeServiceOptions extends ServiceOptions {
            supportsSuggest?: boolean | undefined;
        }

        class Geocode extends Task {
            constructor(options?: ServiceOptions | Service);
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
            run(
                callback: (error: any | undefined, results: { results: any[] }, response: any) => void,
                context?: any,
            ): this;
        }

        function geocode(options?: ServiceOptions | Service): Geocode;

        class Suggest extends Task {
            constructor(options?: ServiceOptions | Service);
            text(text: string): this;
            category(text: string): this;
            within(bounds: LatLngBoundsExpression): this;
            nearby(latlng: LatLngExpression, distance: number): this;
            run(callback: (error: any | undefined, results: any, response: any) => void, context?: any): this;
        }

        function suggest(options?: ServiceOptions | Service): Suggest;

        class ReverseGeocode extends Task {
            constructor(options?: ServiceOptions | Service);
            latlng(latlng: LatLngExpression): this;
            distance(distance: number): this;
            language(language: string): this;
            run(
                callback: (error: any | undefined, results: { latlng: LatLng; address: string }, response: any) => void,
                context?: any,
            ): this;
        }

        function reverseGeocode(options?: ServiceOptions | Service): ReverseGeocode;

        interface GeosearchProvider {
            suggestions(
                text: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Task;
            results(
                text: string,
                key: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Task;
        }
        type GeosearchCallback = (error: any | undefined, results: any) => void;

        interface BaseProviderOptions {
            label?: string | undefined;
            maxResults?: number | undefined;
            attribution?: string | undefined;
            token?: string | null | undefined;
        }

        class ArcgisOnlineProvider extends GeocodeService implements GeosearchProvider {
            constructor(options?: ArcgisOnlineProviderOptions);
            suggestions(
                text: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Suggest;
            results(
                text: string,
                key: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Geocode;
        }

        function arcgisOnlineProvider(options?: ArcgisOnlineProviderOptions): ArcgisOnlineProvider;

        interface ArcgisOnlineProviderOptions extends BaseProviderOptions {
            countries?: string | string[] | undefined;
            categories?: string | string[] | undefined;
            forStorage?: boolean | undefined;
        }

        class GeocodeServiceProvider extends GeocodeService implements GeosearchProvider {
            constructor(options?: GeocodeServiceProviderOptions);
            suggestions(
                text: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Suggest;
            results(
                text: string,
                key: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Geocode;
        }

        function geocodeServiceProvider(options?: GeocodeServiceProviderOptions): GeocodeServiceProvider;

        interface GeocodeServiceProviderOptions extends BaseProviderOptions {
            url: string;
        }

        class FeatureLayerProvider extends FeatureLayerService implements GeosearchProvider {
            constructor(options?: FeatureLayerProviderOptions);
            suggestions(
                text: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Query;
            results(
                text: string,
                key: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Query;
        }

        function featureLayerProvider(options?: FeatureLayerProviderOptions): FeatureLayerProvider;

        interface FeatureLayerProviderOptions extends BaseProviderOptions {
            url: string;
            searchFields?: string | string[] | undefined;
            bufferRadius?: number | undefined;
            formatSuggestion?(featureInformation: any): string;
        }

        class MapServiceProvider extends MapService implements GeosearchProvider {
            constructor(options?: MapServiceProviderOptions);
            suggestions(
                text: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Find;
            results(
                text: string,
                key: string,
                bounds: LatLngBoundsExpression | undefined | null,
                callback: GeosearchCallback,
            ): Query | Find;
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
            text?: string | undefined;
            bounds?: LatLngBoundsExpression | undefined;
            latlng?: LatLngExpression | undefined;
            properties?: any;
            geojson?: GeoJSON | undefined;
            [key: string]: any;
        }

        interface Results {
            bounds: LatLngBoundsExpression;
            latlng: LatLngExpression;
            results: ResultObject[];
        }
    }
}
