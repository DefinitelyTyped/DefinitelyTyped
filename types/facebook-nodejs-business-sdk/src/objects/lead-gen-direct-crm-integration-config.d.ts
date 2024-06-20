import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenDirectCRMIntegrationConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDirectCRMIntegrationConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<LeadGenDirectCRMIntegrationConfig>;
}
