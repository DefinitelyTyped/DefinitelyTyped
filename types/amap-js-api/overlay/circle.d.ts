declare namespace AMap {
    namespace Circle {
        interface EventMap<I = Circle> extends ShapeOverlay.EventMap<I> {
            setCenter: Event<'setCenter'>;
            setRadius: Event<'setRadius'>;
        }

        interface Options<ExtraData = any> {
            map?: Map;
            zIndex?: number;
            center?: LocationValue;
            bubble?: boolean;
            cursor?: string;
            radius?: number;
            strokeColor?: string;
            strokeOpcity?: number;
            strokeWeight?: number;
            fillColor?: string;
            fillOpacity?: number;
            strokeStyle?: StrokeStyle;
            extData?: ExtraData;
            strokeDasharray?: number[];

            // internal
            visible?: boolean;
            unit?: 'meter' | 'px'; // 'might be typo'
        }

        type GetOptionsResult<ExtraData = any> = Merge<Polygon.GetOptionsResult<ExtraData>, {
            path: LngLat[];
            center: LngLat;
            radius: number;
        }>;
    }

    class Circle<ExtraData = any> extends ShapeOverlay<ExtraData> {
        constructor(options?: Circle.Options<ExtraData>);
        setCenter(center: LocationValue, preventEvent?: boolean): void;
        getCenter(): LngLat | undefined;
        getBounds(): Bounds | null;
        setRadius(radius: number, preventEvent?: boolean): void;
        getRadius(): number;
        setOptions(options?: Circle.Options<ExtraData>): void;
        getOptions(): Partial<Circle.GetOptionsResult<ExtraData>>;
        contains(point: LocationValue): boolean;
        // internal
        getPath(count?: number): LngLat[];
    }
}
