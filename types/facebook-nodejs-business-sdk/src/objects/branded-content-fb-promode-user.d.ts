import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandedContentFBPromodeUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentFBPromodeUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        delegate_page_for_ads_only_id: "delegate_page_for_ads_only_id";
        is_iabp: "is_iabp";
        is_managed: "is_managed";
        name: "name";
        profile_picture_url: "profile_picture_url";
    }>;
}
