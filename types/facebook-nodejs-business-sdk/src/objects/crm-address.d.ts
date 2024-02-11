import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CRMAddress
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CRMAddress extends AbstractCrudObject {
    static get Fields(): Readonly<{
        city: "city";
        cnpj_tax_id: "cnpj_tax_id";
        country: "country";
        id: "id";
        postal_code: "postal_code";
        registration_label: "registration_label";
        registration_number: "registration_number";
        state: "state";
        street1: "street1";
        street2: "street2";
        street3: "street3";
        street4: "street4";
        validation_status: "validation_status";
        vat_tax_id: "vat_tax_id";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CRMAddress>;
}
