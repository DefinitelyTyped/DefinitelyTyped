// Type definitions for Microsoft.Maps 7.0
// Project: http://msdn.microsoft.com/en-us/library/gg427611.aspx
// Definitions by: Eric Todd <https://github.com/ericrtodd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Microsoft.Maps {

    export enum AltitudeReference {
        ground,
        ellipsoid
    }

    export class Location {

        constructor(latitude: number, longitude: number, altitude?: number, altitudeReference?: AltitudeReference);

        altitude: number;
        altitudeReference: AltitudeReference;
        latitude: number;
        longitude: number;

        static areEqual(location1: Location, location2: Location): boolean;
        static normalizeLongitude(longitude: number): number;

        clone(): Location;
        toString(): string;
    }

    export class LocationRect {

        constructor(center: Location, width: number, height: number);

        center: Location;
        height: number;
        width: number;

        static fromCorners(northwest: Location, southeast: Location): LocationRect;
        static fromEdges(north: number, west: number, south: number, east: number, altitude: number, altitudeReference: AltitudeReference): LocationRect;
        static fromLocations(locations: Array<Location>): LocationRect;
        static fromString(value: string): LocationRect;

        clone(): LocationRect;
        contains(location: Location): boolean;
        getEast(): number;
        getNorth(): number;
        getNorthwest(): Location;
        getSouth(): number;
        getSoutheast(): Location;
        getWest(): number;
        intersects(rect: LocationRect): boolean;
        toString(): string;
    }

    export class Point {

        constructor(x: number, y: number);

        x: number;
        y: number;

        static areEqual(p1: Point, p2: Point): boolean;
        static clone(p: Point): Point;

        clone(): Point;
        toString(): string;
    }

    export class Events {

        static addHandler(target: any, eventName: string, handler: (e: any) => void): any;
        static addThrottledHandler(target: any, eventName: string, handler: (e: any) => void, throttleInterval: number): any;
        static hasHandler(target: any, eventName: string): boolean;
        static invoke(target: any, eventName: string, args: any): void;
        static removeHandler(handlerId: any): void;
    }

    export interface KeyEventArgs {
        altKey: boolean;
        ctrlKey: boolean;
        eventName: boolean;
        handled: boolean;
        keyCode: string;
        originalEvent: any;
        shiftKey: boolean;
    }

    export enum LabelOverlay {
        hidden,
        visible
    }

    export interface ZoomRange {
        min: number;
        max: number;
    }

    export class Map {

        constructor(containerElement: HTMLElement, options?: MapOptions);
        constructor(containerElement: HTMLElement, options?: ViewOptions);

        entities: EntityCollection;

        static getVersion(): string;

        blur(): void;
        dispose(): void;
        focus(): void;
        getBounds(): LocationRect;
        getCenter(): Location;
        getCopyrights(callback: (copyrights: Array<string>) => void): void;
        getCredentials(callback: (credentials: Array<string>) => void): void;
        getHeading(): string;
        getHeight(): number;
        getImageryId: string;
        getMapTypeId(): string;
        getMetersPerPixel(): number;
        getMode(): MapMode;
        getModeLayer(): HTMLElement;
        getOptions(): MapOptions;
        getPageX(): number;
        getPageY(): number;
        getRootElement(): HTMLElement;
        getTargetBounds(): LocationRect;
        getTargetCenter(): Location;
        getTargetHeading(): number;
        getTargetMetersPerPixel(): number;
        getTargetZoom(): number;
        getUserLayer(): HTMLElement;
        getViewportX(): number;
        getViewportY(): number;
        getWidth(): number;
        getZoom(): number;
        getZoomRange(): ZoomRange;
        isDownloadingTiles(): boolean;
        isMercator(): boolean;
        isRotationEnabled(): boolean;
        setMapType(mapTypeId: MapTypeId): void;
        setOptions(options: MapOptions): void;
        setView(options: ViewOptions): void;
        tryLocationToPixel(locations: Location, reference?: PixelReference): Point;
        tryLocationToPixel(locations: Array<Location>, reference?: PixelReference): Array<Point>;
        tryPixelToLocation(points: Point, reference?: PixelReference): Location;
        tryPixelToLocation(points: Array<Point>, reference?: PixelReference): Array<Location>;
    }

    export class MapMode {

        getDrawShapesInSingleLayer(): boolean;
        getShouldClipPolygons(): boolean;
        setOptions(options: MapModeOptions): void;
        setViewChangeEndDelay(delay: number): void;
    }

    export interface MapModeOptions {
        shouldClipPolygons?: boolean;
        drawShapesInSingleLayer?:boolean;
    }

    export interface MapOptions {

        backgroundColor?: Color;
        credentials?: string;
        customizeOverlays?: boolean;
        disableBirdseye?: boolean;
        disableKeyboardInput?: boolean;
        disableMouseInput?: boolean;
        disablePanning?: boolean;
        disableTouchInput?: boolean;
        disableUserInput?: boolean;
        disableZooming?: boolean;
        enableClickableLogo?: boolean;
        enableSearchLogo?: boolean;
        fixedMapPosition?: boolean;
        height?: number;
        inertiaIntensity?: number;
        navigationBarMode?: number;
        showBreadcrumb?: boolean;
        showCopyright?: boolean;
        showDashboard?: boolean;
        showMapTypeSelector?: boolean;
        showScalebar?: boolean;
        theme?: any;
        tileBuffer?: number;
        useInertia?: boolean;
        width?: number;
        center?: Location;
        zoom?: number;
        mapTypeId?: MapTypeId;
    }

    export enum MapTypeId {
        aerial,
        auto,
        birdseye,
        collinsBart,
        mercator,
        ordnanceSurvey,
        road
    }

    export class MouseEventArgs {

        eventName: string;
        handled: boolean;
        isPrimary: boolean;
        isSecondary: boolean;
        isTouchEvent: boolean;
        originalEvent: any;
        pageX: number;
        pageY: number;
        target: any;
        targetType: string;
        wheelDelta: number;

        getX(): number;
        getY(): number;
    }

    export enum NavigationBarMode {
        default,
        compact,
        minified
    }

    export enum PixelReference {
        control,
        page,
        viewport
    }

    export interface ViewOptions {

        animate?: boolean;
        bounds?: LocationRect;
        center?: Location;
        centerOffset?: Point;
        heading?: number;
        labelOverlay?: LabelOverlay;
        mapTypeId?: string;
        padding?: number;
        zoom?: number;
    }

    export class Color {

        constructor(alpha: number, red: number, green: number, blue: number);

        a: number;
        r: number;
        g: number;
        b: number;

        static clone(color: Color): Color;
        static fromHex(hex: string): Color;

        clone(): Color;
        getOpacity(): number;
        toHex(): string;
        toString(): string;
    }

    export interface EntityChangeArgs {
        collection: EntityCollection;
        entity: Entity;
    }

    export interface EntityCollectionOptions {
        bubble?: boolean;
        visible?: boolean;
        zIndex?: number;
    }

    export class EntityCollection {

        constructor(options?: EntityCollectionOptions);

        clear(): void;
        get(index: number): Entity;
        getLength(): number;
        getVisible(): boolean;
        getZIndex(): number;
        indexOf(entity: Entity): number;
        insert(entity: Entity, index: number): void;
        pop(): Entity;
        push(entity: Entity): void;
        remove(entity: Entity): Entity;
        removeAt(index: number): Entity;
        setOptions(options: EntityCollectionOptions): void;
        toString(): string;

    }

    export class Infobox {

        constructor(location: Location, options?: InfoboxOptions);

        getActions(): any;
        getAnchor(): Point;
        getDescription(): string;
        getHeight(): number;
        getHtmlContent(): string;
        getId(): string;
        getLocation(): Location;
        getOffset(): Point;
        getOptions(): InfoboxOptions;
        getShowCloseButton(): boolean;
        getShowPointer(): boolean;
        getTitle(): string;
        getTitleAction(): any;
        getTitleClickHandler(): (mouseEvent?: MouseEvent) => void;
        getVisible(): boolean;
        getWidth(): number;
        getZIndex(): number;
        setHtmlContent(content: string): void;
        setLocation(location: Location): void;
        setMap(map: Map): void;
        setOptions(options: InfoboxOptions): void;
        toString(): string;
    }

    export interface Action {
        label?: string;
        icon?: string;
        eventHandler: (args?: any) => void;
    }

    export interface InfoboxOptions {

        actions?: Array<Action>;
        description?: string;
        htmlContent?: string;
        id?: string;
        location?: Location;
        offset?: Point;
        showCloseButton?: boolean;
        showPointer?: boolean;
        pushpin?: Pushpin;
        title?: string;
        titleAction?: { label?: string; eventHandler: (mouseEvent?: MouseEvent) => void; };
        titleClickHandler?: (mouseEvent?: MouseEvent) => void;
        typeName?: InfoboxType;
        visible?: boolean;
        width?: number;
        height?: number;
    }

    export enum InfoboxType {
        mini,
        standard
    }

    export interface Entity {
    }

    export class Polyline implements Entity {

        constructor(locations: Array<Location>, options?: PolylineOptions);

        getLocations(): Array<Location>;
        getStrokeColor(): Color;
        getStrokeDashArray(): string;
        getStrokeThickness(): number;
        getVisible(): boolean;
        setLocations(locations: Array<Location>): void;
        setOptions(options: PolylineOptions): void;
        toString(): string;
    }

    export class Position {
        coords: Coordinates;
        timestamp: string;
    }

    export interface PolylineOptions {
        strokeColor?: Color;
        strokeDashArray?: string;
        strokeThickness?: number;
        visible?: boolean;
    }

    export class Polygon implements Entity {

        constructor(locations: Array<Location>, options?: PolygonOptions);

        getFillColor(): Color;
        getLocations(): Array<Location>;
        getStrokeColor(): Color;
        getStrokeDashArray(): string;
        getStrokeThickness(): number;
        getVisible(): boolean;
        setLocations(locations: Location[]): void;
        setOptions(options: PolylineOptions): void;
        toString(): string;
    }

    export interface PolygonOptions {
        fillColor?: Color;
        infobox?: Infobox;
        strokeColor?: Color;
        strokeDashArray?: string;
        strokeThickness?: number;
        visible?: boolean;
    }

    export class Pushpin implements Entity {

        constructor(location: Location, options?: PushpinOptions);

        getAnchor(): Point;
        getIcon(): string;
        getHeight(): number;
        getLocation(): Location;
        getText(): string;
        getTextOffset(): Point;
        getTypeName(): string;
        getVisible(): boolean;
        getWidth(): number;
        getZIndex(): number;
        setLocation(location: Location): void;
        setOptions(options: PushpinOptions): void;
        toString(): string;
    }

    export enum EntityState {
        highlighted,
        none,
        selected
    }

    export interface PushpinOptions {

        anchor?: Point;
        draggable?: boolean;
        height?: number;
        htmlContent?: string;
        icon?: string;
        infobox?: Infobox;
        state?: EntityState;
        text?: string;
        textOffset?: Point;
        typeName?: string;
        visible?: boolean;
        width?: number;
        zIndex?: number;
    }

    export class TileLayer implements Entity {

        constructor(options: TileLayerOptions);

        getOpacity(): number;
        getTileSource(projection: string): TileSource;
        getZIndex(): number;
        setOptions(options: TileLayerOptions): void;
        toString(): string;
    }

    export class TileSource {

        constructor(options: TileSourceOptions);

        getHeight(): number;
        getUriConstructor(): string;
        getWidth(): string;
        toString(): string;
    }

    export interface TileSourceOptions {

        height?: number;
        uriConstructor: any;
        width?: number;
    }


    export interface TileLayerOptions {

        animationDisplay?: AnimationVisibility;
        downloadTimeout?: number;
        mercator?: TileSource;
        opacity?: number;
        visible?: boolean;
        zIndex?: number;
    }

    export enum AnimationVisibility {
        auto,
        hide,
        show
    }

    export class Coordinates {

        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        latitude: number;
        longitude: number;
    }

    export class GeoLocationProvider {

        constructor(map: Map);

        addAccuracyCircle(center: Location, radiusInMeters: number, segments: number, options: PositionCircleOptions): void;
        cancelCurrentRequest(): void;
        getCurrentPosition(options?: PositionOptions): void;
        removeAccuracyCircle(): void;
    }

    export interface PositionOptionsErrorCallbackResult {
        internalError: PositionError;
        errorCode:number;
		}
    
    export interface PositionOptionsSuccessCallbackResult {
        center: Location;
        position: Position;
    }

    export interface PositionOptions {
        enableHighAccuracy?: boolean;
        errorCallback?: (result: PositionOptionsErrorCallbackResult) => void;
        showAccuracyCircle?: boolean;
        timeout?: number;
        updateMapView?: boolean;
        maximumAge?: number;
        successCallback?: (result: PositionOptionsSuccessCallbackResult) => void;
    }

    export interface PositionCircleOptions {
        polygonOptions: PolygonOptions;
        showOnMap?: boolean;
    }

    export class PositionError {
        errorCode: number;
        internalError: string;
    }

    export interface ModuleOptions {
        callback?: () => void;
        styleURLS?: Array<string>;
        culture?: string;
        homeRegion?: string;
    }

    export function loadModule(moduleKey: string, options?: ModuleOptions): void;
    export function moduleLoaded(moduleKey: string): void;
    export function registerModule(moduleKey: string, scriptUrl: string, options?: ModuleOptions): void;
}
