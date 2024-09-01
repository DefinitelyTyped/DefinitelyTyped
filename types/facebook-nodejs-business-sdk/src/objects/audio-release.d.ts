import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudioRelease
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioRelease extends AbstractCrudObject {
    static get Fields(): Readonly<{
        album_title: "album_title";
        asset_availability_status: "asset_availability_status";
        audio_availability_status: "audio_availability_status";
        audio_release_image_uri: "audio_release_image_uri";
        created_time: "created_time";
        displayed_artist: "displayed_artist";
        ean: "ean";
        genre: "genre";
        grid: "grid";
        id: "id";
        isrc: "isrc";
        label_name: "label_name";
        original_release_date: "original_release_date";
        parental_warning_type: "parental_warning_type";
        proprietary_id: "proprietary_id";
        upc: "upc";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AudioRelease>;
}
