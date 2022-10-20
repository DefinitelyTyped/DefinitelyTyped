declare namespace AMap {
    namespace RectangleEditor {
        interface Options {
            createOptions?: object | undefined;
            editOptions?: object | undefined;
            southWestPoint?: Marker.Options | undefined;
            northEastPoint?: Marker.Options | undefined;
        }
        interface EventMap {
            addnode: Event<'addnode', {target: Rectangle, lnglat: LngLat, pixel: Pixel}>;
            adjust: Event<'adjust', {target: Rectangle, lnglat: LngLat, pixel: Pixel}>;
            move: Event<'move', {target: Rectangle, lnglat: LngLat, pixel: Pixel}>;
            add: Event<'add', {target: Rectangle}>;
            end: Event<'end', {target: Rectangle}>;
        }
    }

    class RectangleEditor extends EventEmitter {
        constructor(map: Map, Rectangle: Rectangle, opts?: RectangleEditor.Options);
        open(): void;
        setTarget(tar: any, overlay: Rectangle): void;
        getTarget(): Rectangle | undefined;
        close(): void;
    }
}
