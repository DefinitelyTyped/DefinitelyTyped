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
    getLikes(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLikes(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLikes(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<LifeEvent>;
}
