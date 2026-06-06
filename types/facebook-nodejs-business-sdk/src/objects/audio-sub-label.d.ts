import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudioSubLabel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioSubLabel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        expiration_timestamp: "expiration_timestamp";
        flagged_timestamp: "flagged_timestamp";
        id: "id";
        label_name: "label_name";
        last_update_timestamp: "last_update_timestamp";
        num_audio_tracks: "num_audio_tracks";
        state: "state";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AudioSubLabel>;
}
