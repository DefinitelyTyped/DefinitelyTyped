declare namespace AMap {
    namespace Rectangle {
        interface EventMap<I = Rectangle> extends Polygon.EventMap<I> {
            setBounds: Event<'setBounds'>;
        }

        interface Options<ExtraData = any> extends Polygon.Options<ExtraData> {
            bounds?: Bounds;
        }
        type GetOptionsResult<ExtraData = any> = Merge<Polygon.GetOptionsResult<ExtraData>, {
            path: LngLat[];
            bounds: Bounds;
            texture: string;
        }>;
    }
    class Rectangle<ExtraData = any> extends Polygon<ExtraData> {
        constructor(options?: Rectangle.Options<ExtraData>);
        setBounds(bounds: Bounds, preventEvent?: boolean): void;
        setOptions(options: Partial<Rectangle.Options>): void;
    }
}
