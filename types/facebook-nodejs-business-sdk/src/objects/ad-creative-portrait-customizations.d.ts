import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativePortraitCustomizations
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePortraitCustomizations extends AbstractCrudObject {
    static get Fields(): Readonly<{
        carousel_delivery_mode: "carousel_delivery_mode";
        specifications: "specifications";
    }>;
}
