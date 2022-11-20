import Resource from './resource';
import { Checkout } from './storefront/checkout';
import { AttributeInput, CheckoutLineItemInput, CurrencyCode, ID, MailingAddressInput } from './storefront/graphql';

export default class CheckoutResource extends Resource {
    /**
     * Fetches a checkout by ID.
     */
    fetch(id: ID): Promise<Checkout>;

    /**
     * Creates a checkout.
     */
    create(input?: {
        email?: string;
        lineItems?: CheckoutLineItemInput[];
        shippingAddress?: MailingAddressInput;
        customAttributes?: AttributeInput[];
        presentmentCurrencyCode?: CurrencyCode;
    }): Promise<Checkout>;

    /**
     * Replaces the value of checkout's custom attributes and/or note with values defined in the input
     */
    updateAttributes(
        checkoutId: ID,
        input: {
            allowPartialAddresses?: boolean;
            customAttributes?: AttributeInput[];
            note?: string;
        },
    ): Promise<Checkout>;

    /**
     * Replaces the value of checkout's email address
     */
    updateEmail(checkoutId: ID, email: string): Promise<Checkout>;

    /**
     * Adds line items to an existing checkout.
     */
    addLineItems(checkoutId: ID, lineItems: CheckoutLineItemInput[]): Promise<Checkout>;

    /**
     * Applies a discount to an existing checkout using a discount code.
     */
    addDiscount(checkoutId: ID, discountCode: string): Promise<Checkout>;

    /**
     * Removes the applied discount from an existing checkout.
     */
    removeDiscount(checkoutId: ID): Promise<Checkout>;

    /**
     * Applies gift cards to an existing checkout using a list of gift card codes
     */
    addGiftCards(checkoutId: ID, giftCardCodes: string): Promise<Checkout>;

    /**
     * Remove a gift card from an existing checkout
     */
    removeGiftCard(checkoutId: ID, appliedGiftCardId: ID): Promise<Checkout>;

    /**
     * Removes line items from an existing checkout.
     */
    removeLineItems(checkoutId: ID, lineItemIds: string[]): Promise<Checkout>;

    /**
     * Replace line items on an existing checkout.
     */
    replaceLineItems(checkoutId: ID, lineItems: CheckoutLineItemInput[]): Promise<Checkout>;

    /**
     * Updates line items on an existing checkout.
     */
    updateLineItems(checkoutId: ID, lineItems: CheckoutLineItemInput[]): Promise<Checkout>;

    /**
     * Updates shipping address on an existing checkout.
     */
    updateShippingAddress(checkoutId: ID, shippingAddress: MailingAddressInput): Promise<Checkout>;
}
