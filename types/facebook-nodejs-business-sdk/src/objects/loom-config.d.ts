import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LoomConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LoomConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
}
