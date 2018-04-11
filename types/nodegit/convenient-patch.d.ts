import { ConvenientHunk } from './convenient-hunk';
import { DiffFile } from './diff-file';

export class ConvenientPatch {
    /**
     * Old attributes of the file
     */
    oldFile(): DiffFile;
    /**
     * New attributes of the file
     */
    newFile(): DiffFile;
    /**
     * The number of hunks in this patch
     */
    size(): number;
    /**
     * The hunks in this patch
     */
    hunks(): Promise<ConvenientHunk[]>;
    /**
     * The status of this patch (unmodified, added, deleted)
     */
    status(): number;
    /**
     * The line statistics of this patch (#contexts, #added, #deleted)
     */
    lineStats(): any;
    /**
     * Is this an unmodified patch?
     */
    isUnmodified(): boolean;
    /**
     * Is this an added patch?
     */
    isAdded(): boolean;
    /**
     * Is this a deleted patch?
     */
    isDeleted(): boolean;
    /**
     * Is this an modified patch
     */
    isModified(): boolean;
    /**
     * Is this a renamed patch?
     */
    isRenamed(): boolean;
    /**
     * Is this a copied patch?
     */
    isCopied(): boolean;
    /**
     * Is this an ignored patch?
     */
    isIgnored(): boolean;
    /**
     * Is this an untracked patch?
     */
    isUntracked(): boolean;
    /**
     * Is this a type change?
     */
    isTypeChange(): boolean;
    /**
     * Is this an undreadable patch?
     */
    isUnreadable(): boolean;
    /**
     * Is this a conflicted patch?
     */
    isConflicted(): boolean;
}
