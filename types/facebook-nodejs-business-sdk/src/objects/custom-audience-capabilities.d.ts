import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceCapabilities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceCapabilities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        capabilities: "capabilities";
    }>;
}
