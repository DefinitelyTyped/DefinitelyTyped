import { GameEntity } from "../core/GameEntity";
import { TriggerRegion } from "./TriggerRegion";

/**
 * Base class for representing triggers. A trigger generates an action if a game entity
 * touches its trigger region, a predefine area in 3D space.
 */
export class Trigger extends GameEntity {
    /**
     * The region of the trigger.
     */
    region: TriggerRegion;

    /**
     * Flag if the trigger can activate other triggers.
     * @default false
     */
    canActivateTrigger: boolean;

    /**
     * Constructs a new trigger with the given values.
     *
     * @param [region] - The region of the trigger.
     */
    constructor(region?: TriggerRegion);

    /**
     * This method is called per simulation step for all game entities. If the game
     * entity touches the region of the trigger, the respective action is executed.
     *
     * @param entity - The entity to test
     */
    check(entity: GameEntity): this;

    /**
     * This method is called when the trigger should execute its action.
     * Must be implemented by all concrete triggers.
     *
     * @param entity - The entity that touched the trigger region.
     */
    execute(entity: GameEntity): Trigger;

    /**
     * Updates the region of this trigger. Called by the {@link EntityManager} per
     * simulation step.
     *
     * @return A reference to this trigger.
     */
    updateRegion(): this;

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
     * Registers a custom type for deserialization. When calling {@link Trigger#fromJSON}
     * the trigger is able to pick the correct constructor in order to create custom
     * trigger regions.
     *
     * @param type - The name of the trigger region.
     * @param constructor - The constructor function.
     */
    registerType(type: string, constructor: () => TriggerRegion): this;
}
