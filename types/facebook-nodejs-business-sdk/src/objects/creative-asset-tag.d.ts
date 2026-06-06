import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreativeAssetTag
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeAssetTag extends AbstractCrudObject {
    static get Fields(): Readonly<{
        name: "name";
    }>;
}
