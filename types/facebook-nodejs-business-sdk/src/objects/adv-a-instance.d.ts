import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdvAInstance
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdvAInstance extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        instance_type: "instance_type";
        name: "name";
        owner_business: "owner_business";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdvAInstance>;
}
