// Type definitions for shippo 1.5
// Project: https://github.com/goshippo/shippo-node-client
// Definitions by: Saiichi <https://github.com/saiichihashimoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Shippo {
    // https://goshippo.com/docs/reference#addresses
    interface Address {
        city?: string | undefined;
        company?: string | undefined;
        country?: string | undefined;
        name?: string | undefined;
        phone?: string | undefined;
        state?: string | undefined;
        street1: string;
        street2?: string | undefined;
        street3?: string | undefined;
        zip?: string | undefined;
        validation_results?: {
            is_valid?: boolean | undefined;
            messages?: Array<{ text: string }> | undefined;
        } | undefined;
    }

    // https://goshippo.com/docs/reference#parcels
    interface Parcel {
        distance_unit: 'cm' | 'in' | 'ft' | 'mm' | 'm' | 'yd';
        height: number;
        length: number;
        mass_unit: 'g' | 'oz' | 'lb' | 'kg';
        weight: number;
        width: number;
    }

    // https://goshippo.com/docs/reference#shipments
    interface Shipment {
        address_from: Address;
        address_to: Address;
        address_return: Address;
        parcels: Parcel[];
        rates: Rate[];
    }

    // https://goshippo.com/docs/reference#rates
    interface Rate {
        amount: number;
        amount_local: number;
        attributes: Array<'CHEAPEST' | 'FASTEST' | 'BESTVALUE'>;
        currency: string;
        currency_local: string;
        provider: string;
        servicelevel: {
            token: string;
        };
        estimated_days?: number;
    }

    interface CreateCustomsItemRequest {
        description: string;
        mass_unit: 'g' | 'oz' | 'lb' | 'kg';
        net_weight: number;
        origin_country: string;
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
            | 'OTHER';
        eel_pfc?: 'NOEEI_30_37_a' | 'NOEEI_30_37_h' | 'NOEEI_30_36' | 'AES_ITN' | undefined;
        incoterm?: 'DDP' | 'DDU' | undefined;
        items: CreateCustomsItemRequest[];
        non_delivery_option: 'ABANDON' | 'RETURN';
    }

    interface CreateShipmentRequest {
        address_from: Address;
        address_to: Address;
        async?: boolean | undefined;
        customs_declaration?: CreateCustomsDeclarationRequest | undefined;
        parcels: string | Parcel | Parcel[];
    }

    interface CreateAddressRequest {
        name: string;
        street1: string;
        street2?: string | undefined;
        street3?: string | undefined;
        city: string;
        zip: string;
        state: string;
        country: string;
        async?: boolean | undefined;
        validate?: boolean | undefined;
    }

    interface Shippo {
        shipment: {
            create: (request: CreateShipmentRequest) => Promise<Shipment>;
        };
        address: {
            create: (request: CreateAddressRequest) => Promise<Address>;
        };
    }
}

interface ShippoStatic {
    (token: string): Shippo.Shippo;
    new (token: string): Shippo.Shippo;
}

declare const Shippo: ShippoStatic;
export = Shippo;
export as namespace Shippo;
