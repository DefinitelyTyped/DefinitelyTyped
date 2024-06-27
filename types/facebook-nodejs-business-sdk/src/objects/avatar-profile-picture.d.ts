import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AvatarProfilePicture
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AvatarProfilePicture extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        url: "url";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): AvatarProfilePicture;
}
