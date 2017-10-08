export interface MergeFileOptions {
    /**
     *
     *
     * @type {number}
     * @memberof MergeFileOptions
     */
    version?: number;
    /**
     *
     *
     * @type {string}
     * @memberof MergeFileOptions
     */
    ancestorLabel?: string;
    /**
     *
     *
     * @type {string}
     * @memberof MergeFileOptions
     */
    ourLabel?: string;
    /**
     *
     *
     * @type {string}
     * @memberof MergeFileOptions
     */
    theirLabel?: string;
    /**
     *
     *
     * @type {number}
     * @memberof MergeFileOptions
     */
    favor?: number;
    /**
     *
     *
     * @type {number}
     * @memberof MergeFileOptions
     */
    flags?: number;
}
