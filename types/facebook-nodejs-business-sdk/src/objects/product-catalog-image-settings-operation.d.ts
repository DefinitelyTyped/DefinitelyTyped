import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductCatalogImageSettingsOperation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogImageSettingsOperation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        transformation_type: "transformation_type";
    }>;
}
