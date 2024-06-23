import { CellSpacePartitioning } from "../partitioning/CellSpacePartitioning";
import { Trigger } from "../trigger/Trigger";
import { GameEntity, GameEntityConstructor } from "./GameEntity";

/**
 * This class is used for managing all central objects of a game like
 * game entities.
 */
export class EntityManager {
    /**
     * A list of {@link GameEntity game entities}.
     */
    readonly entities: GameEntity[];

    /**
     * A reference to a spatial index.
     * @default null
     */
    spatialIndex: CellSpacePartitioning | null;

    /**
     * Constructs a new entity manager.
     */
    constructor();

    /**
     * Adds a game entity to this entity manager.
     *
     * @param entity - The game entity to add.
     */
    add(entity: GameEntity): this;

    /**
     * Removes a game entity from this entity manager.
     *
     * @param entity - The game entity to remove.
     */
    remove(entity: GameEntity): this;

    /**
     * Clears the internal state of this entity manager.
     */
    clear(): this;

    /**
     * Returns an entity by the given name. If no game entity is found, *null*
     * is returned. This method should be used once (e.g. at {@link GameEntity#start})
     * and the result should be cached for later use.
     *
     * @param name - The name of the game entity.
     * @return The found game entity.
     */
    getEntityByName(name: string): GameEntity | null;

    /**
     * The central update method of this entity manager. Updates all
     * game entities and delayed messages.
     *
     * @param delta - The time delta.
     */
    update(delta: number): this;

    /**
     * Updates a single entity.
     *
     * @param entity - The game entity to update.
     * @param delta - The time delta.
     */
    updateEntity(entity: GameEntity, delta: number): this;

    /**
     * Updates the neighborhood of a single game entity.
     *
     * @param entity - The game entity to update.
     */
    updateNeighborhood(entity: GameEntity): this;

    /**
     * Processes a single trigger.
     *
     * @param trigger - The trigger to process.
     */
    processTrigger(trigger: Trigger): this;

    /**
     * Interface for game entities so they can send messages to other game entities.
     *
     * @param sender - The sender.
     * @param receiver - The receiver.
     * @param message - The actual message.
     * @param delay - A time value in millisecond used to delay the message dispatching.
     * @param data - An object for custom data.
     */
    sendMessage(sender: GameEntity, receiver: GameEntity, message: string, delay: number, data: object): this;

    /**
     * Transforms this instance into a JSON object.
     *
     * @return The JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;

    /**
     * Registers a custom type for deserialization. When calling {@link EntityManager#fromJSON}
     * the entity manager is able to pick the correct constructor in order to create custom
     * game entities.
     *
     * @param type - The name of the entity type.
     * @param constructor - The constructor function.
     */
    registerType(type: string, constructor: GameEntityConstructor): this;
}
