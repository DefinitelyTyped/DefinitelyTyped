import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class AutomotiveModel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<AutomotiveModel>;
}
