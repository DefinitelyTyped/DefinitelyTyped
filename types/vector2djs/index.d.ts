// Type definitions for vector2js 2.01
// Project: https://github.com/RonenNess/Vector2js
// Definitions by: Leo Nicolle <https://github.com/Leo-Nicolle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Vector2 {
  public x: number;
  public y: number;
  constructor(x: number, y: number);

  /**
   * @method clone
   * Clones the vector
   * @return Vector2
   */
  clone(): Vector2;

  /**
   * @method equals
   * @param vector the vector to compare with
   * @return equality of each component
   */
  equals(vector: Vector2): boolean;

  /**
   * @method copy
   * @param vector The vector to copy values from
   * @return this
   */
  copy(vector: Vector2): this;

  /**
   * @method copyX
   * @param vector  The vector to copy X from
   * @return this
   */
  copyX(vector: Vector2): this;

  /**
   * @method copyY
   * @param vector  The vector to copy Y from
   * @return this
   */
  copyY(vector: Vector2): this;

  /**
   * @method toDict
   * Convert to an Object with {x, y}.
   * @return "{ x, y }"
   */
  toDict(): { x: number; y: number };

  /**
   * @method toArray
   * Convert to array with x, y.
   * @return [x, y]
   */
  toArray(): number[];

  /**
   * @method set
   * Set values from x, y.
   * @param [x] x component to set.
   * @param [y] y component to set.
   * @return this
   */
  set(x?: number, y?: number): this;

  /**
   * @method flipXY
   * Clone and flip between x and y values.
   * @return Cloned vector vith flipped X and Y components
   */
  flipXY(): Vector2;

  /**
   * @method flipXYSelf
   * flip between x and y values.
   * @return this
   */
  flipXYSelf(): this;

  /**
   * @method invert
   * Clone and invert x and y values
   * @return "{-x,-y}"
   */
  invert(): Vector2;

  /**
   * @method invertSelf
   * Invert x and y values (*-1)
   * @return this
   */
  invertSelf(): this;

  /**
   * @method distanceFrom
   * Get the distance from another vector.
   * @param  other vector to get distance from.
   * @return Distance between the two vectors
   */
  distanceFrom(other: Vector2): number;

  /**
   * @method radiansTo
   * Get angle from another vector in radians.
   * @param  other vector to get angle from.
   * @return Angle in radians from this to other
   */
  radiansTo(other: Vector2): number;

  /**
   * @method degreesTo
   * Get degrees from another vector in degrees.
   * @param  other vector to get angle from.
   * @return Angle in degrees from this to other
   */
  degreesTo(other: Vector2): number;

  /**
   * @method toRadians
   * Get angle from X axis.
   * Same as vector.zero.radiansto(this)
   * @param  other vector to get angle from.
   * @return angle in radians
   */
  toRadians(other: Vector2): number;
  /**
   * @method toDegrees
   * Get angle from X axis.
   * This is equivalent to doing vector.zero.degreeto(this).
   * @return Angle In Degrees (0-360)
   */
  toDegrees(other: Vector2): number;
  /**
   * @method rotateDegreesSelf
   * Rotate by a given angle.
   * @param degrees to rotate this vector by.
   * @return this
   */
  rotateDegreesSelf(degrees: number): this;

  /**
   * @method rotateDegrees
   * Clone and rotate by a given angle.
   * @param degrees to rotate this vector by.
   * @return Cloned Rotated Vector
   */
  rotateDegrees(degrees: number): Vector2;

  /**
   * @method rotateRadiansSelf
   * Rotate by a given angle.
   * @param radians to rotate by.
   * @return this
   */
  rotateRadiansSelf(radians: number): this;

  /**
   * @method rotateRadians
   * Clone and rotate the vector by a given angle.
   * @param radians to rotate this vector by.
   * @return Cloned Rotated Vector
   */
  rotateRadians(radians: number): Vector2;

  /**
   * @method length
   * get length (aka magnitude)
   * @return length
   */
  length(): number;

  /**
   * @method normalizeSelf
   * Normalize vector
   * @return this
   */
  normalizeSelf(): this;

  /**
   * @method normalize
   * Clone and normalize the vector.
   * @return Vector2
   */
  normalize(): Vector2;

  /**
   * @method addSelf
   * Add other vector to self.
   * @param vector to add.
   * @return this
   */
  addSelf(other: Vector2 | number): this;

  /**
   * @method subSelf
   * Subtract other vector from self.
   * @param vector to subtract.
   * @return this
   */
  subSelf(other: Vector2 | number): this;

  /**
   * @method divSelf
   * Divide self by other vector.
   * @param vector to divide from.
   * @return this
   */
  divSelf(other: Vector2 | number): this;

  /**
   * @method mulSelf
   * Multiply self vector by other vector.
   * @param vector to multiply components with.
   * @return this
   */
  mulSelf(other: Vector2 | number): this;

  /**
   * @method addScalarSelf
   * Add scalar value to self.
   * @param value to add to components.
   * @return this
   */
  addScalarSelf(val: number): this;

  /**
   * @method subScalarSelf
   * Subtract scalar from self.
   * @param value to subtract from components.
   * @return this
   */
  subScalarSelf(val: number): this;

  /**
   * @method divScalarSelf
   * Divide self by scalar.
   * @param value to divide components by.
   * @return this
   */
  divScalarSelf(val: number): this;

  /**
   * @method mulScalarSelf
   * Multiply self by scalar.
   * @param value to multiply components with.
   * @return this
   */
  mulScalarSelf(val: number): this;

  /**
   * @method add
   * Clone self and add other vector to it.
   * @param vector to add with.
   * @return Vector2
   */
  add(other: Vector2 | number): Vector2;

  /**
   * @method sub
   * Clone self and subtract other vector from it.
   * @param vector to subtract from.
   * @return Vector2
   */
  sub(other: Vector2 | number): Vector2;

  /**
   * @method mul
   * Clone self and multiply by other vector.
   * @param vector to multiply with.
   * @return Vector2
   */
  mul(other: Vector2 | number): Vector2;

  /**
   * @method div
   * Clone and divide by other vector.
   * @param vector to divide with.
   * @return Vector2
   */
  div(other: Vector2 | number): Vector2;

  /**
   * @method addScalar
   * Clone and add scalar.
   * @param value to add.
   * @return Vector2
   */
  addScalar(scalar: number): Vector2;

  /**
   * @method subScalar
   * Clone and substract scalar.
   * @param value to subtract.
   * @return Vector2
   */
  subScalar(scalar: number): Vector2;

  /**
   * @method mulScalar
   * Clone and multiply by scalar.
   * @param value to multiply with.
   * @return Vector2
   */
  mulScalar(scalar: number): Vector2;

  /**
   * @method divScalar
   * Clone and divide by scalar.
   * @param value to divide by.
   * @return Vector2
   */
  divScalar(scalar: number): Vector2;

  /**
   * @method clampSelf
   * Clamp vector values into range.
   * Note: this function does not validate that min < max.
   * @param min value
   * @param max value
   * @return this
   */
  clampSelf(min: number, max: number): this;

  /**
   * @method clamp
   * Clone and clamp.
   * Note: this function does not validate that min < max.
   * @param min value
   * @param max value
   * @return Vector2
   */
  clamp(min: number, max: number): Vector2;

  /**
   * @method applySelf
   * Apply a function on x and y components of the vector.
   * @param function to apply on components.
   * @return this
   */
  applySelf(func: Vector2): this;

  /**
   * @method apply
   * Clone and apply a function on x and y components.
   * @param function to apply on components.
   * @return Vector2
   */
  apply(func: Vector2): Vector2;

  /**
   * @method absSelf
   * abs component values (x, y positive).
   * @return this
   */
  absSelf(): this;

  /**
   * @method abs
   * Clone and abs component values (x, y positive).
   * @return Vector2
   */
  abs(): Vector2;

  /**
   * @method roundSelf
   * round components values
   * @return this
   */
  roundSelf(): this;

  /**
   * @method round
   * Clone and round components values
   * @return Vector2
   */
  round(): Vector2;

  /**
   * @method dot
   * @param vector to compute dot-product with.
   * @return Dot Product
   */
  dot(other: Vector2): number;

  /**
   * @method cross
   * @param vector to compute cross-product with.
   * @return Vector2
   */
  cross(other: Vector2): Vector2;

  /**
   * If any of the components of this vector are nan, null, undefined, etc. set them to defaults.
   * @param x default value
   * @param y default value
   * @return this
   */
  repairSelf(x: number, y: number): this;

  /**
   * Clone and replace nan, null, undefined, etc by defaults.
   * @param x default value
   * @param y default value
   * @return Vector2
   */
  repair(x: number, y: number): Vector2;

  /**
   * Convert to string in the form of "x,y".
   * @return String
   */
  toString(): string;

  /**
   * Convert to a string with a given format.
   * @param fmat - a string in which %x and %y will be replaced with the vector values.
   * @return String
   */
  format(format: string): string;
}
