declare namespace Bucks {
    interface BucksStatic {
        /**
         * bucks.js version.
         */
        VERSION: string;

        /**
         * If set `true`, uncaught errors are logged.
         */
        DEBUG: boolean;

        /**
         * Running bucks objects.
         */
        running: Bucks[];

        /**
         * Not yet called `end` bucks object.
         */
        living: Bucks[];

        /**
         * Create bucks object.
         */
        new(): Bucks;

        /**
         * Catch all errors.
         * @param onError Function called after catching error
         */
        onError(onError: (err: Error, bucks: Bucks) => any): void;
    }

    interface Bucks {
        /**
         * Add a task.
         * @param task Function added async chain
         */
        add(task: TaskWithNext): Bucks;

        /**
         * Add a task called only in case of success.
         * @param onSuccess Function called only in case of success
         */
        then(onSuccess: (res: any, next?: Task) => any): Bucks;

        /**
         * Add a empty task.
         */
        empty(): Bucks;

        /**
         * Add a task called only in case of error.
         * @param onError Function called only in case of error
         */
        error(onError: (err: Error, next?: Task) => any): Bucks;

        /**
         * Add tasks in asynchronous way and join their results.
         * @param tasks Functions called in asynchronous way and join their results
         */
        parallel(tasks: TaskWithNext[]): Bucks;

        /**
         * Add tasks in asynchronous way and join their results.
         * @param tasks Functions added async chain
         */
        waterfall(tasks: TaskWithNext[]): Bucks;

        /**
         * Add delay execution.
         * @param ms number millisecond for delaying
         */
        delay(ms: number): Bucks;

        /**
         * Called when destroy async chain.
         */
        dispose(): void;

        /**
         * Destroy this object and call last callback function.
         * @param err If specify err and no callback, throw to execute failure callback
         */
        destroy(err?: Error): Bucks;

        /**
         * Complete creating async chain and start executing.
         * @param callback Last callback function
         * @param errback Handler for occurring error in last callback function
         */
        end(callback?: Task, errback?: (err: Error) => any): void;
    }

    interface TaskWithNext {
        (err?: Error, res?: any, next?: Task): any;
    }

    interface Task {
        (err?: Error, res?: any): any;
    }
}

declare var Bucks: Bucks.BucksStatic;
