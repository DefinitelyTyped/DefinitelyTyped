import { Oid } from './oid';
import { OdbObject } from './odb-object';

export namespace Odb {
    const enum STREAM {
        RDONLY = 2,
        WRONLY = 4,
        RW = 6
    }
}

export class Odb {
    static open(objects_dir: string): Promise<Odb>;

    addDiskAlternate(path: string): number;
    free(): void;
    read(id: Oid): Promise<OdbObject>;
    write(data: Buffer, len: number, type: number): Promise<Oid>;
}
