import { GameEntity } from "../core/GameEntity";
import { Goal, GoalStatus } from "./Goal";

/**
 * Class representing a composite goal. Essentially it's a goal which consists of sub goals.
 */
export class CompositeGoal<T extends GameEntity> extends Goal<T> {
    /**
     * A list of sub goals.
     */
    readonly subgoals: Array<Goal<T>>;

    /**
     * Constructs a new composite goal.
     *
     * @param owner - The owner of this composite goal.
     */
    constructor(owner?: T);

    /**
     * Adds a goal as a sub goal to this instance.
     *
     * @param goal - The sub goal to add.
     */
    addSubgoal(goal: Goal<T>): this;

    /**
     * Removes a sub goal from this instance.
     *
     * @param goal - The sub goal to remove.
     */
    removeSubgoal(goal: Goal<T>): this;

    /**
     * Removes all sub goals and ensures {@link Goal#terminate} is called for each sub goal.
     */
    clearSubgoals(): this;

    /**
     * Returns the current sub goal. If no sub goals are defined, *null* is returned.
     *
     * @return The current sub goal.
     */
    currentSubgoal(): Goal<T> | null;

    /**
     * Executes the current sub goal of this composite goal.
     *
     * @return The status of this composite sub goal.
     */
    executeSubgoals(): GoalStatus;

    /**
     * Returns true if this composite goal has sub goals.
     *
     * @return Whether the composite goal has sub goals or not.
     */
    hasSubgoals(): boolean;
}
