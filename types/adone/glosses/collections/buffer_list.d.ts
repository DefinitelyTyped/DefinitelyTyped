declare namespace adone.collection {
    namespace I.BufferList {
        type Appendable = Buffer | BufferList | string | number | Array<Buffer | BufferList | string | number>;
    }

    /**
     * Represents a Node.js Buffer list collector, reader and streamer with callback/promise interface support
     */
    class BufferList extends std.stream.Duplex implements PromiseLike<Buffer> {
        /**
         * Creates a new buffer list
         */
        constructor();

        /**
         * Creates a new buffer list and initiates with the given value
         */
        constructor(buffer: I.BufferList.Appendable);

        /**
         * Creates a new buffer list and subscribes the given callback on the end/error event
         */
        constructor(callback: (err: any, data: Buffer) => void);

        /**
         * Adds an additional buffer or BufferList to the internal list
         */
        append(buf: I.BufferList.Appendable): this;

        /**
         * Ends the stream
         */
        end(chunk?: Buffer): void;
        end(chunk?: () => void): void;

        /**
         * Returns the byte at the specified index
         */
        get(idx: number): number;

        /**
         * Returns a new Buffer object containing the bytes within the range specified.
         */
        slice(start?: number, end?: number): Buffer;

        /**
         * Copies the content of the list in the dest buffer
         * starting from destStart and containing the bytes within the range specified with srcStart to srcEnd
         *
         * @param dstStart writes from this position
         * @param srcStart reads bytes from this position
         * @param srcEnd  read bytes to this position
         */
        copy<T extends Buffer = Buffer>(dst: T, dstStart?: number, srcStart?: number, srcEnd?: number): T;

        /**
         * Returns a new BufferList object containing the bytes within the range specified.
         * No copies will be performed. All buffers in the result share memory with the original list.
         *
         * @param start slice from
         * @param end slice to
         */
        shallowSlice(start?: number, end?: number): BufferList;

        /**
         * Return a string representation of the buffer
         */
        toString(encoding?: fs.I.Encoding, start?: number, end?: number): string;

        /**
         * Shifts bytes off the start of the list
         */
        consume(bytes: number): this;

        /**
         * Performs a shallow-copy of the list.
         */
        duplicate(): BufferList;

        /**
         * Destroys the stream
         */
        destroy(): void;

        then<T1 = Buffer, T2 = never>(
            onfulfilled?: ((value: Buffer) => T1 | PromiseLike<T1>) | null,
            onrejected?: ((reason: any) => T2 | PromiseLike<T2>) | null
        ): PromiseLike<T1 | T2>;

        catch<T>(onrejected?: ((reason: any) => T | PromiseLike<T>) | null): PromiseLike<T | Buffer>;
    }
}
