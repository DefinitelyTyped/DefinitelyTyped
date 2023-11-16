import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import PrivateLiftStudyInstance from './private-lift-study-instance';
/**
 * AdStudy
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        canceled_time: "canceled_time";
        client_business: "client_business";
        cooldown_start_time: "cooldown_start_time";
        created_by: "created_by";
        created_time: "created_time";
        description: "description";
        end_time: "end_time";
        id: "id";
        measurement_contact: "measurement_contact";
        name: "name";
        observation_end_time: "observation_end_time";
        results_first_available_date: "results_first_available_date";
        sales_contact: "sales_contact";
        start_time: "start_time";
        type: "type";
        updated_by: "updated_by";
        updated_time: "updated_time";
    }>;
    static get Type(): Readonly<{
        continuous_lift_config: "CONTINUOUS_LIFT_CONFIG";
        geo_lift: "GEO_LIFT";
        lift: "LIFT";
        split_test: "SPLIT_TEST";
    }>;
    getCells(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCheckPoint(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<AdStudy>;
    getInstances(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createInstance(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<PrivateLiftStudyInstance>;
    getObjectives(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<any, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<any, any>): AdStudy;
    update(fields: Array<string>, params?: Record<any, any>): AdStudy;
}
