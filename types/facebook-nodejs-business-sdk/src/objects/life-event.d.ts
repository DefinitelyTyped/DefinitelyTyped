import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * LifeEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LifeEvent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        end_time: "end_time";
        from: "from";
        id: "id";
        is_hidden: "is_hidden";
        start_time: "start_time";
        title: "title";
        updated_time: "updated_time";
    }>;
    getLikes(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<any, any>): LifeEvent;
}
