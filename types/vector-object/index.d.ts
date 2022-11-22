// Type definitions for vector-object 1.3
// Project: https://github.com/stanleyfok/vector-object
// Definitions by: = <https://github.com/bakedpotatolord>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Vector {
    vector: object;
    constructor(object: object);
    clone(): Vector;
    toObject(): object;
    getComponents(): string[];
    get(component: string): any;
    set(component: string, value: any): void;
    isEqual(vector: Vector): boolean;
    getDistance(vector: Vector): number;
    getLength(): number;
    getDotProduct(vector: Vector): number;
    getCosineSimilarity(vector: Vector): number;
    normalize(): Vector;
    add(vector: Vector): Vector;
    subtract(vector: Vector): Vector;
    multiply(scalar: number): Vector;
    divide(scalar: number): Vector;
}
export = Vector;
