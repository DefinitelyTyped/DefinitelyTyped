import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeAssetGroupsSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeAssetGroupsSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        groups: "groups";
        origin: "origin";
    }>;
}
