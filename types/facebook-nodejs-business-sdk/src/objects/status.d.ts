import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Status
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Status extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event: "event";
        from: "from";
        id: "id";
        message: "message";
        place: "place";
        updated_time: "updated_time";
    }>;
    createLike(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<Status>;
    get(fields: Array<string>, params?: Record<string, any>): Status;
}
