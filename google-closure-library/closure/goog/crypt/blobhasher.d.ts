declare module goog {
    function require(name: 'goog.crypt.BlobHasher'): typeof goog.crypt.BlobHasher;
    function require(name: 'goog.crypt.BlobHasher.EventType'): typeof goog.crypt.BlobHasher.EventType;
}

declare module goog.crypt {

    /**
     * Construct the hash computer.
     *
     * @param {!goog.crypt.Hash} hashFn The hash function to use.
     * @param {number=} opt_blockSize Processing block size.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BlobHasher extends goog.events.EventTarget {
        constructor(hashFn: goog.crypt.Hash, opt_blockSize?: number);
        
        /**
         * Start the hash computation.
         * @param {!Blob} blob The blob of data to compute the hash for.
         */
        hash(blob: Blob): void;
        
        /**
         * Sets the maximum number of bytes to hash or Infinity for no limit. Can be
         * called before hash() to throttle the hash computation. The hash computation
         * can then be continued by repeatedly calling setHashingLimit() with greater
         * byte offsets. This is useful if you don't need the hash until some time in
         * the future, for example when uploading a file and you don't need the hash
         * until the transfer is complete.
         * @param {number} byteOffset The byte offset to compute the hash up to.
         *     Should be a non-negative integer or Infinity for no limit. Negative
         *     values are not allowed.
         */
        setHashingLimit(byteOffset: number): void;
        
        /**
         * Abort hash computation.
         */
        abort(): void;
        
        /**
         * @return {number} Number of bytes processed so far.
         */
        getBytesProcessed(): number;
        
        /**
         * @return {Array<number>} The computed hash value or null if not ready.
         */
        getHash(): Array<number>;
    }
}

declare module goog.crypt.BlobHasher {

    /**
     * Event names for hash computation events
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        STARTED: EventType;
        PROGRESS: EventType;
        THROTTLED: EventType;
        COMPLETE: EventType;
        ABORT: EventType;
        ERROR: EventType;
    };
}
