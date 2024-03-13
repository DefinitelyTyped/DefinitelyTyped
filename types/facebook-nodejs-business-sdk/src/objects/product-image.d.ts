import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductImage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductImage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        height: "height";
        id: "id";
        image_url: "image_url";
        width: "width";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductImage>;
}
