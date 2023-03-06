import Commerce = require('@chec/commerce.js');
import { Live } from '../types/live';
import { Price } from '../types/price';
import { DiscountType } from '../types/discount';
import { CheckoutToken } from '../types/checkout-token';
import { CheckoutCapture } from '../types/checkout-capture';
import { CheckoutCaptureResponse } from '../types/checkout-capture-response';

export type IdentifierType = 'product_id' | 'cart' | 'permalink';

export interface CheckPayWhatYouWantResponse {
    valid: boolean;
    customer_set_price: Price;
    message: string;
    live: Live;
}

export interface GetLocationFromIPResponse {
    ip_address: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    postal_zip_code: string;
}

export interface IsFreeResponse {
    is_free: boolean;
    live: Live;
}

export interface CheckVariantResponse {
    available: boolean;
    name: string;
    price: Price;
    option_id: string;
    variant_id: string;
    line_item_id: string;
    requested_quantity: number;
    live: Live;
}

export interface CheckDiscountResponse {
    valid: boolean;
    type: DiscountType;
    code: string;
    value: number;
    amount_saved: Price;
    live: Live;
}

export interface CheckShippingOptionResponse {
    valid: boolean;
    id: string;
    description: string;
    price: Price;
    live: Live;
}

export interface GetShippingOptionsResponse {
    id: string;
    description: string;
    price: Price;
    countries: string[];
}

export interface SetTaxZoneResponse {
    valid: true;
    tax_region: {
        country: string;
        region: string;
        postal_zip_code: string;
        ip_address: string;
    };
    live: Live;
}

export interface CheckQuantityResponse {
    available: boolean;
    line_item_id: string;
    requested_quantity: number;
    live: Live;
}

export interface HelperValidationResponse {
    rules: {
        [name: string]: { required?: boolean | undefined; email?: boolean | undefined; digits?: boolean | undefined };
    };
}

export interface CheckGiftcardResponse {
    valid: boolean;
    code: string;
    credit: number;
    live: Live;
}

export class Checkout {
    constructor(commerce: Commerce);

    /** @deprecated */
    protect(token: string): Promise<any>;
    generateToken(identifier: string, data: object): Promise<CheckoutToken>;
    generateTokenFrom(type: IdentifierType, identifier: string): Promise<CheckoutToken>;
    capture(token: string, data: CheckoutCapture): Promise<CheckoutCaptureResponse>;
    receipt(token: string): Promise<any>;

    checkPayWhatYouWant(token: string, data: { customer_set_price: string }): Promise<CheckPayWhatYouWantResponse>;
    fields(identifier: string): Promise<any>;
    getLocationFromIP(token: string, ipAddress?: string): Promise<GetLocationFromIPResponse>;
    isFree(token: string): Promise<IsFreeResponse>;
    checkVariant(token: string, lineItemId: string, data: object): Promise<CheckVariantResponse>;
    checkDiscount(token: string, data: { code: string }): Promise<CheckDiscountResponse>;
    checkShippingOption(
        token: string,
        data: { shipping_option_id: string; country: string; region?: string | undefined },
    ): Promise<CheckShippingOptionResponse>;
    getShippingOptions(
        token: string,
        data: { country: string; region?: string | undefined },
    ): Promise<GetShippingOptionsResponse[]>;
    setTaxZone(
        token: string,
        data: {
            ip_address?: string | undefined;
            country?: string | undefined;
            region?: string | undefined;
            postal_zip_code?: string | undefined;
        },
    ): Promise<SetTaxZoneResponse>;
    checkQuantity(token: string, lineItemId: string, data: object): Promise<CheckQuantityResponse>;
    helperValidation(token: string): Promise<HelperValidationResponse>;
    getLive(token: string): Promise<Live>;
    getToken(token: string): Promise<CheckoutToken>;
    checkGiftcard(token: string, params: { code: string }): Promise<CheckGiftcardResponse>;
}
