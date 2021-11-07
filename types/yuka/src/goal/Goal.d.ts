import { GameEntity } from "../core/GameEntity";
import { Telegram } from "../core/Telegram";

export type GoalStatus = string;

export interface StatusTypes {
    // the goal has been activated and will be processed each update step
    readonly ACTIVE: "active";
    // the goal is waiting to be activated
    readonly INACTIVE: "inactive";
    // the goal has completed and will be removed on the next update
    readonly COMPLETED: "completed";
    // the goal has failed and will either replan or be removed on the next update
    readonly FAILED: "failed";
}

export class Goal<T extends GameEntity> {
    static readonly STATUS: StatusTypes;
    /**
     * The owner of this goal.
     */
    owner: T | null;

    /**
     * The status of this goal.
     * @default {@link StatusTypes.INACTIVE}
     */
    status: GoalStatus;

    constructor(owner?: T);

    /**
     * Executed when this goal is activated.
     */
    activate(): void;

    /**
     * Executed in each simulation step.
     */
    execute(): void;

    /**
     * Executed when this goal is satisfied.
     */
    terminate(): void;

    /**
     * Goals can handle messages. Many don't though, so this defines a default behavior.
     *
     * @param telegram - The telegram with the message data.
     * @return Whether the message was processed or not.
     */
    handleMessage(telegram: Telegram): boolean;

    /**
     * Returns true if the status of this goal is *ACTIVE*.
     */
    active(): boolean;

    /**
     * Returns true if the status of this goal is *INACTIVE*.
     */
    inactive(): boolean;

    /**
     * Returns true if the status of this goal is *COMPLETED*.
     */
    completed(): boolean;

    /**
     * Returns true if the status of this goal is *FAILED*.
     */
    failed(): boolean;

    /**
     * Ensures the goal is replanned if it has failed.
     */
    replanIfFailed(): this;

    /**
     * Ensures the goal is activated if it is inactive.
     */
    activateIfInactive(): this;

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
