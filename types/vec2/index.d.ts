/**
 * A generic library useful when you need to work with points/vectors in 2d space.
 * **Stuff to Note**: most of the Vec2's methods take a `returnNew` as the last parameter.
 * If passed a truthy value, a new vector will be returned to you.
 * Otherwise the operation will be applied to `this` and `this` will be returned.
 * Also, since `Infinity`and `NaN` are so insidious, this library will throw as soon as it detects either of these so you can take action to fix your data/algorithm.
 */
declare class Vec2 {
    readonly x: number;
    readonly y: number;

    constructor(xy: number[] | { x: number; y: number });
    constructor(x: number, y: number);

    static fromArray(xy: number[]): Vec2;

    // Floating point stability
    static precision: number;

    static clean(val: number): number;

    /**
     * Add an observer `fn` that will be called whenever this vector changes.  Calling this method without a function causes it to notify observers.
     * `fn` signature: `function(vec, prev) {}` - where `prev` is a clone of the vector before the last operation.
     * this function returns the passed `fn`
     */
    change(fn?: (vec: Vec2, prev: Vec2) => any): Vec2;

    /**
     * Pass a `fn` to remove it from the observers list. Calling this function without a `fn` will remove all observers.
     */
    ignore(fn?: (vec: Vec2, prev: Vec2) => any): Vec2;

    /**
     * Sets the `x` and `y` coordinates of this vector.  If `false` is passed for `notify`, none of the observers will be called.
     */
    set(x: number, y: number, notify?: boolean): Vec2;

    /**
     * Sets the `x` and `y` of this vector to `0`
     */
    zero(): Vec2;

    /**
     * Returns a new vector with the same component values
     */
    clone(): Vec2;

    /**
     * Negate the `x` and `y` coords of this vector.  If `returnNew` is truthy, a new vector with the negated coordinates will be returned.
     */
    negate(returnNew?: boolean): Vec2;

    /**
     * Add the `x` and `y` to this vector's coordinates.
     * If `returnNew` is truthy, return a new vector containing the resulting coordinates. Otherwise apply them to this vector and return it.
     */
    add(x: number, y: number, returnNew?: boolean): Vec2;
    add(vec2: number[] | Vec2, returnNew?: boolean): Vec2;

    subtract(x: number, y: number, returnNew?: boolean): Vec2;
    subtract(vec2: Vec2 | number[], returnNew?: boolean): Vec2;

    /**
     * Multiply this vectors components with the incoming, returning a clone if `returnNew` is truthy.
     */
    multiply(x: number, y: number, returnNew?: boolean): Vec2;
    multiply(scalarArrayVec2: number | number[] | Vec2, returnNew?: boolean): Vec2;

    /**
     * Divide this vectors components by the incoming, returning a clone if `returnNew` is truthy.
     * _note_: this method will throw if you attempt to divide by zero or pass values that cause NaNs
     */
    divide(x: number, y: number, returnNew?: boolean): Vec2;
    divide(scalarArrayVec2: number | number[] | Vec2, returnNew?: boolean): Vec2;

    /**
     * Rotate this vector's cordinates around `(0,0)`.  If `returnNew` is specified, a new `Vec2` will be created and populated with the result and returned.
     * Otherwise the result is applied to this vector and `this` is returned.
     * `inverse` - inverts the direction of the rotation
     * `returnNew` - causes the result to be applied to a new `Vec2`, otherwise the result is applied to `this`
     */
    rotate(radians: number, inverse?: number, returnNew?: boolean): Vec2;

    /**
     * Returns the length of this vector from `(0,0)`
     */
    length(): number;

    /**
     * Returns the length of this vector prior to the `Math.sqrt` call.
     * This is usefull when you don't need to know the actual distance, but need a normalized value to compare with another `Vec2#lengthSquared` or similar.
     */
    lengthSquared(): number;

    /**
     * _returns_: the distance between this vector and the incoming
     */
    distance(vec2: Vec2): number;

    /**
     * _returns_: closest vector in array to this vector.
     */
    nearest(array: Vec2[]): Vec2;

    /**
     * Normalizes this vector.  If `returnNew` is truthy, a new vector populated with the normalized coordinates will be returned.
     */
    normalize(returnNew?: boolean): Vec2;

    /**
     * Returns true if the incoming coordinates are the same as this vector's
     */
    equal(x: number, y: number): boolean;
    equal(arrayVec2: number[] | Vec2): boolean;

    /**
     * Return a `Vec2` that contains the absolute value of each of this vector's parts.
     * If `returnNew` is truthy, create a new `Vec2` and return it. Otherwise apply the absolute values to to `this`.
     */
    abs(returnNew?: boolean): Vec2;

    /**
     * Return a `Vec2` consisting of the smallest values from this vector and the incoming
     * When returnNew is truthy, a new `Vec2` will be returned otherwise the minimum values in either this or `vec` will be applied to this vector.
     */
    min(vec: Vec2, returnNew?: boolean): Vec2;

    /**
     * Return a `Vec2` consisting of the largest values from this vector and the incoming
     * When returnNew is truthy, a new `Vec2` will be returned otherwise the maximum values in either `this` or `vec` will be applied to this vector.
     */
    max(vec: Vec2, returnNew?: boolean): Vec2;

    /**
     * Clamp the coordinates of this vector to the high/low of the incoming vec2s.  If `returnNew` apply the result to the new vector and return.
     * Otherwise apply to this vector.
     */
    clamp(low: Vec2, high: Vec2, returnNew?: boolean): Vec2;

    /**
     * Perform linear interpolation between this vector and the incoming.
     * `amount` - the percentage along the path to place the vector
     * `returnNew` - if `truthy`, apply the result to a new vector and return it, otherwise return `this`
     */
    lerp(vec: Vec2, amount: number, returnNew?: boolean): Vec2;

    /**
     * Returns a vector set with the `(-y,x)` coordinates of this vector.  If `returnNew` a new vector is created and the operation is applied to the new vector.
     */
    skew(returnNew?: boolean): Vec2;

    /**
     * _returns_: `double`
     */
    dot(vec: Vec2): number;

    /**
     * _returns_: `double`
     */
    perpDot(vec: Vec2): number;

    /**
     * Returns the angle from this vector to the incoming.
     */
    angleTo(vec: Vec2): number;

    /**
     * Where `start` and `end` are vec2-like (e.g. `start.x` and `start.y`)
     */
    isPointOnLine(start: Vec2, end: Vec2): boolean;

    /**
     * _returns_: `[x, y]`
     */
    toArray(): number[];

    /**
     * Applies the `[0]` to `this.x` and `[1]` to `this.y`
     */
    fromArray(array: number[]): Vec2;

    toJSON(): { x: number; y: number };

    /**
     * _returns_: `'(x, y)'`
     */
    toString(): string;
}

export = Vec2;
