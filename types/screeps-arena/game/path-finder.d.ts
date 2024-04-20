declare module "game/path-finder" {
    import { Position } from "game/prototypes";

    export type SearchPathOptions = {
        /** Custom navigation cost data */
        costMatrix?: CostMatrix;

        /** Cost for walking on plain positions. The default is 2 */
        plainCost?: number;

        /** Cost for walking on swamp positions. The default is 10 */
        swampCost?: number;

        /**
         * Instead of searching for a path to the goals this will search for a path away from the goals.
         * The cheapest path that is out of range of every goal will be returned.
         * The default is false
         */
        flee?: boolean;

        /** The maximum allowed pathfinding operations. The default value is 50000 */
        maxOps?: number;

        /** The maximum allowed cost of the path returned. The default is Infinity */
        maxCost?: number;

        /** Weight from 1 to 9 to apply to the heuristic in the A* formula F = G + weight * H. The default value is 1.2 */
        heuristicWeight?: number;
    }

    export type SearchPathResult = {
        /** The path found as an array of objects containing x and y properties */
        path: Position[];

        /** Total number of operations performed before this path was calculated */
        ops: number;

        /** The total cost of the path as derived from plainCost, swampCost, and given CostMatrix instance */
        cost: number;

        /** If the pathfinder fails to find a complete path, this will be true */
        incomplete: boolean;
    }

    /**
     * Container for custom navigation cost data.
     * If a non-0 value is found in the CostMatrix then that value will be used instead of the default terrain cost.
     */
    export class CostMatrix {
        /**
         * Creates a new {@link CostMatrix} containing 0's for all positions.
         */
        constructor();

        /**
         * Get the cost of a position in this {@link CostMatrix}.
         * @param x The X position in the game
         * @param y The Y position in the game
         * @returns the cost at the specified position
         */
        get(x: number, y: number): number;

        /**
         * Set the cost of a position in this {@link CostMatrix}.
         * @param x The X position in the game
         * @param y The Y position in the game
         * @param cost Cost of this position.
         */
        set(x: number, y: number, cost: number): void;

        /**
         * @returns a new {@link CostMatrix} instance.
         */
        clone(): CostMatrix;
    }

    export type Goal = Position | {pos: Position, range: number};

    /**
     * Find an optimal path between origin and goal.
     * @param origin The start position.
     * @param goal A goal or an array of goals
     * @param options An object containing additional pathfinding flags
     * @param options.costMatrix Custom navigation cost data
     * @param options.plainCost Cost for walking on plain positions. The default is 2
     * @param options.swampCost Cost for walking on swamp positions. The default is 10
     * @param options.flee Instead of searching for a path to the goals this will search for a path away from the goals. The default is false
     * @param options.maxOps The maximum allowed pathfinding operations. The default value is 50000
     * @param options.maxCost The maximum allowed cost of the path returned. The default is Infinity
     * @param options.heuristicWeight Weight from 1 to 9 to apply to the heuristic in the A* formula F = G + weight * H. The default value is 1.2
     * @returns a {@link SearchPathResult} object with the search result
     */
    export function searchPath(origin: Position, goal: Goal | Goal[], options?: SearchPathOptions): SearchPathResult;
}
