import { BBox, Feature, FeatureCollection, GeoJSON, GeoJsonTypes, Geometry, Point, Position } from "geojson";
import {
    CircleLayer,
    FillLayer,
    IControl,
    LineLayer,
    Map,
    MapboxEvent,
    MapMouseEvent as MapboxMapMouseEvent,
    MapTouchEvent as MapboxMapTouchEvent,
} from "mapbox-gl";

export = MapboxDraw;
export as namespace MapboxDraw;

declare namespace MapboxDraw {
    type DrawMode = DrawModes[keyof DrawModes];

    type DrawEventType =
        | "draw.create"
        | "draw.delete"
        | "draw.update"
        | "draw.render"
        | "draw.combine"
        | "draw.uncombine"
        | "draw.modechange"
        | "draw.actionable"
        | "draw.selectionchange";

    interface DrawModes {
        DRAW_LINE_STRING: "draw_line_string";
        DRAW_POLYGON: "draw_polygon";
        DRAW_POINT: "draw_point";
        SIMPLE_SELECT: "simple_select";
        DIRECT_SELECT: "direct_select";
        STATIC: "static";
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
        readonly properties: Readonly<Feature["properties"]>;
        readonly coordinates: Coordinates;
        readonly id: NonNullable<Feature["id"]>;
        readonly type: GeoJsonTypes;

        changed(): void;
        isValid(): boolean;
        incomingCoords: this["setCoordinates"];
        setCoordinates(coords: Coordinates): void;
        getCoordinates(): Coordinates;
        getCoordinate(path: string): Position;
        updateCoordinate(path: string, lng: number, lat: number): void;
        setProperty(property: string, value: any): void;
        toGeoJSON(): GeoJSON;
    }

    interface DrawMultiFeature<Type extends "MultiPoint" | "MultiLineString" | "MultiPolygon"> extends
        Omit<
            DrawFeatureBase<
                | (Type extends "MultiPoint" ? Array<DrawPoint["coordinates"]> : never)
                | (Type extends "MultiLineString" ? Array<DrawLineString["coordinates"]> : never)
                | (Type extends "MultiPolygon" ? Array<DrawPolygon["coordinates"]> : never)
            >,
            "coordinates"
        >
    {
        readonly type: Type;
        readonly features: Array<
            | (Type extends "MultiPoint" ? DrawPoint : never)
            | (Type extends "MultiLineString" ? DrawLineString : never)
            | (Type extends "MultiPolygon" ? DrawPolygon : never)
        >;
        getFeatures(): this["features"];
    }

    interface DrawPoint extends DrawFeatureBase<Position> {
        readonly type: "Point";
        getCoordinate(): Position;
        updateCoordinate(lng: number, lat: number): void;
        updateCoordinate(path: string, lng: number, lat: number): void;
    }

    interface DrawLineString extends DrawFeatureBase<Position[]> {
        readonly type: "LineString";
        addCoordinate(path: string | number, lng: number, lat: number): void;
        removeCoordinate(path: string | number): void;
    }

    interface DrawPolygon extends DrawFeatureBase<Position[][]> {
        readonly type: "Polygon";
        addCoordinate(path: string, lng: number, lat: number): void;
        removeCoordinate(path: string): void;
    }

    type DrawFeature =
        | DrawPoint
        | DrawLineString
        | DrawPolygon
        | DrawMultiFeature<"MultiPoint">
        | DrawMultiFeature<"MultiLineString">
        | DrawMultiFeature<"MultiPolygon">;

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
        type: "draw.create";
    }

    interface DrawDeleteEvent extends DrawEvent {
        // Array of GeoJSON objects representing the features that were deleted
        features: Feature[];
        type: "draw.delete";
    }

    interface DrawCombineEvent extends DrawEvent {
        deletedFeatures: Feature[]; // Array of deleted features (those incorporated into new multifeatures)
        createdFeatures: Feature[]; // Array of created multifeatures
        type: "draw.combine";
    }

    interface DrawUncombineEvent extends DrawEvent {
        deletedFeatures: Feature[]; // Array of deleted multifeatures (split into features)
        createdFeatures: Feature[]; // Array of created features
        type: "draw.uncombine";
    }

    interface DrawUpdateEvent extends DrawEvent {
        features: Feature[]; // Array of features that were updated
        action: string; // Name of the action that triggered the update
        type: "draw.update";
    }

    interface DrawSelectionChangeEvent extends DrawEvent {
        features: Feature[]; // Array of features that are selected after the change
        points: Array<Feature<Point>>;
        type: "draw.selectionchange";
    }

    interface DrawModeChangeEvent extends DrawEvent {
        mode: DrawMode; // The next mode, i.e. the mode that Draw is changing to
        type: "draw.modechange";
    }

    interface DrawRenderEvent extends DrawEvent {
        type: "draw.render";
    }

    interface DrawActionableEvent extends DrawEvent {
        actions: DrawActionableState;
        type: "draw.actionable";
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

        featuresAt(event: Event, bbox: BBox, bufferType: "click" | "tap"): DrawFeature[];

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

    interface Constants {
        readonly classes: {
            CONTROL_BASE: "mapboxgl-ctrl";
            CONTROL_PREFIX: "mapboxgl-ctrl-";
            CONTROL_BUTTON: "mapbox-gl-draw_ctrl-draw-btn";
            CONTROL_BUTTON_LINE: "mapbox-gl-draw_line";
            CONTROL_BUTTON_POLYGON: "mapbox-gl-draw_polygon";
            CONTROL_BUTTON_POINT: "mapbox-gl-draw_point";
            CONTROL_BUTTON_TRASH: "mapbox-gl-draw_trash";
            CONTROL_BUTTON_COMBINE_FEATURES: "mapbox-gl-draw_combine";
            CONTROL_BUTTON_UNCOMBINE_FEATURES: "mapbox-gl-draw_uncombine";
            CONTROL_GROUP: "mapboxgl-ctrl-group";
            ATTRIBUTION: "mapboxgl-ctrl-attrib";
            ACTIVE_BUTTON: "active";
            BOX_SELECT: "mapbox-gl-draw_boxselect";
        };

        readonly sources: {
            HOT: "mapbox-gl-draw-hot";
            COLD: "mapbox-gl-draw-cold";
        };

        readonly cursors: {
            ADD: "add";
            MOVE: "move";
            DRAG: "drag";
            POINTER: "pointer";
            NONE: "none";
        };

        readonly types: {
            POLYGON: "polygon";
            LINE: "line_string";
            POINT: "point";
        };

        readonly geojsonTypes: {
            FEATURE: "Feature";
            POLYGON: "Polygon";
            LINE_STRING: "LineString";
            POINT: "Point";
            FEATURE_COLLECTION: "FeatureCollection";
            MULTI_PREFIX: "Multi";
            MULTI_POINT: "MultiPoint";
            MULTI_LINE_STRING: "MultiLineString";
            MULTI_POLYGON: "MultiPolygon";
        };

        readonly modes: {
            DRAW_LINE_STRING: "draw_line_string";
            DRAW_POLYGON: "draw_polygon";
            DRAW_POINT: "draw_point";
            SIMPLE_SELECT: "simple_select";
            DIRECT_SELECT: "direct_select";
            STATIC: "static";
        };

        readonly events: {
            CREATE: "draw.create";
            DELETE: "draw.delete";
            UPDATE: "draw.update";
            SELECTION_CHANGE: "draw.selectionchange";
            MODE_CHANGE: "draw.modechange";
            ACTIONABLE: "draw.actionable";
            RENDER: "draw.render";
            COMBINE_FEATURES: "draw.combine";
            UNCOMBINE_FEATURES: "draw.uncombine";
        };

        readonly updateActions: {
            MOVE: "move";
            CHANGE_COORDINATES: "change_coordinates";
        };

        readonly meta: {
            FEATURE: "feature";
            MIDPOINT: "midpoint";
            VERTEX: "vertex";
        };

        readonly activeStates: {
            ACTIVE: "true";
            INACTIVE: "false";
        };

        readonly interactions: [
            "scrollZoom",
            "boxZoom",
            "dragRotate",
            "dragPan",
            "keyboard",
            "doubleClickZoom",
            "touchZoomRotate",
        ];

        readonly LAT_MIN: -90;
        readonly LAT_RENDERED_MIN: -85;
        readonly LAT_MAX: 90;
        readonly LAT_RENDERED_MAX: 85;
        readonly LNG_MIN: -270;
        readonly LNG_MAX: 270;
    }

    interface StringSet {
        add(x: string | number): StringSet;
        delete(x: string | number): StringSet;
        has(x: string | number): boolean;
        values(): string | number[];
        clear(): StringSet;
    }
    interface Lib {
        CommonSelectors: {
            isOfMetaType: (
                type: Constants["meta"][keyof Constants["meta"]],
            ) => (e: MapMouseEvent | MapTouchEvent) => boolean;
            isShiftMousedown: (e: MapboxEvent) => boolean;
            isActiveFeature: (e: MapMouseEvent | MapTouchEvent) => boolean;
            isInactiveFeature: (e: MapMouseEvent | MapTouchEvent) => boolean;
            noTarget: (e: MapMouseEvent | MapTouchEvent) => boolean;
            isFeature: (e: MapMouseEvent | MapTouchEvent) => boolean;
            isVertex: (e: MapMouseEvent | MapTouchEvent) => boolean;
            isShiftDown: (e: MapboxEvent) => boolean;
            isEscapeKey: (e: KeyboardEvent) => boolean;
            isEnterKey: (e: KeyboardEvent) => boolean;
            isTrue: () => boolean;
        };

        constrainFeatureMovement(
            geojsonFeatures: DrawFeature[],
            delta: { lng: number; lat: number },
        ): { lng: number; lat: number };

        createMidPoint(parent: string, startVertex: Feature, endVertex: Feature): Feature<Point> | null;

        createSupplementaryPoints(
            geojson: Feature,
            options?: { midpoints?: boolean; selectedPaths?: string[] },
            basePath?: string,
        ): Array<Feature<Point>>;

        /**
         * Returns GeoJSON for a Point representing the
         * vertex of another feature.
         *
         * @param parentId
         * @param coordinates
         * @param path Dot-separated numbers indicating exactly
         *   where the point exists within its parent feature's coordinates.
         * @param selected
         * @return GeoJSON Point
         */
        createVertex(parentId: string, coordinates: Position, path: string, selected: boolean): Feature<Point>;

        // TODO: define a proper type for ctx since is not exposed correctly
        // https://github.com/mapbox/mapbox-gl-draw/issues/1156

        doubleClickZoom: {
            enable: (ctx: DrawCustomModeThis) => void; // ?? ctx
            disable: (ctx: DrawCustomModeThis) => void; // ?? ctx
        };

        featuresAt: {
            click: (event: MapMouseEvent, bbox: BBox, ctx: DrawCustomModeThis) => Feature[]; // ?? ctx
            touch: (event: MapTouchEvent, bbox: BBox, ctx: DrawCustomModeThis) => Feature[]; // ?? ctx
        };

        getFeatureAtAndSetCursors(event: MapMouseEvent, ctx: DrawCustomModeThis): Feature;

        euclideanDistance(a: { x: number; y: number }, b: { x: number; y: number }): number;

        isClick(
            start: { point?: { x: number; y: number }; time?: number },
            end: { point: { x: number; y: number }; time: number },
            options?: { fineTolerance?: number; grossTolerance?: number; interval?: number },
        ): boolean;

        isEventAtCoordinates(event: MapMouseEvent, coordinates: Position[]): boolean;

        isTap(
            start: { point?: { x: number; y: number }; time?: number },
            end: { point: { x: number; y: number }; time: number },
            options?: { tolerance?: number; interval?: number },
        ): boolean;

        /**
         * Returns a bounding box representing the event's location.
         *
         * @param mapEvent - Mapbox GL JS map event, with a point properties.
         * @param [buffer=0]
         * @return Bounding box.
         */
        mapEventToBoundingBox(mapEvent: MapMouseEvent | MapTouchEvent, buffer?: number): Position[];

        ModeHandler: (
            mode: any,
            DrawContext: any,
        ) => {
            render: any;
            stop: () => void;
            trash: () => void;
            combineFeatures: () => void;
            uncombineFeatures: () => void;
            drag: (event: any) => void;
            click: (event: any) => void;
            mousemove: (event: any) => void;
            mousedown: (event: any) => void;
            mouseup: (event: any) => void;
            mouseout: (event: any) => void;
            keydown: (event: any) => void;
            keyup: (event: any) => void;
            touchstart: (event: any) => void;
            touchmove: (event: any) => void;
            touchend: (event: any) => void;
            tap: (event: any) => void;
        };

        moveFeatures(features: DrawFeature[], delta: { lng: number; lat: number }): void;

        /**
         * Sort features in the following order Point: 0, LineString: 1, MultiLineString: 1,
         * Polygon: 2, then sort polygons by area ascending.
         * @param features
         */
        sortFeatures(features: DrawFeature[]): DrawFeature[];

        stringSetsAreEqual(a: Array<Pick<Feature, "id">>, b: Array<Pick<Feature, "id">>): boolean;

        StringSet(items?: Array<string | number>): StringSet;

        theme: Array<(FillLayer | LineLayer | CircleLayer) & { id: ThemeLayerId }>;

        /**
         * Derive a dense array (no `undefined`s) from a single value or array.
         */
        toDenseArray(x: any): Array<NonNullable<any>>;
    }

    type ThemeLayerId =
        | "gl-draw-polygon-fill-static"
        | "gl-draw-polygon-fill-active"
        | "gl-draw-polygon-fill-inactive"
        | "gl-draw-polygon-stroke-static"
        | "gl-draw-polygon-stroke-active"
        | "gl-draw-polygon-stroke-inactive"
        | "gl-draw-polygon-midpoint"
        | "gl-draw-polygon-and-line-vertex-inactive"
        | "gl-draw-polygon-and-line-vertex-stroke-inactive"
        | "gl-draw-line-static"
        | "gl-draw-line-active"
        | "gl-draw-line-inactive"
        | "gl-draw-point-static"
        | "gl-draw-point-active"
        | "gl-draw-point-inactive"
        | "gl-draw-point-stroke-active"
        | "gl-draw-point-point-stroke-inactive";

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
    static constants: MapboxDraw.Constants;
    static lib: MapboxDraw.Lib;

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

    changeMode(mode: "simple_select", options?: { featureIds: string[] }): this;
    changeMode(mode: "direct_select", options: { featureId: string }): this;
    changeMode(
        mode: "draw_line_string",
        options?: { featureId: string; from: Feature<Point> | Point | number[] },
    ): this;
    changeMode(mode: Exclude<MapboxDraw.DrawMode, "direct_select" | "simple_select" | "draw_line_string">): this;
    changeMode<T extends string>(mode: T & (T extends MapboxDraw.DrawMode ? never : T), options?: object): this;

    setFeatureProperty(featureId: string, property: string, value: any): this;

    onAdd(map: mapboxgl.Map): HTMLElement;

    onRemove(map: mapboxgl.Map): any;
}
