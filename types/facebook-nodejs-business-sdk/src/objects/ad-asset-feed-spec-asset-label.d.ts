import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecAssetLabel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecAssetLabel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
}
