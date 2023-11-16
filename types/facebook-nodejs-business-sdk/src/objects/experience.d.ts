import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Experience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Experience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        from: "from";
        id: "id";
        name: "name";
        with: "with";
    }>;
}
