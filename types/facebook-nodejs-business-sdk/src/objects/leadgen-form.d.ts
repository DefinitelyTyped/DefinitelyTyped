import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Lead from './lead';
export default class LeadgenForm extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get Locale(): Record<string, any>;
    getLeads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getTestLeads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createTestLead(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<Lead>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<LeadgenForm>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<LeadgenForm>;
}
