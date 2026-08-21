import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeImageDataMediaElements
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeImageDataMediaElements extends AbstractCrudObject {
    static get Fields(): Readonly<{
        element_id: "element_id";
        element_type: "element_type";
        x: "x";
        y: "y";
    }>;
}
