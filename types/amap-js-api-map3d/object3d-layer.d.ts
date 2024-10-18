declare namespace AMap {
    namespace Object3DLayer {
        interface Options {
            map?: Map | undefined;
            visible?: boolean | undefined;
            opacity?: number | undefined;
            zIndex?: number | undefined;
            zooms?: [number, number] | undefined;
        }
    }

    class Object3DLayer extends Layer {
        constructor(options?: Object3DLayer.Options);
        add(object3d: Object3D): void;
        remove(object3d: Object3D): void;
        clear(): void;
        reDraw(): void;

        // internal
        setOption(options: {
            position?: number | undefined;
            scale?: number | undefined;
            height?: number | undefined;
            scene?: number | undefined;
        }): void;
    }
}
