// Type definitions for shippo 1.7
// Project: https://github.com/goshippo/shippo-node-client
// Definitions by: Saiichi <https://github.com/saiichihashimoto>
//                 James Lismore <https://github.com/jlismore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

declare namespace Shippo {
    type USPSServiceLevel =
        | 'usps_priority'
        | 'usps_priority_express'
        | 'usps_first'
        | 'usps_parcel_select'
        | 'usps_media_mail'
        | 'usps_priority_mail_international'
        | 'usps_priority_mail_express_international'
        | 'usps_first_class_package_international_service'
        | (string & {});

    type FEDEXServiceLevel =
        | 'fedex_ground'
        | 'fedex_home_delivery'
        | 'fedex_smart_post'
        | 'fedex_2_day'
        | 'fedex_2_day_am'
        | 'fedex_express_saver'
        | 'fedex_standard_overnight'
        | 'fedex_priority_overnight'
        | 'fedex_first_overnight'
        | 'fedex_freight_priority'
        | 'fedex_next_day_freight'
        | 'fedex_freight_economy'
        | 'fedex_first_freight'
        | 'fedex_international_economy'
        | 'fedex_international_priority'
        | 'fedex_international_first'
        | 'fedex_europe_first_international_priority'
        | 'international_economy_freight'
        | 'international_priority_freight'
        | (string & {});

    type UPSServiceLevel =
        | 'ups_standard'
        | 'ups_ground'
        | 'ups_saver'
        | 'ups_3_day_select'
        | 'ups_second_day_air'
        | 'ups_second_day_air_am'
        | 'ups_next_day_air'
        | 'ups_next_day_air_saver'
        | 'ups_next_day_air_early_am'
        | 'ups_mail_innovations_domestic'
        | 'ups_surepost'
        | 'ups_surepost_bound_printed_matter'
        | 'ups_surepost_lightweight'
        | 'ups_surepost_media'
        | 'ups_express'
        | 'ups_express_1200'
        | 'ups_express_plus'
        | 'ups_expedited'
        | 'ups_express_early'
        | 'ups_access_point_economy'
        | (string & {});

    type ServiceLevels = USPSServiceLevel | UPSServiceLevel | FEDEXServiceLevel;

    type Country =
        | 'US'
        | 'AF'
        | 'AX'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BQ'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CW'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GG'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IM'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JE'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KR'
        | 'KP'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MK'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'ME'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'BL'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'MF'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'RS'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SX'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'SS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | (string & {});

    type DistanceUnit = 'cm' | 'in' | 'ft' | 'mm' | 'm' | 'yd' | (string & {});
    type MassUnit = 'g' | 'oz' | 'lb' | 'kg' | (string & {});

    interface ValidationError {
        source: string;
        code: string;
        type: string;
        text: string;
    }

    interface Metadata {
        object_created: string;
        object_updated: string;
        object_id: string;
        object_owner: string;
    }

    interface Message {
        code?: string;
        message: string;
    }

    // https://goshippo.com/docs/reference#addresses
    interface Address extends Metadata {
        name: string;
        company?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        street1: string;
        street_no?: string | undefined;
        street2?: string | undefined;
        street3?: string | undefined;
        city: string;
        state: string;
        zip?: string | undefined;
        country?: Country | undefined;
        is_residential?: boolean | undefined;
        validate?: boolean | undefined;
        metadata?: string | undefined;
        validation_results?:
            | {
                  is_valid?: boolean | undefined;
                  messages?: ValidationError[] | undefined;
              }
            | undefined;
    }

    interface CreateAddressRequest {
        name: string;
        company?: string | undefined;
        street1: string;
        street_no?: string | undefined;
        street2?: string | undefined;
        street3?: string | undefined;
        city: string;
        zip: string;
        state?: string | undefined;
        country: Country;
        phone?: string | undefined;
        email?: string | undefined;
        is_residential?: boolean | undefined;
        validate?: boolean | undefined;
        metadata?: string | undefined;
    }

    interface ParcelExtras {
        COD?:
            | {
                  amount?: string | undefined;
                  currency?: string | undefined;
                  payment_method?: 'SECURED_FUNDS' | 'CASH' | 'ANY' | undefined;
              }
            | undefined;
        insurance?:
            | {
                  amount?: string | undefined;
                  currency?: string | undefined;
                  provider?: 'FEDEX' | 'UPS' | undefined;
                  content?: string | undefined;
              }
            | undefined;
    }

    // https://goshippo.com/docs/reference#parcels
    interface Parcel extends Metadata {
        distance_unit: DistanceUnit;
        height: `${number}`;
        length: `${number}`;
        mass_unit: MassUnit;
        weight: `${number}`;
        width: `${number}`;
        template?: string | undefined;
        extra?: ParcelExtras | undefined;
        metadata?: string | undefined;
        test?: boolean | undefined;
    }

    interface CreateParcelRequest {
        length: `${number}`;
        width: `${number}`;
        height: `${number}`;
        distance_unit: DistanceUnit;
        weight: `${number}`;
        mass_unit: MassUnit;
        template?: string | undefined;
        extra?: Record<string, unknown> | undefined;
        metadata?: string | undefined;
    }

    // https://goshippo.com/docs/reference#shipments
    interface Shipment extends Metadata {
        status: 'WAITING' | 'QUEUED' | 'SUCCESS' | 'ERROR';
        address_from: Address | string;
        address_to: Address | string;
        address_return?: Address | string | undefined;
        shipment_date?: string | undefined;
        parcels: Parcel[];
        rates: Rate[];
        test?: boolean | undefined;
    }

    interface ShipmentExtras {
        signature_confirmation?: 'STANDARD' | 'ADULT' | 'CERTIFIED' | 'INDIRECT' | 'CARRIER_CONFIRMATION' | undefined;
        authority_to_leave?: boolean | undefined;
        saturday_delivery?: boolean | undefined;
        bypass_address_validation?: boolean | undefined;
        request_retail_rates?: boolean | undefined;
        customer_branch?: string | undefined;
        premium?: boolean | undefined;
    }

    type GetRequired<T, P extends Required<T> = Required<T>> = {
        [K in keyof T as T[K] extends P[K] ? K : never]: P[K];
    };

    interface CreateShipmentRequest {
        address_from: CreateAddressRequest | string;
        address_to: CreateAddressRequest | string;
        parcels: string | CreateParcelRequest | CreateParcelRequest[];
        shipment_date?: string | undefined;
        address_return?: CreateAddressRequest | string;
        customs_declaration?: CreateCustomsDeclarationRequest | undefined;
        extra?: ShipmentExtras | undefined;
        metadata?: string | undefined;
        async?: boolean | undefined;
    }

    interface ServiceLevel {
        name: string;
        token: ServiceLevels;
        terms: string;
        extended_token: string;
        parent_servicelevel?: {
            name: string;
            token: ServiceLevels;
            terms: string;
            extended_token: string;
        } | null;
    }

    // https://goshippo.com/docs/reference#rates
    interface Rate extends Metadata {
        attributes: Array<'CHEAPEST' | 'FASTEST' | 'BESTVALUE'>;
        amount_local: `${number}`;
        currency_local: string;
        amount: `${number}`;
        currency: string;
        provider: string;
        provider_image_75: string;
        provider_image_200: string;
        servicelevel: ServiceLevel;
        estimated_days: `${number}`;
        duration_terms: string;
        carrier_account: string;
        zone: string;
        messages: Message[];
        test: boolean;
    }

    interface CreateCustomsItemRequest {
        description: string;
        mass_unit: 'g' | 'oz' | 'lb' | 'kg' | (string & {});
        net_weight: number;
        origin_country: Country;
        quantity: number;
        value_amount: number;
        value_currency: string;
    }

    interface CreateCustomsDeclarationRequest {
        certify: boolean;
        certify_signer: string;
        contents_explanation?: string | undefined;
        contents_type:
            | 'DOCUMENTS'
            | 'GIFT'
            | 'SAMPLE'
            | 'MERCHANDISE'
            | 'HUMANITARIAN_DONATION'
            | 'RETURN_MERCHANDISE'
            | 'OTHER'
            | (string & {});
        eel_pfc?: 'NOEEI_30_37_a' | 'NOEEI_30_37_h' | 'NOEEI_30_36' | 'AES_ITN' | undefined;
        incoterm?: 'DDP' | 'DDU' | undefined;
        items: CreateCustomsItemRequest[];
        non_delivery_option: 'ABANDON' | 'RETURN' | (string & {});
    }

    // https://goshippo.com/docs/reference#carriers
    interface Carrier {
        object_id: string;
        object_owner: string;
        carrier: string;
        account_id: string;
        parameters?: Record<string, unknown>;
        test?: boolean;
        active: boolean;
        is_shippo_account: boolean;
        metadata: string;
    }

    interface Transaction extends Metadata {
        object_state: 'VALID' | 'INVALID';
        status: 'WAITING' | 'QUEUED' | 'SUCCESS' | 'ERROR' | 'REFUNDED' | 'REFUNDPENDING' | 'REFUNDREJECTED';
        rate: Rate;
        metadata: string;
        label_file_type:
            | 'PNG'
            | 'PNG_2.3x7.5'
            | 'PDF'
            | 'PDF_2.3x7.5'
            | 'PDF_4x6'
            | 'PDF_4x8'
            | 'PDF_A4'
            | 'PDF_A6'
            | 'ZPLII';
        test: boolean;
        tracking_number: string;
        tracking_status: 'UNKNOWN' | 'DELIVERED' | 'TRANSIT' | 'FAILURE' | 'RETURNED';
        tracking_url_provider: string;
        eta: string;
        label_url: string;
        commercial_invoice_url: string;
        messages: Message[];
        qr_code_url: string;
    }

    interface TransactionCreateInstantRequest {
        shipment: CreateShipmentRequest;
        carrier_account: string;
        servicelevel_token: ServiceLevels;
        metadata?: string;
        label_file_type?: 'PNG' | 'PDF' | 'PDF_4x6' | 'ZPLII' | (string & {});
    }

    interface TransactionCreateRateRequest {
        rate: string;
        metadata?: string;
        label_file_type?: 'PNG' | 'PDF' | 'PDF_4x6' | 'ZPLII' | (string & {});
        async?: boolean | undefined;
    }

    interface PaginatedList<T> {
        count: `${number}`;
        next: string | null;
        previous: string | null;
        results: T[];
    }

    interface PaginationArgs {
        results?: number | undefined;
        page?: number | undefined;
    }

    interface Shippo {
        shipment: {
            create: (request: CreateShipmentRequest) => Promise<Shipment>;
            retrieve(id: string): Promise<Shipment>;
            list(args?: PaginationArgs): Promise<PaginatedList<Shipment>>;
        };
        address: {
            create: (request: CreateAddressRequest) => Promise<Address>;
            validate: (id: string) => Promise<Address>;
            retrieve: (id: string) => Promise<Address>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<Address>>;
        };
        transaction: {
            create: (request: TransactionCreateInstantRequest | TransactionCreateRateRequest) => Promise<Transaction>;
            list(args?: PaginationArgs): Promise<PaginatedList<Transaction>>;
            retrieve: (id: string) => Promise<Transaction>;
        };
        carrieraccount: {
            list(args?: PaginationArgs): Promise<PaginatedList<Carrier>>;
            retrieve(carrierId: string): Promise<Carrier>;
        };
        rate: {
            retrieve(id: string): Promise<Rate>;
        };
        parcel: {
            create(parcel: CreateParcelRequest): Promise<Parcel>;
            retrieve(id: string): Promise<Parcel>;
            list(args?: PaginationArgs): Promise<PaginatedList<Parcel>>;
        };
    }
}

interface ShippoStatic {
    (token: string): Shippo.Shippo;
    new (token: string): Shippo.Shippo;
}

declare const shippo: ShippoStatic;
export = shippo;
export as namespace Shippo;
