import { Oid } from './oid';

export class OdbObject {
    data(): Buffer;
    dup(): Promise<OdbObject>;

    free(): void;
    id(): Oid;
    size(): number;
    type(): number;
}
