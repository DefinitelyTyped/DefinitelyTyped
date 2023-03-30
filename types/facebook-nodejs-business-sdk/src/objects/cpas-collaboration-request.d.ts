import { AbstractCrudObject } from './../abstract-crud-object';
export default class CPASCollaborationRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RequesterAgencyOrBrand(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASCollaborationRequest>;
}
