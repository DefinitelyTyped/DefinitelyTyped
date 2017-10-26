import { Oid } from './oid';

export class TreeUpdate {
    action: number;
    filemode: number;
    id: Oid;
    path: string;
}
