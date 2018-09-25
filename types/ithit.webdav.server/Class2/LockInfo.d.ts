import { LockLevel } from "./LockLevel";
/**Serves for exchanging locking information with WebDAV engine. */
export declare class LockInfo {
    /**The lock token associated with a lock. */
    Token: string | null;
    /**Indicates whether a lock is shared or exclusive. */
    Level: LockLevel | null;
    /**Indicates whether a lock is enforceable on the subtree. */
    IsDeep: boolean | null;
    /**
     * Lock expiration time.
     * @remarks Lock timeout which was requested by client. {@link TimeSpan.MaxValue}  means infinity
     * lock that never expires. The null value means that timeout was not provided by a client.
     */
    TimeOut: Date | null;
    /**Provides information about the principal taking out a lock. */
    Owner: string | null;
    /**Parent item on which this lock is specified explicitely. */
    LockRoot: string | null;
    /**
     * Initializes a new instance of the LockInfo class.
     * @param level Shared or exclusive.
     * @param isDeep Whether the lock is deep.
     * @param token Lock token.
     * @param timeOut Lock timeout.
     * @param owner Lock owner.
     * @param lockRoot Parent item on which this lock is specified explicitely.
     */
    constructor(level?: LockLevel | null, isDeep?: boolean | null, token?: string | null, timeOut?: Date | null, owner?: string | null, lockRoot?: string | null);
}
