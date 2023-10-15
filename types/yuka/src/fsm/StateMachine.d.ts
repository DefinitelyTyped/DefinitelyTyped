import { GameEntity } from "../core/GameEntity";
import { Telegram } from "../core/Telegram";
import { State } from "./State";

/**
 * Finite state machine (FSM) for implementing State-driven agent design.
 */
export class StateMachine<T extends GameEntity> {
    /**
     * The game entity that owns this state machine.
     */
    owner: T | null;

    /**
     * The current state of the game entity.
     */
    currentState: State<T> | null;

    /**
     * The previous state of the game entity.
     */
    previousState: State<T> | null;

    /**
     * This state logic is called every time the state machine is updated.
     */
    globalState: State<T> | null;

    /**
     * A map with all states of the state machine.
     */
    readonly states: Map<string, State<T>>;

    /**
     * Constructs a new state machine with the given values.
     *
     * @param [owner=null] - The owner of this state machine.
     */
    constructor(owner?: T);

    /**
     * Updates the internal state of the FSM. Usually called by {@link GameEntity#update}.
     */
    update(): this;

    /**
     * Adds a new state with the given ID to the state machine.
     *
     * @param id - The ID of the state.
     * @param state - The state.
     */
    add(id: string, state: State<T>): this;

    /**
     * Removes a state via its ID from the state machine.
     *
     * @param id - The ID of the state.
     */
    remove(id: string): this;

    /**
     * Returns the state for the given ID.
     *
     * @param id - The ID of the state.
     */
    get(id: string): State<T>;

    /**
     * Performs a state change to the state defined by its ID.
     *
     * @param id - The ID of the state.
     */
    changeTo(id: string): this;

    /**
     * Returns to the previous state.
     */
    revert(): this;

    /**
     * Returns true if this FSM is in the given state.
     *
     * @return Whether this FSM is in the given state or not.
     */
    in(id: string): boolean;

    /**
     * Tries to dispatch the massage to the current or global state and returns true
     * if the message was processed successfully.
     *
     * @param telegram - The telegram with the message data.
     * @return Whether the message was processed or not.
     */
    handleMessage(telegram: Telegram): boolean;

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
     * Registers a custom type for deserialization. When calling {@link StateMachine#fromJSON}
     * the state machine is able to pick the correct constructor in order to create custom states.
     *
     * @param type - The name of the state type.
     * @param constructor - The constructor function.
     */
    registerType(type: string, constructor: () => State<T>): this;
}
