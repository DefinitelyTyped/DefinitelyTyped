export interface Coordinates {
    x: number;

    y: number;
}

export class Point implements Coordinates {
    x: number;

    y: number;

    constructor(x: number, y: number);
}

export class LazyPoint extends Point {
    /**
     * Update the x and y values
     */
    update(coordinates: Coordinates): void;

    /**
     * Move the point to another position using an angle and distance
     */
    moveByAngle(angle: number, distance: number): void;

    /**
     * Get the difference for x and y axis to another point
     */
    getDifferenceTo(point: Coordinates): Point;

    /**
     * Calculate distance to another point
     */
    getDistanceTo(point: Coordinates): number;

    /**
     * Calculate the angle to another point
     */
    getAngleTo(point: Coordinates): number;

    /**
     * Check if this point is the same as another point
     */
    equalsTo(point: Coordinates): boolean;

    /**
     * Return a simple object with x and y properties
     */
    toObject(): Coordinates;
}

export interface Options {
    radius?: number | undefined;
    enabled?: boolean | undefined;
    initialPoint?: Coordinates | undefined;
}

export interface UpdateOptions {
    both: boolean;
}

export class LazyBrush {
    radius: number;

    _isEnabled: boolean;

    pointer: LazyPoint;

    brush: LazyPoint;

    angle: number;

    distance: number;

    _hasMoved: boolean;

    constructor(options?: Options);

    /**
     * Enable lazy brush calculations
     */
    enable(): void;

    /**
     * Disable lazy brush calculations
     */
    disable(): void;

    isEnabled(): boolean;

    /**
     * Update the radius
     */
    setRadius(radius: number): void;

    /**
     * Return the current radius
     */
    getRadius(): number;

    /**
     * Updates the pointer coordinates and calculates the new brush point
     */
    update(coordinates: Coordinates, options?: UpdateOptions): boolean;

    /**
     * Return the brush as a LazyPoint
     */
    getBrush(): LazyPoint;

    /**
     * Return the brush coordinates as a simple object
     */
    getBrushCoordinates(): Coordinates;

    /**
     * Return the pointer as a LazyPoint
     */
    getPointer(): LazyPoint;

    /**
     * Return the pointer coordinates as a simple object
     */
    getPointerCoordinates(): Coordinates;

    /**
     * Return the angle between pointer and brush
     */
    getAngle(): number;

    /**
     * Return the distance between pointer and brush
     */
    getDistance(): number;

    /**
     * Return if the previous update has moved the brush
     */
    brushHasMoved(): boolean;
}
