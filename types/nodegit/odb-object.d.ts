import { Oid } from './oid';

export class OdbObject {
    /**
     *
     *
     * @returns {Buffer}
     *
     * @memberof OdbObject
     */
    data(): Buffer;
    /**
     *
     *
     * @returns {Promise<OdbObject>}
     *
     * @memberof OdbObject
     */
    dup(): Promise<OdbObject>;
    /**
     *
     *
     *
     * @memberof OdbObject
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof OdbObject
     */
    id(): Oid;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof OdbObject
     */
    size(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof OdbObject
     */
    type(): number;
}
