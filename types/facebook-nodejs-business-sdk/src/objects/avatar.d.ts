import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Avatar
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Avatar extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<Avatar>;
}
