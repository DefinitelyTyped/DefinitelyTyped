import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import PrivateLiftStudyInstance from "./private-lift-study-instance";
/**
 * AdStudy

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudy extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getCells(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCheckPoint(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdStudy>;
    getInstances(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createInstance(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<PrivateLiftStudyInstance>;
    getObjectives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdStudy>;    get(fields: string[], params?: Record<string, any>): Promise<AdStudy>;
}
