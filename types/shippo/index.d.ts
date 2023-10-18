declare namespace Shippo {
    type USPSServiceLevel =
        | "usps_priority"
        | "usps_priority_express"
        | "usps_first"
        | "usps_parcel_select"
        | "usps_media_mail"
        | "usps_priority_mail_international"
        | "usps_priority_mail_express_international"
        | "usps_first_class_package_international_service"
        | (string & {});

    type FEDEXServiceLevel =
        | "fedex_ground"
        | "fedex_home_delivery"
        | "fedex_smart_post"
        | "fedex_2_day"
        | "fedex_2_day_am"
        | "fedex_express_saver"
        | "fedex_standard_overnight"
        | "fedex_priority_overnight"
        | "fedex_first_overnight"
        | "fedex_freight_priority"
        | "fedex_next_day_freight"
        | "fedex_freight_economy"
        | "fedex_first_freight"
        | "fedex_international_economy"
        | "fedex_international_priority"
        | "fedex_international_first"
        | "fedex_europe_first_international_priority"
        | "international_economy_freight"
        | "international_priority_freight"
        | (string & {});

    type UPSServiceLevel =
        | "ups_standard"
        | "ups_ground"
        | "ups_saver"
        | "ups_3_day_select"
        | "ups_second_day_air"
        | "ups_second_day_air_am"
        | "ups_next_day_air"
        | "ups_next_day_air_saver"
        | "ups_next_day_air_early_am"
        | "ups_mail_innovations_domestic"
        | "ups_surepost"
        | "ups_surepost_bound_printed_matter"
        | "ups_surepost_lightweight"
        | "ups_surepost_media"
        | "ups_express"
        | "ups_express_1200"
        | "ups_express_plus"
        | "ups_expedited"
        | "ups_express_early"
        | "ups_access_point_economy"
        | (string & {});

    type ServiceLevels = USPSServiceLevel | UPSServiceLevel | FEDEXServiceLevel;

    type Country =
        | "US"
        | "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KR"
        | "KP"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW"
        | (string & {});

    type DistanceUnit = "cm" | "in" | "ft" | "mm" | "m" | "yd" | (string & {});
    type MassUnit = "g" | "oz" | "lb" | "kg" | (string & {});

    type Carriers =
        | "fedex"
        | "ups"
        | "usps"
        | (string & {});

    type TrackingStatuses = "UNKNOWN" | "DELIVERED" | "PRE_TRANSIT" | "TRANSIT" | "FAILURE" | "RETURNED";

    type ObjectState = "VALID" | "INVALID";

    type LabelFileType =
        | "PNG"
        | "PNG_2.3x7.5"
        | "PDF"
        | "PDF_2.3x7.5"
        | "PDF_4x6"
        | "PDF_4x8"
        | "PDF_A4"
        | "PDF_A6"
        | "ZPLII";

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

    interface Asyncable {
        async?: boolean | undefined;
    }

    interface Message {
        code?: string;
        message: string;
    }

    interface Location {
        city: string;
        country: string;
        state: string;
        zip: string;
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
        is_complete?: boolean | undefined;
        validate?: boolean | undefined;
        metadata?: string | undefined;
        validation_results?:
            | Address.ValidationResults
            | undefined;
    }

    namespace Address {
        interface ValidationResults {
            is_valid?: boolean | undefined;
            messages?: ValidationError[] | undefined;
        }
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
        COD?: ParcelExtras.COD | undefined;
        insurance?: ParcelExtras.Insurance | undefined;
    }

    namespace ParcelExtras {
        interface COD {
            amount?: string | undefined;
            currency?: string | undefined;
            payment_method?: COD.PaymentMethod | undefined;
        }

        namespace COD {
            type PaymentMethod = "SECURED_FUNDS" | "CASH" | "ANY";
        }

        interface Insurance {
            amount?: string | undefined;
            currency?: string | undefined;
            provider?: Insurance.Provider | undefined;
            content?: string | undefined;
        }

        namespace Insurance {
            type Provider = "FEDEX" | "UPS";
        }
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
        status: Shipment.Status;
        address_from: Address | string;
        address_to: Address | string;
        address_return?: Address | string | undefined;
        shipment_date?: string | undefined;
        parcels: Parcel[];
        rates: Rate[];
        test?: boolean | undefined;
    }

    namespace Shipment {
        type Status = "WAITING" | "QUEUED" | "SUCCESS" | "ERROR";
    }

    interface ShipmentExtras {
        ancillary_endorsement?: ShipmentExtras.AncillaryEndorsement | undefined;
        authority_to_leave?: boolean | undefined;
        alcohol?: ShipmentExtras.Alcohol | undefined;
        billing?: ShipmentExtras.Billing | undefined;
        bypass_address_validation?: boolean | undefined;
        carbon_neutral?: boolean | undefined;
        carrier_hub_id?: string | undefined;
        carrier_hub_travel_time?: number | undefined;
        COD?: ShipmentExtras.COD | undefined;
        container_type?: string | undefined;
        critical_pull_time?: string | undefined;
        customer_branch?: string | undefined;
        dangerous_goods_code?: ShipmentExtras.DangerousGoodsCode | undefined;
        delivery_instructions?: string | undefined;
        dry_ice?: ShipmentExtras.DryIce | undefined;
        fulfillment_center?: string | undefined;
        insurance?: ShipmentExtras.Insurance | undefined;
        is_return?: boolean | undefined;
        lasership_attrs?: ShipmentExtras.LasershipAttrs | undefined;
        lasership_declared_value?: string | undefined;
        preferred_delivery_timeframe?: ShipmentExtras.PreferredDeliveryTimeframe | undefined;
        premium?: boolean | undefined;
        qr_code_requested?: boolean | undefined;
        reference_1?: string | undefined;
        reference_2?: string | undefined;
        request_retail_rates?: boolean | undefined;
        return_service_type?: ShipmentExtras.ReturnServiceType | undefined;
        saturday_delivery?: boolean | undefined;
        signature_confirmation?: ShipmentExtras.SignatureConfirmation | undefined;
    }

    namespace ShipmentExtras {
        type AncillaryEndorsement = "FORWARDING_SERVICE_REQUESTED" | "RETURN_SERVICE_REQUESTED";

        interface Alcohol {
            contains_alcohol: boolean;
            recipient_type: Alcohol.RecipientType;
        }

        namespace Alcohol {
            type RecipientType = "licensee" | "consumer"; // as per docs
        }

        interface Billing {
            account?: string | undefined;
            country?: Country | undefined;
            participation_code?: string | undefined;
            type?: Billing.Type | undefined;
            zip?: string | undefined;
        }

        namespace Billing {
            type Type = "SENDER" | "RECIPIENT" | "THIRD_PARTY" | "THIRD_PARTY_CONSIGNEE";
        }

        interface COD {
            amount?: string | undefined;
            currency?: string | undefined;
            payment_method?: COD.PaymentMethod | undefined;
        }

        namespace COD {
            type PaymentMethod = "SECURED_FUNDS" | "CASH" | "ANY";
        }

        type DangerousGoodsCode = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09";

        interface DryIce {
            contains_dry_ice: boolean;
            weight: string;
        }

        interface Insurance {
            amount?: string | undefined;
            content?: string | undefined;
            currency?: string | undefined;
            provider?: Insurance.Provider | undefined;
        }

        namespace Insurance {
            type Provider = "FEDEX" | "UPS" | "ONTRAC";
        }

        type LasershipAttrs =
            | "TwoPersonDelivery"
            | "Explosive"
            | "Alcohol"
            | "Hazmat"
            | "ControlledSubstance"
            | "Refrigerated"
            | "DryIce"
            | "Perishable"
            | "NoRTS";

        type PreferredDeliveryTimeframe = "10001200" | "12001400" | "14001600" | "16001800" | "18002000" | "19002100";

        type ReturnServiceType = "PRINT_AND_MAIL" | "ATTEMPT_1" | "ATTEMPT_3" | "ELECTRONIC_LABEL";

        type SignatureConfirmation = "STANDARD" | "ADULT" | "CERTIFIED" | "INDIRECT" | "CARRIER_CONFIRMATION";
    }

    type GetRequired<T, P extends Required<T> = Required<T>> = {
        [K in keyof T as T[K] extends P[K] ? K : never]: P[K];
    };

    interface CreateShipmentRequest extends Asyncable {
        address_from: CreateAddressRequest | string;
        address_to: CreateAddressRequest | string;
        parcels: string | CreateParcelRequest | CreateParcelRequest[];
        shipment_date?: string | undefined;
        address_return?: CreateAddressRequest | string;
        customs_declaration?: CreateCustomsDeclarationRequest | undefined;
        extra?: ShipmentExtras | undefined;
        metadata?: string | undefined;
    }

    interface ServiceLevel {
        name: string;
        token: ServiceLevels;
        terms: string;
        extended_token: string;
        parent_servicelevel:
            | {
                name: string;
                token: ServiceLevels;
                terms: string;
                extended_token: string;
            }
            | string
            | null;
    }

    // https://goshippo.com/docs/reference#rates
    interface Rate extends Metadata {
        attributes: Rate.Attribute[];
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

    namespace Rate {
        type Attribute = "CHEAPEST" | "FASTEST" | "BESTVALUE";
    }

    // https://goshippo.com/docs/reference#carriers
    interface Carrier {
        object_id: string;
        object_owner: string;
        carrier: Carriers;
        account_id: string;
        parameters?: Record<string, unknown>;
        test?: boolean;
        active: boolean;
        is_shippo_account: boolean;
        metadata: string;
    }

    interface Transaction extends Metadata {
        object_state: ObjectState;
        status: Transaction.Status;
        rate: Rate;
        metadata: string;
        label_file_type: LabelFileType;
        test: boolean;
        tracking_number: string;
        tracking_status: TrackingStatuses;
        tracking_url_provider: string;
        eta: string;
        label_url: string;
        commercial_invoice_url: string;
        messages: Message[];
        qr_code_url: string;
    }

    namespace Transaction {
        type Status = "WAITING" | "QUEUED" | "SUCCESS" | "ERROR" | "REFUNDED" | "REFUNDPENDING" | "REFUNDREJECTED";
    }

    interface TransactionCreateInstantRequest {
        shipment: CreateShipmentRequest;
        carrier_account: string;
        servicelevel_token: ServiceLevels;
        metadata?: string;
        label_file_type?: LabelFileType | undefined;
    }

    interface TransactionCreateRateRequest extends Asyncable {
        rate: string;
        metadata?: string;
        label_file_type?: LabelFileType | undefined;
    }

    interface TrackingStatus extends Omit<Metadata, "object_owner"> {
        location: Location;
        status: TrackingStatuses;
        status_date: string;
        status_details: string;
    }

    interface Track {
        address_from: Location;
        address_to: Location;
        carrier: Carriers;
        eta: string;
        messages: string[];
        metadata?: string | undefined;
        original_eta: string;
        servicelevel: ServiceLevel;
        tracking_history: TrackingStatus[];
        tracking_number: string;
        tracking_status: TrackingStatus;
        transaction: string;
    }

    interface RegisterTrackRequest {
        carrier: Carriers;
        metadata?: string | undefined;
        tracking_number: string;
    }

    interface CustomsItem extends Metadata {
        description: string;
        eccn_ear99?: string | undefined;
        mass_unit: MassUnit;
        metadata?: string | undefined;
        net_weight: `${number}`;
        origin_country: Country;
        quantity: number;
        sku_code?: string | undefined;
        tariff_number?: string | undefined;
        value_amount: `${number}`;
        value_currency: string;
        object_state: ObjectState;
        test?: boolean | undefined;
    }

    interface CreateCustomsItemRequest {
        description: string;
        eccn_ear99?: string | undefined;
        mass_unit: MassUnit;
        metadata?: string | undefined;
        net_weight: `${number}`;
        origin_country: Country;
        quantity: number;
        sku_code?: string | undefined;
        tarrif_number?: string | undefined;
        value_amount: `${number}`;
        value_currency: string;
    }

    interface CustomsDeclaration extends Metadata {
        aes_itn?: string | undefined;
        b13a_filing_option?: CustomsDeclaration.B13aFilingOption | undefined;
        b13a_number?: string | undefined;
        certficate?: string | undefined;
        certify: boolean;
        certify_signer: string;
        commercial_invoice?: string | undefined;
        contents_explanation?: string | undefined;
        contents_type: CustomsDeclaration.ContentsType;
        disclaimer?: string | undefined;
        eel_pfc?: CustomsDeclaration.EelPfc | undefined;
        exporter_reference?: string | undefined;
        importer_reference?: string | undefined;
        is_vat_collected?: string | null | undefined; // per docs, this could be 'any'
        invoice?: string | undefined;
        invoiced_charges?: CustomsInvoicedCharges | undefined;
        items: string[];
        license?: string | undefined;
        metadata?: string | undefined;
        non_delivery_option: CustomsDeclaration.NonDeliveryOption;
        notes?: string | undefined;
        exporter_identification?: CustomsExporterIdentification | undefined;
        tax_id?: CustomsTaxIdentification | undefined;
        object_state: ObjectState;
        test?: boolean | undefined;
    }

    namespace CustomsDeclaration {
        type B13aFilingOption = "FILED_ELECTRONICALLY" | "SUMMARY_REPORTING" | "NOT_REQUIRED";

        type ContentsType =
            | "DOCUMENTS"
            | "GIFT"
            | "SAMPLE"
            | "MERCHANDISE"
            | "HUMANITARIAN_DONATION"
            | "RETURN_MERCHANDISE"
            | "OTHER"
            | (string & {});

        type EelPfc = "NOEEI_30_37_a" | "NOEEI_30_37_h" | "NOEEI_30_37_f" | "NOEEI_30_36" | "AES_ITN";

        type NonDeliveryOption = "ABANDON" | "RETURN" | (string & {});
    }

    interface CustomsInvoicedCharges {
        currency: string;
        total_shipping?: `${number}` | undefined;
        total_taxes?: `${number}` | undefined;
        total_duties?: `${number}` | undefined;
        other_fees?: `${number}` | undefined;
    }

    interface CustomsExporterIdentification {
        eori_number?: string | undefined;
        tax_id?: CustomsTaxIdentification | undefined;
    }

    interface CustomsTaxIdentification {
        number?: string | undefined;
        type?: CustomsTaxIdentification | undefined;
    }

    namespace CustomsTaxIdentification {
        type Type = "EIN" | "VAT" | "IOSS" | "ARN" | (string & {});
    }

    interface CreateCustomsDeclarationRequest {
        aes_itn?: string | undefined;
        b13a_filing_option?: CustomsDeclaration.B13aFilingOption | undefined;
        b13a_number?: string | undefined;
        certficate?: string | undefined;
        certify: boolean;
        certify_signer: string;
        commercial_invoice?: string | undefined;
        contents_explanation?: string | undefined;
        contents_type: CustomsDeclaration.ContentsType;
        disclaimer?: string | undefined;
        eel_pfc?: CustomsDeclaration.EelPfc | undefined;
        exporter_reference?: string | undefined;
        importer_reference?: string | undefined;
        is_vat_collected?: string | null | undefined; // per docs, this could be 'any'
        invoice?: string | undefined;
        invoiced_charges?: CustomsInvoicedCharges | undefined;
        items: CreateCustomsItemRequest[];
        license?: string | undefined;
        metadata?: string | undefined;
        non_delivery_option: CustomsDeclaration.NonDeliveryOption;
        notes?: string | undefined;
        test?: boolean | undefined;
    }

    interface Refund extends Metadata {
        status?: Refund.Status | undefined;
        test?: boolean | undefined;
        transaction?: string | undefined;
    }

    namespace Refund {
        type Status = "QUEUED" | "PENDING" | "SUCCESS" | "ERROR";
    }

    interface CreateRefundRequest extends Asyncable {
        transaction: string;
    }

    interface Manifest extends Metadata {
        carrier_account: string;
        shipment_date: string;
        transactions?: string[] | undefined;
        address_from: string;
        documents: string[];
        errors?: string[] | undefined;
        status: Manifest.Status;
    }

    namespace Manifest {
        type Status = "QUEUED" | "SUCCESS" | "ERROR";
    }

    interface CreateManifestRequest extends Asyncable {
        carrier_account: string;
        shipment_date: string;
        transactions?: string[] | undefined;
        address_from: CreateAddressRequest | string;
    }

    interface Batch extends Metadata {
        default_carrier_account: string;
        default_servicelevel_token: string;
        label_filetype?: LabelFileType | undefined;
        metadata?: string | undefined;
        batch_shipments: Batch.ShipmentListWrapper;
        label_url: string;
        object_results: Batch.ObjectResults;
        status: Batch.Status;
        test?: boolean | undefined;
    }

    namespace Batch {
        type Status = "VALIDATING" | "VALID" | "INVALID" | "PURCHASING" | "PURCHASED";

        interface ShipmentListWrapper {
            next?: string | undefined;
            previous?: string | undefined;
            results?: Shipment[] | undefined;
        }

        interface Shipment {
            carrier_account?: string | undefined;
            metadata?: string | undefined;
            servicelevel_token?: string | undefined;
            shipment: string;
            messages?: ErrorMessage[] | undefined;
            object_id: string;
            status: Shipment.Status;
            transaction?: string | undefined;
        }

        namespace Shipment {
            type Status = "INVALID" | "VALID" | "INCOMPLETE" | "TRANSACTION_FAILED";
        }

        interface ErrorMessage {
            shipment?: string[] | undefined;
        }

        interface ObjectResults {
            creation_succeeded: number;
            creation_failed: number;
            purchase_succeeded: number;
            purchase_failed: number;
        }

        type ObjectResult = "creation_succeeded" | "creation_failed" | "purchase_succeeded" | "purchase_failed";
    }

    interface CreateBatchRequest {
        default_carrier_account: string;
        default_servicelevel_token: string;
        label_filetype?: LabelFileType | undefined;
        metadata?: string | undefined;
        batch_shipments: BatchShipmentCreateRequest[];
    }

    interface BatchShipmentCreateRequest {
        carrier_account?: string | undefined;
        metadata?: string | undefined;
        servicelevel_token?: string | undefined;
        shipment: CreateShipmentRequest | string;
    }

    type BatchAddShipmentsRequest = BatchShipmentCreateRequest[];

    type BatchRemoveShipmentsRequest = string[];

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
        address: {
            create: (request: CreateAddressRequest) => Promise<Address>;
            validate: (id: string) => Promise<Address>;
            retrieve: (id: string) => Promise<Address>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<Address>>;
        };
        parcel: {
            create: (parcel: CreateParcelRequest) => Promise<Parcel>;
            retrieve: (id: string) => Promise<Parcel>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<Parcel>>;
        };
        shipment: {
            create: (request: CreateShipmentRequest) => Promise<Shipment>;
            retrieve: (id: string) => Promise<Shipment>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<Shipment>>;
        };
        transaction: {
            create: (request: TransactionCreateInstantRequest | TransactionCreateRateRequest) => Promise<Transaction>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<Transaction>>;
            retrieve: (id: string) => Promise<Transaction>;
        };
        customsitem: {
            create: (request: CreateCustomsItemRequest) => Promise<CustomsItem>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<CustomsItem>>;
            retrieve: (id: string) => Promise<CustomsItem>;
        };
        customsdeclaration: {
            create: (request: CreateCustomsDeclarationRequest) => Promise<CustomsDeclaration>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<CustomsDeclaration>>;
            retrieve: (id: string) => Promise<CustomsDeclaration>;
        };
        carrieraccount: {
            list: (args?: PaginationArgs) => Promise<PaginatedList<Carrier>>;
            retrieve: (carrierId: string) => Promise<Carrier>;
        };
        manifest: {
            create: (request: CreateManifestRequest) => Promise<Manifest>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<Manifest>>;
            retrieve: (id: string) => Promise<Manifest>;
        };
        refund: {
            create: (request: CreateRefundRequest) => Promise<Refund>;
            list: (args?: PaginationArgs) => Promise<PaginatedList<Refund>>;
            retrieve: (id: string) => Promise<Refund>;
        };
        rate: {
            retrieve: (id: string) => Promise<Rate>;
        };
        batch: {
            create: (request: CreateBatchRequest) => Promise<Batch>;
            retrieve: (id: string, page?: number, filter?: Batch.ObjectResult) => Promise<Batch>;
            add: (id: string, request: BatchAddShipmentsRequest) => Promise<Batch>;
            remove: (id: string, request: BatchRemoveShipmentsRequest) => Promise<Batch>;
            purchase: (id: string) => Promise<Batch>;
        };
        track: {
            create: (request: RegisterTrackRequest) => Promise<Track>;
            get_status: (carrier: Carriers, trackingNumber: string) => Promise<Track>;
        };
    }
}

interface ShippoStatic {
    (token: string): Shippo.Shippo;
    new(token: string): Shippo.Shippo;
}

declare const Shippo: ShippoStatic;
export = Shippo;
export as namespace Shippo;
