import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightMatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightMatch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        created_date: "created_date";
        id: "id";
        last_modified_user: "last_modified_user";
        match_data: "match_data";
        match_status: "match_status";
        notes: "notes";
        permalink: "permalink";
    }>;
    static get Action(): Readonly<{
        block: "BLOCK";
        claim_ad_earnings: "CLAIM_AD_EARNINGS";
        manual_review: "MANUAL_REVIEW";
        monitor: "MONITOR";
        request_takedown: "REQUEST_TAKEDOWN";
    }>;
    static get ActionReason(): Readonly<{
        article_17_preflagging: "ARTICLE_17_PREFLAGGING";
        artist_objection: "ARTIST_OBJECTION";
        objectionable_content: "OBJECTIONABLE_CONTENT";
        premium_music_video: "PREMIUM_MUSIC_VIDEO";
        prerelease_content: "PRERELEASE_CONTENT";
        product_parameters: "PRODUCT_PARAMETERS";
        restricted_content: "RESTRICTED_CONTENT";
        unauthorized_commercial_use: "UNAUTHORIZED_COMMERCIAL_USE";
    }>;
    static get MatchContentType(): Readonly<{
        audio_only: "AUDIO_ONLY";
        video_and_audio: "VIDEO_AND_AUDIO";
        video_only: "VIDEO_ONLY";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoCopyrightMatch>;
}
