// Type definitions for non-npm package recurly__recurly-js 4.12
// Project: https://github.com/recurly/recurly-js
// Definitions by: Dave Brudner <https://github.com/dbrudner>
//                 Chris Rogers <https://github.com/chrissrogers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

declare module '3d-secure' {
    type ThreeDSecureEvent = 'token' | 'error';
    interface ThreeDSecureEmitter extends Emitter<ThreeDSecureEvent> {
        attach: (el: HTMLElement) => void;
    }
    type RiskOptions = {
        actionTokenId?: string;
    };
    type ThreeDSecure = (riskOptions: RiskOptions) => ThreeDSecureEmitter;
    type Risk = () => {
        ThreeDSecure: ThreeDSecure;
    };
    export default Risk;
}
declare module 'address' {
    export type Address = {
        first_name: string;
        last_name: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postal_code?: string;
        country?: string;
        phone?: string;
        vat_number?: string;
    };
    export default Address;
}
declare module 'adyen' {
    type AdyenOptions = {
        invoiceUuid: string;
        countryCode?: string;
        shopperLocale?: string;
        skinCode?: string;
    };
    type AdyenEvent = 'token' | 'error';
    interface AdyenInstance extends Emitter<AdyenEvent> {
        start: (adyenOptions: AdyenOptions) => void;
    }
    type Adyen = (adyenOptions?: AdyenOptions) => AdyenInstance;
    export default Adyen;
}
declare module 'error' {
    interface RecurlyError extends Error {
        code: string;
        message: string;
        classification: string;
        help?: string;
    }
    export default RecurlyError;
}
declare module 'pricing/promise' {
    import RecurlyError from 'error';
    /**
     * Represents the completion of an asynchronous operation
     */
    interface PricingPromise<T, PricingMethods> extends Promise<T> {
        /**
         * Attaches callbacks for the resolution and/or rejection of the PricingPromise.
         * @param onfulfilled The callback to execute when the PricingPromise is resolved.
         * @param onrejected The callback to execute when the PricingPromise is rejected.
         * @returns A PricingPromise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>,
            onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>,
        ): PricingPromise<TResult1 | TResult2, PricingMethods> & PricingMethods;
        /**
         * Attaches a callback for only the rejection of the PricingPromise.
         * @param onrejected The callback to execute when the PricingPromise is rejected.
         * @returns A PricingPromise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: (reason: RecurlyError) => TResult | PromiseLike<TResult>,
        ): PricingPromise<T | TResult, PricingMethods> & PricingMethods;
        /**
         * Attaches callbacks for the resolution and/or rejection of the PricingPromise, without returning a new promise.
         * @param onfulfilled The callback to execute when the PricingPromise is resolved.
         * @param onrejected The callback to execute when the PricingPromise is rejected.
         */
        done(onfulfilled?: (value: T) => any, onrejected?: (reason: any) => any): T;
    }
    export default PricingPromise;
}
declare module 'pricing/subscription' {
    import { PricingInstance } from 'pricing/index';
    import Address from 'address';
    import PricingPromise from 'pricing/promise';
    type Tax = {
        tax_code: string;
        vat_number?: string;
        amounts?: {
            now?: string;
            next?: string;
        };
    };
    type PlanOptions = {
        quantity?: number;
    };
    type AddonOptions = {
        quantity?: number;
    };
    type SubscriptionPricingStateTax = {
        tax_type: string;
        region: string;
        rate: string;
    };
    export type SubscriptionPricingState = {
        price: {
            now: {
                subtotal: string;
                plan: string;
                addons: string;
                setup_fee: string;
                discount: string;
                tax: string;
                total: string;
            };
            next: {
                subtotal: string;
                plan: string;
                addons: string;
                setup_fee: string;
                discount: string;
                tax: string;
                total: string;
            };
            base: {
                plan: {
                    unit: string;
                    setup_fee: string;
                };
                addons: {
                    [addon: string]: string;
                };
            };
            addons: {
                [addon: string]: string;
            };
            currency: {
                code: string;
                symbol: string;
            };
            taxes: SubscriptionPricingStateTax[];
        };
    };
    interface SubscriptionPricingMethods {
        addon: (addonCode: string, addonOptions?: AddonOptions) => SubscriptionPricingPromise;
        address: (address: Address) => SubscriptionPricingPromise;
        coupon: (coupon: string) => SubscriptionPricingPromise;
        currency: (currency: string) => SubscriptionPricingPromise;
        giftcard: (giftcard: string) => SubscriptionPricingPromise;
        plan: (plan: string, planOptions?: PlanOptions) => SubscriptionPricingPromise;
        shippingAddress: (address: Address) => SubscriptionPricingPromise;
        tax: (tax: Tax) => SubscriptionPricingPromise;
    }
    export interface SubscriptionPricingInstance
        extends SubscriptionPricingMethods,
            PricingInstance<SubscriptionPricingPromise> {
        attach: (element: string | HTMLElement) => void;
    }
    interface SubscriptionPricingPromise
        extends SubscriptionPricingInstance,
            PricingPromise<SubscriptionPricingState, SubscriptionPricingMethods> {}
    type SubscriptionPricing = () => SubscriptionPricingInstance;
    export default SubscriptionPricing;
}
declare module 'pricing/index' {
    import { CheckoutPricingInstance } from 'pricing/checkout';
    import { SubscriptionPricingInstance } from 'pricing/subscription';
    type PricingEvent =
        | 'change'
        | 'set.subscription'
        | 'set.plan'
        | 'set.addon'
        | 'set.adjustment'
        | 'set.address'
        | 'set.shippingAddress'
        | 'set.tax'
        | 'set.coupon'
        | 'unset.coupon'
        | 'error.coupon'
        | 'set.gift_card'
        | 'unset.gift_card';
    export interface PricingInstance<PricingPromise> extends Emitter<PricingEvent> {
        reprice: (done: VoidFunction) => PricingPromise;
        remove: (opts: any, done: VoidFunction) => PricingPromise;
        reset: VoidFunction;
    }
    type Pricing = {
        Checkout: () => CheckoutPricingInstance;
        Subscription: () => SubscriptionPricingInstance;
    };
    export default Pricing;
}
declare module 'pricing/checkout' {
    import { PricingInstance } from 'pricing/index';
    import Address from 'address';
    import PricingPromise from 'pricing/promise';
    import { SubscriptionPricingState } from 'pricing/subscription';
    type ItemAdjustment = {
        itemCode: string;
        quantity: number;
        currency?: string;
        id?: string;
    };
    type NonItemAdjustment = {
        amount: number;
        quantity: number;
        currency?: string;
        taxExempt: boolean;
        taxCode: string;
        id?: string;
    };
    type Adjustment = ItemAdjustment | NonItemAdjustment;
    type Tax = {
        tax_code: string;
        vat_number?: string;
        amounts?: {
            now?: string;
            next?: string;
        };
    };
    type Item = {
        type: string;
        id: string;
        amount: string;
        setupFee: string;
        addons: string;
        plan: string;
    };
    type CheckoutPricingStateTax = {
        tax_type: string;
        region: string;
        rate: string;
    };
    type CheckoutPricingState = {
        price: {
            now: {
                items: Item[];
                subscriptions: string;
                adjustments: string;
                discount: string;
                subtotal: string;
                taxes: string;
                giftCard: string;
                total: string;
            };
            next: {
                items: Item[];
                subscriptions: string;
                adjustments: string;
                discount: string;
                subtotal: string;
                taxes: string;
                giftCard: string;
                total: string;
            };
            currency: {
                code: string;
                symbol: string;
            };
            taxes: CheckoutPricingStateTax[];
        };
    };
    interface CheckoutPricingMethods {
        address: (address: Address) => CheckoutPricingPromise;
        adjustment: (adjustment: Adjustment) => CheckoutPricingPromise;
        coupon: (coupon: string) => CheckoutPricingPromise;
        currency: (currency: string) => CheckoutPricingPromise;
        giftCard: (giftcard: string) => CheckoutPricingPromise;
        shippingAddress: (address: Address) => CheckoutPricingPromise;
        tax: (tax: Tax) => CheckoutPricingPromise;
        subscription: (subscriptionPricing: SubscriptionPricingState | undefined) => CheckoutPricingPromise;
    }
    export interface CheckoutPricingInstance extends CheckoutPricingMethods, PricingInstance<CheckoutPricingPromise> {
        attach: (element: string | HTMLElement) => void;
    }
    export interface CheckoutPricingPromise
        extends CheckoutPricingInstance,
            PricingPromise<CheckoutPricingState, CheckoutPricingMethods> {}
    type CheckoutPricing = () => CheckoutPricingInstance;
    export default CheckoutPricing;
}
declare module 'apple-pay' {
    import { CheckoutPricingInstance } from 'pricing/checkout';
    type ApplePayConfig = {
        country: string;
        currency: string;
        label: string;
        total: string;
        pricing?: CheckoutPricingInstance;
        form?: HTMLFormElement;
    };
    type ApplePayEvent =
        | 'token'
        | 'error'
        | 'ready'
        | 'shippingContactSelected'
        | 'paymentAuthorized'
        | 'shippingMethodSelected'
        | 'cancel';
    interface ApplePayInstance extends Emitter<ApplePayEvent> {
        ready: (cb?: VoidFunction) => void;
        begin: (cb?: VoidFunction) => void;
    }
    type ApplePay = (config: ApplePayConfig) => ApplePayInstance;
    export default ApplePay;
}
declare module 'elements' {
    export type CommonElementStyle = {
        fontColor?: string;
        fontFamily?: string;
        fontFeatureSettings?: string;
        fontKerning?: string;
        fontSize?: string;
        fontSmooth?: string;
        fontStretch?: string;
        fontStyle?: string;
        fontVariant?: string;
        fontWeight?: string;
        letterSpacing?: string;
        lineHeight?: string;
        textAlign?: string;
        textDecoration?: string;
        textRendering?: string;
        textShadow?: string;
        textTransform?: string;
    };
    export type CardElementOptions = {
        displayIcon?: boolean;
        inputType?: string;
        tabIndex?: string;
        style?: CommonElementStyle & {
            invalid?: CommonElementStyle;
            placeholder?: {
                color?: string;
                fontWeight?: string;
                content?: {
                    number?: string;
                    expiry?: string;
                    cvv?: string;
                };
            };
        };
    };
    export type IndividualElementOptions = {
        format?: boolean;
        inputType?: string;
        tabIndex?: string;
        style?: CommonElementStyle & {
            invalid: CommonElementStyle;
            padding?: string;
            placeholder?: {
                color?: string;
                content?: string;
            };
        };
    };
    type Attach<ElementType> = (el: string | HTMLElement) => ElementType;
    type ElementEvent = 'change' | 'focus' | 'blur' | 'submit' | 'attach' | 'remove';
    interface CardElement extends Emitter<ElementEvent> {
        attach: Attach<CardElement>;
        remove: () => CardElement;
        configure: (options: CardElementOptions) => CardElement;
    }
    interface IndividualElement extends Emitter<ElementEvent> {
        attach: Attach<IndividualElement>;
        remove: () => Element;
        configure: (options: IndividualElementOptions) => Element;
    }
    type ElementsInstanceEvents = 'submit';
    export interface ElementsInstance extends Emitter<ElementsInstanceEvents> {
        CardElement: (cardElementOptions?: CardElementOptions) => CardElement;
        CardNumberElement: (cardNumberElementOptions?: IndividualElementOptions) => IndividualElement;
        CardMonthElement: (cardMonthElementOptions?: IndividualElementOptions) => IndividualElement;
        CardYearElement: (cardYearElementOptions?: IndividualElementOptions) => IndividualElement;
        CardCvvElement: (cardCvvElementOptions?: IndividualElementOptions) => IndividualElement;
    }
    type Elements = () => ElementsInstance;
    export default Elements;
}
declare module 'token' {
    import RecurlyError from 'error';
    import { ElementsInstance } from 'elements';
    import Address from 'address';
    type TokenPayload = {
        id: string;
        type: string;
    };
    type CustomerData = Address;
    export type TokenHandler = (error: RecurlyError | null, token: TokenPayload) => void;
    type HostedFieldToken = (form: HTMLFormElement | CustomerData, second: TokenHandler) => void;
    type ElementsToken = (
        elements: ElementsInstance,
        second: HTMLFormElement | CustomerData,
        third: TokenHandler,
    ) => void;
    type Token = HostedFieldToken & ElementsToken;
    export default Token;
}
declare module 'bank-account' {
    import RecurlyError from 'error';
    import { TokenHandler } from 'token';
    type BillingInfo = {
        routing_number: string;
        account_number: string;
        account_number_confirmation: string;
        account_type: string;
        iban?: string;
        name_on_account: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postal_code?: string;
        country?: string;
        vat_number?: string;
    };
    type BankInfoOptions = {
        routingNumber: string;
    };
    type BankInfoPayload = {
        bank_name: string;
    };
    type BankInfoHandler = (err: RecurlyError, bankInfo: BankInfoPayload) => void;
    type BankInfo = (bankInfoOptions: BankInfoOptions, BankInfoHandler: BankInfoHandler) => void;
    type BankAccount = {
        token: (data: HTMLFormElement | BillingInfo, tokenHandler: TokenHandler) => void;
        bankInfo: BankInfo;
    };
    export default BankAccount;
}
declare module 'configure' {
    type RecurlyOptions = {
        cors?: boolean;
        publicKey: string;
        currency?: string;
        required?: string[];
        timeout?: number;
        fraud?: {
            kount?: {
                dataCollector?: boolean;
            };
            braintree?: {
                deviceData?: string;
            };
            litle?: {
                sessionId?: string;
            };
        };
    };
    type Configure = (recurlyConfig: RecurlyOptions | string) => void;
    export default Configure;
}
interface Emitter<Event = string> {
    on(event: Event, listener: (...args: any) => any): Emitter<Event>;
    once(event: Event, listener: (...args: any) => any): Emitter<Event>;
    off(event?: Event, listener?: (...args: any) => any): Emitter<Event>;
    emit(event: Event, ...args: any[]): Emitter<Event>;
    listeners(event: Event): (...args: any) => any[];
    hasListeners(event: Event): boolean;
}
declare module 'gift-card' {
    import RecurlyError from 'error';
    type GiftCardOptions = {
        code: string;
    };
    type GiftCardResult = {
        currency: string;
        unit_amount: number;
    };
    type Done = (error: RecurlyError, result: GiftCardResult) => void;
    type GiftCard = (giftCardOptions: GiftCardOptions, done: Done) => void;
    export default GiftCard;
}
declare module 'paypal' {
    import { TokenHandler } from 'token';
    type BraintreeConfig = {
        braintree: {
            clientAuthorization: string;
        };
    };
    type DirectConfig = {
        display?: {
            displayName?: string;
        };
    };
    type PayPalConfig = BraintreeConfig | DirectConfig;
    type PaypalStartOptions = {
        options?: {
            description?: string;
        };
    };
    type PayPalEvent = 'error' | 'token';
    interface PayPalInstance extends Emitter<PayPalEvent> {
        start: (paypalStartOptions?: PaypalStartOptions) => void;
        token: TokenHandler;
    }
    type PayPal = (config?: PayPalConfig) => PayPalInstance;
    export default PayPal;
}
declare module 'validate' {
    type Validate = {
        cardNumber: (cardNumber: string | number) => boolean;
        cardType: (cardNumber: string | number, partial: boolean) => boolean;
        expiry: (month: string | number, year: string | number) => boolean;
        cvv: (cvv: string | number) => boolean;
    };
    export default Validate;
}
declare module 'recurly' {
    import Risk from '3d-secure';
    import Adyen from 'adyen';
    import ApplePay from 'apple-pay';
    import BankAccount from 'bank-account';
    import Configure from 'configure';
    import Elements from 'elements';
    import GiftCard from 'gift-card';
    import PayPal from 'paypal';
    import Pricing from 'pricing/index';
    import Token from 'token';
    import Validate from 'validate';
    type RecurlyEvent = 'change' | 'field:submit' | 'error';
    interface Recurly extends Emitter<RecurlyEvent> {
        Adyen: Adyen;
        ApplePay: ApplePay;
        bankAccount: BankAccount;
        configure: Configure;
        Elements: Elements;
        giftCard: GiftCard;
        PayPal: PayPal;
        Pricing: Pricing;
        Risk: Risk;
        token: Token;
        validate: Validate;
    }
    global {
        interface Window {
            recurly: Recurly;
        }
        namespace Recurly {
            type recurly = Recurly;
        }
        const recurly: Recurly;
    }
}
