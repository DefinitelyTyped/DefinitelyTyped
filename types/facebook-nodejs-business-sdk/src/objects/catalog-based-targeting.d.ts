import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CatalogBasedTargeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogBasedTargeting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        geo_targeting_type: "geo_targeting_type";
    }>;
}
