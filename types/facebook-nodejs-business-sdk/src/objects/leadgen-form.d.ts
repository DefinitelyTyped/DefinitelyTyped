import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
import Lead from "./lead";
/**
 * LeadgenForm

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadgenForm extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get Locale(): Record<string, any>;
    getLeads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTestLeads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createTestLead(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Lead>;
    get(fields: string[], params?: Record<string, any>): Promise<LeadgenForm>;    get(fields: string[], params?: Record<string, any>): Promise<LeadgenForm>;
}
