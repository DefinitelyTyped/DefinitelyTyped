import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LiveVideoRecommendedEncoderSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoRecommendedEncoderSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audio_codec_settings: "audio_codec_settings";
        streaming_protocol: "streaming_protocol";
        video_codec_settings: "video_codec_settings";
    }>;
}
