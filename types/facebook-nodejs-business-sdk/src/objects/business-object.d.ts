import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessObject extends AbstractCrudObject {
    static get Fields(): Readonly<{
        asset: "asset";
        asset_type: "asset_type";
        id: "id";
        name: "name";
        picture: "picture";
    }>;
}
