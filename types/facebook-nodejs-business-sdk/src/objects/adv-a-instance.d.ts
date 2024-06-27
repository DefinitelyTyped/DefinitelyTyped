import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdvAInstance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdvAInstance extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        instance_type: "instance_type";
        name: "name";
        owner_business: "owner_business";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): AdvAInstance;
}
