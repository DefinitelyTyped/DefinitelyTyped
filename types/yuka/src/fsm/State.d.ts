import { GameEntity } from "../core/GameEntity";
import { Telegram } from "../core/Telegram";

/**
 * Base class for representing a state in context of State-driven agent design.
 */
export class State<T extends GameEntity> {
    /**
     * This method is called once during a state transition when the {@link StateMachine} makes
     * this state active.
     *
     * @param owner - The game entity that represents the execution context of this state.
     */
    enter(owner: T): void;

    /**
     * This method is called per simulation step if this state is active.
     *
     * @param owner - The game entity that represents the execution context of this state.
     */
    execute(owner: T): void;

    /**
     * This method is called once during a state transition when the {@link StateMachine} makes
     * this state inactive.
     *
     * @param owner - The game entity that represents the execution context of this state.
     */
    exit(owner: T): void;

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
    resolveReferences(entities: Map<string, T>): this;

    /**
     * This method is called when messaging between game entities occurs.
     *
     * @param owner - The game entity that represents the execution context of this state.
     * @param telegram - A data structure containing the actual message.
     * @return Whether the message was processed or not.
     */
    onMessage(owner: T, telegram: Telegram): boolean;
}
