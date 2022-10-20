declare namespace AMap {
    namespace EllipseEditor {
        interface Options {
            createOptions?: Object | undefined;
            editOptions?: Object | undefined;
            movePointOptions?: Marker.Options | undefined;
            resizeXPoint?: Marker.Options | undefined;
            resizeYPoint?: Marker.Options | undefined;
        }
        interface EventMap {
            addnode: Event<'addnode', {target: Ellipse, lnglat: LngLat, pixel: Pixel}>;
            adjust: Event<'adjust', {target: Ellipse, lnglat: LngLat, pixel: Pixel}>;
            move: Event<'move', {target: Ellipse, lnglat: LngLat, pixel: Pixel}>;
            add: Event<'add', {target: Ellipse}>;
            end: Event<'end', {target: Ellipse}>;
        }
    }

    class EllipseEditor extends EventEmitter {
        constructor(map: Map, Ellipse: Ellipse, opts?: EllipseEditor.Options);
        open(): void;
        setTarget(tar: any, overlay: Ellipse): void;
        getTarget(): Ellipse | undefined;
        close(): void;
    }
}
