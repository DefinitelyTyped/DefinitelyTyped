import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdStudyObjectiveID
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyObjectiveID extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event_names: "event_names";
        id: "id";
        type: "type";
    }>;
}
