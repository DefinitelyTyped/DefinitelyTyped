import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAdsRecommendedAudios
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdsRecommendedAudios extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audio_assets: "audio_assets";
    }>;
}
