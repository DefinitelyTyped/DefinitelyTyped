type InputVec = Vector | { x: number; y: number };
declare class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);

    /**
     * @description Creates a Vector from an array
     * @param Array: [10,10]
     * @return Vector
     */
    static fromArray(array: number[]): Vector;

    /**
     * @description Creates a Vector from an angle
     * @param angle in degrees
     * @return Vector
     */
    static fromDegrees(angle: number): Vector;

    /**
     * @description Creates a Vector from an angle
     * @param angle in radians
     * @return Vector
     */
    static fromRadians(agnle: number): Vector;

    /**
     * @description Creates a Vector from string
     * @param string format: x,y 10,10
     * @return Vector
     */
    static fromString(s: string): Vector;

    /**
     * @description Clones the vector
     * @return Vector
     */
    clone(): Vector;

    /**
     * @param vector the vector to compare with
     * @return equality of each component
     */
    equals(vector: InputVec): boolean;

    /**
     * @param vector The vector to copy values from
     * @return this
     */
    copy(vector: InputVec): this;

    /**
     * @param vector  The vector to copy X from
     * @return this
     */
    copyX(vector: InputVec): this;

    /**
     * @param vector  The vector to copy Y from
     * @return this
     */
    copyY(vector: InputVec): this;

    /**
     * @description Convert to an Object with {x, y}.
     * @return "{ x, y }"
     */
    toDict(): { x: number; y: number };

    /**
     * @description Convert to array with x, y.
     * @return [x, y]
     */
    toArray(): number[];

    /**
     * @description Set values from x, y.
     * @param [x] x component to set.
     * @param [y] y component to set.
     * @return this
     */
    set(x?: number, y?: number): this;

    /**
     * @description Clone and flip between x and y values.
     * @return Cloned vector vith flipped X and Y components
     */
    flipXY(): Vector;

    /**
     * @description flip between x and y values.
     * @return this
     */
    flipXYSelf(): this;

    /**
     * @description Clone and invert x and y values
     * @return "{-x,-y}"
     */
    invert(): Vector;

    /**
     * @description Invert x and y values (*-1)
     * @return this
     */
    invertSelf(): this;

    /**
     * @description Get the distance from another vector.
     * @param  other vector to get distance from.
     * @return Distance between the two vectors
     */
    distanceFrom(other: InputVec): number;

    /**
     * @description Get angle from another vector in radians.
     * @param  other vector to get angle from.
     * @return Angle in radians from this to other
     */
    radiansTo(other: InputVec): number;

    /**
     * @description Get degrees from another vector in degrees.
     * @param  other vector to get angle from.
     * @return Angle in degrees from this to other
     */
    degreesTo(other: InputVec): number;

    /**
     * @description Get angle from X axis.
     * Same as vector.zero.radiansto(this)
     * @param  other vector to get angle from.
     * @return angle in radians
     */
    toRadians(other: InputVec): number;
    /**
     * @description Get angle from X axis.
     * This is equivalent to doing vector.zero.degreeto(this).
     * @return Angle In Degrees (0-360)
     */
    toDegrees(other: InputVec): number;
    /**
     * @description Rotate by a given angle.
     * @param degrees to rotate this vector by.
     * @return this
     */
    rotateDegreesSelf(degrees: number): this;

    /**
     * @description Clone and rotate by a given angle.
     * @param degrees to rotate this vector by.
     * @return Cloned Rotated Vector
     */
    rotateDegrees(degrees: number): Vector;

    /**
     * @description Rotate by a given angle.
     * @param radians to rotate by.
     * @return this
     */
    rotateRadiansSelf(radians: number): this;

    /**
     * @description Clone and rotate the vector by a given angle.
     * @param radians to rotate this vector by.
     * @return Cloned Rotated Vector
     */
    rotateRadians(radians: number): Vector;

    /**
     * @description get length (aka magnitude)
     * @return length
     */
    length(): number;

    /**
     * @description Normalize vector
     * @return this
     */
    normalizeSelf(): this;

    /**
     * @description Clone and normalize the vector.
     * @return Vector
     */
    normalize(): Vector;

    /**
     * @description Add other vector to self.
     * @param vector to add.
     * @return this
     */
    addSelf(other: InputVec | number): this;

    /**
     * @description Subtract other vector from self.
     * @param vector to subtract.
     * @return this
     */
    subSelf(other: InputVec | number): this;

    /**
     * @description Divide self by other vector.
     * @param vector to divide from.
     * @return this
     */
    divSelf(other: InputVec | number): this;

    /**
     * @description Multiply self vector by other vector.
     * @param vector to multiply components with.
     * @return this
     */
    mulSelf(other: InputVec | number): this;

    /**
     * @description Add scalar value to self.
     * @param value to add to components.
     * @return this
     */
    addScalarSelf(val: number): this;

    /**
     * @description Subtract scalar from self.
     * @param value to subtract from components.
     * @return this
     */
    subScalarSelf(val: number): this;

    /**
     * @description Divide self by scalar.
     * @param value to divide components by.
     * @return this
     */
    divScalarSelf(val: number): this;

    /**
     * @description Multiply self by scalar.
     * @param value to multiply components with.
     * @return this
     */
    mulScalarSelf(val: number): this;

    /**
     * @description Clone self and add other vector to it.
     * @param vector to add with.
     * @return Vector
     */
    add(other: InputVec | number): Vector;

    /**
     * @description Clone self and subtract other vector from it.
     * @param vector to subtract from.
     * @return Vector
     */
    sub(other: InputVec | number): Vector;

    /**
     * @description Clone self and multiply by other vector.
     * @param vector to multiply with.
     * @return Vector
     */
    mul(other: InputVec | number): Vector;

    /**
     * @description Clone and divide by other vector.
     * @param vector to divide with.
     * @return Vector
     */
    div(other: InputVec | number): Vector;

    /**
     * @description Clone and add scalar.
     * @param value to add.
     * @return Vector
     */
    addScalar(scalar: number): Vector;

    /**
     * @description Clone and substract scalar.
     * @param value to subtract.
     * @return Vector
     */
    subScalar(scalar: number): Vector;

    /**
     * @description Clone and multiply by scalar.
     * @param value to multiply with.
     * @return Vector
     */
    mulScalar(scalar: number): Vector;

    /**
     * @description Clone and divide by scalar.
     * @param value to divide by.
     * @return Vector
     */
    divScalar(scalar: number): Vector;

    /**
     * @description Clamp vector values into range.
     * Note: this function does not validate that min < max.
     * @param min value
     * @param max value
     * @return this
     */
    clampSelf(min: number, max: number): this;

    /**
     * @description Clone and clamp.
     * Note: this function does not validate that min < max.
     * @param min value
     * @param max value
     * @return Vector
     */
    clamp(min: number, max: number): Vector;

    /**
     * @description Apply a function on x and y components of the vector.
     * @param function to apply on components.
     * @return this
     */
    applySelf(func: (component: number) => number): this;

    /**
     * @description Clone and apply a function on x and y components.
     * @param function to apply on components.
     * @return Vector
     */
    apply(func: (component: number) => number): Vector;

    /**
     * @description abs component values (x, y positive).
     * @return this
     */
    absSelf(): this;

    /**
     * @description Clone and abs component values (x, y positive).
     * @return Vector
     */
    abs(): Vector;

    /**
     * @description round components values
     * @return this
     */
    roundSelf(): this;

    /**
     * @description Clone and round components values
     * @return Vector
     */
    round(): Vector;

    /**
     * @param vector to compute dot-product with.
     * @return Dot Product
     */
    dot(other: InputVec): number;

    /**
     * @param vector to compute cross-product with.
     * @return Vector
     */
    cross(other: InputVec): Vector;

    /**
     * @description If any of the components of this vector are nan, null, undefined, etc. set them to defaults.
     * @param x default value
     * @param y default value
     * @return this
     */
    repairSelf(x: number, y: number): this;

    /**
     * @description Clone and replace nan, null, undefined, etc by defaults.
     * @param x default value
     * @param y default value
     * @return Vector
     */
    repair(x: number, y: number): Vector;

    /**
     * @description Convert to string in the form of "x,y".
     * @return String
     */
    toString(): string;

    /**
     * @description Convert to a string with a given format.
     * @param fmat - a string in which %x and %y will be replaced with the vector values.
     * @return String
     */
    format(format: string): string;
}

declare namespace Vector {
    const zero: Vector;
    const one: Vector;
    const up: Vector;
    const down: Vector;
    const left: Vector;
    const right: Vector;
    const upLeft: Vector;
    const downLeft: Vector;
    const upRight: Vector;
    const downRight: Vector;
}

export = Vector;
export as namespace Vector;
