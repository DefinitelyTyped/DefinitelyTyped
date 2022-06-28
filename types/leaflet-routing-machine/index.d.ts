// Type definitions for leaflet-routing-machine 3.2
// Project: https://github.com/perliedman/leaflet-routing-machine#readme
// Definitions by: Chanaka Rathnayaka <https://github.com/chanakadrathnayaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Routing {
        class Control extends Itinerary {
            constructor(options?: RoutingControlOptions);

            getWaypoints(): Waypoint[];
            setWaypoints(waypoints: Waypoint[] | LatLng[]): this;
            spliceWaypoints(index: number, waypointsToRemove: number, ...wayPoints: Waypoint[]): Waypoint[];
            getPlan(): Plan;
            getRouter(): IRouter;
            route(): void;
            on(type: string, fn: (event: any) => void, context?: any): this;
        }

        interface RoutingControlOptions extends ItineraryOptions {
            waypoints?: Waypoint[] | LatLng[] | undefined;
            router?: IRouter | undefined;
            plan?: Plan | undefined;
            geocoder?: any; // IGeocorder is from other library;
            fitSelectedRoutes?: 'smart' | boolean | undefined;
            lineOptions?: LineOptions | undefined;
            routeLine?: ((route: IRoute, options: LineOptions) => Line) | undefined;
            autoRoute?: boolean | undefined;
            routeWhileDragging?: boolean | undefined;
            routeDragInterval?: number | undefined;
            waypointMode?: 'connect' | 'snap' | undefined;
            useZoomParameter?: boolean | undefined;
            showAlternatives?: boolean | undefined;
            altLineOptions?: LineOptions | undefined;
            addWaypoints?: boolean | undefined;
            defaultErrorHandler?: ((error: any) => void) | undefined;
        }

        class Itinerary extends L.Control {
            constructor(options: ItineraryOptions);

            setAlternatives(routes: IRoute[]): any;
            show(): void;
            hide(): void;
            createAlternativesContainer(): HTMLElement;
        }

        interface ItineraryOptions {
            pointMarkerStyle?: CircleMarkerOptions | undefined;
            summaryTemplate?: string | undefined;
            distanceTemplate?: string | undefined;
            timeTemplate?: string | undefined;
            containerClassName?: string | undefined;
            alternativeClassName?: string | undefined;
            minimizedClassName?: string | undefined;
            itineraryClassName?: string | undefined;
            show?: boolean | undefined;
            formatter?: Formatter | undefined;
            itineraryFormatter?: ItineraryBuilder | undefined;
            collapsible?: boolean | undefined;
            collapseBtn?: ((itinerary: Itinerary) => void) | undefined;
            collapseBtnClass?: string | undefined;
            totalDistanceRoundingSensitivity?: number | undefined;
            itineraryBuilder?: ItineraryBuilder | undefined;
        }

        class Plan extends Layer {
            constructor(waypoints: Waypoint[] | LatLng[], options?: PlanOptions);

            isReady(): boolean;
            getWaypoints(): Waypoint[];
            setWaypoints(waypoints: Waypoint[] | LatLng[]): any;
            spliceWaypoints(index: number, waypointsToRemove: number, ...wayPoints: Waypoint[]): Waypoint[];
            createGeocoders(): any;
        }

        interface PlanOptions {
            geocoder?: any; // IGeocoder
            addWaypoints?: boolean | undefined;
            draggableWaypoints?: boolean | undefined;
            dragStyles?: PathOptions[] | undefined;
            maxGeocoderTolerance?: number | undefined;
            geocoderPlaceholder?: ((waypointIndex: number, numberOfWaypoints: number) => string) | undefined;
            geocodersClassName?: string | undefined;
            geocoderClass?: ((waypointIndex: number, numberOfWaypoints: number) => void) | undefined;
            waypointNameFallback?: ((latLng: LatLng) => string) | undefined;
            createGeocoder?: ((waypointIndex: number, numberOfWaypoints: number, plan: Plan) => {}) | undefined;
            addButtonClassName?: string | undefined;
            createMarker?: ((waypointIndex: number, waypoint: Waypoint, numberOfWaypoints: number) => Marker | boolean) | undefined;
            routeWhileDragging?: boolean | undefined;
            reverseWaypoints?: boolean | undefined;
            language?: string | undefined;
            createGeocoderElement?: ((waypoint: Waypoint, waypointIndex: number, numberOfWaypoints: number, options: PlanOptions) => GeocoderElement) | undefined;
        }

        class Line extends LayerGroup {
            constructor(route: IRoute, options?: LineOptions);

            getBounds(): LatLngBounds;
        }

        interface LineOptions {
            styles?: PathOptions[] | undefined;
            missingRouteStyles?: PathOptions[] | undefined;
            addWaypoints?: boolean | undefined;
            extendToWaypoints: boolean;
            missingRouteTolerance: number;
        }

        class OSRMv1 implements IRouter {
            constructor(options?: OSRMOptions);

            route(waypoints: Waypoint[], callback: (args?: any) => void, context?: {}, options?: RoutingOptions): void ;
            buildRouteUrl(waypoints: Waypoint[], options: RoutingOptions): string;
            requiresMoreDetail(route: { inputWaypoints: Waypoint, waypoints: Waypoint, properties?: any }, zoom: any, bounds: LatLng[]): boolean;
        }

        interface OSRMOptions {
            serviceUrl?: string | undefined;
            timeout?: number | undefined;
            profile?: string | undefined;
            polylinePrecision?: number | undefined;
            useHints?: boolean | undefined;
            routingOptions?: any;
            suppressDemoServerWarning?: boolean | undefined;
            language?: string | undefined;
            requestParameters?: { [key: string]: any } | undefined;
            stepToText?: ((step: any, leg: { legCount: number, legIndex: number }) => any) | undefined;
        }

        class Formatter {
            constructor(options?: FormatterOptions);

            formatDistance(d: number, precision?: number): string;
            formatTime(t: number): string;
            formatInstruction(instruction: IInstruction): string;
            getIconName(instruction: IInstruction, index: number):
                'depart' | 'via' | 'enter-roundabout' | 'arrive' | 'continue' | 'bear-right' | 'turn-right'
                | 'sharp-right' | 'u-turn' | 'sharp-left' | 'turn-left' | 'bear-left';
            capitalize(s: string): string;
        }

        interface FormatterOptions {
            language?: string | undefined;
            units?: 'metric' | 'imperial' | undefined;
            roundingSensitivity?: number | undefined;
            unitNames?: {} | undefined;
            distanceTemplate: string;
        }

        class ItineraryBuilder {
            constructor();

            createContainer(className?: string): HTMLElement;
            createStepsContainer(): HTMLElement;
            createStep(text: string, distance: string, icon: string, steps: HTMLElement): void;
        }

        interface ItineraryBuilderOptions {
            containerClassName: string;
        }

        class Localization {
            constructor(langs: LocalizationOptions | LocalizationOptions[]);

            localize(text: string | string[]): string;
        }

        interface LocalizationOptions {
            directions: { N: string, NE: string, E: string, SE: string, S: string, SW: string, W: string, NW: string,
                SlightRight: string, Right: string, SharpRight: string, SlightLeft: string, Left: string,
                SharpLeft: string, Uturn: string };
            instructions: { [key: string]: string[] | string };
            formatOrder: (n: number | string) => string;
            ui: { startPlaceholder: string, viaPlaceholder: string, endPlaceholder: string };
            units: { meters: string, kilometers: string, yards: string, miles: string, hours: string, minutes: string, seconds: string };
        }

        class Waypoint {
            constructor(latLng: LatLng, name: string, options: WaypointOptions);

            latLng: LatLng;
            name?: string | undefined;
            options?: WaypointOptions | undefined;
        }

        interface WaypointOptions {
            allowUTurn?: boolean | undefined;
        }

        class GeocoderElement {
            constructor(waypoint: Waypoint, i: number, numberOfWaypoints: number, options: GeocoderElementOptions);

            getContainer(): HTMLElement;
            setValue(v: any): void;
            update(force: any): void;
            focus(): void;
        }

        interface GeocoderElementOptions {
            createGeocoder?: ((i: number, nWps: number, options: GeocoderElementOptions) => any) | undefined;
            geocoderPlaceholder?: ((i: number, numberOfWaypoints: number, geocoderElement: GeocoderElement) => string) | undefined;
            geocoderClass?: (() => string) | undefined;
            waypointNameFallback?: ((latLng: LatLng) => string) | undefined;
            maxGeocoderTolerance?: number | undefined;
            autocompleteOptions?: {} | undefined;
            language?: string | undefined;
        }

        class ErrorControl extends L.Control {
            constructor(routingControl: Control, options: ErrorControlOptions) ;
        }

        interface ErrorControlOptions {
            header?: string | undefined;
            formatMessage?: ((error: IError) => string) | undefined;
        }

        class AutoComplete {
            constructor(element: HTMLElement, callback: any, context: any, options: AutoCompleteOptions) ;

            close(): void;
        }

        interface AutoCompleteOptions {
            timeout?: number | undefined;
            blurTimeout?: number | undefined;
            noResultsMessage?: string | undefined;
        }

        class MapBox extends OSRMv1 {
            constructor(accessToken: string, options: OSRMOptions) ;
        }

        // Event Objects

        interface RoutingEvent {
            waypoints: Waypoint[];
        }

        interface RoutingResultEvent {
            waypoints: Waypoint[];
            routes: IRoute[];
        }

        interface RoutingErrorEvent {
            error: IError;
        }

        interface RouteSelectedEvent {
            route: IRoute;
        }

        interface WaypointsSplicedEvent {
            index: number;
            nRemoved: number;
            added: Waypoint[];
        }

        interface LineTouchedEvent {
            afterIndex: number;
            latlng: number;
        }

        interface GeocodingEvent {
            waypointIndex: number;
            waypoint: Waypoint;
        }

        // Interfaces
        interface RoutingOptions {
            z: number;
            allowUTurns: boolean;
            geometryOnly: boolean;
            fileFormat: string;
            simplifyGeometry: boolean;
        }

        // tslint:disable-next-line interface-name
        interface IRouter {
            route(waypoints: Waypoint[], callback: (error?: IError, routes?: IRoute[]) => any, context?: {}, options?: RoutingOptions): void;
        }

        // tslint:disable-next-line interface-name
        interface IRoute {
            name?: string | undefined;
            summary?: IRouteSummary | undefined;
            coordinates?: LatLng[] | undefined;
            waypoints?: LatLng[] | undefined;
            instructions?: IInstruction[] | undefined;
        }

        // tslint:disable-next-line interface-name
        interface IRouteSummary {
            totalTime: number;
            totalDistance: number;
        }

        // tslint:disable-next-line interface-name
        interface IInstruction {
            distance: number;
            time: number;
            text?: string | undefined;
            type?: 'Straight' | 'SlightRight' | 'Right' | 'SharpRight' | 'TurnAround' | 'SharpLeft' | 'Left' | 'SlightLeft' | 'WaypointReached' |
                'Roundabout' | 'StartAt' | 'DestinationReached' | 'EnterAgainstAllowedDirection' | 'LeaveAgainstAllowedDirection' | undefined;
            road?: string | undefined;
            direction?: string | undefined;
            exit?: number | undefined;
        }

        // tslint:disable-next-line interface-name
        interface IGeocoderElement {
            container: HTMLElement;
            input: HTMLElement;
            closeButton: HTMLElement;
        }

        // tslint:disable-next-line interface-name
        interface IError {
            status: string | number;
            message: string;
        }

        function control(options?: RoutingControlOptions): Control;

        function itinerary(options?: ItineraryOptions): Itinerary;

        function line(route: IRoute, options?: LineOptions): Line;

        function plan(waypoints: Waypoint[] | LatLng[], options?: PlanOptions): Plan;

        function waypoint(latLng: LatLng, name?: string, options?: WaypointOptions): Waypoint;

        function osrmv1(options?: OSRMOptions): OSRMv1;

        function localization(options?: LocalizationOptions): Localization;

        function formatter(options?: FormatterOptions): Formatter;

        function geocoderElement(waypoint: Waypoint, i: number, numberOfWaypoints: number, options: GeocoderElementOptions): GeocoderElement;

        function itineraryBuilder(options?: ItineraryBuilderOptions): ItineraryBuilder;

        function mapbox(accessToken: string, options: OSRMOptions): MapBox;

        function errorControl(routingControl: Control, options: ErrorControlOptions): ErrorControl ;

        function autocomplete(element: HTMLElement, callback: any, context: any, options: AutoCompleteOptions): AutoComplete;
    }

    namespace routing {
        function control(options?: Routing.RoutingControlOptions): Routing.Control;

        function itinerary(options?: Routing.ItineraryOptions): Routing.Itinerary;

        function line(route: Routing.IRoute, options?: Routing.LineOptions): Routing.Line;

        function plan(waypoints: Routing.Waypoint[] | LatLng[], options?: Routing.PlanOptions): Routing.Plan;

        function waypoint(latLng: LatLng, name?: string, options?: Routing.WaypointOptions): Routing.Waypoint;

        function osrmv1(options?: Routing.OSRMOptions): Routing.OSRMv1;

        function localization(options?: Routing.LocalizationOptions): Routing.Localization;

        function formatter(options?: Routing.FormatterOptions): Routing.Formatter;

        function geocoderElement(waypoint: Routing.Waypoint, i: number, numberOfWaypoints: number, options: Routing.GeocoderElementOptions): Routing.GeocoderElement;

        function itineraryBuilder(options?: Routing.ItineraryBuilderOptions): Routing.ItineraryBuilder;

        function mapbox(accessToken: string, options: Routing.OSRMOptions): Routing.MapBox;

        function errorControl(routingControl: Routing.Control, options: Routing.ErrorControlOptions): Routing.ErrorControl;

        function autocomplete(element: HTMLElement, callback: any, context: any, options: Routing.AutoCompleteOptions): Routing.AutoComplete;
    }
}
