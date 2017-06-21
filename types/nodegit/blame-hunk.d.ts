import { Oid } from './oid';
import { Signature } from './signature';

export class BlameHunk {
    /**
     *
     *
     * @type {number}
     * @memberof BlameHunk
     */
    linesInHunk: number;
    /**
     *
     *
     * @type {Oid}
     * @memberof BlameHunk
     */
    finalCommitId: Oid;
    /**
     *
     *
     * @type {number}
     * @memberof BlameHunk
     */
    finalStartLineNumber: number;
    /**
     *
     *
     * @type {Signature}
     * @memberof BlameHunk
     */
    finalSignature: Signature;
    /**
     *
     *
     * @type {Oid}
     * @memberof BlameHunk
     */
    origCommitId: Oid;
    /**
     *
     *
     * @type {string}
     * @memberof BlameHunk
     */
    origPath: string;
    /**
     *
     *
     * @type {number}
     * @memberof BlameHunk
     */
    origStartLineNumber: number;
    /**
     *
     *
     * @type {Signature}
     * @memberof BlameHunk
     */
    origSignature: Signature;
}
