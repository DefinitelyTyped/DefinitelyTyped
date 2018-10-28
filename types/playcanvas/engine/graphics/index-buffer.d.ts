declare namespace pc {

    /**
     * @name pc.IndexBuffer
     * @class An index buffer is the mechanism via which the application specifies primitive
     * index data to the graphics hardware.
     * @description Creates a new index buffer.
     * @example
     * // Create an index buffer holding 3 16-bit indices
     * // The buffer is marked as static, hinting that the buffer will never be modified
     * var indexBuffer = new pc.IndexBuffer(graphicsDevice, pc.INDEXFORMAT_UINT16, 3, pc.BUFFER_STATIC);
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this index buffer.
     * @param {Number} format The type of each index to be stored in the index buffer (see pc.INDEXFORMAT_*).
     * @param {Number} numIndices The number of indices to be stored in the index buffer.
     * @param {Number} [usage] The usage type of the vertex buffer (see pc.BUFFER_*).
     * @param {ArrayBuffer} [initialData] Initial data.
     */
    class IndexBuffer {
        constructor(graphicsDevice: pc.GraphicsDevice, format: number, numIndices: number, usage?: number, initialData?: any)

        /**
         * @function
         * @name pc.IndexBuffer#destroy
         * @description Frees resources associated with this index buffer.
         */
        destroy(): void;

        /**
         * @function
         * @name pc.IndexBuffer#getFormat
         * @description Returns the data format of the specified index buffer.
         * @returns {Number} The data format of the specified index buffer (see pc.INDEXFORMAT_*).
         */
        getFormat(): void;

        /**
         * @function
         * @name pc.IndexBuffer#getNumIndices
         * @description Returns the number of indices stored in the specified index buffer.
         * @returns {Number} The number of indices stored in the specified index buffer.
         */
        getNumIndices(): number;

        /**
         * @function
         * @name pc.IndexBuffer#lock
         * @description Gives access to the block of memory that stores the buffer's indices.
         * @returns {ArrayBuffer} A contiguous block of memory where index data can be written to.
         */
        lock(): ArrayBuffer;

        /**
         * @function
         * @name pc.IndexBuffer#unlock
         * @description Signals that the block of memory returned by a call to the lock function is
         * ready to be given to the graphics hardware. Only unlocked index buffers can be set on the
         * currently active device.
         */
        unlock(): void;
    }
}
