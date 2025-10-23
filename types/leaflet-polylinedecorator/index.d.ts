import * as L from "leaflet";

declare module "leaflet" {
    namespace Symbol {
        interface DashOptions {
            pixelSize?: number | undefined;
            pathOptions?: PathOptions | undefined;
        }

        class Dash {
            constructor(options?: DashOptions);
            initialize(options?: DashOptions): void;
            buildSymbol(dirPoint: Point, latLngs: LatLng[], map: Map, index: number, total: number): Polyline;
        }

        function dash(options?: DashOptions): Dash;

        interface ArrowHeadOptions {
            polygon?: boolean | undefined;
            pixelSize?: number | undefined;
            headAngle?: number | undefined;
            pathOptions?: PathOptions | undefined;
        }

        class ArrowHead {
            constructor(options?: ArrowHeadOptions);
            initialize(options?: ArrowHeadOptions): void;
            buildSymbol(dirPoint: Point, latLngs: LatLng[], map: Map, index: number, total: number): Polygon | Polyline;
        }

        function arrowHead(options?: ArrowHeadOptions): ArrowHead;

        interface MarkerOptions {
            rotate?: boolean | undefined;
            markerOptions?: L.MarkerOptions | undefined;
        }

        class Marker {
            constructor(options?: MarkerOptions);
            initialize(options?: MarkerOptions): void;
            buildSymbol(dirPoint: Point, latLngs: LatLng[], map: Map, index: number, total: number): Marker;
        }

        function marker(options?: MarkerOptions): Marker;
    }

    function isCoord(c: any): boolean;
    function isCoordArray(c: any): boolean;

    interface Pattern {
        offset?: number | string | undefined;
        endOffset?: number | string | undefined;
        repeat: number | string;
        symbol: Symbol.Dash | Symbol.ArrowHead | Symbol.Marker;
    }

    interface PolylineDecoratorOptions {
        patterns: Pattern[];
    }

    class PolylineDecorator extends FeatureGroup {
        constructor(
            paths: Polyline | Polygon | LatLngExpression[] | Polyline[] | Polygon[] | LatLngExpression[][],
            options?: PolylineDecoratorOptions,
        );
        initialize(
            paths: Polyline | Polygon | LatLngExpression[] | Polyline[] | Polygon[] | LatLngExpression[][],
            options?: PolylineDecoratorOptions,
        ): void;
        setPatterns(patterns: Pattern[]): void;
        setPaths(paths: Polyline | Polygon | LatLngExpression[] | Polyline[] | Polygon[] | LatLngExpression[][]): void;
        onAdd(map: Map): this;
        onRemove(map: Map): this;
        getBounds(): LatLngBounds;
        redraw(): void;
    }

    function polylineDecorator(paths: Polyline | Polyline[], options?: PolylineDecoratorOptions): PolylineDecorator;
}
