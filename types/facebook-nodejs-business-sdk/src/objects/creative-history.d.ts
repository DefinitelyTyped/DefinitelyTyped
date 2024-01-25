import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CreativeHistory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeHistory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creative_fingerprint: "creative_fingerprint";
        time_ranges: "time_ranges";
    }>;
}
