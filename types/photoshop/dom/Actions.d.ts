/**
 * Photoshop Actions
 *
 * Handles the content in Actions panel.
 * Actions panel will have a hierarchy of Action Sets that contain a list of Actions
 */
export declare class ActionSet {
    /**
     * The class name of the referenced object: *"ActionSet"*.
     *
     * @minVersion 23.0
     */
    get typename(): "ActionSet";
    /**
     * Zero-based index of this Action Set in the Actions palette
     *
     * @minVersion 22.1
     */
    get index(): number;
    /**
     * The internal ID of this Action Set
     * Can be used for batchPlay calls, used internally
     *
     * @minVersion 22.1
     */
    get id(): number;
    /**
     * The name of this Action Set, displayed in the panel
     *
     * @minVersion 22.1
     */
    get name(): string;
    /**
     * Renames the Action Set
     *
     * @minVersion 22.1
     */
    set name(name: string);
    /**
     * List of Actions in this Action Set
     *
     * @minVersion 22.1
     */
    get actions(): Action[];
    /**
     * @ignore
     */
    constructor(id: any);
    /**
     * Deletes this Action Set from the Actions panel
     *
     * @minVersion 22.1
     */
    delete(): void;
    /**
     * Creates a copy of this Action Set
     *
     * @minVersion 22.1
     */
    duplicate(): ActionSet;
    /**
     * Plays all Actions in this set one by one
     *
     * @async
     * @minVersion 22.1
     */
    play(): Promise<void>;
}
/**
 * Represents an Action in the Actions palette.
 * Actions are series of commands that can be recorded by user, and can be replayed at a later time
 */
export declare class Action {
    /**
     * The class name of the referenced object: *"Action"*.
     *
     * @minVersion 23.0
     */
    get typename(): "Action";
    /**
     * The internal ID of this Action
     * Can be used for batchPlay calls, used internally
     *
     * @minVersion 22.1
     */
    get id(): number;
    /**
     * Zero-based index of this Action in it's parent Action Set
     *
     * @minVersion 22.1
     */
    get index(): number;
    /**
     * The name of this Action, displayed in the panel
     * Cannot be changed
     *
     * @minVersion 22.1
     */
    get name(): string;
    /**
     * Renames the Action Set
     *
     * @minVersion 22.1
     */
    set name(name: string);
    /**
     * The Action Set this Action belongs to
     *
     * @minVersion 22.1
     */
    get parent(): ActionSet;
    /**
     * @ignore
     */
    constructor(id: number);
    /**
     * Deletes this Action from the Actions panel
     *
     * @minVersion 22.1
     */
    delete(): void;
    /**
     * Plays this Action
     *
     * @async
     * @minVersion 22.1
     */
    play(): Promise<void>;
    /**
     * Creates a copy of this Action, placing it in the same Action Set
     *
     * @minVersion 22.1
     */
    duplicate(): Action;
}
