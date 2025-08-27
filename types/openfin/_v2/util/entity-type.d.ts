import { EntityType } from "../api/frame/frame";
import { Identity } from "../main";
import Transport from "../transport/transport";
export declare function getInstanceByEntityType(entityType: string, wire: Transport, identity: Identity): {};
export interface EntityTypeHelpers {
    isView: boolean;
    isWindow: boolean;
    isFrame: boolean;
    isExternal: boolean;
}
export declare function getEntityTypeHelpers(entityType: EntityType): EntityTypeHelpers;
