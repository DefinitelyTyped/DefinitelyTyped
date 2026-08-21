import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebPublisher
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebPublisher extends AbstractCrudObject {
    static get Fields(): Readonly<{
        domain_url: "domain_url";
        id: "id";
        publisher_name: "publisher_name";
    }>;
}
