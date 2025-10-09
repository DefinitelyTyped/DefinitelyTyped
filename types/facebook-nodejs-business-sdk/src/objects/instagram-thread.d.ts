import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstagramThread
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramThread extends AbstractCrudObject {
    static get Fields(): Readonly<{
        folder: "folder";
        id: "id";
        participants: "participants";
        updated_time: "updated_time";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<InstagramThread>;
}
