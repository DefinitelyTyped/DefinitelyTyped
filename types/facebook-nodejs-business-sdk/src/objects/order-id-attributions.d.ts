import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OrderIDAttributions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OrderIDAttributions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_id: "app_id";
        attribution_type: "attribution_type";
        attributions: "attributions";
        conversion_device: "conversion_device";
        dataset_id: "dataset_id";
        holdout_status: "holdout_status";
        order_id: "order_id";
        order_timestamp: "order_timestamp";
        pixel_id: "pixel_id";
    }>;
}
