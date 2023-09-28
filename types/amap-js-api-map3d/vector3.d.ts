declare namespace AMap {
    class Vector3 {
        readonly elements: [number, number, number];
        constructor(elements: [number, number, number] | Vector3);
        set(x: number, y: number, z: number): void;
        dot(): number;
        clone(): Vector3;
        add(elements: [number, number, number] | Vector3): this;
        sub(elements: [number, number, number] | Vector3): this;
        addVectors(a: Vector3, b: Vector3): this;
        subVectors(a: Vector3, b: Vector3): this;
        crossVectors(a: Vector3, b: Vector3): this;
        normalize(): this;
        length(): number;
    }
}
