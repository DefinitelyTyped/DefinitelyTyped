import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASCollaborationRequest

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASCollaborationRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RequesterAgencyOrBrand(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASCollaborationRequest>;
}
