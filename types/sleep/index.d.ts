declare const sleepDefault: {
    /**
     * Sleep for <i>n</i> seconds.
     *
     * @param n Number of seconds to sleep.
     */
    sleep(n: number): void;

    /**
     * Sleep for n milliseconds.
     *
     * @param n Number of milliseconds to sleep.
     */
    msleep(n: number): void;

    /**
     * Sleep for n microseconds.
     *
     * @param n Number of microseconds to sleep; 1 second is 1,000,000 microseconds.
     */
    usleep(n: number): void;
};

export = sleepDefault;
