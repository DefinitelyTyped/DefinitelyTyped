import { LockLevel } from "./LockLevel";
/**
 * Result of @see ILockAsync.RefreshLockAsync  operation.
 */
export declare class RefreshLockResult {
    /**Determines whether lock is isShared. */
    Level: LockLevel;
    /**Indicates whether a lock is enforceable on the subtree. */
    IsDeep: boolean;
    /**Gets/sets timeout. */
    TimeOut: Date;
    /**Gets/sets information about the principal taking out a lock. */
    Owner: string;
    /**
     * Initializes a new instance of the RefreshLockResult class.
     * @param isDeep Indicates whether a lock is enforceable on the subtree.
     * @param level Determines whether lock is shared.
     * @param owner Principal taking out a lock.
     * @param timeOut Timeout value. TimeSpan.MaxValue means 'never'.
     */
    constructor(level: LockLevel, isDeep: boolean, timeOut: Date, owner: string);
}
