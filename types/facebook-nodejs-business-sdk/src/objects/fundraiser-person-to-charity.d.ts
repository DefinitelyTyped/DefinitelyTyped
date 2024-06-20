import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * FundraiserPersonToCharity

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundraiserPersonToCharity extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get FundraiserType(): Record<string, any>;
    getDonations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createEndFundraiser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getExternalDonations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createExternalDonation(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<FundraiserPersonToCharity>;    get(fields: string[], params?: Record<string, any>): Promise<FundraiserPersonToCharity>;
}
