/** @ignore */
export declare function validateActionSet(actionSet: ActionSet): void;
/**
 * @ignore
 */
export declare function PSActionSet(id: number): ActionSet;
/**
 * @ignore
 */
export declare function PSAction(id: number): Action;
/**
 * Photoshop Actions
 *
 * Handles the content in Actions panel.
 * Actions panel will have a hierarchy of action sets that contain a list of actions
 */
export declare class ActionSet {
    /**
     * The class name of the referenced ActionSet object
     */
    get typename(): string;
    /**
     * 0-index of this action set in the actions palette
     */
    get index(): number;
    /**
     * The internal ID of this Action Set
     * Can be used for batchPlay calls, used internally
     */
    get id(): number;
    /**
     * The name of this action set, displayed in the panel
     */
    get name(): string;
    /**
     * Renames the action set
     */
    set name(name: string);
    /**
     * List of actions in this action set
     */
    get actions(): Action[];
    /**
     * @ignore
     */
    constructor(id: any);
    /**
     * Deletes this action set from the actions panel
     */
    delete(): void;
    /**
     * Creates a copy of this action set
     */
    duplicate(): ActionSet;
    /**
     * Plays all actions in this set one by one
     *
     * @async
     */
    play(): Promise<void>;
}
/**
 * Represents an action in the Actions palette.
 * Actions are series of commands that can be recorded by user, and can be replayed at a later time
 */
export declare class Action {
    /**
     * The class name of the referenced Action object
     */
    get typename(): string;
    /**
     * The internal ID of this action
     *
     * Can be used for batchPlay calls, used internally
     */
    get id(): number;
    /**
     * 0-index of this action in it's parent action set
     */
    get index(): number;
    /**
     * The name of this action, displayed in the panel
     * Cannot be changed
     */
    get name(): string;
    /**
     * Renames the action set
     */
    set name(name: string);
    /**
     * The action set this action belongs to
     */
    get parent(): ActionSet;
    /**
     * @ignore
     */
    constructor(id: number);
    /**
     * Deletes this action from the actions panel
     *
     */
    delete(): void;
    /**
     * Plays this action
     *
     * @async
     */
    play(): Promise<void>;
    /**
     * Creates a copy of this action, placing it in the same action set
     */
    duplicate(): Action;
}
