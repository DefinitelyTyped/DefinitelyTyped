declare namespace AMap {
    namespace ShapeOverlay {
        interface EventMap<I = ShapeOverlay> extends Overlay.EventMap<I> {
            show: Event<'show', { target: I }>;
            hide: Event<'hide', { target: I }>;
            options: Event<'options'>;
            change: Event<'change', { target: I }>;
        }
        interface GetOptionsResult<ExtraData = any> {
            map: Map;
            zIndex: number;
            strokeColor: string;
            strokeOpacity: number;
            strokeWeight: number;
            strokeStyle: StrokeStyle;
            strokeDasharray: number[];
            extData: ExtraData | {};
            bubble: boolean;
            clickable: boolean;
        }
    }
    abstract class ShapeOverlay<ExtraData = any> extends Overlay<ExtraData> {
        abstract setOptions(options: {}): void;
        abstract getOptions(): {};
        getzIndex(): number;
        setzIndex(zIndex: number): void;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
    }
}
