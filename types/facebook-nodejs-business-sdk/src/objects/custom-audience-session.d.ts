import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomAudienceSession
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceSession extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_time: "end_time";
        num_invalid_entries: "num_invalid_entries";
        num_matched: "num_matched";
        num_received: "num_received";
        progress: "progress";
        session_id: "session_id";
        stage: "stage";
        start_time: "start_time";
    }>;
}
