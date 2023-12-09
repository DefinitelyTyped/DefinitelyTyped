import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * FundraiserPersonToCharity
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundraiserPersonToCharity extends AbstractCrudObject {
    static get Fields(): Readonly<{
        amount_raised: "amount_raised";
        charity_id: "charity_id";
        currency: "currency";
        description: "description";
        donations_count: "donations_count";
        donors_count: "donors_count";
        end_time: "end_time";
        external_amount_raised: "external_amount_raised";
        external_donations_count: "external_donations_count";
        external_donors_count: "external_donors_count";
        external_event_name: "external_event_name";
        external_event_start_time: "external_event_start_time";
        external_event_uri: "external_event_uri";
        external_fundraiser_uri: "external_fundraiser_uri";
        external_id: "external_id";
        goal_amount: "goal_amount";
        id: "id";
        internal_amount_raised: "internal_amount_raised";
        internal_donations_count: "internal_donations_count";
        internal_donors_count: "internal_donors_count";
        name: "name";
        uri: "uri";
    }>;
    static get FundraiserType(): Readonly<{
        person_for_charity: "person_for_charity";
    }>;
    getDonations(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getDonations(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getDonations(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createEndFundraiser(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getExternalDonations(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getExternalDonations(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getExternalDonations(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createExternalDonation(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<FundraiserPersonToCharity>;
    update(fields: string[], params?: Record<any, any>): Promise<FundraiserPersonToCharity>;
}
