declare namespace google.maps {
    type DrawingMode = 'Point' | 'LineString' | 'Polygon';

    class Data extends MVCObject {
        constructor(options?: Data.DataOptions);
        add(feature: Data.Feature | Data.FeatureOptions): Data.Feature;
        addGeoJson(geoJson: object, options?: Data.GeoJsonOptions): Data.Feature[];
        contains(feature: Data.Feature): boolean;
        forEach(callback: (feature: Data.Feature) => void): void;
        getControlPosition(): ControlPosition;
        getControls(): DrawingMode[];
        getDrawingMode(): DrawingMode | null;
        getFeatureById(id: number | string): Data.Feature;
        getMap(): Map;
        getStyle(): Data.StylingFunction | Data.StyleOptions;
        loadGeoJson(url: string, options?: Data.GeoJsonOptions, callback?: (features: Data.Feature[]) => void): void;
        overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
        remove(feature: Data.Feature): void;
        revertStyle(feature?: Data.Feature): void;
        setControlPosition(controlPosition: ControlPosition): void;
        setControls(controls: DrawingMode[] | null): void;
        setDrawingMode(drawingMode: DrawingMode | null): void;
        setMap(map: Map | null): void;
        setStyle(style: Data.StylingFunction | Data.StyleOptions): void;
        toGeoJson(callback: (feature: object) => void): void;
    }

    namespace Data {
        interface DataOptions {
            controlPosition?: ControlPosition;
            controls?: DrawingMode[] | null;
            drawingMode?: DrawingMode | null;
            featureFactory?: (geometry: Geometry) => Feature;
            map?: Map;
            style?: StylingFunction | StyleOptions;
        }

        interface GeoJsonOptions {
            idPropertyName?: string;
        }

        interface StyleOptions {
            clickable?: boolean;
            cursor?: string;
            draggable?: boolean;
            editable?: boolean;
            fillColor?: string;
            fillOpacity?: number;
            // tslint:disable-next-line:no-unnecessary-qualifier
            icon?: string | Icon | google.maps.Symbol;
            shape?: MarkerShape;
            strokeColor?: string;
            strokeOpacity?: number;
            strokeWeight?: number;
            title?: string;
            visible?: boolean;
            zIndex?: number;
        }

        type StylingFunction = (feature: Feature) => StyleOptions;

        class Feature {
            constructor(options?: FeatureOptions);
            forEachProperty(callback: (value: any, name: string) => void): void;
            getGeometry(): Geometry;
            getId(): number | string;
            getProperty(name: string): any;
            removeProperty(name: string): void;
            setGeometry(newGeometry: Geometry | LatLng | LatLngLiteral): void;
            setProperty(name: string, newValue: any): void;
            toGeoJson(callback: (feature: object) => void): void;
        }

        interface FeatureOptions {
            geometry?: Geometry | LatLng | LatLngLiteral;
            id?: number | string;
            properties?: object;
        }

        class Geometry {
            getType(): string;
            forEachLatLng(callback: (latLng: LatLng) => void): void;
        }

        class Point extends Geometry {
            constructor(latLng: LatLng | LatLngLiteral);
            get(): LatLng;
        }

        class MultiPoint extends Geometry {
            constructor(elements: Array<LatLng | LatLngLiteral>);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        class LineString extends Geometry {
            constructor(elements: Array<LatLng | LatLngLiteral>);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        class MultiLineString extends Geometry {
            constructor(elements: Array<LineString | Array<LatLng | LatLngLiteral>>);
            getArray(): LineString[];
            getAt(n: number): LineString;
            getLength(): number;
        }

        class LinearRing extends Geometry {
            constructor(elements: Array<LatLng | LatLngLiteral>);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        class Polygon extends Geometry {
            constructor(elements: Array<LinearRing | Array<LatLng | LatLngLiteral>>);
            getArray(): LinearRing[];
            getAt(n: number): LinearRing;
            getLength(): number;
        }

        class MultiPolygon extends Geometry {
            constructor(elements: Array<Polygon | Array<LinearRing | Array<LatLng | LatLngLiteral>>>);
            getArray(): Polygon[];
            getAt(n: number): Polygon;
            getLength(): number;
        }

        class GeometryCollection extends Geometry {
            constructor(elements: Array<Geometry[] | LatLng[] | LatLngLiteral>);
            getArray(): Geometry[];
            getAt(n: number): Geometry;
            getLength(): number;
        }

        // tslint:disable-next-line:no-unnecessary-qualifier
        interface MouseEvent extends google.maps.MouseEvent {
            feature: Feature;
        }

        interface AddFeatureEvent {
            feature: Feature;
        }

        interface RemoveFeatureEvent {
            feature: Feature;
        }

        interface SetGeometryEvent {
            feature: Feature;
            newGeometry: Geometry;
            oldGeometry: Geometry;
        }

        interface SetPropertyEvent {
            feature: Feature;
            name: string;
            newValue: any;
            oldValue: any;
        }

        interface RemovePropertyEvent {
            feature: Feature;
            name: string;
            oldValue: any;
        }
    }
}
