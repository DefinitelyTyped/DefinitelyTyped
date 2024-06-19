import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import PrivateLiftStudyInstance from "./private-lift-study-instance";
/**
 * AdStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudy extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getCells(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCheckPoint(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AdStudy>;
    getInstances(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createInstance(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<PrivateLiftStudyInstance>;
    getObjectives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): AdStudy;
    update(fields: Array<string>, params?: Record<string, any>): AdStudy;
}
