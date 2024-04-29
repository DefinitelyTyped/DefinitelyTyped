import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductItemLocalInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemLocalInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        availability_circle_origin: "availability_circle_origin";
        availability_circle_radius: "availability_circle_radius";
        availability_circle_radius_unit: "availability_circle_radius_unit";
        availability_polygon_coordinates: "availability_polygon_coordinates";
        availability_postal_codes: "availability_postal_codes";
        availability_source: "availability_source";
        id: "id";
        inferred_circle_origin: "inferred_circle_origin";
        inferred_circle_radius: "inferred_circle_radius";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductItemLocalInfo>;
}
