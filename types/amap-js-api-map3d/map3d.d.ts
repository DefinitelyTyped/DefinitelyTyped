declare namespace AMap {
    namespace Map {
        interface Object3DResult {
            index: number;
            point: Vector3;
            distance: number;
            object: Object3D;
        }
    }
    interface Map {
        AmbientLight?: Lights.AmbientLight | undefined;
        DirectionLight?: Lights.DirectionLight | undefined;
        getObject3DByContainerPos(pixel: Pixel, layers?: Layer[], all?: boolean): Map.Object3DResult | null;
    }
}
