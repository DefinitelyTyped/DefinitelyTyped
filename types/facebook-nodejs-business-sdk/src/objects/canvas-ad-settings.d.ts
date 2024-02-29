import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CanvasAdSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasAdSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_canvas_collection_eligible: "is_canvas_collection_eligible";
        lead_form_created_time: "lead_form_created_time";
        lead_form_name: "lead_form_name";
        lead_gen_form_id: "lead_gen_form_id";
        leads_count: "leads_count";
        product_set_id: "product_set_id";
        use_retailer_item_ids: "use_retailer_item_ids";
    }>;
}
