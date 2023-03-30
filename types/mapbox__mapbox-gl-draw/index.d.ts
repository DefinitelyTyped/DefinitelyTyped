// Type definitions for @mapbox/mapbox-gl-draw 1.3
// Project: https://github.com/mapbox/mapbox-gl-draw
// Definitions by: Tudor Gergely <https://github.com/tudorgergely>
//                 Shayan Toqraee <https://github.com/Shayan-To>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BBox, Feature, FeatureCollection, GeoJSON, GeoJsonTypes, Geometry, Point, Position } from 'geojson';
import { IControl, Map, MapMouseEvent as MapboxMapMouseEvent, MapTouchEvent as MapboxMapTouchEvent } from 'mapbox-gl';

export = MapboxDraw;
export as namespace MapboxDraw;

declare namespace MapboxDraw {
    type DrawMode = DrawModes[keyof DrawModes];

    type DrawEventType =
        | 'draw.create'
        | 'draw.delete'
        | 'draw.update'
        | 'draw.render'
        | 'draw.combine'
        | 'draw.uncombine'
        | 'draw.modechange'
        | 'draw.actionable'
        | 'draw.selectionchange';

    interface DrawModes {
        DRAW_LINE_STRING: 'draw_line_string';
        DRAW_POLYGON: 'draw_polygon';
        DRAW_POINT: 'draw_point';
        SIMPLE_SELECT: 'simple_select';
        DIRECT_SELECT: 'direct_select';
        STATIC: 'static';
    }

    interface MapboxDrawControls {
        point?: boolean | undefined;
        line_string?: boolean | undefined;
        polygon?: boolean | undefined;
        trash?: boolean | undefined;
        combine_features?: boolean | undefined;
        uncombine_features?: boolean | undefined;
    }

    interface DrawActionableState {
        trash: boolean;
        combineFeatures: boolean;
        uncombineFeatures: boolean;
    }

    interface DrawFeatureBase<Coordinates> {
        readonly properties: Readonly<Feature['properties']>;
        readonly coordinates: Coordinates;
        readonly id: NonNullable<Feature['id']>;
        readonly type: GeoJsonTypes;

        changed(): void;
        isValid(): boolean;
        incomingCoords: this['setCoordinates'];
        setCoordinates(coords: Coordinates): void;
        getCoordinates(): Coordinates;
        getCoordinate(path: string): Position;
        updateCoordinate(path: string, lng: number, lat: number): void;
        setProperty(property: string, value: any): void;
        toGeoJSON(): GeoJSON;
    }

    interface DrawMultiFeature<Type extends 'MultiPoint' | 'MultiLineString' | 'MultiPolygon'>
        extends Omit<
            DrawFeatureBase<
                | (Type extends 'MultiPoint' ? Array<DrawPoint['coordinates']> : never)
                | (Type extends 'MultiLineString' ? Array<DrawLineString['coordinates']> : never)
                | (Type extends 'MultiPolygon' ? Array<DrawPolygon['coordinates']> : never)
            >,
            'coordinates'
        > {
        readonly type: Type;
        readonly features: Array<
            | (Type extends 'MultiPoint' ? DrawPoint : never)
            | (Type extends 'MultiLineString' ? DrawLineString : never)
            | (Type extends 'MultiPolygon' ? DrawPolygon : never)
        >;
        getFeatures(): this['features'];
    }

    interface DrawPoint extends DrawFeatureBase<Position> {
        readonly type: 'Point';
        getCoordinate(): Position;
        updateCoordinate(lng: number, lat: number): void;
        updateCoordinate(path: string, lng: number, lat: number): void;
    }

    interface DrawLineString extends DrawFeatureBase<Position[]> {
        readonly type: 'LineString';
        addCoordinate(path: string | number, lng: number, lat: number): void;
        removeCoordinate(path: string | number): void;
    }

    interface DrawPolygon extends DrawFeatureBase<Position[][]> {
        readonly type: 'Polygon';
        addCoordinate(path: string, lng: number, lat: number): void;
        removeCoordinate(path: string): void;
    }

    type DrawFeature =
        | DrawPoint
        | DrawLineString
        | DrawPolygon
        | DrawMultiFeature<'MultiPoint'>
        | DrawMultiFeature<'MultiLineString'>
        | DrawMultiFeature<'MultiPolygon'>;

    interface MapMouseEvent extends MapboxMapMouseEvent {
        featureTarget: DrawFeature;
    }

    interface MapTouchEvent extends MapboxMapTouchEvent {
        featureTarget: DrawFeature;
    }

    interface DrawEvent {
        target: Map;
        type: DrawEventType;
    }

    interface DrawCreateEvent extends DrawEvent {
        // Array of GeoJSON objects representing the features that were created
        features: Feature[];
        type: 'draw.create';
    }

    interface DrawDeleteEvent extends DrawEvent {
        // Array of GeoJSON objects representing the features that were deleted
        features: Feature[];
        type: 'draw.delete';
    }

    interface DrawCombineEvent extends DrawEvent {
        deletedFeatures: Feature[]; // Array of deleted features (those incorporated into new multifeatures)
        createdFeatures: Feature[]; // Array of created multifeatures
        type: 'draw.combine';
    }

    interface DrawUncombineEvent extends DrawEvent {
        deletedFeatures: Feature[]; // Array of deleted multifeatures (split into features)
        createdFeatures: Feature[]; // Array of created features
        type: 'draw.uncombine';
    }

    interface DrawUpdateEvent extends DrawEvent {
        features: Feature[]; // Array of features that were updated
        action: string; // Name of the action that triggered the update
        type: 'draw.update';
    }

    interface DrawSelectionChangeEvent extends DrawEvent {
        features: Feature[]; // Array of features that are selected after the change
        points: Array<Feature<Point>>;
        type: 'draw.selectionchange';
    }

    interface DrawModeChangeEvent extends DrawEvent {
        mode: DrawMode; // The next mode, i.e. the mode that Draw is changing to
        type: 'draw.modechange';
    }

    interface DrawRenderEvent extends DrawEvent {
        type: 'draw.render';
    }

    interface DrawActionableEvent extends DrawEvent {
        actions: DrawActionableState;
        type: 'draw.actionable';
    }

    interface DrawCustomModeThis {
        map: mapboxgl.Map;

        drawConfig: MapboxDrawOptions;

        setSelected(features?: string | string[]): void;

        setSelectedCoordinates(coords: Array<{ coord_path: string; feature_id: string }>): void;

        getSelected(): DrawFeature[];

        getSelectedIds(): string[];

        isSelected(id: string): boolean;

        getFeature(id: string): DrawFeature;

        select(id: string): void;

        delete(id: string): void;

        deleteFeature(id: string, opts?: any): void;

        addFeature(feature: DrawFeature): void;

        clearSelectedFeatures(): void;

        clearSelectedCoordinates(): void;

        setActionableState(actionableState: DrawActionableState): void;

        changeMode(mode: DrawMode, opts?: object, eventOpts?: object): void;

        updateUIClasses(opts: object): void;

        activateUIButton(name?: string): void;

        featuresAt(event: Event, bbox: BBox, bufferType: 'click' | 'tap'): DrawFeature[];

        newFeature(geojson: GeoJSON): DrawFeature;

        isInstanceOf(type: string, feature: object): boolean;

        doRender(id: string): void;
    }

    interface DrawCustomMode<CustomModeState = any, CustomModeOptions = any> {
        onSetup?(this: DrawCustomModeThis & this, options: CustomModeOptions): CustomModeState;

        onDrag?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapMouseEvent): void;

        onClick?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapMouseEvent): void;

        onMouseMove?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapMouseEvent): void;

        onMouseDown?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapMouseEvent): void;

        onMouseUp?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapMouseEvent): void;

        onMouseOut?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapMouseEvent): void;

        onKeyUp?(this: DrawCustomModeThis & this, state: CustomModeState, e: KeyboardEvent): void;

        onKeyDown?(this: DrawCustomModeThis & this, state: CustomModeState, e: KeyboardEvent): void;

        onTouchStart?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapTouchEvent): void;

        onTouchMove?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapTouchEvent): void;

        onTouchEnd?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapTouchEvent): void;

        onTap?(this: DrawCustomModeThis & this, state: CustomModeState, e: MapTouchEvent): void;

        onStop?(this: DrawCustomModeThis & this, state: CustomModeState): void;

        onTrash?(this: DrawCustomModeThis & this, state: CustomModeState): void;

        onCombineFeature?(this: DrawCustomModeThis & this, state: CustomModeState): void;

        onUncombineFeature?(this: DrawCustomModeThis & this, state: CustomModeState): void;

        toDisplayFeatures(
            this: DrawCustomModeThis & this,
            state: CustomModeState,
            geojson: GeoJSON,
            display: (geojson: GeoJSON) => void,
        ): void;
    }

    interface Modes {
        draw_line_string: DrawCustomMode;
        draw_polygon: DrawCustomMode;
        draw_point: DrawCustomMode;
        simple_select: DrawCustomMode;
        direct_select: DrawCustomMode;
    }

    interface MapboxDrawOptions {
        displayControlsDefault?: boolean | undefined;
        keybindings?: boolean | undefined;
        touchEnabled?: boolean | undefined;
        boxSelect?: boolean | undefined;
        clickBuffer?: number | undefined;
        touchBuffer?: number | undefined;
        controls?: MapboxDrawControls | undefined;
        styles?: object[] | undefined;
        modes?: { [modeKey: string]: DrawCustomMode } | undefined;
        defaultMode?: string | undefined;
        userProperties?: boolean | undefined;
    }
}

declare class MapboxDraw implements IControl {
    static modes: MapboxDraw.Modes;

    modes: MapboxDraw.DrawModes;

    getDefaultPosition: () => string;

    constructor(options?: MapboxDraw.MapboxDrawOptions);

    add(geojson: Feature | FeatureCollection | Geometry): string[];

    get(featureId: string): Feature | undefined;

    getFeatureIdsAt(point: { x: number; y: number }): string[];

    getSelectedIds(): string[];

    getSelected(): FeatureCollection;

    getSelectedPoints(): FeatureCollection;

    getAll(): FeatureCollection;

    delete(ids: string | string[]): this;

    deleteAll(): this;

    set(featureCollection: FeatureCollection): string[];

    trash(): this;

    combineFeatures(): this;

    uncombineFeatures(): this;

    getMode(): (MapboxDraw.DrawMode & {}) | string;

    changeMode(mode: 'simple_select', options?: { featureIds: string[] }): this;
    changeMode(mode: 'direct_select', options: { featureId: string }): this;
    changeMode(
        mode: 'draw_line_string',
        options?: { featureId: string; from: Feature<Point> | Point | number[] },
    ): this;
    changeMode(mode: Exclude<MapboxDraw.DrawMode, 'direct_select' | 'simple_select' | 'draw_line_string'>): this;
    changeMode<T extends string>(mode: T & (T extends MapboxDraw.DrawMode ? never : T), options?: object): this;

    setFeatureProperty(featureId: string, property: string, value: any): this;

    onAdd(map: mapboxgl.Map): HTMLElement;

    onRemove(map: mapboxgl.Map): any;
}
