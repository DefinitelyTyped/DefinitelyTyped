export namespace Options {
    /**
     * @type {boolean} [forever=false] Whether to retry forever.
     * @type {boolean} [unref=false] Wether to unref the setTimeout's or not.
     */
    interface Retry {
        forever?: boolean
        unref?: boolean
    }

    /**
     * @type {number} timeout A timeout in milliseconds.
     * @type {function} callback Callback to execute when the operation takes longer than the timeout.
     */
    interface Attempt {
        timeout?: number
        callback?: () => void
    }

    /**
     * @type {number} [retries=10] The maximum amount of times to retry the operation.
     * @type {number} [factor=2] The exponential factor to use.
     * @type {number} [minTimeout=1000] The number of milliseconds before starting the first retry.
     * @type {number} [maxTimeout=Infinity] The maximum number of milliseconds between two retries.
     * @type {boolean} [randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
     * @type {boolean} [forever=false] Whether to retry forever.
     * @type {boolean} [unref=false] Wether to unref the setTimeout's.
     */
    interface Operation {
        retries?: number
        factor?: number
        minTimeout?: number
        maxTimeout?: number
        randomize?: boolean
        forever?: boolean
        unref?: boolean
    }

    /**
     * @type {number} [retries=10] The maximum amount of times to retry the operation.
     * @type {number} [factor=2] The exponential factor to use.
     * @type {number} [minTimeout=1000] The number of milliseconds before starting the first retry.
     * @type {number} [maxTimeout=Infinity] The maximum number of milliseconds between two retries.
     * @type {boolean} [randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
     */
    interface Timeouts {
        retries?: number
        factor?: number
        minTimeout?: number
        maxTimeout?: number
        randomize?: boolean
    }

    /**
     * @type {number} [factor=2] The exponential factor to use.
     * @type {number} [minTimeout=1000] The number of milliseconds before starting the first retry.
     * @type {number} [maxTimeout=Infinity] The maximum number of milliseconds between two retries.
     * @type {boolean} [randomize=false] Randomizes the timeouts by multiplying a factor between 1-2.
     */
    interface Timeout {
        factor?: number
        minTimeout?: number
        maxTimeout?: number
        randomize?: boolean
    }
}
