import { HistoryState } from "../HistoryState";
/**
 * A collections class allowing for array access into a document's history states,
 * while also providing familiar methods from ExtendScript, like `getByName`
 *
 * ```javascript
 * // Iterate through all history states
 * app.activeDocument.historyStates.forEach(h => console.log(h.name));
 *
 * // Find all snapshot history states
 * var snapshots = app.activeDocument.historyStates.filter(h => h.snapshot)
 * ```
 */
export declare class HistoryStates extends Array<HistoryState> {
    /**
     * @ignore
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    private proxy;
    /**
     * Used to access the history states in the collection.
     * @minVersion 22.5
     */
    [index: number]: HistoryState;
    /**
     * @ignore
     */
    constructor(docId: number);
    /**
     * @ignore
     */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Find the first history state with the matching name.
     * @minVersion 22.5
     */
    getByName(name: string): HistoryState;
    /**
     * Number of [[HistoryState]] elements in this collection.
     * @minVersion 22.5
     */
    get length(): number;
    /**
     * The owner document of this HistoryState collection.
     * @minVersion 22.5
     */
    get parent(): Document;
}
