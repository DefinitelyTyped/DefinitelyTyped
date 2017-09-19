import { Oid } from './oid';
import { OdbObject } from './odb-object';
import { OdbExpandId } from './odb-expand-id';

export namespace Odb {
    const enum STREAM {
        RDONLY = 2,
        WRONLY = 4,
        RW = 6
    }
}

export class Odb {
    /**
     *
     *
     * @static
     * @param {string} objectsDir
     * @returns {Promise<Odb>}
     *
     * @memberof Odb
     */
    static open(objectsDir: string): Promise<Odb>;

    /**
     *
     *
     * @param {string} path
     * @returns {number}
     *
     * @memberof Odb
     */
    addDiskAlternate(path: string): number;
    /**
     *
     *
     *
     * @memberof Odb
     */
    free(): void;
    /**
     *
     *
     * @param {Oid} id
     * @returns {Promise<OdbObject>}
     *
     * @memberof Odb
     */
    read(id: Oid): Promise<OdbObject>;
    /**
     *
     *
     * @param {Buffer} data
     * @param {number} len
     * @param {number} type
     * @returns {Promise<Oid>}
     *
     * @memberof Odb
     */
    write(data: Buffer, len: number, type: number): Promise<Oid>;
    /**
     *
     *
     * @param {OdbExpandId} ids
     * @param {number} count
     * @returns {number}
     *
     * @memberof Odb
     */
    expandIds(ids: OdbExpandId, count: number): number;
}
