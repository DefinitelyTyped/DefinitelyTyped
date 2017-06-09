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
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isUnmodified(): Boolean;
    /**
     * Is this an added patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isAdded(): Boolean;
    /**
     * Is this a deleted patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isDeleted(): Boolean;
    /**
     * Is this an modified patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isModified(): Boolean;
    /**
     * Is this a renamed patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isRenamed(): Boolean;
    /**
     * Is this a copied patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isCopied(): Boolean;
    /**
     * Is this an ignored patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isIgnored(): Boolean;
    /**
     * Is this an untracked patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isUntracked(): Boolean;
    /**
     * Is this a type change?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isTypeChange(): Boolean;
    /**
     * Is this an undreadable patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isUnreadable(): Boolean;
    /**
     * Is this a conflicted patch?
     *
     * @returns {Boolean}
     *
     * @memberof ConvenientPatch
     */
    isConflicted(): Boolean;
}
