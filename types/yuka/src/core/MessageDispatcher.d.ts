import { GameEntity } from "./GameEntity";
import { Telegram } from "./Telegram";

/**
 * This class is the core of the messaging system for game entities and used by the
 * {@link EntityManager}. The implementation can directly dispatch messages or use a
 * delayed delivery for deferred communication. This can be useful if a game entity
 * wants to inform itself about a particular event in the future.
 */
export class MessageDispatcher {
    /**
     * A list of delayed telegrams.
     */
    readonly delayedTelegrams: Telegram[];

    /**
     * Constructs a new message dispatcher.
     */
    constructor();

    /**
     * Delivers the message to the receiver.
     *
     * @param telegram - The telegram to deliver.
     */
    deliver(telegram: Telegram): this;

    /**
     * Receives the raw telegram data and decides how to dispatch the telegram (with or without delay).
     *
     * @param sender - The sender.
     * @param receiver - The receiver.
     * @param message - The actual message.
     * @param delay - A time value in millisecond used to delay the message dispatching.
     * @param data - An object for custom data.
     */
    dispatch(sender: GameEntity, receiver: GameEntity, message: string, delay: number, data: object): this;

    /**
     * Used to process delayed messages.
     *
     * @param delta - The time delta.
     */
    dispatchDelayedMessages(delta: number): this;

    /**
     * Clears the internal state of this message dispatcher.
     */
    clear(): this;

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
     * Restores UUIDs with references to GameEntity objects.
     *
     * @param entities - Maps game entities to UUIDs.
     */
    resolveReferences(entities: Map<string, GameEntity>): this;
}
