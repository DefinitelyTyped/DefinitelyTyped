import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdStudyObjectiveOffsiteDatasets
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyObjectiveOffsiteDatasets extends AbstractCrudObject {
    static get Fields(): Readonly<{
        event_names: "event_names";
        id: "id";
    }>;
}
