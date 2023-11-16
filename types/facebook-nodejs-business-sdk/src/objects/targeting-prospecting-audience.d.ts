import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingProspectingAudience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingProspectingAudience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        sources: "sources";
    }>;
}
