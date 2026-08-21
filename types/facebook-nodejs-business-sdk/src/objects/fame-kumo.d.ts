import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FAMEKumo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FAMEKumo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<FAMEKumo>;
}
