import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RegionalRegulationIdentities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RegionalRegulationIdentities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        taiwan_finserv_beneficiary: "taiwan_finserv_beneficiary";
        taiwan_finserv_payer: "taiwan_finserv_payer";
    }>;
}
