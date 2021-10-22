import Document from "./Document";
/**
 * @ignore
 */
export declare function PSHistoryState(id: number, docId: number): HistoryState;
/**
 * @ignore
 */
/**
 * Represents a single history state in the History panel
 */
export default class HistoryState {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * @ignore
     */
    validate(): void;
    /**
     * For use with batchPlay operations. This history ID, along with its document ID
     * can be used to represent this history state for the lifetime of this document.
     */
    get id(): number;
    /**
     * The ID of the document of this history state.
     */
    get docId(): number;
    /**
     * The name of this history state as it appears on history panel
     */
    get name(): string;
    /**
     * Owner document of this history state
     */
    get parent(): Document;
    /**
     * Whether this history state is a snapshot or an automatically generated history state
     */
    get snapshot(): boolean;
}
