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
    createLike(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Status>;
    get(fields: string[], params?: Record<string, any>): Promise<Status>;
}
