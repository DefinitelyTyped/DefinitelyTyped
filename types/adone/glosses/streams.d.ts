declare namespace adone {
    namespace stream {
        namespace I.CoreStream {
            interface ConstructorOptions<S, T> {
                /**
                 * Whether the initial stream is asynchronous
                 */
                async?: boolean;

                /**
                 * Whether the initial stream is synchronous
                 */
                sync?: boolean;

                /**
                 * The initial transform (passthrough is default)
                 */
                transform?: TransformFunction<S, T>;

                /**
                 * The initial flush function
                 */
                flush?: FlushFunction<T>;
            }

            type Source<S, T> = S[] | CoreStream<S, T>;

            interface TransformContext<T> {
                /**
                 * Pushes the given value into the stream
                 */
                push(value: T): boolean;
            }

            type TransformFunction<S, T> = (this: TransformContext<T>, value: S) => void;
            type FlushFunction<T> = (this: TransformContext<T>) => void;
        }

        /**
         * Represents a chain of transform streams
         */
        class CoreStream<S = any, T = S> implements PromiseLike<T[]> {
            constructor(source?: I.CoreStream.Source<S, T>, options?: I.CoreStream.ConstructorOptions<S, T>);

            /**
             * Writes the given value into the stream
             */
            write(value: S): boolean;

            /**
             * Pushes the given value into the stream
             */
            push(value: T): boolean;

            /**
             * Ends the stream
             */
            end(): this;

            /**
             * Destroys the stream
             */
            destroy(): this;

            /**
             * Pauses the stream
             */
            pause(): this;

            /**
             * Resumes the stream
             */
            resume(): this;

            /**
             * Whether the stream is paused
             */
            isPaused(): boolean;

            /**
             * Whether the stream is ended
             */
            isEnded(): boolean;

            /**
             * Pipes this stream to another
             */
            pipe<T>(stream: T, options?: { end?: boolean }): T;

            /**
             * Adds a new synchronous transform stream into the chain
             */
            throughSync<R>(transform: I.CoreStream.TransformFunction<T, R>, flush?: I.CoreStream.FlushFunction<R>): CoreStream<S, R>;

            /**
             * Adds a new asynchronous transform stream into the chain
             */
            throughAsync<R>(transform: I.CoreStream.TransformFunction<T, R>, flush?: I.CoreStream.FlushFunction<R>): CoreStream<S, R>;

            /**
             * Adds a new transform stream into the chain
             */
            through<R>(transform: I.CoreStream.TransformFunction<T, R>, flush?: I.CoreStream.FlushFunction<R>): CoreStream<S, R>;

            /**
             * Adds a new map transform into the chain.
             *
             * Note: synchronous functions create a synchronous transform.
             * If your function returns a promise use an asynchronous function if you don't want to pass a promise through the stream
             */
            map<R>(callback: (value: T) => R | Promise<R>): CoreStream<S, R>;

            /**
             * Adds a new conditional map transform into the chain
             */
            mapIf<R>(condition: (value: T) => boolean | Promise<boolean>, callback: (value: T) => R): CoreStream<S, T | R>;

            /**
             * Adds a new filter transform into the chain
             */
            filter(callback: (value: T) => boolean | Promise<boolean>): this;

            /**
             * Adds a new transform that calls the given callback for each value from the stream.
             *
             * This method resumes the stream.
             */
            forEach(callback: (value: T) => void, options?: {
                /**
                 * Whethe to wait for asynchronous functions (await)
                 */
                wait?: boolean,

                /**
                 * Passthrough the read values, by default it eats everything
                 */
                passthrough?: boolean
            }): this;

            /**
             * Adds a new transform that calls the given callback when the underlying stream ends.
             *
             * This method resumes the stream.
             */
            done(callback: () => void, options?: {
                /**
                 * Passthrough the read values, by default it eats everything
                 */
                passthrough?: boolean
            }): this;

            /**
             * Adds a new transform that gather all the read values into an array and calls the given callback
             * when the underlying stream ends.
             *
             * This method resumes the stream.
             */
            toArray(callback: (result: T[]) => void, options?: {
                /**
                 * Passthrough the read values, by default it eats everything
                 */
                passthrough?: boolean
            }): this;

            /**
             * Adds a new transform that filters the values by their uniqueness
             *
             * @param prop callback that calculates value's hash which is used in uniqueness checks
             */
            unique(prop?: (value: T) => any): this;

            /**
             * Adds a new transform that filters the values using the given given function with ability to restore the filtered values
             */
            stash(name: string, filter: (value: T) => boolean): this;
            stash(filter: (value: T) => boolean): this;

            /**
             * Adds a new transform that restores the previous stashed values
             */
            unstash(name?: string): CoreStream<S, T>; // ??

            /**
             * Flattens all the read array values
             */
            flatten(): CoreStream<S, T>; // ??

            /**
             * Merges the given stream into a core stream
             */
            static merge<S = any, T = S>(streams: Array<CoreStream<any, any> | nodestd.stream.Transform | nodestd.stream.Readable | nodestd.stream.Duplex>, options?: {
                /**
                 * Whether to end the stream when all the given streams end
                 */
                end?: boolean,

                /**
                 * Options for the initial core stream
                 */
                sourceOptions?: I.CoreStream.ConstructorOptions<S, T>
            }): CoreStream<S, T>;

            /**
             * Creates a promise that will be fulfilled with an array of all the emitted values or the first occurred error.
             *
             * This method resumes the stream.
             */
            then<T1 = T[], T2 = never>(onResolve?: (value: T[]) => T1 | PromiseLike<T1>, onReject?: (reason: any) => T2 | PromiseLike<T2>): Promise<T1 | T2>;

            /**
             * Creates a promise that will be fulfilled with an array of all the emitted values or the first occurred error.
             *
             * This method resumes the stream.
             */
            catch<T1 = never>(onReject?: (reason: any) => T1 | PromiseLike<T1>): Promise<T[] | T1>;
        }

        /**
         * Creates a CoreStream instance
         */
        function core<S = any, T = S>(source?: I.CoreStream.Source<S, T>, options?: I.CoreStream.ConstructorOptions<S, T>): CoreStream<S, T>;
    }
}
