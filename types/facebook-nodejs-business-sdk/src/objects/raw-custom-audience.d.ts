import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * RawCustomAudience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RawCustomAudience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
}
