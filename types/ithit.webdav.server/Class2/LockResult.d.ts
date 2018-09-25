/**
 * Result of @see ILock.Lock  operation.
 */
export declare class LockResult {
    /**Gets/sets lock token associated with the lock. */
    Token: string;
    /**Gets/Sets timeout value; */
    TimeOut: Date;
    /**
     * Initializes a new instance of the LockResult class.
     * @param token Lock token associated with a lock.
     * @param timeOut Timeout value. TimeSpan.MaxValue means 'never'.
     */
    constructor(token: string, timeOut: Date);
}
