import { Oid } from './oid';

export namespace Odb {
    enum STREAM {
        RDONLY = 2,
        WRONLY = 4,
        RW = 6
    }
}

export class Odb {
    static open(objects_dir: string): Promise<Odb>;

    addDiskAlternate(path: string): number;
    free(): void;
    read(id: Oid): Promise<NodeGit.OdbObject>;
    write(data: Buffer, len: number, type: number): Promise<Oid>;
}
