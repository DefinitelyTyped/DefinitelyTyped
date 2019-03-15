declare namespace AMap {
    namespace Ellipse {
        interface EventMap<I = Ellipse> extends ShapeOverlay.EventMap<I> {
            setPath: Event<'setPath'>;
            setCenter: Event<'setCenter'>;
        }

        interface Options<ExtraData = any> extends Polygon.Options<ExtraData> {
            center?: LocationValue;
            radius?: [number, number];
        }
        type GetOptionsResult<ExtraData = any> = Merge<Circle.GetOptionsResult<ExtraData>, {
            radius: [number, number];
        }>;
    }

    class Ellipse<ExtraData = any> extends Polygon<ExtraData> {
        constructor(options?: Ellipse.Options<ExtraData>);
        getCenter(): LngLat | undefined;
        setCenter(center: LocationValue, preventEvent?: boolean): void;
        setOptions(options: Ellipse.Options<ExtraData>): void;

        // internal
        setRadius(radius: [number, number], preventEvent?: boolean): void;
        getRadius(): [number, number];
    }
}
