import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * VideoCopyrightGeoGate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightGeoGate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        excluded_countries: "excluded_countries";
        included_countries: "included_countries";
    }>;
}
