import { GameEntity } from "../core/GameEntity";
import { CompositeGoal } from "./CompositeGoal";
import { GoalEvaluator } from "./GoalEvaluator";

export class Think<T extends GameEntity> extends CompositeGoal<T> {
    /**
     * A list of goal evaluators.
     */
    readonly evaluators: Array<GoalEvaluator<T>>;

    /**
     * Constructs a new *Think* object.
     *
     * @param owner - The owner of this instance.
     */
    constructor(owner?: T);

    /**
     * Adds the given goal evaluator to this instance.
     *
     * @param evaluator - The goal evaluator to add.
     */
    addEvaluator(evaluator: GoalEvaluator<T>): this;

    /**
     * Removes the given goal evaluator from this instance.
     *
     * @param evaluator - The goal evaluator to remove.
     */
    removeEvaluator(evaluator: GoalEvaluator<T>): this;

    /**
     * This method represents the top level decision process of an agent.
     * It iterates through each goal evaluator and selects the one that
     * has the highest score as the current goal.
     *
     * @return A reference to this instance.
     */
    arbitrate(): this;

    /**
     * Registers a custom type for deserialization. When calling {@link Think#fromJSON}
     * this instance is able to pick the correct constructor in order to create custom
     * goals or goal evaluators.
     *
     * @param type - The name of the goal or goal evaluator.
     * @param constructor - The constructor function.
     */
    registerType(type: string, constructor: () => GoalEvaluator<T>): this;
}
