import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductSetMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        cover_image_url: "cover_image_url";
        description: "description";
        external_url: "external_url";
        integrity_review_status: "integrity_review_status";
    }>;
}
