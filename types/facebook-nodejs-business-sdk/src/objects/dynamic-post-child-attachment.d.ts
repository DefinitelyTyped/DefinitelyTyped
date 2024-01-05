import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DynamicPostChildAttachment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicPostChildAttachment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        image_url: "image_url";
        link: "link";
        place_id: "place_id";
        product_id: "product_id";
        title: "title";
    }>;
}
