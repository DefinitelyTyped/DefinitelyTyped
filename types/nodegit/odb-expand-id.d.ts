import { Oid } from './oid';
import { Object } from './object';

export class OdbExpandId {
    id: Oid;
    length: number;
    type: Object.TYPE;
}
