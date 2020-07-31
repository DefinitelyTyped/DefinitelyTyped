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
            waypoints?: Waypoint[] | LatLng[];
            router?: IRouter;
            plan?: Plan;
            geocoder?: any; // IGeocorder is from other library;
            fitSelectedRoutes?: 'smart' | boolean;
            lineOptions?: LineOptions;
            routeLine?: (route: IRoute, options: LineOptions) => Line;
            autoRoute?: boolean;
            routeWhileDragging?: boolean;
            routeDragInterval?: number;
            waypointMode?: 'connect' | 'snap';
            useZoomParameter?: boolean;
            showAlternatives?: boolean;
            altLineOptions?: LineOptions;
            addWaypoints?: boolean;
            defaultErrorHandler?: (error: any) => void;
        }

        class Itinerary extends L.Control {
            constructor(options: ItineraryOptions);

            setAlternatives(routes: IRoute[]): any;
            show(): void;
            hide(): void;
            createAlternativesContainer(): HTMLElement;
        }

        interface ItineraryOptions {
            pointMarkerStyle?: CircleMarkerOptions;
            summaryTemplate?: string;
            distanceTemplate?: string;
            timeTemplate?: string;
            containerClassName?: string;
            alternativeClassName?: string;
            minimizedClassName?: string;
            itineraryClassName?: string;
            show?: boolean;
            formatter?: Formatter;
            itineraryFormatter?: ItineraryBuilder;
            collapsible?: boolean;
            collapseBtn?: (itinerary: Itinerary) => void;
            collapseBtnClass?: string;
            totalDistanceRoundingSensitivity?: number;
            itineraryBuilder?: ItineraryBuilder;
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
            addWaypoints?: boolean;
            draggableWaypoints?: boolean;
            dragStyles?: PathOptions[];
            maxGeocoderTolerance?: number;
            geocoderPlaceholder?: (waypointIndex: number, numberWaypoints: number) => string;
            geocodersClassName?: string;
            geocoderClass?: (waypointIndex: number, numberWaypoints: number) => void;
            waypointNameFallback?: (latLng: LatLng) => string;
            createGeocoder?: (waypointIndex: number, numberWaypoints: number, plan: Plan) => {};
            addButtonClassName?: string;
            createMarker?: (waypointIndex: number, waypoint: Waypoint, numberWaypoints: number) => Marker;
            routeWhileDragging?: boolean;
            reverseWaypoints?: boolean;
            language?: string;
            createGeocoderElement?: (waypoint: Waypoint, waypointIndex: number, numberWaypoints: number, options: PlanOptions) => GeocoderElement;
        }

        class Line extends LayerGroup {
            constructor(route: IRoute, options?: LineOptions);

            getBounds(): LatLngBounds;
        }

        interface LineOptions {
            styles?: PathOptions[];
            missingRouteStyles?: PathOptions[];
            addWaypoints?: boolean;
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
            serviceUrl?: string;
            timeout?: number;
            profile?: string;
            polylinePrecision?: number;
            useHints?: boolean;
            routingOptions?: any;
            suppressDemoServerWarning?: boolean;
            language?: string;
            requestParameters?: { [key: string]: any };
            stepToText?: (step: any, leg: { legCount: number, legIndex: number }) => any;
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
            language?: string;
            units?: 'metric' | 'imperial';
            roundingSensitivity?: number;
            unitNames?: {};
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
            name?: string;
            options?: WaypointOptions;
        }

        interface WaypointOptions {
            allowUTurn?: boolean;
        }

        class GeocoderElement {
            constructor(wp: Waypoint, i: number, numberWaypoints: number, options: GeocoderElementOptions);

            getContainer(): HTMLElement;
            setValue(v: any): void;
            update(force: any): void;
            focus(): void;
        }

        interface GeocoderElementOptions {
            createGeocoder?: (i: number, nWps: number, options: GeocoderElementOptions) => any;
            geocoderPlaceholder?: (i: number, numberWaypoints: number, geocoderElement: GeocoderElement) => string;
            geocoderClass?: () => string;
            waypointNameFallback?: (latLng: LatLng) => string;
            maxGeocoderTolerance?: number;
            autocompleteOptions?: {};
            language?: string;
        }

        class ErrorControl extends L.Control {
            constructor(routingControl: Control, options: ErrorControlOptions) ;
        }

        interface ErrorControlOptions {
            header?: string;
            formatMessage?: (error: IError) => string;
        }

        class AutoComplete {
            constructor(element: HTMLElement, callback: any, context: any, options: AutoCompleteOptions) ;

            close(): void;
        }

        interface AutoCompleteOptions {
            timeout?: number;
            blurTimeout?: number;
            noResultsMessage?: string;
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
            name?: string;
            summary?: IRouteSummary;
            coordinates?: LatLng[];
            waypoints?: LatLng[];
            instructions?: IInstruction[];
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
            text?: string;
            type?: 'Straight' | 'SlightRight' | 'Right' | 'SharpRight' | 'TurnAround' | 'SharpLeft' | 'Left' | 'SlightLeft' | 'WaypointReached' |
                'Roundabout' | 'StartAt' | 'DestinationReached' | 'EnterAgainstAllowedDirection' | 'LeaveAgainstAllowedDirection';
            road?: string;
            direction?: string;
            exit?: number;
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

        function geocoderElement(waypoint: Waypoint, i: number, numberWaypoints: number, options: GeocoderElementOptions): GeocoderElement;

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

        function geocoderElement(waypoint: Routing.Waypoint, i: number, numberWaypoints: number, options: Routing.GeocoderElementOptions): Routing.GeocoderElement;

        function itineraryBuilder(options?: Routing.ItineraryBuilderOptions): Routing.ItineraryBuilder;

        function mapbox(accessToken: string, options: Routing.OSRMOptions): Routing.MapBox;

        function errorControl(routingControl: Routing.Control, options: Routing.ErrorControlOptions): Routing.ErrorControl;

        function autocomplete(element: HTMLElement, callback: any, context: any, options: Routing.AutoCompleteOptions): Routing.AutoComplete;
    }
}
