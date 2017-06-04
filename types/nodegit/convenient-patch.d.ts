import { DiffFile } from './diff-file';

export class ConvenientPatch {
    oldFile(): DiffFile;
    newFile(): DiffFile;
    size(): number;
    hunks(): Promise<any[]>;
    status(): number;
    lineStats(): any;
    isUnmodified(): Boolean;
    isAdded(): Boolean;
    isDeleted(): Boolean;
    isModified(): Boolean;
    isRenamed(): Boolean;
    isCopied(): Boolean;
    isIgnored(): Boolean;
    isUntracked(): Boolean;
    isTypeChange(): Boolean;
    isUnreadable(): Boolean;
    isConflicted(): Boolean;
}
