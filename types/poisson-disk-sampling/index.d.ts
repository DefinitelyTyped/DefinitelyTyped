import FixedDensityPDS = require("./src/implementations/fixed-density");
import VariableDensityPDS = require("./src/implementations/variable-density");

type Point = number[];

declare class PoissonDiskSampling {
    shape: number[];
    implementation: FixedDensityPDS | VariableDensityPDS;

    constructor(
        options: {
            /**
             * Shape of the space
             */
            shape: number[];
            /**
             * Minimum distance between each points
             */
            minDistance: number;
            /**
             * Maximum distance between each points
             * @default (minDistance * 2)
             */
            maxDistance?: number | undefined;
            /**
             * Number of times the algorithm will try to place a point in the neighbourhood of another points
             * @default 30
             */
            tries?: number | undefined;
            /**
             * Function to control the distance between each point depending on their position,
             * must return a value between 0 and 1
             */
            distanceFunction?: ((point: Point) => number) | null | undefined;
            /**
             * When using a `distanceFunction`, will indicate which point constraint takes priority when evaluating two points
             * (0 for the lowest distance, 1 for the highest distance)
             * @default 0
             */
            bias?: number | undefined;
        },
        /**
         * RNG function
         * @default Math.random
         */
        rng?: (() => number) | null,
    );

    /**
     * Add a totally random point in the grid
     * @returns The point added to the grid
     */
    addRandomPoint(): Point;

    /**
     * Add a given point to the grid
     * @param point Point
     * @returns The point added to the grid, `null` if the point is out of the bound or not of the correct dimension
     */
    addPoint(point: Point): Point | null;

    /**
     * Try to generate a new point in the grid, returns `null` if it wasn't possible
     * @returns The added point or null
     */
    next(): Point | null;

    /**
     * Automatically fill the grid, adding a random point to start the process if needed.
     * Will block the thread, probably best to use it in a web worker or child process.
     * @returns Sample points
     */
    fill(): Point[];

    /**
     * Get all the points in the grid.
     * @returns Sample points
     */
    getAllPoints(): Point[];

    /**
     * Get all the points in the grid along with the result of the distance function.
     * @throws Will throw an error if a distance function was not provided to the constructor.
     * @returns Sample points with their distance function result
     */
    getAllPointsWithDistance(): Point[];

    /**
     * Reinitialize the grid as well as the internal state
     */
    reset(): void;
}

export = PoissonDiskSampling;
