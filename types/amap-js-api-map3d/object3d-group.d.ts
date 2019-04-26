declare namespace AMap {
    class Object3DGroup<C extends Object3D = Object3D> extends Object3D {
        constructor();
        children: C[];
        add(object3d: C): void;
        remove(object3d: C): void;
    }
}
