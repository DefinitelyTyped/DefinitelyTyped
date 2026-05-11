import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SignalsIWLExtractor
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SignalsIWLExtractor extends AbstractCrudObject {
    static get Fields(): Readonly<{
        domain_uri: "domain_uri";
        event_type: "event_type";
        extractor_type: "extractor_type";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<SignalsIWLExtractor>;
}
