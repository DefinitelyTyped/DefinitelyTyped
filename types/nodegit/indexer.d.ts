import { Oid } from "./oid";
import { TransferProgress } from "./transfer-progress";

export class Indexer {
    commit(stats: TransferProgress): number;

    free(): void;
    hash(): Oid;
}
