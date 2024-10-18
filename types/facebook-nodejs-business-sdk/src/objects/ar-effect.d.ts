import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AREffect
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AREffect extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        id: "id";
        last_modified_time: "last_modified_time";
        name: "name";
        status: "status";
        surfaces: "surfaces";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AREffect>;
}
