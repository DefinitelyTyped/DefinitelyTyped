import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdsImageCrops
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsImageCrops extends AbstractCrudObject {
    static get Fields(): Readonly<{
        value_100x100: "100x100";
        value_100x72: "100x72";
        value_191x100: "191x100";
        value_400x150: "400x150";
        value_400x500: "400x500";
        value_600x360: "600x360";
        value_90x160: "90x160";
    }>;
}
