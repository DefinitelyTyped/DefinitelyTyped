import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeVideoDataMediaElements
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeVideoDataMediaElements extends AbstractCrudObject {
    static get Fields(): Readonly<{
        element_id: "element_id";
        element_type: "element_type";
    }>;
}
