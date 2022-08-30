import { Document } from "./Document";
/**
 * @ignore
 */
export declare function PSHistoryState(id: number, docId: number): HistoryState;
/** @ignore */
export declare function validateHistoryState(h: HistoryState): void;
/**
 * Represents a single history state in the History panel
 */
export declare class HistoryState {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * The class name of the referenced HistoryState object
     */
    get typename(): string;
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
