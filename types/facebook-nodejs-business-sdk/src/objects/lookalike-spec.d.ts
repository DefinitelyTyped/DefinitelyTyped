import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LookalikeSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LookalikeSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        is_financial_service: "is_financial_service";
        origin: "origin";
        origin_event_name: "origin_event_name";
        origin_event_source_name: "origin_event_source_name";
        origin_event_source_type: "origin_event_source_type";
        product_set_name: "product_set_name";
        ratio: "ratio";
        starting_ratio: "starting_ratio";
        target_countries: "target_countries";
        target_country_names: "target_country_names";
        type: "type";
    }>;
}
