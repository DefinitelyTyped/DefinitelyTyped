import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserIDForPage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserIDForPage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page: "page";
    }>;
}
