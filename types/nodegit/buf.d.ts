/// <reference types="node" />

export class Buf {
        /**
         *
         *
         * @returns {number}
         *
         * @memberof Buf
         */
        containsNul(): number;
        /**
         *
         *
         *
         * @memberof Buf
         */
        free(): void;
        /**
         *
         *
         * @param {number} targetSize
         * @returns {Promise<Buf>}
         *
         * @memberof Buf
         */
        grow(targetSize: number): Promise<Buf>;
        /**
         *
         *
         * @returns {number}
         *
         * @memberof Buf
         */
        isBinary(): number;
        /**
         *
         *
         * @param {Buffer} data
         * @param {number} datalen
         * @returns {Promise<Buf>}
         *
         * @memberof Buf
         */
        set(data: Buffer, datalen: number): Promise<Buf>;
        /**
         *
         *
         * @type {string}
         * @memberof Buf
         */
        ptr: string;
        /**
         *
         *
         * @type {number}
         * @memberof Buf
         */
        asize: number;
        /**
         *
         *
         * @type {number}
         * @memberof Buf
         */
        size: number;
    }
