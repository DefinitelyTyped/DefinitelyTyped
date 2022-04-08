import { Identity } from '../main';
import { _Window } from '../api/window/window';
import { View } from '../api/view/view';
import { default as Transport } from '../transport/transport';
import { _Frame, EntityType } from '../api/frame/frame';
export declare function getInstanceByEntityType(entityType: string, wire: Transport, identity: Identity): View | _Window | _Frame;
export interface EntityTypeHelpers {
    isView: boolean;
    isWindow: boolean;
    isFrame: boolean;
    isExternal: boolean;
}
export declare function getEntityTypeHelpers(entityType: EntityType): EntityTypeHelpers;
