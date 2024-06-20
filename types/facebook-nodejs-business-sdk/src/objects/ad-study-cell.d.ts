import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdStudyCell

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyCell extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CreationTemplate(): Record<string, any>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdStudyCell>;    get(fields: string[], params?: Record<string, any>): Promise<AdStudyCell>;
}
