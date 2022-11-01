import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import PrivateLiftStudyInstance from './private-lift-study-instance';
export default class AdStudy extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    getCells(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCheckPoint(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AdStudy>;
    getInstances(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createInstance(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PrivateLiftStudyInstance>;
    getObjectives(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdStudy>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdStudy>;
}
