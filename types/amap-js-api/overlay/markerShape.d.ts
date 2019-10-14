declare namespace AMap {
    namespace MarkerShape {
        interface CircleOptions {
            type: 'circle';
            coords: [number, number, number];
        }
        interface PolyOptions {
            type: 'poly';
            coords: number[];
        }
        interface RectOptions {
            type: 'rect';
            coords: [number, number, number, number];
        }
        type Options = CircleOptions | PolyOptions | RectOptions;
    }

    class MarkerShape extends EventEmitter {
        /**
         * Marker点击范围
         * @param options 选项
         */
        constructor(options: MarkerShape.Options);
    }
}
