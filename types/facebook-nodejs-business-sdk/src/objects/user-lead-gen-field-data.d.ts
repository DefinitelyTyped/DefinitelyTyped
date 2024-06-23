import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserLeadGenFieldData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserLeadGenFieldData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        name: "name";
        values: "values";
    }>;
}
