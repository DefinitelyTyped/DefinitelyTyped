import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CommerceSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        inventory: "inventory";
        total_inventory: "total_inventory";
    }>;
}
