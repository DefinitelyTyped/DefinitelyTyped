import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlatformSessionKey
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlatformSessionKey extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
}
