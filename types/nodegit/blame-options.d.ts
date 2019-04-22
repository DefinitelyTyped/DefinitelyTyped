import { Oid } from './oid';

export class BlameOptions {
    version?: number;
    flags?: number;
    minMatchCharacters?: number;
    newestCommit?: Oid;
    oldestCommit?: Oid;
    minLine?: number;
    maxLine?: number;
    [key: string]: any;
}
