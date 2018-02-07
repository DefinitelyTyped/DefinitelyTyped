import { Oid } from './oid';

export class PushUpdate {
    srcRefname: string;
    dstRefname: string;
    src: Oid;
    dst: Oid;
}
