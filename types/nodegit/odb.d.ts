import { Object } from "./object";
import { OdbExpandId } from "./odb-expand-id";
import { OdbObject } from "./odb-object";
import { Oid } from "./oid";

export namespace Odb {
    const enum STREAM {
        RDONLY = 2,
        WRONLY = 4,
        RW = 6,
    }
}

export class Odb {
    static open(objectsDir: string): Promise<Odb>;

    addDiskAlternate(path: string): number;

    read(id: Oid): Promise<OdbObject>;
    write(data: Buffer, len: number, type: Object.TYPE): Promise<Oid>;
    expandIds(ids: OdbExpandId, count: number): number;
}
