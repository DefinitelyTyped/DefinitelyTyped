declare namespace pc {

    /**
     * @name pc.VertexBuffer
     * @class A vertex buffer is the mechanism via which the application specifies vertex
     * data to the graphics hardware.
     * @description Creates a new vertex buffer object.
     * @param {pc.GraphicsDevice} graphicsDevice The graphics device used to manage this vertex buffer.
     * @param {pc.VertexFormat} format The vertex format of this vertex buffer.
     * @param {Number} numVertices The number of vertices that this vertex buffer will hold.
     * @param {Number} [usage] The usage type of the vertex buffer (see pc.BUFFER_*).
     * @param {ArrayBuffer} [initialData] Initial data.
     */
    class VertexBuffer {
        constructor(graphicsDevice: pc.GraphicsDevice, format: pc.VertexFormat, numVertices: number, usage?: number, initialData?: ArrayBuffer)

        /**
         * @function
         * @name pc.VertexBuffer#destroy
         * @description Frees resources associated with this vertex buffer.
         */
        destroy(): void;

        /**
         * @function
         * @name pc.VertexBuffer#getFormat
         * @description Returns the data format of the specified vertex buffer.
         * @returns {pc.VertexFormat} The data format of the specified vertex buffer.
         */
        getFormat(): pc.VertexFormat;

        /**
         * @function
         * @name pc.VertexBuffer#getUsage
         * @description Returns the usage type of the specified vertex buffer. This indicates
         * whether the buffer can be modified once and used many times (pc.BUFFER_STATIC),
         * modified repeatedly and used many times (pc.BUFFER_DYNAMIC) or modified once
         * and used at most a few times (pc.BUFFER_STREAM).
         * @returns {Number} The usage type of the vertex buffer (see pc.BUFFER_*).
         */
        getUsage(): number;

        /**
         * @function
         * @name pc.VertexBuffer#getNumVertices
         * @description Returns the number of vertices stored in the specified vertex buffer.
         * @returns {Number} The number of vertices stored in the vertex buffer.
         */
        getNumVertices(): number;

        /**
         * @function
         * @name pc.VertexBuffer#lock
         * @description Returns a mapped memory block representing the content of the vertex buffer.
         * @returns {ArrayBuffer} An array containing the byte data stored in the vertex buffer.
         */
        lock(): ArrayBuffer;

        /**
         * @function
         * @name pc.VertexBuffer#unlock
         * @description Notifies the graphics engine that the client side copy of the vertex buffer's
         * memory can be returned to the control of the graphics driver.
         */
        unlock(): void;
    }
}