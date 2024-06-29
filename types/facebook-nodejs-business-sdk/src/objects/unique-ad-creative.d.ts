import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UniqueAdCreative
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UniqueAdCreative extends AbstractCrudObject {
    static get Fields(): Readonly<{
        sample_creative: "sample_creative";
        visual_hash: "visual_hash";
    }>;
}
