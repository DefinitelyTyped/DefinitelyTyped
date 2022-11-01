import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class FundraiserPersonToCharity extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get FundraiserType(): Record<string, any>;
    getDonations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createEndFundraiser(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getExternalDonations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createExternalDonation(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<FundraiserPersonToCharity>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<FundraiserPersonToCharity>;
}
