/**
 * WIP. For now, only contains an id field. In the future, this may become a class.
 *
 * @targetfolder objects
 * @optionobject
 */
export declare class Tool {
    /**
     * Name of the newly created layer
     */
    id: string;
    /**
     * The class name of the referenced object
     * @default "Tool"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
