import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AvatarProfilePicture
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AvatarProfilePicture extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        url: "url";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<AvatarProfilePicture>;
}
