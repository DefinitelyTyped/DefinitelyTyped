import { GameEntity } from "../../core/GameEntity";
import { Vector3 } from "../../math/Vector3";

/**
 * Class for representing the vision component of a game entity.
 */
export class Vision {
    /**
     * The game entity that owns this vision instance.
     */
    owner: GameEntity | null;

    /**
     * The field of view in radians.
     * @default π
     */
    fieldOfView: number;

    /**
     * The visual range in world units.
     * @default Infinity
     */
    range: number;

    /**
     * An array of obstacles. An obstacle is a game entity that
     * implements the {@link GameEntity#lineOfSightTest} method.
     */
    obstacles: GameEntity[];

    /**
     * Constructs a new vision object.
     *
     * @param [owner=null] - The owner of this vision instance.
     */
    constructor(owner?: GameEntity | null);

    /**
     * Adds an obstacle to this vision instance.
     *
     * @param obstacle - The obstacle to add.
     */
    addObstacle(obstacle: GameEntity): this;

    /**
     * Removes an obstacle from this vision instance.
     *
     * @param obstacle - The obstacle to remove.
     */
    removeObstacle(obstacle: GameEntity): this;

    /**
     * Performs a line of sight test in order to determine if the given point
     * in 3D space is visible for the game entity.
     *
     * @param point - The point to test.
     * @return Whether the given point is visible or not.
     */
    visible(point: Vector3): boolean;

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
