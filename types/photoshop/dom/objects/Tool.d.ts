/**
 * WIP. For now, only contains an id field. In the future, this may become a class.
 *
 * @targetfolder objects
 * @optionobject
 * @minVersion 23.0
 */
export declare class Tool {
    private _id;
    /**
     * Name of the tool.
     * @minVersion 23.0
     */
    get id(): string;
    set id(name: string);
    /**
     * The class name of the referenced object: *"Tool"*.
     * @minVersion 23.0
     */
    get typename(): "Tool";
    /** @ignore */
    constructor();
}
