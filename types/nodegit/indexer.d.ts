import { TransferProgress } from './transfer-progress';
import { Oid } from './oid';

export class Indexer {
    /**
     *
     *
     * @param {TransferProgress} stats
     * @returns {number}
     *
     * @memberof Indexer
     */
    commit(stats: TransferProgress): number;
    /**
     *
     *
     *
     * @memberof Indexer
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Indexer
     */
    hash(): Oid;
}
