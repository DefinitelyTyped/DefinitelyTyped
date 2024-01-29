import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomAudienceStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        code: "code";
        description: "description";
    }>;
}
