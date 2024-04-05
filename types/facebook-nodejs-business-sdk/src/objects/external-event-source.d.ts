import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ExternalEventSource
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalEventSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        source_type: "source_type";
    }>;
}
