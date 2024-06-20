import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerIntegrationLinked

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerIntegrationLinked extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PartnerIntegrationLinked>;
}
