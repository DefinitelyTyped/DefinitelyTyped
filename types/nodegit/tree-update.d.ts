import { Oid } from './oid';

export class TreeUpdate {
    /**
     *
     *
     * @type {number}
     * @memberof TreeUpdate
     */
    action: number;
    /**
     *
     *
     * @type {number}
     * @memberof TreeUpdate
     */
    filemode: number;
    /**
     *
     *
     * @type {Oid}
     * @memberof TreeUpdate
     */
    id: Oid;
    /**
     *
     *
     * @type {string}
     * @memberof TreeUpdate
     */
    path: string;
}
