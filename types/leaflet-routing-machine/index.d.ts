// Type definitions for leaflet-routing-machine 3.2
// Project: https://github.com/perliedman/leaflet-routing-machine#readme
// Definitions by: Chanaka Rathnayaka <https://github.com/chanakadrathnayaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

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
            waypointMode?: string;
            useZoomParameter?: boolean;
            showAlternatives?: boolean;
            altLineOptions?: LineOptions;
        }

        class Itinerary extends L.Control {
            constructor(options: ItineraryOptions);
            setAlternatives(routes: IRoute[]): any;
            show(): void;
            hide(): void;
        }

        interface ItineraryOptions {
            pointMarkerStyle?: PathOptions;
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
        }

        class Line extends LayerGroup {
            constructor(route: IRoute, options?: LineOptions);
            getBounds(): LatLngBounds;
        }

        interface LineOptions {
            styles?: PathOptions[];
            missingRouteStyles?: PathOptions[];
            addWaypoints?: boolean;
        }

        class OSRMv1 implements IRouter {
            constructor(options?: OSRMOptions);

            route(waypoints: Waypoint[], callback: (args?: any) => void, context?: {}, options?: RoutingOptions): void ;
            buildRouteUrl(waypoints: Waypoint[], options: RoutingOptions): string;
        }

        interface OSRMOptions {
            serviceUrl?: string;
            timeout?: number;
            profile?: string;
            polylinePrecision?: number;
            useHints?: boolean;
            routingOptions?: any;
        }

        class Formatter {
            constructor(options?: FormatterOptions);
            formatDistance(d: number, precision?: number): string;
            formatTime(t: number): string;
            formatInstruction(instruction: IInstruction): string;
        }

        interface FormatterOptions {
            language?: string;
            units?: string;
            roundingSensitivity?: number;
            unitNames?: {};
        }

        class ItineraryBuilder {
            constructor();
            createContainer(className: string): HTMLElement;
            createStepsContainer(container: HTMLElement): void;
            createStep(text: string, distance: string, steps: HTMLElement): void;
        }

        class Localization {
            constructor(lang: string);
            localize(text: string): string;
        }

        interface Waypoint {
            latLng: LatLng;
            name?: string;
            options?: WaypointOptions;
        }

        interface WaypointOptions {
            allowUTurn?: boolean;
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
            text?: number;
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

        function osrmv1(options?: OSRMOptions): OSRMv1;

        function formatter(options?: FormatterOptions): Formatter;

        function waypoint(latLng: LatLng, name?: string, options?: WaypointOptions): Waypoint;
    }

    namespace routing {
        function control(options?: Routing.RoutingControlOptions): Routing.Control;

        function itinerary(options?: Routing.ItineraryOptions): Routing.Itinerary;

        function line(route: Routing.IRoute, options?: Routing.LineOptions): Routing.Line;

        function plan(waypoints: Routing.Waypoint[] | LatLng[], options?: Routing.PlanOptions): Routing.Plan;

        function osrmv1(options?: Routing.OSRMOptions): Routing.OSRMv1;

        function formatter(options?: Routing.FormatterOptions): Routing.Formatter;

        function waypoint(latLng: LatLng, name?: string, options?: Routing.WaypointOptions): Routing.Waypoint;
    }
}
