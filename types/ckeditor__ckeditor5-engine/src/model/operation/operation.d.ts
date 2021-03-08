import Document from "../document";

/**
 * Abstract base operation class.
 */
export default abstract class Operation {
    /**
     * Base operation constructor.
     */
    constructor(baseVersion: number | null);
    /**
     * Custom toJSON method to solve child-parent circular dependencies.
     */
    toJSON(): this;
    /**
     * Name of the operation class used for serialization.
     */
    static get className(): string;
    /**
     * Creates Operation object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(json: Record<string, string>, doc: Document): Operation;
}
