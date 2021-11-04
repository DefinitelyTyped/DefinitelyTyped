import { GameEntity } from "../../core/GameEntity";
import { Vector3 } from "../../math/Vector3";

/**
 * Class for representing the memory information about a single game entity.
 */
export class MemoryRecord {
    /**
     * The game entity that is represented by this memory record.
     */
    entity: GameEntity | null;

    /**
     * Records the time the entity became visible. Useful in combination with a reaction time in order to prevent immediate actions.
     * @default -Infinity
     */
    timeBecameVisible: number;

    /**
     * Records the time the entity was last sensed (e.g. seen or heard). Used to determine
     * if a game entity can "remember" this record or not.
     * @default -Infinity
     */
    timeLastSensed: number;

    /**
     * Marks the position where the opponent was last sensed.
     */
    lastSensedPosition: Vector3;

    /**
     * Whether this game entity is visible or not.
     * @default false
     */
    visible: boolean;

    /**
     * Constructs a new memory record.
     *
     * @param [entity=null] - The game entity that is represented by this memory record.
     */
    constructor(entity?: GameEntity | null);

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
