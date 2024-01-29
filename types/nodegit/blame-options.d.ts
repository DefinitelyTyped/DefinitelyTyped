import { Oid } from "./oid";

export class BlameOptions {
    version?: number | undefined;
    flags?: number | undefined;
    minMatchCharacters?: number | undefined;
    newestCommit?: Oid | undefined;
    oldestCommit?: Oid | undefined;
    minLine?: number | undefined;
    maxLine?: number | undefined;
    [key: string]: any;
}
