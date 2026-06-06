import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ImageCopyrightDispute
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ImageCopyrightDispute extends AbstractCrudObject {
    static get Fields(): Readonly<{
        appeal_form_data: "appeal_form_data";
        dispute_form_data: "dispute_form_data";
        expiration_time: "expiration_time";
        id: "id";
        match_id: "match_id";
        status: "status";
        time_appealed: "time_appealed";
        time_created: "time_created";
        time_updated: "time_updated";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ImageCopyrightDispute>;
}
