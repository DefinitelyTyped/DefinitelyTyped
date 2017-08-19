import { Oid } from './oid';

export class PushUpdate {
    /**
     *
     *
     * @type {string}
     * @memberof PushUpdate
     */
    srcRefname: string;
    /**
     *
     *
     * @type {string}
     * @memberof PushUpdate
     */
    dstRefname: string;
    /**
     *
     *
     * @type {Oid}
     * @memberof PushUpdate
     */
    src: Oid;
    /**
     *
     *
     * @type {Oid}
     * @memberof PushUpdate
     */
    dst: Oid;
}
