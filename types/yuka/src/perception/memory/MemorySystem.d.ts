import { GameEntity } from "../../core/GameEntity";
import { MemoryRecord } from "./MemoryRecord";

/**
 * Class for representing the memory system of a game entity. It is used for managing,
 * filtering, and remembering sensory input.
 */
export class MemorySystem {
    /**
     * The game entity that owns this memory system.
     */
    entity: GameEntity | null;

    /**
     * Used to simulate memory of sensory events. It contains {@link MemoryRecord memory records}
     * of all relevant game entities in the environment. The records are usually update by
     * the owner of the memory system.
     */
    records: MemoryRecord[];

    /**
     * Same as {@link MemorySystem#records} but used for fast access via the game entity.
     */
    recordsMap: Map<GameEntity, MemoryRecord>;

    /**
     * Represents the duration of the game entities short term memory in seconds.
     * When a bot requests a list of all recently sensed game entities, this value
     * is used to determine if the bot is able to remember a game entity or not.
     * @default 1
     */
    memorySpan: number;

    /**
     * Constructs a new memory system.
     *
     * @param [owner=null] - The game entity that owns this memory system.
     */
    constructor(owner?: GameEntity | null);

    /**
     * Returns the memory record of the given game entity.
     *
     * @param entity - The game entity.
     * @return The memory record for this game entity.
     */
    getRecord(entity: GameEntity): MemoryRecord | undefined;

    /**
     * Creates a memory record for the given game entity.
     *
     * @param entity - The game entity.
     */
    createRecord(entity: GameEntity): this;

    /**
     * Deletes the memory record for the given game entity.
     *
     * @param entity - The game entity.
     */
    deleteRecord(entity: GameEntity): this;

    /**
     * Returns true if there is a memory record for the given game entity.
     *
     * @param entity - The game entity.
     * @return Whether the game entity has a memory record or not.
     */
    hasRecord(entity: GameEntity): this is { getRecord(entity: GameEntity): MemoryRecord } & this;

    /**
     * Removes all memory records from the memory system.
     */
    clear(): this;

    /**
     * Determines all valid memory record and stores the result in the given array.
     *
     * @param currentTime - The current elapsed time.
     * @param result - The result array.
     * @return The result array.
     */
    getValidMemoryRecords(currentTime: number, result: MemoryRecord[]): MemoryRecord[];

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
