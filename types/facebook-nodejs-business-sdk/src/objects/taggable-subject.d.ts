import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TaggableSubject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TaggableSubject extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
}
