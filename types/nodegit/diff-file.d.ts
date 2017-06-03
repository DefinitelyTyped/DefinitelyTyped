import { Oid } from './oid';

export class DiffFile {
    flags(): number;
    id(): Oid;
    mode(): number;
    path(): string;
    size(): number;
}
