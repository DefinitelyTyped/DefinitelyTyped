import { GameEntity } from "../core/GameEntity";
import { Polygon } from "../math/Polygon";
import { Vector3 } from "../math/Vector3";
import { Cell } from "./Cell";

/**
 * This class is used for cell-space partitioning, a basic approach for implementing
 * a spatial index. The 3D space is divided up into a number of cells. A cell contains a
 * list of references to all the entities it contains. Compared to other spatial indices like
 * octrees, the division of the 3D space is coarse and often not balanced but the computational
 * overhead for calculating the index of a specific cell based on a position vector is very fast.
 */
export class CellSpacePartitioning {
    /**
     * The list of partitions.
     */
    cells: Cell[];

    /**
     * The width of the entire spatial index.
     */
    width: number;

    /**
     * The height of the entire spatial index.
     */
    height: number;

    /**
     * The depth of the entire spatial index.
     */
    depth: number;

    /**
     * The amount of cells along the x-axis.
     */
    cellsX: number;

    /**
     * The amount of cells along the y-axis.
     */
    cellsY: number;

    /**
     * The amount of cells along the z-axis.
     */
    cellsZ: number;

    /**
     * Constructs a new spatial index with the given values.
     *
     * @param width - The width of the entire spatial index.
     * @param height - The height of the entire spatial index.
     * @param depth - The depth of the entire spatial index.
     * @param cellsX - The amount of cells along the x-axis.
     * @param cellsY - The amount of cells along the y-axis.
     * @param cellsZ - The amount of cells along the z-axis.
     */
    constructor(width: number, height: number, depth: number, cellsX: number, cellsY: number, cellsZ: number);

    /**
     * Updates the partitioning index of a given game entity.
     *
     * @param entity - The entity to update.
     * @param [currentIndex] - The current partition index of the entity (default: -1).
     * @return The new partitioning index for the given game entity.
     */
    updateEntity(entity: GameEntity, currentIndex?: number): number;

    /**
     * Adds an entity to a specific partition.
     *
     * @param entity - The entity to add.
     * @param index - The partition index.
     */
    addEntityToPartition(entity: GameEntity, index: number): this;

    /**
     * Removes an entity from a specific partition.
     *
     * @param entity - The entity to remove.
     * @param index - The partition index.
     */
    removeEntityFromPartition(entity: GameEntity, index: number): this;

    /**
     * Computes the partition index for the given position vector.
     *
     * @param position - The given position.
     * @returns The partition index.
     */
    getIndexForPosition(position: Vector3): number;

    /**
     * Performs a query to the spatial index according the the given position and
     * radius. The method approximates the query position and radius with an AABB and
     * then performs an intersection test with all non-empty cells in order to determine
     * relevant partitions. Stores the result in the given result array.
     *
     * @param position - The given query position.
     * @param radius - The given query radius.
     * @param result - The result array.
     */
    query(position: Vector3, radius: number, result: GameEntity[]): GameEntity[];

    /**
     * Removes all entities from all partitions.
     */
    makeEmpty(): this;

    /**
     * Adds a polygon to the spatial index. A polygon is approximated with an AABB.
     *
     * @param polygon - The polygon to add.
     */
    addPolygon(polygon: Polygon): this;

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

    /**
     * Restores UUIDs with references to GameEntity objects.
     *
     * @param entities - Maps game entities to UUIDs.
     */
    resolveReferences(entities: Map<string, GameEntity>): this;
}
