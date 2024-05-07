import { Matrix4 } from "./Matrix4.js";
import { Quaternion } from "./Quaternion.js";
import { Vector3 } from "./Vector3.js";

/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */
export class Euler {
    constructor(x?: number, y?: number, z?: number, order?: string);

    static RotationOrders: string[];
    static DefaultOrder: string;

    x: number;
    y: number;
    z: number;
    order: string;
    isEuler: boolean;

    set(x: number, y: number, z: number, order?: string): this;
    clone(): Euler;
    copy(euler: Euler): this;
    setFromRotationMatrix(m: Matrix4, order?: string, update?: boolean): this;
    setFromQuaternion(q: Quaternion, order?: string, update?: boolean): this;
    setFromVector3(v: Vector3, order?: string): this;
    reorder(newOrder: string): this;
    equals(euler: Euler): boolean;
    fromArray(array: [number, number, number, string?]): this;
    toArray(array?: [number, number, number, string?], offset?: number): [number, number, number, string?];
    toVector3(optionalResult?: Vector3): Vector3;
    _onChange(callback: () => void): this;

    private _x: number;
    private _y: number;
    private _z: number;
    private _order: string;
    private _onChangeCallback: () => void;
}
