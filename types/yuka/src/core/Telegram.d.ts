import { GameEntity } from "./GameEntity";

/**
 * Class for representing a telegram, an envelope which contains a message and certain metadata like sender and receiver.
 * Part of the messaging system for game entities.
 */
export class Telegram {
    /** The sender. */
    sender: GameEntity;

    /** The receiver. */
    receiver: GameEntity;

    /** The actual message. */
    message: string;

    /** A time value in millisecond used to delay the message dispatching. */
    delay: number;

    /** An object for custom data. */
    data: object;

    /**
     * Constructs a new telegram object.
     *
     * @param sender - The sender.
     * @param receiver - The receiver.
     * @param message - The actual message.
     * @param delay - A time value in millisecond used to delay the message dispatching.
     * @param data - An object for custom data.
     */
    constructor(sender: GameEntity, receiver: GameEntity, message: string, delay: number, data: object);

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
