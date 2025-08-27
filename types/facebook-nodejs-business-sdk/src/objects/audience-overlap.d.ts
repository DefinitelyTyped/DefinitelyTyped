import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudienceOverlap
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceOverlap extends AbstractCrudObject {
    static get Fields(): Readonly<{
        estimated_reach: "estimated_reach";
        id: "id";
        name: "name";
        overlap: "overlap";
    }>;
}
