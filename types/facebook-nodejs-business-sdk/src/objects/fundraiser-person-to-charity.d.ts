import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * FundraiserPersonToCharity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundraiserPersonToCharity extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get FundraiserType(): Record<string, any>;
    getDonations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createEndFundraiser(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getExternalDonations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createExternalDonation(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): FundraiserPersonToCharity;
    update(fields: Array<string>, params?: Record<string, any>): FundraiserPersonToCharity;
}
