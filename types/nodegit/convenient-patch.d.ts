import { DiffFile } from './diff-file';

export class ConvenientPatch {
    /**
     * Old attributes of the file
     *
     * @returns {DiffFile}
     *
     * @memberof ConvenientPatch
     */
    oldFile(): DiffFile;
    /**
     * New attributes of the file
     *
     * @returns {DiffFile}
     *
     * @memberof ConvenientPatch
     */
    newFile(): DiffFile;
    /**
     * The number of hunks in this patch
     *
     * @returns {number}
     *
     * @memberof ConvenientPatch
     */
    size(): number;
    /**
     * The hunks in this patch
     *
     * @returns {Promise<any[]>}
     *
     * @memberof ConvenientPatch
     */
    hunks(): Promise<any[]>;
    /**
     * The status of this patch (unmodified, added, deleted)
     *
     * @returns {number}
     *
     * @memberof ConvenientPatch
     */
    status(): number;
    /**
     * The line statistics of this patch (#contexts, #added, #deleted)
     *
     * @returns {*}
     *
     * @memberof ConvenientPatch
     */
    lineStats(): any;
    /**
     * Is this an unmodified patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isUnmodified(): boolean;
    /**
     * Is this an added patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isAdded(): boolean;
    /**
     * Is this a deleted patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isDeleted(): boolean;
    /**
     * Is this an modified patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isModified(): boolean;
    /**
     * Is this a renamed patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isRenamed(): boolean;
    /**
     * Is this a copied patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isCopied(): boolean;
    /**
     * Is this an ignored patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isIgnored(): boolean;
    /**
     * Is this an untracked patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isUntracked(): boolean;
    /**
     * Is this a type change?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isTypeChange(): boolean;
    /**
     * Is this an undreadable patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isUnreadable(): boolean;
    /**
     * Is this a conflicted patch?
     *
     * @returns {boolean}
     *
     * @memberof ConvenientPatch
     */
    isConflicted(): boolean;
}
