declare namespace AMap {
    namespace Polygon {
        interface EventMap<I = Polygon> extends PathOverlay.EventMap<I> { }
        interface Options<ExtraData = any> extends PathOverlay.Options<ExtraData> {
            path?: LocationValue[] | LocationValue[][];
            fillColor?: string;
            fillOpacity?: number;
        }

        interface GetOptionsResult<ExtraData = any> extends ShapeOverlay.GetOptionsResult<ExtraData> {
            fillColor: string;
            fillOpacity: number;
            path: LngLat[] | LngLat[][];
            lineJoin: StrokeLineJoin;
            texture: string;
        }
    }

    class Polygon<ExtraData = any> extends PathOverlay<ExtraData> {
        constructor(options?: Polygon.Options<ExtraData>);
        setPath(path: LocationValue[] | LocationValue[][]): void;
        getPath(): LngLat[] | LngLat[][];
        setOptions(options: Polygon.Options<ExtraData>): void;
        getOptions(): Partial<
            this extends Omit<Ellipse, keyof Polygon> ? Ellipse.GetOptionsResult<ExtraData> :
            this extends Omit<Rectangle, keyof Polygon> ? Rectangle.GetOptionsResult<ExtraData> :
            Polygon.GetOptionsResult<ExtraData>
        >;
        getArea(): number;
        contains(point: LocationValue): boolean;
    }
}
