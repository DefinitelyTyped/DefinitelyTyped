import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BCPCampaign

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BCPCampaign extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<BCPCampaign>;
}
