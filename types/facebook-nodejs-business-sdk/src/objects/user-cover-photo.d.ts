import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserCoverPhoto
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserCoverPhoto extends AbstractCrudObject {
    static get Fields(): Readonly<{
        offset_x: "offset_x";
        offset_y: "offset_y";
        source: "source";
    }>;
}
