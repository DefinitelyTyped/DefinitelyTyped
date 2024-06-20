import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdProposal

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdProposal extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdProposal>;
}
