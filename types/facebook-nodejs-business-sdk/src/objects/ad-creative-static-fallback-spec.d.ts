import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeStaticFallbackSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeStaticFallbackSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        call_to_action: "call_to_action";
        description: "description";
        image_hash: "image_hash";
        link: "link";
        message: "message";
        name: "name";
    }>;
}
