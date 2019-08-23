declare namespace AMap {
    namespace Object3DLayer {
        interface Options {
            map?: Map;
            visible?: boolean;
            opacity?: number;
            zIndex?: number;
            zooms?: [number, number];
        }
    }

    class Object3DLayer extends Layer {
        constructor(options?: Object3DLayer.Options)
        add(object3d: Object3D): void;
        remove(object3d: Object3D): void;
        clear(): void;
        reDraw(): void;

        // internal
        setOption(options: {
            position?: number;
            scale?: number;
            height?: number;
            scene?: number;
        }): void;
    }
}
