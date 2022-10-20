declare namespace AMap {
    namespace CircleEditor {
        interface Options {
            createOptions?: object | undefined;
            editOptions?: object | undefined;
            moveOptions?: Marker.Options | undefined;
            resizeOptions?: Marker.Options | undefined;
        }
        interface EventMap {
            addnode: Event<'addnode', {target: Circle, lnglat: LngLat, pixel: Pixel}>;
            adjust: Event<'adjust', {target: Circle, lnglat: LngLat, pixel: Pixel}>;
            move: Event<'move', {target: Circle, lnglat: LngLat, pixel: Pixel}>;
            add: Event<'add', {target: Circle}>;
            end: Event<'end', {target: Circle}>;
        }
    }
    class CircleEditor extends EventEmitter {
        constructor(map: Map, Circle?: Circle, opts?: CircleEditor.Options);
        setTarget(overlay?: Circle): void;
        getTarget(): Circle | undefined;
        open(): void;
        close(): void;
    }
}
