import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Dataset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Dataset extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
}
