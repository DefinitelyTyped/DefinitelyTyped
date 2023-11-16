import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeLinkDataSponsorshipInfoSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataSponsorshipInfoSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        sponsor_image_url: "sponsor_image_url";
        sponsor_name: "sponsor_name";
    }>;
}
