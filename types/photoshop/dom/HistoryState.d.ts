import { Document } from "./Document";
/**
 * Represents a single history state in the History panel.
 * @minVersion 22.5
 */
export declare class HistoryState {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * The class name of the referenced object: *"HistoryState"*.
     * @minVersion 23.0
     */
    get typename(): "HistoryState";
    /**
     * For use with batchPlay operations. This history ID, along with its document ID
     * can be used to represent this history state for the lifetime of this document.
     * @minVersion 22.5
     */
    get id(): number;
    /**
     * The ID of the document of this history state.
     * @minVersion 22.5
     */
    get docId(): number;
    /**
     * The name of this history state as it appears on history panel.
     * @minVersion 22.5
     */
    get name(): string;
    /**
     * Owner document of this history state.
     * @minVersion 22.5
     */
    get parent(): Document;
    /**
     * Whether this history state is a snapshot or an automatically generated history state.
     * @minVersion 22.5
     */
    get snapshot(): boolean;
}
