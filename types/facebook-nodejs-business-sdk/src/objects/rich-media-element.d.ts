import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * RichMediaElement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RichMediaElement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        element: "element";
        element_type: "element_type";
        name: "name";
    }>;
}
