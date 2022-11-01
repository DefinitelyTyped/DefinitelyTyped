import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdStudyCell extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CreationTemplate(): Record<string, any>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getAdSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCampaigns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdStudyCell>;
    update(fields: string[], params?: Record<string, any>): Promise<AdStudyCell>;
}
