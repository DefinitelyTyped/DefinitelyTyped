import { DiffDelta } from './diff-delta';

export class StatusEntry {
    /**
     *
     *
     * @type {number}
     * @memberof StatusEntry
     */
    status: number;
    /**
     *
     *
     * @type {DiffDelta}
     * @memberof StatusEntry
     */
    headToIndex: DiffDelta;
    /**
     *
     *
     * @type {DiffDelta}
     * @memberof StatusEntry
     */
    indexToWorkdir: DiffDelta;
}
