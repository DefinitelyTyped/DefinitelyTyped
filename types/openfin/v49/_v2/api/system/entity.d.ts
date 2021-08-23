import { Identity } from '../../identity';
export interface Entity {
    type: string;
    uuid: string;
}
export interface EntityInfo {
    name: string;
    uuid: string;
    parent: Identity;
    entityType: string;
}
