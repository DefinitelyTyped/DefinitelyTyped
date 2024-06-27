import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Hours
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Hours extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        permanent_status: "permanent_status";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): Hours;
}
