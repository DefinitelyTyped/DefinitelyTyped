// Type definitions for Victor.js 1.1.0
// Project: http://victorjs.org/
// Definitions by: Ivane Gegia <https://twitter.com/ivanegegia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface VictorCoordinates
{
    x:number
    y:number
}

declare class Victor
{
    x:number;
    y:number;

    /**
     * Can be used without the new keyword.
     * @param x The X component
     * @param y The Y component
     */
    constructor(x:number,y:number);

    /**
     * Creates vector from array.
     * @param arr array An array that contains the X component in the first element and the Y component in the second
     */
    static fromArray(arr:Array<number>):Victor;

    /**
     * Creates vector from object.
     * @param obj An object containing the X component in the x property and the Y component in the y property
     */
    static fromObject(obj:VictorCoordinates):Victor;

    /**
     * Creates a new Victor with the same X and Y components.
     */
    clone():Victor;

    /**
     * Copies the X component of another vector in to itself.
     * @param vector
     */
    copyX(vector:Victor):Victor;

    /**
     * Copies the Y component of another vector in to itself.
     * @param vector
     */
    copyY(vector:Victor):Victor;

    /**
     * Copies the X and Y components of another vector in to itself.
     * @param vector
     */
    copy(vector:Victor):Victor;

    /**
     * Returns a string representation of the X and Y components.
     */
    toString():string;

    /**
     * Returns an array representation of the X and Y components.
     */
    toArray():Array<number>;

    /**
     * Returns an object representation of tha X and Y components.
     */
    toObject():VictorCoordinates;

    /**
     * Adds another vector's X component to itself.
     * @param vector
     */
    addX(vector:Victor):Victor;

    /**
     * Adds another vector's Y component to itself.
     * @param vector
     */
    addY(vector:Victor):Victor;

    /**
     * Adds another vector to itself.
     * @param vector
     */
    add(vector:Victor):Victor;

    /**
     * Adds the given scalar to both vector axis.
     *
     * @param scalar
     */
    addScalar(scalar: number): Victor;

    /**
     * Adds the given scalar to the X axis.
     *
     * @param scalar
     */
    addScalarX(scalar: number): Victor;

    /**
     * Adds the given scalar to the Y axis.
     *
     * @param scalar
     */
    addScalarY(scalar: number): Victor;

    /**
     * Subtracts another vector's X component from itself.
     * @param vector
     */
    subtractX(vector:Victor):Victor;

    /**
     * Subtracts another vector's Y component from itself.
     * @param vector
     */
    subtractY(vector:Victor):Victor;

    /**
     * Subtracts another vector from itself.
     * @param vector
     */
    subtract(vector:Victor):Victor;

    /**
     * Subtracts the given scalar from both axis.
     *
     * @param scalar
     */
    subtractScalar(scalar: number): Victor;

    /**
     * Subtracts the given scalar from the X axis.
     *
     * @param scalar
     */
    subtractScalarX(scalar: number): Victor;

    /**
     * Subtracts the given scalar from the Y axis.
     *
     * @param scalar
     */
    subtractScalarY(scalar: number): Victor;

    /**
     * Multiplies the X component with the X component of another vector.
     * @param vector
     */
    multiplyX(vector:Victor):Victor;

    /**
     * Multiplies the Y component with the Y component of another vector.
     * @param vector
     */
    multiplyY(vector:Victor):Victor;

    /**
     * Multiplies both components with another vector.
     * @param vector
     */
    multiply(vector:Victor):Victor;

    /**
     * Multiplies both vector axis by the given scalar value
     *
     * @param scalar
     */
    multiplyScalar(scalar: number): Victor;

    /**
     * Multiplies the X axis by the given scalar
     *
     * @param scalar
     */
    multiplyScalarX(scalar: number): Victor;

    /**
     * Multiplies the Y axis by the given scalar
     *
     * @param scalar
     */
    multiplyScalarY(scalar: number): Victor;

    /**
     * Divides the X component by the X component of another vector.
     * @param vector
     */
    divideX(vector:Victor):Victor;

    /**
     * Divides the Y component by the Y component of another vector.
     * @param vector
     */
    divideY(vector:Victor):Victor;

    /**
     * Divides both components by another vector.
     * @param scalar
     */
    divide(scalar:Victor):Victor;

    /**
     * Divides both vector axis by the given scalar value.
     *
     * @param scalar
     */
    divideScalar(scalar: number): Victor;

    /**
     * Divides the X axis by the given scalar value.
     *
     * @param scalar
     */
    divideScalarX(scalar: number): Victor;

    /**
     * Divides the Y axis by the given scalar value.
     *
     * @param scalar
     */
    divideScalarY(scalar: number): Victor;

    /**
     * Inverts the X component.
     */
    invertX():Victor;

    /**
     * Inverts the Y component.
     */
    invertY():Victor;

    /**
     * Inverts both components.
     */
    invert():Victor;

    /**
     * Performs a linear blend / interpolation of the X component towards another vector.
     * @param vector Number amount Value between 0 and 1. Default: 0.5
     * @param amount
     */
    mixX(vector:Victor, amount:number):Victor;

    /**
     * Performs a linear blend / interpolation of the Y component towards another vector.
     * @param vector
     * @param amount
     */
    mixY(vector:Victor, amount:number):Victor;

    /**
     * Performs a linear blend / interpolation towards another vector.
     * @param vector
     * @param amount
     */
    mix(vector:Victor, amount:number):Victor;

    /**
     * Normalizes the vector by scaling it down to a length of 1 while keeping its direction.
     */
    normalize():Victor;

    /**
     * Alias of normalize.
     */
    norm():Victor;

    /**
     * If either component is greater than max, multiplies the component by multiplier.
     * @param max
     * @param multiplier
     */
    limit(max:number, multiplier:number):Victor;

    /**
     * Rounds the components to integer numbers.
     */
    unfloat():Victor;

    /**
     * Rotates the vector to a certain angle, in radians CCW from +X axis.
     * @param angle
     */
    rotate(angle:number):Victor;

    /**
     * Same as rotate but uses degrees
     * @param angle
     */
    rotateDeg(angle:number):Victor;

    /**
     * Rotates the vector by a rotation angle, given in radians CCW from +X axis.
     * @param rotation
     */
    rotateBy(rotation:number):Victor;

    /**
     * Same as rotateBy but uses degrees
     * @param rotation
     */
    rotateByDeg(rotation:number):Victor;

    /**
     * Randomizes the X component with a value between topLeft and bottomRight.
     * @param topLeft
     * @param bottomRight
     */
    randomizeX(topLeft:Victor, bottomRight:Victor):Victor;

    /**
     * Randomizes the Y component with a value between topLeft and bottomRight.
     * @param topLeft
     * @param bottomRight
     */
    randomizeY(topLeft:Victor, bottomRight:Victor):Victor;

    /**
     * Randomizes the components with a value between topLeft and bottomRight.
     * @param topLeft
     * @param bottomRight
     */
    randomize(topLeft:Victor, bottomRight:Victor):Victor;

    /**
     * Randomly randomizes either the X component or the Y component with a value between topLeft and bottomRight.
     * @param topLeft
     * @param bottomRight
     */
    randomizeAny(topLeft:Victor, bottomRight:Victor):Victor;

    /**
     * Rounds both axis to a certain precision.
     */
    toFixed():Victor;

    /**
     * Sets the vector to zero (0,0).
     */
    zero():Victor;

    /**
     * Projects a vector onto another vector, setting itself to the result.
     * @param vector
     */
    projectOnto(vector:Victor):Victor;

    /**
     * Returns the dot product of two vectors.
     * @param vector
     */
    dot(vector:Victor):number;

    /**
     * Returns the cross product of two vectors.
     * @param vector
     */
    cross(vector:Victor):number;

    /**
     * Returns the length / magnitude.
     */
    length():number;

    /**
     * Alias for length.
     */
    magnitude():number;

    /**
     * Returns the squared length / magnitude. If the length is only needed for comparison, this function is faster than length.
     */
    lengthSq():number;

    /**
     * Returns the distance of the X component from another vector.
     * @param vector
     */
    distanceX(vector:Victor):number;

    /**
     * Same as distanceX but always returns an absolute value.
     * @param vector
     */
    absDistanceX(vector:Victor):number;

    /**
     * Returns the distance of the Y component from another vector.
     * @param vector
     */
    distanceY(vector:Victor):number;

    /**
     * Same as distanceY but always returns an absolute value.
     * @param vector
     */
    absDistanceY(vector:Victor):number;

    /**
     * Returns the euclidean distance between two vectors.
     * @param vector
     */
    distance(vector:Victor):number;

    /**
     * Returns the squared euclidean distance between two vectors. If the distance is only needed for comparison, this function is faster than distance.
     * @param vector
     */
    distanceSq(vector:Victor):number;

    /**
     * Returns the angle towards X in radians.
     */
    horizontalAngle():number;

    /**
     * Alias for horizontalAngle.
     */
    angle():number;

    /**
     * Alias for horizontalAngle.
     */
    direction():number;

    /**
     * Same as horizontalAngle but returns degrees.
     */
    horizontalAngleDeg():number;

    /**
     * Alias for horizontalAngleDeg.
     */
    angleDeg():number;

    /**
     * Returns the angle towards Y in radians.
     */
    verticalAngle():number;

    /**
     * Same as verticalAngle but returns degrees.
     */
    verticalAngleDeg():number;

    /**
     * Returns a true if vector is (0, 0).
     */
    isZero():boolean;

    /**
     * Returns a true if this vector is the same as another.
     * @param vector
     */
    isEqualTo(vector:Victor):boolean;
}

export = Victor;
