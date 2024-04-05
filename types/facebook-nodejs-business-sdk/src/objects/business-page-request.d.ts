import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessPageRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessPageRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page: "page";
    }>;
}
