// Type definitions for Microsoft.Maps.Directions 7.0
// Project: http://msdn.microsoft.com/en-us/library/hh312813.aspx
// Definitions by: Eric Todd <https://github.com/ericrtodd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="Microsoft.Maps.d.ts"/>

declare module Microsoft.Maps.Directions {

    export interface BusinessDetails {

        businessName?: string;
        entityId?: string;
        phoneNumber?: string;
        website?: string;
    }

    export interface WaypointOptions {

        address?: string;
        businessDetails?: BusinessDetails;
        disambiguationContainer?: HTMLElement;
        exactLocation?: string;
        isViapoint?: boolean;
        location?: Location;
        pushpin?: Pushpin;
        shortAddress?: string;
    }

    export interface BusinessDisambiguationSuggestion {

        address?: string;
        distance?: number;
        entityId?: number;
        index?: number;
        isApproximate?: boolean;
        location?: Location;
        name?: string;
        phoneNumber?: string;
        photoUrl?: string;
        rooftopLocation?: Location;
        website?: string;
    }

    export interface LocationDisambiguationSuggestion {

        formattedSuggestion?: string;
        location?: Location;
        rooftopLocation?: Location;
        suggestion?: string;
    }

    export interface Disambiguation {

        businessSuggestions?: Array<BusinessDisambiguationSuggestion>;
        hasMoreSuggestions?: boolean;
        headerText?: string;
        locationSuggestions?: Array<LocationDisambiguationSuggestion>;
    }

    export interface WaypointEventArgs {

        waypoint: Waypoint;
    }

    export class Waypoint {

        constructor(options: WaypointOptions);

        clear(): void;
        dispose(): void;
        getAddress(): string;
        getBusinessDetails(): BusinessDetails;
        getDisambiguationContainer(): HTMLElement;
        getDisambiguationResult(): Disambiguation;
        getLocation(): Location;
        getPushpin(): Pushpin;
        getShortAddress(): string;
        isExactLocation(): boolean;
        isViapoint(): boolean;
        setOptions(options: WaypointOptions): void;

        changed: (args: WaypointEventArgs) => void;
        geocoded: (args: WaypointEventArgs) => void;
        reverseGeocoded: (args: WaypointEventArgs) => void;
    }

    export interface DirectionsRenderOptions {

        autoDisplayDisambiguation?: boolean;
        autoUpdateMapView?: boolean;
        disambiguationPushpinOptions?: PushpinOptions;
        displayDisclaimer?: boolean;
        displayManeuverIcons?: boolean;
        displayPostItineraryItemHints?: boolean;
        displayPreItineraryItemHints?: boolean;
        displayRouteSelector?: boolean;
        displayStepWarnings?: boolean;
        displayTrafficAvoidanceOption?: boolean;
        displayWalkingWarning?: boolean;
        drivingPolylineOptions?: PolylineOptions;
        itineraryContainer?: HTMLElement;
        lastWaypointIcon?: string;
        middleWaypointIcon?: string;
        stepPushpinOptions?: PushpinOptions;
        transitPolylineOptions?: PolylineOptions;
        viapointPushpinsOptions?: PushpinOptions;
        walkingPolylineOptions?: PolylineOptions;
        waypointPushpinOptions?: PushpinOptions;
    }

    export enum DistanceUnit {
        kilometers= 0,
        miles= 1
    }

    export enum RouteAvoidance {
        none= 0,
        minimizeLimitedAccessHighway= 1,
        minimizeToll= 2,
        avoidLimitedAccessHighway= 4,
        avoidToll= 8,
        avoidExpressTrain= 16,
        avoidAirline= 32,
        avoidBulletTrain= 64
    }

    export enum RouteMode {
        driving,
        transit,
        walking
    }

    export enum RouteOptimization {
        shortestTime= 0,
        shortestDistance= 1,
        minimizeMoney= 3,
        minimizeTransfers= 4,
        minimizeWalking= 5
    }

    export enum TimeType {
        arrival,
        departure,
        lastAvailable
    }

    export interface TransitOptions {
        timeType?: TimeType;
        transitTime?: Date;
    }

    export interface DirectionsRequestOptions {

        avoidTraffic?: boolean;
        distanceUnit?: DistanceUnit;
        maxRoutes?: number;
        routeAvoidance?: Array<RouteAvoidance>;
        routeDraggable?: boolean;
        routeIndex?: boolean;
        routeMode?: RouteMode;
        routeOptimization?: RouteOptimization;
        transitOptions?: TransitOptions;
    }

    export class DirectionsManager {

        constructor(map: Microsoft.Maps.Map);

        resetDirections(): void;
        addWaypoint(waypoint: Waypoint, index?: number): void;
        calculateDirections(): void;
        clearDisplay(): void;
        dispose(): void;
        getAllWaypoints(): Array<Waypoint>;
        getMap(): Map;
        getNearbyMajorRoads(location: Location, callback: any, errorCallback: any, userData: any): void;
        getRenderOptions(): DirectionsRenderOptions;
        getRequestOptions(): DirectionsRequestOptions;
        getRouteResult(): Array<Route>;
        removeWaypoint(waypoint: Waypoint): void;
        removeWaypoint(index: number): void;
        resetDirections(options: ResetDirectionsOptions): void;
        reverseGeocode(location: Location, callback: any, errorCallback: any, userData: any): void;
        setMapView(): void;
        setRenderOptions(options: DirectionsRenderOptions): void;
        setRequestOptions(options: DirectionsRequestOptions): void;

        afterRouteSelectorRender: (args: RouteSelectorRenderEventArgs) => void;
        afterStepRender: (args: DirectionsStepRenderEventArgs) => void;
        afterSummaryRender: (args: RouteSummaryRenderEventArgs) => void;
        afterWaypointRender: (args: WaypointRenderEventArgs) => void;
        beforeDisambiguationRender: (args: DisambiguationRenderEventArgs) => void;
        beforeRouteSelectorRender: (args: RouteSelectorRenderEventArgs) => void;
        beforeStepRender: (args: DirectionsStepRenderEventArgs) => void;
        beforeSummaryRender: (args: RouteSummaryRenderEventArgs) => void;
        beforeWaypointRender: (args: WaypointRenderEventArgs) => void;
        directionsError: (args: DirectionsErrorEventArgs) => void;
        directionsUpdated: (args: DirectionsEventArgs) => void;
        dragDropCompleted: () => void;
        itineraryStepClicked: (args: DirectionsStepEventArgs) => void;
        mouseEnterRouteSelector: (args: RouteSelectorEventArgs) => void;
        mouseEnterStep: (args: DirectionsStepEventArgs) => void;
        mouseLeaveRouteSelector: (args: RouteSelectorEventArgs) => void;
        mouseLeaveStep: (args: DirectionsStepEventArgs) => void;
        routeSelectorClicked: (args: RouteSelectorEventArgs) => void;
        waypointAdded: (args: WaypointEventArgs) => void;
        waypointRemoved: (args: WaypointEventArgs) => void;
    }

    export interface DirectionsStepEventArgs {
        handled: boolean;
        location: Location;
        routeIndex: number;
        routeLegIndex: number;
        step: DirectionsStep;
        stepIndex: number;
        stepNumber: number;
    }

    export interface DirectionsErrorEventArgs {
        responseCode: RouteResponseCode;
        message: string;
    }

    export interface DirectionsEventArgs {
        routeSummary: Array<RouteSummary>;
        route: Array<Route>;
    }

    export interface DisambiguationRenderEventArgs {
        containerElement: HTMLElement;
        handled: boolean;
        waypoint: Waypoint;
    }

    export interface DirectionsStepRenderEventArgs {
        containerElement: HTMLElement;
        handled: boolean;
        lastStep: boolean;
        routeIndex: number;
        routeLegIndex: number;
        step: DirectionsStep;
        stepIndex: number;
    }

    export interface RouteSummaryRenderEventArgs {
        containerElement: HTMLElement;
        handled: boolean;
        routeLegIndex: number;
        summary: RouteSummary;
    }

    export interface WaypointRenderEventArgs {
        containerElement: HTMLElement;
        handled: boolean;
        waypoint: Waypoint;
    }

    export interface DirectionsStep {

        childItineraryItems: Array<DirectionsStep>;
        coordinate: Location;
        distance: string;
        durationInSeconds: number;
        formattedText: string;
        iconType: IconType;
        isImageRoadShield: boolean;
        maneuver: Maneuver;
        maneuverImageName: string;
        monetaryCost: number;
        postIntersectionHints: Array<string>;
        preIntersectionHings: Array<string>;
        startStopName: string;
        transitLine: TransitLine;
        transitStepIcon: string;
        transitStopId: string;
        transitTerminus: string;
        warnings: Array<DirectionsStepWarning>;
    }

    export enum IconType {
        none,
        other,
        auto,
        ferry,
        walk,
        bus,
        train,
        airline
    }

    export enum Maneuver {
        none= 0,
        unknown= 1,
        departStart= 2,
        departIntermediateStop= 3,
        departIntermediateStopReturning= 4,
        arriveFinish= 5,
        arriveIntermediateStop= 6,
        turnLeft= 7,
        turnRight= 8,
        turnBack= 9,
        uTurn= 10,
        turnToStayLeft= 11,
        turnToStayRight= 12,
        bearLeft= 13,
        bearRight= 14,
        keepToStayLeft= 15,
        keepToStayRight= 16,
        keepToStayStraight= 17,
        keepLeft= 18,
        keepRight= 19,
        keepStraight= 20,
        take= 21,
        takeRampLeft= 22,
        takeRampRight= 23,
        takeRampStraight= 24,
        keepOnRampLeft= 25,
        keepOnRampRight= 26,
        keepOnRampStraight= 27,
        merge= 28,
        continueRoute= 29,
        roadNameChange= 30,
        enterRoundabout= 31,
        exitRoundabout= 32,
        turnRightThenTurnRight= 33,
        turnRightThenTurnLeft= 34,
        turnRightThenBearRight= 35,
        turnRightThenBearLeft= 36,
        turnLeftThenTurnLeft= 37,
        turnLeftThenTurnRight= 38,
        turnLeftThenBearLeft= 39,
        turnLeftThenBearRight= 40,
        bearRightThenTurnRight= 41,
        bearRightThenTurnLeft= 42,
        bearRightThenBearRight= 43,
        bearRightThenBearLeft= 44,
        bearLeftThenTurnLeft= 45,
        bearLeftThenTurnRight= 46,
        bearLeftThenBearRight= 47,
        bearLeftThenBearLeft= 48,
        rampThenHighwayRight= 49,
        rampThenHighwayLeft= 50,
        rampToHighwayStraight= 51,
        enterThenExitRoundabout= 52,
        bearThenMerge= 53,
        turnThenMerge= 54,
        bearThenKeep= 55,
        transfer= 56,
        wait = 57,
        takeTransit= 58,
        walk = 59,
        transitDepart = 60,
        transitArrive= 61,
    }

    export interface TransitLine {
        abbreviatedName: string;
        agencyId: number;
        agencyName: string;
        agencyUrl: string;
        lineColor: Color;
        lineTextColor: Color;
        providerInfo: string;
        verboseName: string;
    }

    export interface DirectionsStepWarning {
        style: StepWarningStyle;
        text: string;
    }

    export enum StepWarningStyle {
        info= 0,
        minor= 1,
        moderate= 2,
        major= 3,
        ccZoneEnter= 4,
        ccZoneExit= 5
    }

    export interface ResetDirectionsOptions {
        removeAllWaypoints?: boolean;
        resetRenderOptions?: boolean;
        resetRequestOptions?: boolean;
    }

    export interface Route {
        routeLegs: Array<RouteLeg>;
    }

    export interface RouteLeg {
        endTime: Date;
        endWaypointLocation: Location;
        itineraryItems: Array<DirectionsStep>;
        originalRouteIndex: number;
        startTime: Date;
        startWaypointLocation: Location;
        subLegs: Array<RouteSubLeg>;
        summary: RouteSummary;
    }

    export interface RouteSubLeg {
        actualEnd: Location;
        actualStart: Location;
        endDescription: string;
        routePath: RoutePath;
        startDescription: string;
        summary: RouteSummary;
    }

    export interface RoutePath {
        decodedLatitudes: Array<number>;
        decodedLongitudes: Array<number>;
        decodedRegions: Array<any>;
    }

    export interface RouteSummary {
        distance: number;
        monetaryCost: number;
        northEast: Location;
        southWest: Location;
        time: number;
        timeWithTraffic: number;
    }

    export enum RouteResponseCode {
        success= 0,
        unknownError= 1,
        cannotFindNearbyRoad= 2,
        tooFar= 3,
        noSolution= 4,
        dataSourceNotFound= 5,
        noAvailableTransitTrip= 7,
        transitStopsTooClose= 8,
        walkingBestAlternative= 9,
        outOfTransitBounds= 10,
        timeout= 11,
        waypointDisambiguation= 12,
        hasEmptyWaypoint= 13,
        exceedMaxWaypointLimit= 14,
        atleastTwoWaypointRequired= 15,
        firstOrLastStoppointsIsVia= 16,
        searchServiceFailed= 17,
        invalidCredentials= 18
    }

    export interface RouteSelectorEventArgs {
        handled: boolean;
        routeIndex: number;
    }

    export interface RouteSelectorRenderEventArgs {
        containerElement: HTMLElement;
        handled: boolean;
        routeIndex: number;
        routeLeg: RouteLeg;
    }

}