import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ConnectionsTargeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ConnectionsTargeting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
}
