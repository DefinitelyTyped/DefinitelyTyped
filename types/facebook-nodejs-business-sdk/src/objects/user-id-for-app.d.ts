import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserIDForApp
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserIDForApp extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app: "app";
        id: "id";
    }>;
}
