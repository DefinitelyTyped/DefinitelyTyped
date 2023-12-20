import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        tasks: "tasks";
    }>;
}
