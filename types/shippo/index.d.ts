// Type definitions for shippo 1.6
// Project: https://github.com/goshippo/shippo-node-client
// Definitions by: Eric Johnson <https://github.com/ejhnsn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Shippo {
    interface ShippoObject {
        object_created: string;
        object_id: string;
        object_owner: string;
        test: boolean;
    }

    interface MutableShippoObject extends ShippoObject {
        object_updated: string;
    }

    // https://goshippo.com/docs/reference#addresses-create
    interface CreateAddressRequest {
        name?: string;
        company?: string;
        street1?: string;
        street_no?: string;
        street2?: string;
        street3?: string;
        city?: string;
        zip?: string;
        state?: string;
        country: string;
        phone?: string;
        email?: string;
        is_residential?: boolean;
        validate?: boolean;
        metadata?: string;
    }

    // https://goshippo.com/docs/reference#addresses
    interface Address extends Omit<CreateAddressRequest, 'validate'>, MutableShippoObject {
        is_complete: boolean;
        validation_results?: {
            is_valid?: boolean;
            messages?: Array<{
                source: string;
                code: string;
                type: string;
                text: string;
            }>;
        };
    }

    // https://goshippo.com/docs/reference#batches-create
    interface CreateBatchRequest {
        batch_shipments: CreateBatchShipmentRequest[];
        default_carrier_account: CarrierAccount['object_id'];
        default_servicelevel_token: ServiceLevel;
        label_filetype?: 'PNG' | 'PNG_2.3x7.5' | 'PDF' | 'PDF_2.3x7.5' | 'PDF_4x6' | 'PDF_4x8' | 'PDF_A4' | 'PDF_A6' | 'ZPLII';
        metadata?: string;
    }

    // https://goshippo.com/docs/reference#batches
    interface Batch extends Omit<CreateBatchRequest, 'batch_shipments'>, MutableShippoObject {
        batch_shipments: {
            next: string;
            previous: string;
            results: Shipment[];
        };
        label_url: string[];
        object_results: {
            creation_succeeded: number;
            creation_failed: number;
            purchase_succeeded: number;
            purchase_failed: number;
        };
        status: 'VALIDATING' | 'VALID' | 'INVALID' | 'PURCHASING' | 'PURCHASED';
    }

    interface CreateBatchShipmentRequest {
        carrier_account?: CarrierAccount['object_id'];
        metadata?: string;
        servicelevel_token?: ServiceLevel;
        shipment: Shipment['object_id'] | CreateShipmentRequest;
    }

    // https://goshippo.com/docs/reference#batches-batch-shipments
    interface BatchShipment extends CreateBatchShipmentRequest, Pick<ShippoObject, 'object_id'> {
        message: any[];
        shipment: Shipment['object_id'];
        status: 'INVALID' | 'VALID' | 'INCOMPLETE' | 'TRANSACTION_FAILED';
        transaction: Transaction['object_id'];
    }

    // https://goshippo.com/docs/reference#carrier-accounts-create
    interface CreateCarrierAccountRequest {
        carrier: Carrier;
        account_id: string;
        parameters: Record<string, any>;
        active?: boolean;
    }

    interface CarrierAccount extends CreateCarrierAccountRequest, Omit<ShippoObject, 'object_created'> {
        is_shippo_account: boolean;
    }

    // https://goshippo.com/docs/reference#customs-items-create
    interface CreateCustomsItemRequest {
        description: string;
        eccn_ear99?: string;
        mass_unit: 'g' | 'oz' | 'lb' | 'kg';
        metadata?: string;
        net_weight: number | string;
        origin_country: string;
        quantity: number | string;
        sku_code?: string;
        tariff_number?: string;
        value_amount: number | string;
        value_currency: string;
    }

    // https://goshippo.com/docs/reference#customs-items
    interface CustomsItem extends CreateCustomsItemRequest, MutableShippoObject {
        net_weight: string;
        object_state: 'VALID' | 'INVALID';
        quantity: string;
        value_amount: string;
    }

    // https://goshippo.com/docs/reference#customs-declarations-create
    interface CreateCustomsDeclarationRequest {
        aes_itn?: string;
        b13a_filing_option?: 'FILED_ELECTRONICALLY' | 'SUMMARY_REPORTING' | 'NOT_REQUIRED';
        b13a_number?: string;
        certificate?: string;
        certify: boolean;
        certify_signer: string;
        contents_explanation?: string;
        contents_type:
            | 'DOCUMENTS'
            | 'GIFT'
            | 'SAMPLE'
            | 'MERCHANDISE'
            | 'HUMANITARIAN_DONATION'
            | 'RETURN_MERCHANDISE'
            | 'OTHER';
        eel_pfc?: 'NOEEI_30_37_a' | 'NOEEI_30_37_h' | 'NOEEI_30_37_f' | 'NOEEI_30_36' | 'AES_ITN';
        exporter_identification?: ExporterIdentification;
        exporter_reference?: string;
        importer_reference?: string;
        incoterm?: 'DDP' | 'DDU' | 'FCA';
        invoice?: string;
        invoiced_charges?: CreateInvoicedChargesRequest;
        items: CreateCustomsItemRequest[];
        license?: string;
        metadata?: string;
        non_delivery_option: 'ABANDON' | 'RETURN';
        notes?: string;
    }

    // https://goshippo.com/docs/reference#customs-declarations
    interface CustomsDeclaration extends Omit<CreateCustomsDeclarationRequest, 'items'>, MutableShippoObject {
        disclaimer: string;
        invoiced_charges: InvoicedCharges;
        items: Array<CustomsItem['object_id']>;
        object_state: 'VALID' | 'INVALID';
    }

    // https://goshippo.com/docs/reference#manifests-create
    interface CreateManifestRequest {
        address_from?: Address['object_id'] | CreateAddressRequest;
        async?: boolean;
        carrier_account: CarrierAccount['object_id'];
        shipment_date: Date | string;
        transactions?: Array<Transaction['object_id']>;
    }

    // https://goshippo.com/docs/reference#manifests
    interface Manifest extends CreateManifestRequest, MutableShippoObject {
        documents: string[];
        errors: ManifestError[];
        shipment_date: string;
        status: 'QUEUED' | 'SUCCESS' | 'ERROR';
    }

    // https://goshippo.com/docs/reference#orders-create
    interface CreateOrderRequest {
        currency?: string;
        from_address?: Address['object_id'] | CreateAddressRequest;
        line_items?: CreateLineItemRequest[];
        notes?: string;
        order_number?: string;
        order_status?: 'UNKNOWN' | 'AWAITPAY' | 'PAID' | 'REFUNDED' | 'CANCELLED' | 'PARTIALLY_FULFILLED' | 'SHIPPED';
        placed_at: Date | string;
        shipping_cost?: number | string;
        shipping_cost_currency?: string;
        shipping_method?: string;
        to_address: Address['object_id'] | CreateAddressRequest;
        total_price?: number | string;
        total_tax?: number | string;
        weight: number | string;
        weight_unit: 'g' | 'oz' | 'lb' | 'kg';
    }

    // https://goshippo.com/docs/reference#orders
    interface Order extends CreateOrderRequest, Omit<ShippoObject, 'object_created'> {
        from_address?: Address;
        line_items: LineItem[];
        placed_at: string;
        shipping_cost?: string;
        shop_app:
            'Amazon' |
            'Bigcommerce' |
            'CSV_Import' |
            'eBay' |
            'ePages' |
            'Etsy' |
            'Godaddy' |
            'Magento' |
            'Shippo' |
            'Shopify' |
            'Spreecommerce' |
            'StripeRelay' |
            'Weebly' |
            'WooCommerce';
        to_address: Address;
        total_price?: string;
        total_tax?: string;
        weight: string;
    }

    // https://goshippo.com/docs/reference#parcels-create
    interface CreateParcelRequest {
        distance_unit: 'cm' | 'in' | 'ft' | 'mm' | 'm' | 'yd';
        extra?: ParcelExtra;
        height: number | string;
        length: number | string;
        mass_unit: 'g' | 'oz' | 'lb' | 'kg';
        metadata?: string;
        template?: ParcelTemplate;
        weight: number | string;
        width: number | string;
    }

    // https://goshippo.com/docs/reference#parcels
    interface Parcel extends CreateParcelRequest, MutableShippoObject {
        height: string;
        length: string;
        object_state: 'VALID';
        weight: string;
        width: string;
    }

    // https://goshippo.com/docs/reference#rates
    interface Rate extends ShippoObject {
        amount: string;
        amount_local: string;
        arrives_by: string;
        attributes: Array<'CHEAPEST' | 'FASTEST' | 'BESTVALUE'>;
        carrier_account: CarrierAccount['object_id'];
        currency: string;
        currency_local: string;
        duration_terms: string;
        estimated_days: number;
        messages: Message[];
        provider: string;
        provider_image_75: string;
        provider_image_200: string;
        servicelevel: {
            name: string;
            terms: string;
            token: string;
        };
        shipment: Shipment['object_id'];
        zone: string;
    }

    // https://goshippo.com/docs/reference#refunds-create
    interface CreateRefundRequest {
        async?: boolean;
        transaction: Transaction['object_id'];
    }

    // https://goshippo.com/docs/reference#refunds
    interface Refund extends Omit<CreateRefundRequest, 'async'>, MutableShippoObject {
        status: 'QUEUED' | 'PENDING' | 'SUCCESS' | 'ERROR';
    }

    // https://goshippo.com/docs/reference#shipments-create
    interface CreateShipmentRequest {
        address_from: Address['object_id'] | CreateAddressRequest;
        address_return?: Address['object_id'] | CreateAddressRequest;
        address_to: Address['object_id'] | CreateAddressRequest;
        alternate_address_to?: Address['object_id'] | CreateAddressRequest;
        async?: boolean;
        carrier_accounts?: Array<CarrierAccount['object_id']>;
        customs_declaration?: CustomsDeclaration['object_id'] | CreateCustomsDeclarationRequest;
        extra?: ShipmentExtra;
        metadata?: string;
        parcels: Parcel['object_id'] | CreateParcelRequest | CreateParcelRequest[];
        shipment_date?: Date | string;
    }

    // https://goshippo.com/docs/reference#shipments
    interface Shipment extends Omit<CreateShipmentRequest, 'async' | 'customs_declaration'>, MutableShippoObject {
        address_from: Address;
        address_return?: Address;
        address_to: Address;
        alternate_address_to?: Address;
        customs_declaration: CustomsDeclaration;
        extra: ShipmentExtra;
        order: Order['object_id'];
        parcels: Parcel[];
        rates: Rate[];
        messages: Message[];
        shipment_date: string;
        status: 'WAITING' | 'QUEUED' | 'SUCCESS' | 'ERROR';
    }

    interface CreateTransactionRequest {
        label_file_type?: 'PNG' | 'PNG_2.3x7.5' | 'PDF' | 'PDF_2.3x7.5' | 'PDF_4x6' | 'PDF_4x8' | 'PDF_A4' | 'PDF_A6' | 'ZPLII';
        metadata?: string;
    }

    // https://goshippo.com/docs/reference#transactions-create
    interface CreateTransactionFromRateRequest extends CreateTransactionRequest {
        async?: boolean;
        rate: Rate['object_id'];
    }

    // https://goshippo.com/docs/reference#transactions-create
    interface CreateTransactionFromShipmentRequest extends CreateTransactionRequest {
        carrier_account: CarrierAccount['object_id'];
        servicelevel_token: ServiceLevel;
        shipment: Omit<CreateShipmentRequest, 'async' | 'carrier_accounts'>;
    }

    // https://goshippo.com/docs/reference#transactions
    interface Transaction extends CreateTransactionRequest, MutableShippoObject {
        commercial_invoice_url: string;
        eta: string;
        label_url: string;
        messages: Message[];
        object_state: 'VALID' | 'INVALID';
        qr_code_url: string;
        rate: Rate['object_id'];
        status: 'WAITING' | 'QUEUED' | 'SUCCESS' | 'ERROR' | 'REFUNDED' | 'REFUNDPENDING' | 'REFUNDREJECTED';
        tracking_number: string;
        tracking_status: 'UNKNOWN' | 'DELIVERED' | 'TRANSIT' | 'FAILURE' | 'RETURNED';
        tracking_url_provider: string;
    }

    interface CreateInvoicedChargesRequest {
        currency: string;
        other_fees?: number | string;
        total_duties?: number | string;
        total_shipping?: number | string;
        total_taxes?: number | string;
    }

    // https://goshippo.com/docs/reference#invoiced-charges
    interface InvoicedCharges extends CreateInvoicedChargesRequest {
        other_fees: string;
        total_duties: string;
        total_shipping: string;
        total_taxes: string;
    }

    // https://goshippo.com/docs/reference#exporter-identification
    interface ExporterIdentification {
        eori_number?: string;
        tax_id?: TaxIdentification;
    }

    // https://goshippo.com/docs/reference#tax-identification
    interface TaxIdentification {
        number: string;
        type: 'EIN' | 'VAT';
    }

    // https://goshippo.com/docs/reference#manifests-errors
    interface ManifestError {
        code:
            'generic_carrier_error' |
            'carrier_account_invalid_credentials' |
            'carrier_account_access_denied' |
            'manifest_invalid_transactions' |
            'manifest_no_transactions' |
            'address_from_missing_zip' |
            'address_from_invalid_zip1' |
            'address_from_invalid_zip2' |
            'address_from_missing_city' |
            'address_from_invalid_city' |
            'address_from_missing_state' |
            'address_from_invalid_state' |
            'address_from_missing_name' |
            'shipment_date_missing' |
            'shipment_date_invalid';
        message: string;
    }

    interface CreateLineItemRequest {
        currency?: string;
        manufacture_country?: string;
        max_delivery_time?: Date | string;
        max_ship_time?: Date | string;
        quantity?: number | string;
        sku?: string;
        title: string;
        total_price?: number | string;
        variant_title?: string;
        weight?: number | string;
        weight_unit?: 'g' | 'oz' | 'lb' | 'kg';
    }

    // https://goshippo.com/docs/reference#orders-line-item
    interface LineItem extends CreateLineItemRequest, Pick<ShippoObject, 'object_id'> {
        max_delivery_time?: string;
        max_ship_time?: string;
        quantity?: number;
        total_price?: string;
        weight?: string;
    }

    // https://goshippo.com/docs/reference#parcels-extras
    interface ParcelExtra {
        COD?: COD;
        insurance?: Insurance;
    }

    // https://goshippo.com/docs/reference#shipments-extras
    interface ShipmentExtra {
        alcohol?: {
            contains_alcohol: boolean;
            recipient_type?: 'licensee' | 'consumer';
        };
        ancillary_endorsement?: 'FORWARDING_SERVICE_REQUESTED' | 'RETURN_SERVICE_REQUESTED';
        authority_to_leave?: boolean;
        billing?: {
            account: string;
            country: string;
            participation_code: string;
            type: 'SENDER' | 'RECIPIENT' | 'THIRD_PARTY' | 'THIRD_PARTY_CONSIGNEE';
            zip: string;
        };
        bypass_address_validation?: boolean;
        COD?: COD;
        container_type?: 'Box' | 'Tube' | 'Pak' | 'Envelope' | 'CustomPackaging';
        customer_branch?: string;
        dangerous_goods_code?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09';
        dry_ice?: {
            contains_dry_ice: boolean;
            weight: number;
        };
        is_return?: boolean;
        lasership_attrs?: Array<'TwoPersonDelivery' | 'Explosive' | 'Alcohol' | 'Hazmat' | 'ControlledSubstance' | 'Refrigerated' | 'DryIce' | 'Perishable'>;
        lasership_declared_value?: string;
        insurance?: Insurance;
        preferred_delivery_timeframe?: '10001200' | '12001400' | '14001600' | '16001800' | '18002000' | '19002100';
        premium?: boolean;
        qr_code_requested?: boolean;
        reference_1?: string;
        reference_2?: string;
        request_retail_rates?: boolean;
        return_service_type?: 'PRINT_AND_MAIL' | 'ATTEMPT_1' | 'ATTEMPT_3' | 'ELECTRONIC_LABEL';
        saturday_delivery?: boolean;
        signature_confirmation?: 'STANDARD' | 'ADULT' | 'CERTIFIED' | 'INDIRECT' | 'CARRIER_CONFIRMATION';
    }

    interface COD {
        amount: string;
        currency: string;
        payment_method: 'SECURED_FUNDS' | 'CASH' | 'ANY';
    }

    interface Insurance {
        amount: number;
        content: string;
        currency: string;
        provider: 'FEDEX' | 'UPS' | 'ONTRAC';
    }

    interface Message {
        source: string;
        code: string;
        message: string;
    }

    interface PaginatedResult<T> {
        next: string;
        previous: string;
        results: T[];
    }

    interface Shippo {
        address: {
            create: (request: CreateAddressRequest) => Promise<Address>;
            retrieve: (id: Address['object_id']) => Promise<Address>;
            validate: (id: Address['object_id']) => Promise<Address>;
            list: () => Promise<PaginatedResult<Address>>;
        };
        batch: {
            create: (request: CreateBatchRequest) => Promise<Batch>;
            retrieve: (id: Batch['object_id']) => Promise<Batch>;
            add: (id: Batch['object_id'], batchShipments: CreateBatchShipmentRequest[]) => Promise<Batch>;
            remove: (id: Batch['object_id'], batchShipments: Array<BatchShipment['object_id']>) => Promise<Batch>;
            purchase: (id: Batch['object_id']) => Promise<Batch>;
        };
        carrieraccount: {
            create: (request: CreateCarrierAccountRequest) => Promise<CarrierAccount>;
            retrieve: (id: CarrierAccount['object_id']) => Promise<CarrierAccount>;
            list: () => Promise<PaginatedResult<CarrierAccount>>;
            update: (id: CarrierAccount['object_id'], account: Partial<CarrierAccount>) => Promise<CarrierAccount>;
        };
        customsdeclaration: {
            create: (request: CreateCustomsDeclarationRequest) => Promise<CustomsDeclaration>;
            retrieve: (id: CustomsDeclaration['object_id']) => Promise<CustomsDeclaration>;
            list: () => Promise<PaginatedResult<CustomsDeclaration>>;
        };
        customsitem: {
            create: (request: CreateCustomsItemRequest) => Promise<CustomsItem>;
            retrieve: (id: CustomsItem['object_id']) => Promise<CustomsItem>;
            list: () => Promise<PaginatedResult<CustomsItem>>;
        };
        manifest: {
            create: (request: CreateManifestRequest) => Promise<Manifest>;
            retrieve: (id: Manifest['object_id']) => Promise<Manifest>;
            list: () => Promise<PaginatedResult<Manifest>>;
        };
        order: {
            create: (request: CreateOrderRequest) => Promise<Order>;
            retrieve: (id: Order['object_id']) => Promise<Order>;
            list: () => Promise<PaginatedResult<Order>>;
        };
        parcel: {
            create: (request: CreateParcelRequest) => Promise<Parcel>;
            retrieve: (id: Parcel['object_id']) => Promise<Parcel>;
            list: () => Promise<PaginatedResult<Parcel>>;
        };
        refund: {
            create: (request: CreateRefundRequest) => Promise<Refund>;
            retrieve: (id: Refund['object_id']) => Promise<Refund>;
            list: () => Promise<PaginatedResult<Refund>>;
        };
        shipment: {
            create: (request: CreateShipmentRequest) => Promise<Shipment>;
            retrieve: (id: Shipment['object_id']) => Promise<Shipment>;
            list: () => Promise<PaginatedResult<Shipment>>;
            rates: (id: Shipment['object_id']) => Promise<PaginatedResult<Rate> & { count: number; }>;
        };
        transaction: {
            create: (request: CreateTransactionFromRateRequest | CreateTransactionFromShipmentRequest) => Promise<Transaction>;
            retrieve: (id: Transaction['object_id']) => Promise<Transaction>;
            list: () => Promise<PaginatedResult<Transaction>>;
        };
    }

    // https://goshippo.com/docs/reference#carriers
    type Carrier =
        'apc_postal' |
        'aramex' |
        'asendia_us' |
        'australia_post' |
        'axlehire' |
        'borderguru' |
        'boxberry' |
        'bring' |
        'canada_post' |
        'cdl' |
        'collect_plus' |
        'correios_br' |
        'correos_espana' |
        'couriersplease' |
        'deutsche_post' |
        'dhl_benelux' |
        'dhl_ecommerce' |
        'dhl_express' |
        'dhl_germany_c2c' |
        'dhl_germany' |
        'dpd_germany' |
        'dpd' |
        'dpd_uk' |
        'estafeta' |
        'fastway_australia' |
        'fedex' |
        'globegistics' |
        'gls_deutschland' |
        'gls_france' |
        'gls_us' |
        'gophr' |
        'gso' |
        'hermes_germany_b2c' |
        'hermes_uk' |
        'hongkong_post' |
        'lasership' |
        'lso' |
        'mondial_relay' |
        'newgistics' |
        'new_zealand_post' |
        'nippon_express' |
        'ontrac' |
        'orangeds' |
        'parcelforce' |
        'parcel' |
        'passport' |
        'pcf' |
        'posti' |
        'purolator' |
        'royal_mail' |
        'rr_donnelley' |
        'russian_post' |
        'sendle' |
        'skypostal' |
        'stuart' |
        'ups' |
        'usps' |
        'yodel';

    // https://goshippo.com/docs/reference#servicelevels
    type ServiceLevel =
        'usps_priority' |
        'usps_priority_express' |
        'usps_first' |
        'usps_parcel_select' |
        'usps_media_mail' |
        'usps_priority_mail_international' |
        'usps_priority_mail_express_international' |
        'usps_first_class_package_international_service' |
        'fedex_ground' |
        'fedex_home_delivery' |
        'fedex_smart_post' |
        'fedex_2_day' |
        'fedex_2_day_am' |
        'fedex_express_saver' |
        'fedex_standard_overnight' |
        'fedex_priority_overnight' |
        'fedex_first_overnight' |
        'fedex_freight_priority' |
        'fedex_next_day_freight' |
        'fedex_freight_economy' |
        'fedex_first_freight' |
        'fedex_international_economy' |
        'fedex_international_priority' |
        'fedex_international_first' |
        'fedex_europe_first_international_priority' |
        'international_economy_freight' |
        'international_priority_freight' |
        'ups_standard' |
        'ups_ground' |
        'ups_saver' |
        'ups_3_day_select' |
        'ups_second_day_air' |
        'ups_second_day_air_am' |
        'ups_next_day_air' |
        'ups_next_day_air_saver' |
        'ups_next_day_air_early_am' |
        'ups_mail_innovations_domestic' |
        'ups_surepost' |
        'ups_surepost_bound_printed_matter' |
        'ups_surepost_lightweight' |
        'ups_surepost_media' |
        'ups_express' |
        'ups_express_1200' |
        'ups_express_plus' |
        'ups_expedited' |
        'apc_postal_parcelconnect_expedited' |
        'apc_postal_parcelconnect_priority' |
        'apc_postal_parcelconnect_priority_delcon' |
        'apc_postal_parcelconnect_priority_pqw' |
        'apc_postal_parcelconnect_book_service' |
        'apc_postal_parcelconnect_standard' |
        'apc_postal_parcelconnect_epmi' |
        'apc_postal_parcelconnect_epacket' |
        'apc_postal_parcelconnect_epmei' |
        'asendia_us_priority_tracked' |
        'asendia_us_international_express' |
        'asendia_us_international_priority_airmail' |
        'asendia_us_international_surface_airlift' |
        'asendia_us_priority_mail_international' |
        'asendia_us_priority_mail_express_international' |
        'asendia_us_epacket' |
        'asendia_us_other' |
        'australia_post_express_post' |
        'australia_post_parcel_post' |
        'australia_post_pack_and_track_international' |
        'australia_post_international_airmail' |
        'australia_post_express_post_international' |
        'australia_post_express_courier_international' |
        'australia_post_international_express' |
        'australia_post_international_standard' |
        'australia_post_international_economy' |
        'axlehire_next_day' |
        'canada_post_regular_parcel' |
        'canada_post_expedited_parcel' |
        'canada_post_priority' |
        'canada_post_xpresspost' |
        'canada_post_xpresspost_international' |
        'canada_post_xpresspost_usa' |
        'canada_post_expedited_parcel_usa' |
        'canada_post_tracked_packet_usa' |
        'canada_post_small_packet_usa_air' |
        'canada_post_tracked_packet_international' |
        'canada_post_small_packet_international_air' |
        'cdl_next_day' |
        'couriersplease_domestic_priority_auth_to_leave' |
        'couriersplease_domestic_priority_sign_required' |
        'couriersplease_gold_domestic_auth_to_leave' |
        'couriersplease_gold_domestic_sign_required' |
        'couriersplease_off_peak_auth_to_leave' |
        'couriersplease_off_peak_sign_required' |
        'couriersplease_parcel_auth_to_leave' |
        'couriersplease_parcel_sign_required' |
        'couriersplease_road_express' |
        'couriersplease_satchel_auth_to_leave' |
        'couriersplease_satchel_sign_required' |
        'purolator_ground' |
        'purolator_ground9_am' |
        'purolator_ground1030_am' |
        'purolator_ground_distribution' |
        'purolator_ground_evening' |
        'purolator_ground_us' |
        'purolator_express' |
        'purolator_express9_am' |
        'purolator_express1030_am' |
        'purolator_express_evening' |
        'purolator_express_us' |
        'purolator_express_us9_am' |
        'purolator_express_us1030_am' |
        'purolator_express_us1200' |
        'purolator_express_international' |
        'purolator_express_international9_am' |
        'purolator_express_international1030_am' |
        'purolator_express_international1200' |
        'dhl_express_domestic_express_doc' |
        'dhl_express_economy_select_doc' |
        'dhl_express_worldwide_nondoc' |
        'dhl_express_worldwide_doc' |
        'dhl_express_worldwide' |
        'dhl_express_worldwide_eu_doc' |
        'dhl_express_break_bulk_express_doc' |
        'dhl_express_express_9_00_nondoc' |
        'dhl_express_economy_select_nondoc' |
        'dhl_express_break_bulk_economy_doc' |
        'dhl_express_express_9_00_doc' |
        'dhl_express_express_10_30_doc' |
        'dhl_express_express_10_30_nondoc' |
        'dhl_express_express_12_00_doc' |
        'dhl_express_europack_nondoc' |
        'dhl_express_express_envelope_doc' |
        'dhl_express_express_12_00_nondoc' |
        'dhl_express_express_12_doc' |
        'dhl_express_worldwide_b2c_doc' |
        'dhl_express_worldwide_b2c_nondoc' |
        'dhl_express_medical_express' |
        'dhl_express_express_easy_nondoc' |
        'dhl_ecommerce_marketing_parcel_expedited' |
        'dhl_ecommerce_globalmail_business_ips' |
        'dhl_ecommerce_parcel_international_direct' |
        'dhl_ecommerce_parcels_expedited_max' |
        'dhl_ecommerce_bpm_ground' |
        'dhl_ecommerce_priority_expedited' |
        'dhl_ecommerce_globalmail_packet_ipa' |
        'dhl_ecommerce_globalmail_packet_isal' |
        'dhl_ecommerce_easy_return_plus' |
        'dhl_ecommerce_marketing_parcel_ground' |
        'dhl_ecommerce_first_class_parcel_expedited' |
        'dhl_ecommerce_globalmail_business_priority' |
        'dhl_ecommerce_parcels_expedited' |
        'dhl_ecommerce_globalmail_business_isal' |
        'dhl_ecommerce_parcel_plus_expedited_max' |
        'dhl_ecommerce_globalmail_packet_plus' |
        'dhl_ecommerce_parcels_ground' |
        'dhl_ecommerce_expedited' |
        'dhl_ecommerce_parcel_plus_ground' |
        'dhl_ecommerce_parcel_international_standard' |
        'dhl_ecommerce_bpm_expedited' |
        'dhl_ecommerce_parcel_international_expedited' |
        'dhl_ecommerce_globalmail_packet_priority' |
        'dhl_ecommerce_easy_return_light' |
        'dhl_ecommerce_parcel_plus_expedited' |
        'dhl_ecommerce_globalmail_business_standard' |
        'dhl_ecommerce_ground' |
        'dhl_ecommerce_globalmail_packet_standard' |
        'dhl_germany_europaket' |
        'dhl_germany_paket' |
        'dhl_germany_paket_connect' |
        'dhl_germany_paket_international' |
        'dhl_germany_paket_priority' |
        'dhl_germany_paket_sameday' |
        'deutsche_post_postkarte' |
        'deutsche_post_standardbrief' |
        'deutsche_post_kompaktbrief' |
        'deutsche_post_grossbrief' |
        'deutsche_post_maxibrief' |
        'deutsche_post_maxibrief_plus' |
        'deutsche_post_warenpost_international_xs' |
        'deutsche_post_warenpost_international_s' |
        'deutsche_post_warenpost_international_m' |
        'deutsche_post_warenpost_international_l' |
        'fastway_australia_parcel' |
        'fastway_australia_satchel' |
        'fastway_australia_box_small' |
        'fastway_australia_box_medium' |
        'fastway_australia_box_large' |
        'globegistics_priority_mail_express_international' |
        'globegistics_priority_mail_international' |
        'globegistics_priority_mail_express_international_pds' |
        'globegistics_priority_mail_international_pds' |
        'globegistics_epacket' |
        'globegistics_ecom_tracked_ddp' |
        'globegistics_ecom_packet_ddp' |
        'globegistics_ecom_priority_mail_international_ddp' |
        'globegistics_ecom_priority_mail_express_international_ddp' |
        'globegistics_ecom_extra' |
        'globegistics_ecom_international_priority_airmail' |
        'globegistics_ecom_international_surface_airlift' |
        'gls_deutschland_business_parcel' |
        'gls_france_business_parcel' |
        'gls_us_cps' |
        'gls_us_eps' |
        'gls_us_ess' |
        'gls_us_nps' |
        'gls_us_pds' |
        'gls_us_sds' |
        'lso_ground' |
        'lso_economy_next_day' |
        'lso_saturday_delivery' |
        'lso_2nd_day' |
        'lso_priority_next_day' |
        'lso_early_overnight' |
        'mondial_relay_pointrelais' |
        'parcelforce_express48' |
        'parcelforce_express24' |
        'parcelforce_expressam' |
        'pcf_standard' |
        'pcf_standard_am' |
        'pcf_second_day' |
        'rr_donnelley_domestic_economy_parcel' |
        'rr_donnelley_domestic_priority_parcel' |
        'rr_donnelley_domestic_parcel_bpm' |
        'rr_donnelley_priority_domestic_priority_parcel_bpm' |
        'rr_donnelley_priority_parcel_delcon' |
        'rr_donnelley_priority_parcel_nondelcon' |
        'rr_donnelley_economy_parcel' |
        'rr_donnelley_ipa' |
        'rr_donnelley_courier' |
        'rr_donnelley_isal' |
        'rr_donnelley_epacket' |
        'rr_donnelley_pmi' |
        'rr_donnelley_emi' |
        'sendle_parcel' |
        'newgistics_parcel_select_lightweight' |
        'newgistics_parcel_select' |
        'newgistics_priority_mail' |
        'newgistics_first_class_mail' |
        'ontrac_ground' |
        'ontrac_sunrise_gold' |
        'ontrac_sunrise' |
        'lasership_routed_delivery' |
        'hermes_uk_courier_service' |
        'hermes_uk_parcelshop_dropoff';

    // https://goshippo.com/docs/reference#parcel-templates
    type ParcelTemplate =
        'FedEx_Box_10kg' |
        'FedEx_Box_25kg' |
        'FedEx_Box_Extra_Large_1' |
        'FedEx_Box_Extra_Large_2' |
        'FedEx_Box_Large_1' |
        'FedEx_Box_Large_2' |
        'FedEx_Box_Medium_1' |
        'FedEx_Box_Medium_2' |
        'FedEx_Box_Small_1' |
        'FedEx_Box_Small_2' |
        'FedEx_Envelope' |
        'FedEx_Padded_Pak' |
        'FedEx_Pak_1' |
        'FedEx_Pak_2' |
        'FedEx_Tube' |
        'FedEx_XL_Pak' |
        'UPS_Box_10kg' |
        'UPS_Box_25kg' |
        'UPS_Express_Box' |
        'UPS_Express_Box_Large' |
        'UPS_Express_Box_Medium' |
        'UPS_Express_Box_Small' |
        'UPS_Express_Envelope' |
        'UPS_Express_Hard_Pak' |
        'UPS_Express_Legal_Envelope' |
        'UPS_Express_Pak' |
        'UPS_Express_Tube' |
        'UPS_Laboratory_Pak' |
        'UPS_MI_BPM' |
        'UPS_MI_BPM_Flat' |
        'UPS_MI_BPM_Parcel' |
        'UPS_MI_First_Class' |
        'UPS_MI_Flat' |
        'UPS_MI_Irregular' |
        'UPS_MI_Machinable' |
        'UPS_MI_MEDIA_MAIL' |
        'UPS_MI_Parcel_Post' |
        'UPS_MI_Priority' |
        'UPS_MI_Standard_Flat' |
        'UPS_Pad_Pak' |
        'UPS_Pallet' |
        'USPS_FlatRateCardboardEnvelope' |
        'USPS_FlatRateEnvelope' |
        'USPS_FlatRateGiftCardEnvelope' |
        'USPS_FlatRateLegalEnvelope' |
        'USPS_FlatRatePaddedEnvelope' |
        'USPS_FlatRateWindowEnvelope' |
        'USPS_IrregularParcel' |
        'USPS_LargeFlatRateBoardGameBox' |
        'USPS_LargeFlatRateBox' |
        'USPS_APOFlatRateBox' |
        'USPS_LargeVideoFlatRateBox' |
        'USPS_MediumFlatRateBox1' |
        'USPS_MediumFlatRateBox2' |
        'USPS_RegionalRateBoxA1' |
        'USPS_RegionalRateBoxA2' |
        'USPS_RegionalRateBoxB1' |
        'USPS_RegionalRateBoxB2' |
        'USPS_SmallFlatRateBox' |
        'USPS_SmallFlatRateEnvelope' |
        'USPS_SoftPack' |
        'DHLeC_Irregular' |
        'DHLeC_SM_Flats' |
        'couriersplease_500g_satchel' |
        'couriersplease_1kg_satchel' |
        'couriersplease_3kg_satchel' |
        'couriersplease_5kg_satchel' |
        'Fastway_Australia_Satchel_A2' |
        'Fastway_Australia_Satchel_A3' |
        'Fastway_Australia_Satchel_A4' |
        'Fastway_Australia_Satchel_A5';
}

interface ShippoStatic {
    (token: string): Shippo.Shippo;
    new (token: string): Shippo.Shippo;
}

declare const Shippo: ShippoStatic;
export = Shippo;
export as namespace Shippo;
