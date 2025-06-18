import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeRegionalRegulationDisclaimer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeRegionalRegulationDisclaimer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        australia_finserv: "australia_finserv";
        india_finserv: "india_finserv";
        singapore_universal: "singapore_universal";
        taiwan_finserv: "taiwan_finserv";
        taiwan_universal: "taiwan_universal";
    }>;
}
