import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CopyrightMediaMisuse
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightMediaMisuse extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audio_segments: "audio_segments";
        creation_time: "creation_time";
        disabled_audio_segments: "disabled_audio_segments";
        disabled_video_segments: "disabled_video_segments";
        entire_file_issue: "entire_file_issue";
        entire_file_issue_reasons: "entire_file_issue_reasons";
        expiration_time: "expiration_time";
        id: "id";
        media_asset_id: "media_asset_id";
        reasons: "reasons";
        requested_audio_segments: "requested_audio_segments";
        requested_video_segments: "requested_video_segments";
        resolution_type: "resolution_type";
        status: "status";
        update_time: "update_time";
        video_copyright: "video_copyright";
        video_segments: "video_segments";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CopyrightMediaMisuse>;
}
