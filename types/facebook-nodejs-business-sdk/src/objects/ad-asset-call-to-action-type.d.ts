import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetCallToActionType
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetCallToActionType extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
}
