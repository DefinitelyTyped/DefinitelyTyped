import { Oid } from './oid';

export class DiffFile {
    /**
     * Returns the file's flags
     */
    flags(): number;
    /**
     * Returns the file's Oid
     */
    id(): Oid;
    /**
     * Returns the file's mode
     */
    mode(): number;
    /**
     * Returns the file's path
     */
    path(): string;
    /**
     * Returns the file's size
     */
    size(): number;
}
