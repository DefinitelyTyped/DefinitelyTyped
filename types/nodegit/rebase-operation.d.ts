import { Oid } from './oid';

export namespace RebaseOperation {
    const enum REBASE_OPERATION {
        PICK = 0,
        REWORD = 1,
        EDIT = 2,
        SQUASH = 3,
        FIXUP = 4,
        EXEC = 5
    }
}

export class RebaseOperation {
    type: number;
    id: Oid;
    exec: string;
}
