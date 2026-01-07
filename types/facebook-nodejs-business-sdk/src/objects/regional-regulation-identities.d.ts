import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RegionalRegulationIdentities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RegionalRegulationIdentities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        australia_finserv_beneficiary: "australia_finserv_beneficiary";
        australia_finserv_payer: "australia_finserv_payer";
        india_finserv_beneficiary: "india_finserv_beneficiary";
        india_finserv_payer: "india_finserv_payer";
        singapore_universal_beneficiary: "singapore_universal_beneficiary";
        singapore_universal_payer: "singapore_universal_payer";
        taiwan_finserv_beneficiary: "taiwan_finserv_beneficiary";
        taiwan_finserv_payer: "taiwan_finserv_payer";
        taiwan_universal_beneficiary: "taiwan_universal_beneficiary";
        taiwan_universal_payer: "taiwan_universal_payer";
    }>;
}
