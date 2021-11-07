import { GameEntity } from "../core/GameEntity";
import { Trigger } from "./Trigger";

/**
 * Base class for representing trigger regions. It's a predefine region in 3D space,
 * owned by one or more triggers. The shape of the trigger can be arbitrary.
 */
export class TriggerRegion {
    /**
     * Returns true if the bounding volume of the given game entity touches/intersects
     * the trigger region. Must be implemented by all concrete trigger regions.
     *
     * @param entity - The entity to test.
     */
    touching(entity: GameEntity): boolean;

    /**
     * Updates this trigger region. Must be implemented by all concrete trigger regions.
     *
     * @param trigger - The trigger that owns this region.
     */
    update(trigger: Trigger): this;

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
}
