import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandedContentShadowIGUserID
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentShadowIGUserID extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
}
