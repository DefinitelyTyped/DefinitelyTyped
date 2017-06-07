import {Oid} from './oid';

export interface BlameOptions {
    version: number;
    flags: number;
    minMatchCharacters: number;
    newestCommit: Oid;
    oldestCommit: Oid;
    minLine: number;
    maxLine: number;
}
