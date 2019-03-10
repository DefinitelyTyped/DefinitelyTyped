declare namespace AMap {
    namespace View2D {
        interface Options {
            center?: LocationValue;
            rotation?: number;
            zoom?: number;
            crs?: 'EPGS3857' | 'EPGS3395' | 'EPGS4326';
        }
    }
    class View2D extends EventEmitter {
        constructor(options?: View2D.Options);
    }
}
