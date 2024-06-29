import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogMicrodataStatsPixelInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogMicrodataStatsPixelInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_already_connected: "is_already_connected";
        pixel_id: "pixel_id";
    }>;
}
