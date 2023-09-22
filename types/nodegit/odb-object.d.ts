import { Oid } from "./oid";

export class OdbObject {
    data(): Buffer;
    dup(): Promise<OdbObject>;

    id(): Oid;
    size(): number;
    type(): number;
}
