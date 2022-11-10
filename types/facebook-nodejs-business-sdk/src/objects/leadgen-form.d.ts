import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Lead from './lead';
export default class LeadgenForm extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get Locale(): Record<string, any>;
    getLeads(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getLeads(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getLeads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTestLeads(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getTestLeads(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getTestLeads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createTestLead(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Lead>;
    get(fields: string[], params?: Record<string, any>): Promise<LeadgenForm>;
    update(fields: string[], params?: Record<string, any>): Promise<LeadgenForm>;
}
