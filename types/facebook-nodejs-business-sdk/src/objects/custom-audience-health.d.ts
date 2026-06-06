import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceHealth
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceHealth extends AbstractCrudObject {
    static get Fields(): Readonly<{
        health: "health";
    }>;
}
