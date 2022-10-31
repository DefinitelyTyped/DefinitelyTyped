import { AbstractCrudObject } from './../abstract-crud-object';
export default class CollaborativeAdsShareSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<CollaborativeAdsShareSettings>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<CollaborativeAdsShareSettings>;
}
