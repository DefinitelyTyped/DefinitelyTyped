import { Oid } from './oid';

export interface IndexTime {
    seconds: number;
    nanoseconds: number;
}

export class IndexEntry {
    ctime: IndexTime;
    mtime: IndexTime;
    dev: number;
    ino: number;
    mode: number;
    uid: number;
    gid: number;
    fileSize: number;
    id: Oid;
    flags: number;
    flagsExtended: number;
    path: string;
}
