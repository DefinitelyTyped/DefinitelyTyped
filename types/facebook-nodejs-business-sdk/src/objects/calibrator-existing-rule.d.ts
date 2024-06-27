import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CalibratorExistingRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CalibratorExistingRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        value_7d_volume: "7d_volume";
        creation_source: "creation_source";
        creation_time: "creation_time";
        creator: "creator";
        event_type: "event_type";
        id: "id";
        rule: "rule";
        rule_type: "rule_type";
        sample_urls: "sample_urls";
        status: "status";
        transforms: "transforms";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CalibratorExistingRule>;
}
