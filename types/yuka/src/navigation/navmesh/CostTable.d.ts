import { NavMesh } from "./NavMesh";

/**
 * A lookup table representing the cost associated from traveling from one
 * node to every other node in the navigation mesh's graph.
 */
export class CostTable {
    /**
     * Creates a new cost table.
     */
    constructor();

    /**
     * Inits the cost table for the given navigation mesh.
     *
     * @param navMesh - The navigation mesh.
     */
    init(navMesh: NavMesh): this;

    /**
     * Clears the cost table.
     */
    clear(): this;

    /**
     * Sets the cost for the given pair of navigation nodes.
     *
     * @param from - The start node index.
     * @param to - The destintation node index.
     * @param cost - The cost.
     */
    set(from: number, to: number, cost: number): this;

    /**
     * Returns the cost for the given pair of navigation nodes.
     *
     * @param from - The start node index.
     * @param to - The destintation node index.
     */
    get(from: number, to: number): number;

    /**
     * Returns the size of the cost table (amount of entries).
     */
    size(): number;

    /**
     * Transforms this instance into a JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
