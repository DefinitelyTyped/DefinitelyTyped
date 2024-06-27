import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedUploadProgress
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadProgress extends AbstractCrudObject {
    static get Fields(): Readonly<{
        pos: "pos";
        size: "size";
        step: "step";
        unit: "unit";
        updated_time: "updated_time";
    }>;
}
