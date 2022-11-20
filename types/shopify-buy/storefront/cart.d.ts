import { CartCost, PurchasingCompany, CartLineCost } from './checkout';
import { Attribute, MoneyV2, MailingAddress } from './common';
import { Customer } from './customers';
import {
    DateTime,
    CartDiscountAllocation,
    CountryCode,
    DeliveryAddress,
    DeliveryMethodType,
    Merchandise,
    Node,
    URL,
} from './graphql';
import { SellingPlanAllocation } from './products';

export interface Cart extends Node {
    attribute?: Attribute;
    attributes: Attribute[];
    buyerIdentity: CartBuyerIdentity;
    checkoutUrl: URL;
    cost: CartCost;
    createdAt: DateTime;
    discountAllocations: CartDiscountAllocation[];
    discountCodes: CartDiscountCode[];
    note: string;
    totalQuantity: number;
    updatedAt: DateTime;
    /**
     * @deprecated
     */
    estimatedCost: CartEstimatedCost;
    deliveryGroups: CartDeliveryGroup[];
    lines: CartLine[];
}

export interface CartAutomaticDiscountAllocation {
    discountedAmount: MoneyV2;
    title: string;
}

export interface CartBuyerIdentity {
    countryCode?: CountryCode;
    customer?: Customer;
    deliveryAddressPreferences: DeliveryAddress[];
    email?: string;
    phone?: string;
    purchasingCompany?: PurchasingCompany;
}

export interface CartCodeDiscountAllocation {
    code: string;
    discountedAmount: MoneyV2;
}

export interface CartDeliveryGroup extends Node {
    deliveryAddress: MailingAddress;
    deliveryOptions: CartDeliveryOption[];
    selectedDeliveryOption?: CartDeliveryOption;
    cartLines: CartLine;
}

export interface CartDeliveryOption {
    code?: string;
    deliveryMethodType: DeliveryMethodType;
    description?: string;
    estimatedCost: MoneyV2;
    handle: string;
    title?: string;
}

export interface CartDiscountCode {
    applicable: boolean;
    code: string;
}

export interface CartEstimatedCost {
    checkoutChargeAmount: MoneyV2;
    subtotalAmount: MoneyV2;
    totalAmount: MoneyV2;
    totalDutyAmount?: MoneyV2;
    totalTaxAmount?: MoneyV2;
}

export interface CartLine extends Node {
    attribute?: Attribute;
    attributes: Attribute[];
    cost: CartLineCost;
    discountAllocations: CartDiscountAllocation[];
    merchandise: Merchandise;
    quantity: number;
    sellingPlanAllocation?: SellingPlanAllocation;
    estimatedCost: MoneyV2;
}

export interface CartLineEstimatedCost {
    amount: MoneyV2;
    compareAtAmount?: MoneyV2;
    subtotalAmount: MoneyV2;
    totalAmount: MoneyV2;
}
