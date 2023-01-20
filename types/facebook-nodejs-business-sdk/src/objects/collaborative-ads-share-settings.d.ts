import { AbstractCrudObject } from './../abstract-crud-object';
export default class CollaborativeAdsShareSettings extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CollaborativeAdsShareSettings>;
    update(fields: string[], params?: Record<string, any>): Promise<CollaborativeAdsShareSettings>;
}
