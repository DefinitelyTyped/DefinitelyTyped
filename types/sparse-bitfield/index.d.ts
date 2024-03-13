/// <reference types="node" />

import { PagerInstance } from "memory-pager";

export = BitField;

declare const BitField: BitField;

interface BitField {
    (bufferOrOptions?: BitField.Options | Buffer): BitField.BitFieldInstance;
    new(bufferOrOptions?: BitField.Options | Buffer): BitField.BitFieldInstance;
}

declare namespace BitField {
    interface Options {
        /**
         * @default 0
         */
        pageOffset?: number | undefined;
        /**
         * How big should the partial buffers be.
         * @default 1024
         */
        pageSize?: number | undefined;
        /**
         * A pre-configured Pager instance.
         */
        pages?: PagerInstance | undefined;
        /**
         * An existing bitfield.
         */
        buffer?: Buffer | undefined;
        /**
         * Track when pages are being updated in the pager.
         * @default false
         */
        trackUpdates?: boolean | undefined;
    }

    interface BitFieldInstance {
        /**
         * A `memory-pager` instance that is managing the underlying memory.
         * If you set `trackUpdates` to `true` in the constructor you can use `.lastUpdate()` on this instance
         * to get the last updated memory page.
         */
        readonly pages: PagerInstance;

        /**
         * Get the value of a bit.
         */
        get(index: number): boolean;
        /**
         * Get the value of a byte.
         */
        getByte(index: number): number;
        /**
         * Set a bit to true or false.
         */
        set(index: number, value: boolean): boolean;
        /**
         * Set a byte to a new value.
         */
        setByte(index: number, byte: number): boolean;
        /**
         * Get a single buffer representing the entire bitfield.
         */
        toBuffer(): Buffer;
    }
}
