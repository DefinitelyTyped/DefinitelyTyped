declare namespace ShopifyBuy {
    /**
     * Cart
     */
    interface Cart extends Node {
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

    interface CartAutomaticDiscountAllocation {
        discountedAmount: MoneyV2;
        title: string;
    }

    interface CartBuyerIdentity {
        countryCode?: CountryCode;
        customer?: Customer;
        deliveryAddressPreferences: DeliveryAddress[];
        email?: string;
        phone?: string;
        purchasingCompany?: PurchasingCompany;
    }

    interface CartCodeDiscountAllocation {
        code: string;
        discountedAmount: MoneyV2;
    }

    interface CartDeliveryGroup extends Node {
        deliveryAddress: MailingAddress;
        deliveryOptions: CartDeliveryOption[];
        selectedDeliveryOption?: CartDeliveryOption;
        cartLines: CartLine;
    }

    interface CartDeliveryOption {
        code?: string;
        deliveryMethodType: DeliveryMethodType;
        description?: string;
        estimatedCost: MoneyV2;
        handle: string;
        title?: string;
    }

    interface CartDiscountCode {
        applicable: boolean;
        code: string;
    }

    interface CartEstimatedCost {
        checkoutChargeAmount: MoneyV2;
        subtotalAmount: MoneyV2;
        totalAmount: MoneyV2;
        totalDutyAmount?: MoneyV2;
        totalTaxAmount?: MoneyV2;
    }

    interface CartLine extends Node {
        attribute?: Attribute;
        attributes: Attribute[];
        cost: CartLineCost;
        discountAllocations: CartDiscountAllocation[];
        merchandise: Merchandise;
        quantity: number;
        sellingPlanAllocation?: SellingPlanAllocation;
        estimatedCost: MoneyV2;
    }

    interface CartLineEstimatedCost {
        amount: MoneyV2;
        compareAtAmount?: MoneyV2;
        subtotalAmount: MoneyV2;
        totalAmount: MoneyV2;
    }

    /**
     * Common
     */
    interface ApiVersion {
        displayName: string;
        handle: string;
        supported: boolean;
    }

    interface Attribute {
        key: string;
        value?: string;
    }

    interface Brand {
        colors: BrandColors;
        coverImage?: MediaImage;
        logo?: MediaImage;
        shortDescription?: string;
        slogan?: string;
        squareLogo?: MediaImage;
    }

    interface BrandColorGroup {
        background: Color;
        foreground: Color;
    }

    interface BrandColors {
        primary: BrandColorGroup[];
        secondary: BrandColorGroup[];
    }

    interface ContentEntry extends Node {
        field?: Metafield;
        handle: string;
        type: string;
        updatedAt: DateTime;
    }

    interface Country {
        availableLanguages: Language[];
        currency: Currency;
        isoCode: CurrencyCode;
        name: string;
        unitSystem: UnitSystem;
    }

    interface Currency {
        isoCode: CurrencyCode;
        name: string;
        symbol: string;
    }

    interface Domain {
        host: string;
        sslEnabled: boolean;
        url: URL;
    }

    interface Filter {
        id: string;
        label: string;
        type: FilterType;
        values: FilterValue[];
    }

    interface FilterValue {
        count: number;
        id: string;
        input: JSON;
        label: string;
    }

    interface Image {
        altText?: string;
        height?: number;
        id?: ID;
        url: URL;
        width?: number;
        /**
         * @deprecated
         */
        originalSrc: URL;
        /**
         * @deprecated
         */
        src: URL;
        /**
         * @deprecated
         */
        transformedSrc: URL;
    }

    interface Language {
        endonymName: string;
        isoCode: LanguageCode;
        name: string;
    }

    interface Localization {
        availableCountries: Country[];
        availableLanguages: Language[];
        country: Country;
        language: Language;
    }

    interface MailingAddress extends Node {
        address1?: string;
        address2?: string;
        city?: string;
        company?: string;
        country?: string;
        countryCodeV2?: CountryCode;
        firstName?: string;
        formatted: string[];
        formattedArea?: string;
        lastName?: string;
        latitude?: number;
        longitude?: number;
        name?: string;
        phone?: string;
        province?: string;
        provinceCode?: string;
        zip?: string;
        /**
         * @deprecated
         */
        countryCode?: string;
    }

    interface Metafield extends Node {
        createdAt: DateTime;
        description?: string;
        key: string;
        namespace: string;
        parentResource: MetafieldParentResource;
        reference?: MetafieldReference;
        type: string;
        updatedAt: DateTime;
        value: string;
    }

    interface MoneyV2 {
        amount: number;
        currencyCode: CurrencyCode;
    }

    interface PageInfo {
        endCursor?: string;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string;
    }

    interface QueryRoot {
        blog?: Blog;
        cart?: Cart;
        collection?: Collection;
        contentEntry?: ContentEntry;
        customer?: Customer;
        localization: Localization;
        menu?: Menu;
        node?: Node;
        nodes: Node[];
        page?: Page;
        product?: Product;
        productRecommendations?: Product[];
        publicApiVersions: ApiVersion[];
        shop: Shop;
        /**
         * @deprecated
         */
        blogByHandle?: Blog;
        /**
         * @deprecated
         */
        collectionByHandle?: Collection;
        /**
         * @deprecated
         */
        pageByHandle?: Page;
        /**
         * @deprecated
         */
        productByHandle?: Product;
    }

    interface SEO {
        description?: string;
        title?: string;
    }

    /**
     * Customers
     */
    interface Customer extends Node, HasMetafields {
        acceptsMarketing: boolean;
        createdAt: DateTime;
        defaultAddress?: MailingAddress;
        displayName: string;
        email?: string;
        firstName?: string;
        lastIncompleteCheckout?: Checkout;
        lastName?: string;
        numberOfOrders: number;
        phone?: string;
        tags: string[];
        updatedAt: DateTime;
        addresses: MailingAddress[];
        orders: Order[];
    }

    interface CustomerAccessToken {
        accessToken: string;
        expiresAt: DateTime;
    }

    /**
     * GraphQL
     */
    // GraphQL Types - Scalars
    type Color = string;
    type DateTime = string;
    type ID = string;
    type URL = string;
    type JSON = Record<string, unknown>;
    // end GraphQL Types - Scalars

    // GraphQL Types - Enums
    enum ArticleSortKeys {
        AUTHOR = "author",
        BLOG_TITLE = "blog_title",
        ID = "id",
        PUBLISHED_AT = "published_at",
        RELEVANCE = "query",
        TITLE = "title",
        UPDATED_AT = "updated_at",
    }

    enum BlogSortKeys {
        HANDLE = "HANDLE",
        ID = "id",
        RELEVANCE = "query",
        TITLE = "title",
    }

    enum CardBrand {
        AMERICAN_EXPRESS = "AMERICAN_EXPRESS",
        DINERS_CLUB = "DINERS_CLUB",
        DISCOVER = "DISCOVER",
        ELO = "ELO",
        JCB = "JCB",
        MASTERCARD = "MASTERCARD",
        UNIONPAY = "UNIONPAY",
        VISA = "VISA",
    }

    enum CartErrorCode {
        INVALID = "INVALID",
        INVALID_MERCHANDISE_LINE = "INVALID_MERCHANDISE_LINE",
        LESS_THAN = "LESS_THAN",
        MISSING_DISCOUNT_CODE = "MISSING_DISCOUNT_CODE",
        MISSING_NOTE = "MISSING_NOTE",
    }

    enum CheckoutErrorCode {
        ALREADY_COMPLETED = "ALREADY_COMPLETED",
        BAD_DOMAIN = "BAD_DOMAIN",
        BLANK = "BLANK",
        CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE = "CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE",
        CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE =
            "CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE",
        DISCOUNT_ALREADY_APPLIED = "DISCOUNT_ALREADY_APPLIED",
        DISCOUNT_DISABLED = "DISCOUNT_DISABLED",
        DISCOUNT_EXPIRED = "DISCOUNT_EXPIRED",
        DISCOUNT_LIMIT_REACHED = "DISCOUNT_LIMIT_REACHED",
        DISCOUNT_NOT_FOUND = "DISCOUNT_NOT_FOUND",
        EMPTY = "EMPTY",
        EXPIRED_QUEUE_TOKEN = "EXPIRED_QUEUE_TOKEN",
        GIFT_CARD_ALREADY_APPLIED = "GIFT_CARD_ALREADY_APPLIED",
        GIFT_CARD_CODE_INVALID = "GIFT_CARD_CODE_INVALID",
        GIFT_CARD_CURRENCY_MISMATCH = "GIFT_CARD_CURRENCY_MISMATCH",
        GIFT_CARD_DEPLETED = "GIFT_CARD_DEPLETED",
        GIFT_CARD_DISABLED = "GIFT_CARD_DISABLED",
        GIFT_CARD_EXPIRED = "GIFT_CARD_EXPIRED",
        GIFT_CARD_NOT_FOUND = "GIFT_CARD_NOT_FOUND",
        GIFT_CARD_UNUSABLE = "GIFT_CARD_UNUSABLE",
        GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
        HIGHER_VALUE_DISCOUNT_APPLIED = "HIGHER_VALUE_DISCOUNT_APPLIED",
        INVALID = "INVALID",
        INVALID_COUNTRY_AND_CURRENCY = "INVALID_COUNTRY_AND_CURRENCY",
        INVALID_FOR_COUNTRY = "INVALID_FOR_COUNTRY",
        INVALID_FOR_COUNTRY_AND_PROVINCE = "INVALID_FOR_COUNTRY_AND_PROVINCE",
        INVALID_PROVINCE_IN_COUNTRY = "INVALID_PROVINCE_IN_COUNTRY",
        INVALID_QUEUE_TOKEN = "INVALID_QUEUE_TOKEN",
        INVALID_REGION_IN_COUNTRY = "INVALID_REGION_IN_COUNTRY",
        INVALID_STATE_IN_COUNTRY = "INVALID_STATE_IN_COUNTRY",
        LESS_THAN = "LESS_THAN",
        LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
        LINE_ITEM_NOT_FOUND = "LINE_ITEM_NOT_FOUND",
        LOCKED = "LOCKED",
        MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED = "MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED",
        MISSING_PAYMENT_INPUT = "MISSING_PAYMENT_INPUT",
        NOT_ENOUGH_IN_STOCK = "NOT_ENOUGH_IN_STOCK",
        NOT_SUPPORTED = "NOT_SUPPORTED",
        PRESENT = "PRESENT",
        PRODUCT_NOT_AVAILABLE = "PRODUCT_NOT_AVAILABLE",
        SHIPPING_RATE_EXPIRED = "SHIPPING_RATE_EXPIRED",
        THROTTLED_DURING_CHECKOUT = "THROTTLED_DURING_CHECKOUT",
        TOO_LONG = "TOO_LONG",
        TOTAL_PRICE_MISMATCH = "TOTAL_PRICE_MISMATCH",
        UNABLE_TO_APPLY = "UNABLE_TO_APPLY",
    }

    enum CollectionSortKeys {
        ID = "id",
        RELEVANCE = "query",
        TITLE = "title",
        UPDATED_AT = "updated_at",
    }

    // TODO: https://shopify.dev/api/storefront/unstable/enums/CountryCode
    type CountryCode = string;

    enum CropRegion {
        BOTTOM = "BOTTOM",
        CENTER = "CENTER",
        LEFT = "LEFT",
        RIGHT = "RIGHT",
        TOP = "TOP",
    }

    // TODO: https://shopify.dev/api/storefront/unstable/enums/CurrencyCode
    type CurrencyCode = string;

    enum CustomerErrorCode {
        ALREADY_ENABLED = "ALREADY_ENABLED",
        BAD_DOMAIN = "BAD_DOMAIN",
        BLANK = "BLANK",
        CONTAINS_HTML_TAGS = "CONTAINS_HTML_TAGS",
        CONTAINS_URL = "CONTAINS_URL",
        CUSTOMER_DISABLED = "CUSTOMER_DISABLED",
        INVALID = "INVALID",
        INVALID_MULTIPASS_REQUEST = "INVALID_MULTIPASS_REQUEST",
        NOT_FOUND = "NOT_FOUND",
        PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE = "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE",
        TAKEN = "TAKEN",
        TOKEN_INVALID = "TOKEN_INVALID",
        TOO_LONG = "TOO_LONG",
        TOO_SHORT = "TOO_SHORT",
        UNIDENTIFIED_CUSTOMER = "UNIDENTIFIED_CUSTOMER",
    }

    enum DeliveryMethodType {
        LOCAL = "LOCAL",
        NONE = "NONE",
        PICKUP_POINT = "PICKUP_POINT",
        PICK_UP = "PICK_UP",
        RETAIL = "RETAIL",
        SHIPPING = "SHIPPING",
    }

    enum DigitalWallet {
        ANDROID_PAY = "ANDROID_PAY",
        APPLE_PAY = "APPLE_PAY",
        FACEBOOK_PAY = "FACEBOOK_PAY",
        GOOGLE_PAY = "GOOGLE_PAY",
        SHOPIFY_PAY = "SHOPIFY_PAY",
    }

    enum DiscountApplicationAllocationMethod {
        ACROSS = "ACROSS",
        EACH = "EACH",
        /**
         * @deprecated
         */
        ONE = "ONE",
    }

    // TODO: https://shopify.dev/api/storefront/unstable/enums/DiscountApplicationTargetSelection
    type DiscountApplicationTargetSelection = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/DiscountApplicationTargetType
    type DiscountApplicationTargetType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/FilterType
    type FilterType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/ImageContentType
    type ImageContentType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/LanguageCode
    type LanguageCode = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/LocationSortKeys
    type LocationSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/MediaContentType
    type MediaContentType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/MediaHost
    type MediaHost = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
    type MenuItemType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/OrderCancelReason
    type OrderCancelReason = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/OrderFinancialStatus
    type OrderFinancialStatus = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/OrderFulfillmentStatus
    type OrderFulfillmentStatus = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/OrderSortKeys
    type OrderSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/PageSortKeys
    type PageSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/PaymentTokenType
    type PaymentTokenType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/ProductCollectionSortKeys
    type ProductCollectionSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/ProductImageSortKeys
    type ProductImageSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/ProductMediaSortKeys
    type ProductMediaSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/ProductSortKeys
    type ProductSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/ProductVariantSortKeys
    type ProductVariantSortKeys = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/SellingPlanCheckoutChargeType
    type SellingPlanCheckoutChargeType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/TransactionKind
    type TransactionKind = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/TransactionStatus
    type TransactionStatus = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/UnitPriceMeasurementMeasuredType
    type UnitPriceMeasurementMeasuredType = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/UnitPriceMeasurementMeasuredUnit
    type UnitPriceMeasurementMeasuredUnit = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/UnitSystem
    type UnitSystem = string;

    // TODO: https://shopify.dev/api/storefront/unstable/enums/WeightUnit
    type WeightUnit = string;
    // end GraphQL Types - Enums

    // GraphQL Types - Unions
    type DeliveryAddress = MailingAddress;
    type Merchandise = ProductVariant;
    type MetafieldParentResource =
        | Article
        | Blog
        | Collection
        | ContentEntry
        | Customer
        | Order
        | Page
        | Product
        | ProductVariant
        | Shop;
    type MetafieldReference =
        | Collection
        | ContentEntry
        | GenericFile
        | MediaImage
        | Page
        | Product
        | ProductVariant
        | Video;
    type PricingValue = MoneyV2 | PricingPercentageValue;
    type SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue;
    type SellingPlanPriceAdjustmentValue =
        | SellingPlanFixedAmountPriceAdjustment
        | SellingPlanFixedPriceAdjustment
        | SellingPlanPercentagePriceAdjustment;
    // end GraphQL Types - Unions

    // GraphQL Types - Interfaces
    interface CartDiscountAllocation {
        discountedAmount: MoneyV2;
    }

    interface DiscountApplication {
        allocationMethod: DiscountApplicationAllocationMethod;
        targetSelection: DiscountApplicationTargetSelection;
        targetType: DiscountApplicationTargetType;
        value: PricingValue;
    }

    interface DisplayableError {
        field: string[];
        message: string;
    }

    interface HasMetafields {
        metafield?: Metafield;
        metafields: Metafield[];
    }

    interface Media {
        alt?: string;
        mediaContentType: MediaContentType;
        previewImage?: Image;
    }

    interface Node {
        id: ID;
    }

    interface OnlineStorePublishable {
        onlineStoreUrl?: URL;
    }
    // end GraphQL Types - Interfaces

    // GraphQL Types - Input Objects
    interface AttributeInput {
        key: string;
        value: string;
    }

    interface CartBuyerIdentityInput {
        countryCode?: CountryCode;
        customerAccessToken?: string;
        deliveryAddressPreferences: DeliveryAddressInput;
        email?: string;
        phone?: string;
    }

    interface CartInput {
        attributes?: AttributeInput[];
        buyerIdentity?: CartBuyerIdentityInput;
        discountCodes?: string[];
        lines?: CartLineInput[];
        note?: string;
    }

    interface CartLineInput {
        attributes?: AttributeInput[];
        merchandiseId: ID;
        quantity?: number;
        sellingPlanId?: number;
    }

    interface CartLineUpdateInput {
        attributes?: AttributeInput[];
        id: ID;
        merchandiseId?: ID;
        quantity?: number;
        sellingPlanId?: ID;
    }

    interface CartSelectedDeliveryOptionInput {
        deliveryGroupId: ID;
        deliveryOptionHandle: string;
    }

    interface CheckoutAttributesUpdateV2Input {
        allowPartialAddresses?: boolean;
        customAttributes?: AttributeInput[];
        note?: string;
    }

    interface CheckoutBuyerIdentityInput {
        countryCode: CountryCode;
    }

    interface CheckoutCreateInput {
        allowPartialAddresses?: boolean;
        buyerIdentity?: CheckoutBuyerIdentityInput;
        customAttributes?: AttributeInput[];
        email?: string;
        lineItems?: CheckoutLineItemInput[];
        note?: string;
        /**
         * @deprecated
         */
        presentmentCurrencyCode?: CurrencyCode;
        shippingAddress?: MailingAddressInput;
    }

    interface CheckoutLineItemInput {
        customAttributes?: AttributeInput[];
        quantity: number;
        variantId: ID;
    }

    interface CheckoutLineItemUpdateInput {
        customAttributes?: AttributeInput[];
        id?: ID;
        quantity?: number;
        variantId?: ID;
    }

    interface ContentEntryHandleInput {
        handle?: string;
        type?: string;
    }

    interface CreditCardPaymentInputV2 {
        billingAddress: MailingAddressInput;
        idempotencyKey: string;
        paymentAmount: MoneyInput;
        test?: boolean;
        vaultId: string;
    }

    interface CustomerAccessTokenCreateInput {
        email: string;
        password: string;
    }

    interface CustomerActivateInput {
        activationToken: string;
        password: string;
    }

    interface CustomerCreateInput {
        acceptsMarketing?: boolean;
        email: string;
        firstName?: string;
        lastName?: string;
        password: string;
        phone?: string;
    }

    interface CustomerResetInput {
        password: string;
        resetToken: string;
    }

    interface CustomerUpdateInput {
        acceptsMarketing?: boolean;
        email?: string;
        firstName?: string;
        lastName?: string;
        password: string;
        phone?: string;
    }

    interface DeliveryAddressInput {
        deliveryAddress?: MailingAddressInput;
    }

    interface GeoCoordinateInput {
        latitude: number;
        longitude: number;
    }

    interface HasMetafieldsIdentifier {
        key: string;
        namespace: string;
    }

    interface ImageTransformInput {
        crop?: CropRegion;
        maxHeight?: number;
        maxWidth?: number;
        preferredContentType?: ImageContentType;
        scale?: number;
    }

    interface MailingAddressInput {
        address1?: string;
        address2?: string;
        city?: string;
        company?: string;
        country?: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        province?: string;
        zip?: string;
    }

    interface MetafieldFilter {
        key: string;
        namespace: string;
        value: string;
    }

    interface MoneyInput {
        amount: number;
        currencyCode: CurrencyCode;
    }

    interface PriceRangeFilter {
        max?: number;
        min?: number;
    }

    interface ProductFilter {
        available?: boolean;
        price?: PriceRangeFilter;
        productMetafield?: MetafieldFilter;
        productType?: string;
        productVendor?: string;
        tag?: string;
        variantMetafield?: MetafieldFilter;
        variantOption?: VariantOptionFilter;
    }

    interface SelectedOptionInput {
        name: string;
        value: string;
    }

    interface TokenizedPaymentInputV3 {
        billingAddress: MailingAddressInput;
        idempotencyKey: string;
        identifier?: string;
        paymentAmount: MoneyInput;
        paymentData: string;
        test?: boolean;
        type: PaymentTokenType;
    }

    interface VariantOptionFilter {
        name?: string;
        value?: string;
    }
    // end GraphQL Types - Input Objects

    /**
     * Checkout
     */
    interface AppliedGiftCard extends Node {
        amountUsed: MoneyV2;
        balance: MoneyV2;
        lastCharacters: string;
        presentmentAmountUsed: MoneyV2;
        /**
         * @deprecated
         */
        amountUsedV2: MoneyV2;
        /**
         * @deprecated
         */
        balanceV2: MoneyV2;
    }

    interface AutomaticDiscountApplication extends DiscountApplication {
        title: string;
    }

    interface AvailableShippingRates {
        ready: boolean;
        shippingRates: null | ShippingRate[];
    }

    interface CartCost {
        checkoutChargeAmount: MoneyV2;
        subtotalAmount: MoneyV2;
        subtotalAmountEstimated: boolean;
        totalAmount: MoneyV2;
        totalAmountEstimated: boolean;
        totalTaxAmount: MoneyV2;
        totalTaxAmountEstimated: boolean;
    }

    interface CartCustomDiscountAllocation extends CartDiscountAllocation {
        title: string;
    }

    interface CartLineCost {
        amountPerQuantity: MoneyV2;
        compareAtAmountPerQuantity: MoneyV2;
        subtotalAmount: MoneyV2;
        totalAmount: MoneyV2;
    }

    interface Checkout extends Node {
        appliedGiftCards: AppliedGiftCard[];
        availableShippingRates?: AvailableShippingRates;
        buyerIdentity: CheckoutBuyerIdentity;
        completedAt?: DateTime;
        createdAt: DateTime;
        currencyCode: CurrencyCode;
        customAttributes: Attribute[];
        email?: string;
        lineItemsSubtotalPrice: MoneyV2;
        note?: string;
        order?: Order;
        orderStatusUrl?: URL;
        paymentDue: MoneyV2;
        ready: boolean;
        requiresShipping: boolean;
        shippingAddress?: MailingAddress;
        shippingDiscountAllocations: DiscountAllocation[];
        shippingLine?: ShippingRate;
        subtotalPrice: MoneyV2;
        taxExempt: boolean;
        taxesIncluded: boolean;
        totalDuties?: MoneyV2;
        totalPrice: MoneyV2;
        totalTax: MoneyV2;
        updatedAt: DateTime;
        webUrl: URL;
        /**
         * @deprecated
         */
        paymentDueV2: MoneyV2;
        /**
         * @deprecated
         */
        subtotalPriceV2: MoneyV2;
        /**
         * @deprecated
         */
        totalPriceV2: MoneyV2;
        /**
         * @deprecated
         */
        totalTaxV2: MoneyV2;
        discountApplications: DiscountApplication[];
        lineItems: CheckoutLineItem[];
    }

    interface CheckoutBuyerIdentity {
        countryCode: CountryCode;
    }

    interface CheckoutLineItem extends Node {
        customAttributes: Attribute[];
        discountAllocations: DiscountAllocation[];
        quantity: number;
        title: string;
        unitPrice?: MoneyV2;
        variant?: ProductVariant;
    }

    interface Company {
        createdAt: DateTime;
        externalId?: string;
        name: string;
        updatedAt: DateTime;
    }

    interface CompanyContact {
        createdAt: DateTime;
        locale?: string;
        title?: string;
        updatedAt: DateTime;
    }

    interface CompanyLocation {
        createdAt: DateTime;
        externalId?: string;
        locale?: string;
        name: string;
        updatedAt: DateTime;
    }

    interface CreditCard {
        brand?: string;
        expiryMonth?: number;
        expiryYear?: number;
        firstDigits?: string;
        firstName?: string;
        lastDigits?: string;
        lastName?: string;
        maskedNumber?: string;
    }

    interface DiscountAllocation {
        allocatedAmount: MoneyV2;
        discountApplication: DiscountApplication;
    }

    interface DiscountCodeApplication extends DiscountApplication {
        applicable: boolean;
        code: string;
    }

    interface Location extends Node {
        address: LocationAddress;
        name: string;
    }

    interface ManualDiscountApplication extends DiscountApplication {
        description?: string;
        title: string;
    }

    interface Payment extends Node {
        amount: MoneyV2;
        billingAddress?: MailingAddress;
        checkout: Checkout;
        creditCard?: CreditCard;
        errorMessage?: string;
        idempotencyKe?: string;
        nextActionUrl?: URL;
        ready: boolean;
        test: boolean;
        transaction?: Transaction;
    }

    interface PaymentSettings {
        acceptedCardBrands: CardBrand[];
        cardVaultUrl: URL;
        countryCode: CountryCode;
        currencyCode: CurrencyCode;
        enabledPresentmentCurrencies: CurrencyCode[];
        shopifyPaymentsAccountId?: string;
        supportedDigitalWallets: DigitalWallet;
    }

    interface PricingPercentageValue {
        percentage: number;
    }

    interface PurchasingCompany {
        company: Company;
        contact?: CompanyContact;
        location: CompanyLocation;
    }

    interface ScriptDiscountApplication extends DiscountApplication {
        title: string;
    }

    interface ShippingRate {
        handle: string;
        price: MoneyV2;
        title: string;
        /**
         * @deprecated
         */
        priceV2: MoneyV2;
    }

    interface StoreAvailability {
        available: boolean;
        location: Location;
        pickUpTime: string;
    }

    interface Transaction {
        amount: MoneyV2;
        kind: TransactionKind;
        statusV2?: TransactionStatus;
        test: boolean;
        /**
         * @deprecated
         */
        amountV2: MoneyV2;
        /**
         * @deprecated
         */
        status: TransactionStatus;
    }

    /**
     * Online Store
     */
    interface Article extends Node, HasMetafields, OnlineStorePublishable {
        authorV2?: ArticleAuthor;
        blog: Blog;
        content: string;
        contentHtml: string;
        excerpt?: string;
        excerptHtml?: string;
        handle: string;
        image?: Image;
        publishedAt: DateTime;
        seo?: SEO;
        tags: string[];
        title: string[];
        /**
         * @deprecated
         */
        author: ArticleAuthor;
        comments: Comment[];
    }

    interface ArticleAuthor {
        bio?: string;
        email: string;
        firstName: string;
        lastName: string;
        name: string;
    }

    interface Blog extends Node, HasMetafields, OnlineStorePublishable {
        articleByHandle?: Article;
        authors: ArticleAuthor[];
        handle: string;
        seo?: SEO;
        title: string;
        articles: Article[];
    }

    interface Comment extends Node {
        author: CommentAuthor;
        content: string;
        contentHtml: string;
    }

    interface CommentAuthor {
        email: string;
        name: string;
    }

    interface LocationAddress {
        address1?: string;
        address2?: string;
        city?: string;
        country?: string;
        countryCode?: string;
        formatted: string[];
        latitude?: number;
        longitude?: number;
        phone?: string;
        province?: string;
        provinceCode?: string;
        zip?: string;
    }

    interface Menu extends Node {
        handle: string;
        items: MenuItem[];
        itemsCount: number;
        title: string;
    }

    interface MenuItem extends Node {
        items: MenuItem[];
        resourceId?: ID;
        tags: string[];
        type: MenuItemType;
        url: URL;
    }

    interface Page extends Node, HasMetafields, OnlineStorePublishable {
        body: string;
        bodySummary: string;
        createdAt: DateTime;
        handle: string;
        seo: SEO;
        title: string;
        updatedAt: DateTime;
    }

    interface Shop extends Node, HasMetafields {
        brand?: Brand;
        description?: string;
        moneyFormat: string;
        name: string;
        paymentSettings: PaymentSettings;
        primaryDomain: Domain;
        privacyPolicy?: ShopPolicy;
        refundPolicy?: ShopPolicy;
        shippingPolicy?: ShopPolicy;
        shipsToCountries: CountryCode;
        subscriptionPolicy?: ShopPolicyWithDefault;
        termsOfService?: ShopPolicy;
    }

    interface ShopPolicy extends Node {
        body: string;
        handle: string;
        title: string;
        url: URL;
    }

    interface ShopPolicyWithDefault {
        body: string;
        handle: string;
        id?: ID;
        title: string;
        url: URL;
    }

    interface UrlRedirect extends Node {
        path: string;
        target: string;
    }

    /**
     * Orders
     */
    interface Fulfillment {
        trackingCompany: string;
        trackingInfo: FulfillmentTrackingInfo[];
        fulfillmentLineItems: FulfillmentLineItem[];
    }

    interface FulfillmentLineItem {
        lineItem: OrderLineItem;
        quantity: number;
    }

    interface FulfillmentTrackingInfo {
        number: string;
        url: URL;
    }

    interface Order extends Node, HasMetafields {
        cancelReason?: OrderCancelReason;
        canceledAt?: DateTime;
        currencyCode: CurrencyCode;
        currentSubtotalPrice: MoneyV2;
        currentTotalDuties?: MoneyV2;
        currentTotalPrice: MoneyV2;
        currentTotalTax: MoneyV2;
        customAttributes: Attribute[];
        customerLocale?: string;
        customerUrl?: URL;
        edited: boolean;
        email?: string;
        financialStatus?: OrderFinancialStatus;
        fulfillmentStatus: OrderFulfillmentStatus;
        name: string;
        orderNumber: number;
        originalTotalDuties?: MoneyV2;
        originalTotalPrice: MoneyV2;
        phone?: string;
        processedAt: DateTime;
        shippingAddress?: MailingAddress;
        shippingDiscountAllocations: DiscountAllocation[];
        statusUrl: URL;
        subtotalPrice?: MoneyV2;
        successfulFulfillments?: Fulfillment[];
        totalPrice: MoneyV2;
        totalRefunded: MoneyV2;
        totalShippingPrice: MoneyV2;
        totalTax?: MoneyV2;
        /**
         * @deprecated
         */
        subtotalPriceV2?: MoneyV2;
        /**
         * @deprecated
         */
        totalPriceV2: MoneyV2;
        /**
         * @deprecated
         */
        totalRefundedV2: MoneyV2;
        /**
         * @deprecated
         */
        totalShippingPriceV2: MoneyV2;
        /**
         * @deprecated
         */
        totalTaxV2?: MoneyV2;
        discountApplications: DiscountAllocation[];
        lineItems: OrderLineItem[];
    }

    interface OrderLineItem {
        currentQuantity: number;
        customAttributes: Attribute[];
        discountAllocations: DiscountAllocation[];
        discountedTotalPrice: MoneyV2;
        originalTotalPrice: MoneyV2;
        quantity: number;
        title: string;
        variant?: ProductVariant;
    }

    /**
     * Products
     */
    interface Collection extends Node, HasMetafields, OnlineStorePublishable {
        description: string;
        descriptionHtml: string;
        handle: string;
        image: Image;
        seo: SEO;
        title: string;
        updatedAt: DateTime;
        products: Product[];
    }

    //  interface ExternalVideo {}

    interface GenericFile extends Node {
        alt?: string;
        mimeType?: string;
        originalFileSize?: number;
        previewImage?: Image;
        url?: URL;
    }

    interface MediaImage extends Node, Media {
        image: Image;
    }

    //  interface Model3d {}

    //  interface Model3dSource {}

    interface Product extends Node, HasMetafields, OnlineStorePublishable {
        availableForSale: boolean;
        compareAtPriceRange: ProductPriceRange;
        createdAt: DateTime;
        description: string;
        descriptionHtml: string;
        featuredImage: Image;
        handle: string;
        isGiftCard: boolean;
        options: ProductOption[];
        priceRange: ProductPriceRange;
        productType: string;
        publishedAt: DateTime;
        requiresSellingPlan: boolean;
        seo: SEO;
        tags: string[];
        title: string;
        totalInventory?: number;
        updatedAt: DateTime;
        variantBySelectedOptions?: ProductVariant;
        vendor: string;
        collections: Collection[];
        images: Image[];
        media: Media[];
        sellingPlanGroups: SellingPlanGroup[];
        variants: ProductVariant[];
    }

    interface ProductOption extends Node {
        name: string;
        values: string;
    }

    interface ProductPriceRange {
        maxVariantPrice: MoneyV2;
        minVariantPrice: MoneyV2;
    }

    interface ProductVariant extends Node, HasMetafields {
        availableForSale: boolean;
        barcode: string;
        compareAtPrice: MoneyV2;
        currentlyNotInStock: boolean;
        image: Image;
        price: MoneyV2;
        product: Product;
        quantityAvailable?: number;
        requiresShipping: boolean;
        selectedOptions: SelectedOption[];
        sku?: string;
        title: string;
        unitPrice?: MoneyV2;
        unitPriceMeasurement?: UnitPriceMeasurement;
        weight?: number;
        weightUnit?: WeightUnit;
        sellingPlanAllocations: SellingPlanAllocation[];
        storeAvailability: StoreAvailability[];
    }

    interface SelectedOption {
        name: string;
        value: string;
    }

    interface SellingPlan extends Node {
        checkoutCharge: SellingPlanCheckoutCharge;
        description?: string;
        name: string;
        options: SellingPlanOption[];
        priceAdjustments: SellingPlanPriceAdjustment[];
        recurringDeliveries: boolean;
    }

    interface SellingPlanAllocation {
        checkoutChargeAmount: MoneyV2;
        priceAdjustments: SellingPlanAllocationPriceAdjustment[];
        remainingBalanceChargeAmount: MoneyV2;
        sellingPlan: SellingPlan;
    }

    interface SellingPlanAllocationPriceAdjustment {
        compareAtPrice: MoneyV2;
        perDeliveryPrice: MoneyV2;
        price: MoneyV2;
        unitPrice?: MoneyV2;
    }

    interface SellingPlanCheckoutCharge {
        type: SellingPlanCheckoutChargeType;
        value: SellingPlanCheckoutChargeValue;
    }

    interface SellingPlanCheckoutChargePercentageValue {
        percentage: number;
    }

    interface SellingPlanFixedAmountPriceAdjustment {
        adjustmentAmount: MoneyV2;
    }

    interface SellingPlanFixedPriceAdjustment {
        price: MoneyV2;
    }

    interface SellingPlanGroup {
        appName?: string;
        name: string;
        options: SellingPlanGroupOption[];
        sellingPlans: SellingPlan[];
    }

    interface SellingPlanGroupOption {
        name: string;
        values: string[];
    }

    interface SellingPlanOption {
        name: string;
        value: string;
    }

    interface SellingPlanPercentagePriceAdjustment {
        adjustmentPercentage: number;
    }

    interface SellingPlanPriceAdjustment {
        adjustmentValue: SellingPlanPriceAdjustmentValue;
        orderCount?: number;
    }

    interface UnitPriceMeasurement {
        measuredType?: UnitPriceMeasurementMeasuredType;
        quantityUnit?: UnitPriceMeasurementMeasuredUnit;
        quantityValue: number;
        referenceUnit?: UnitPriceMeasurementMeasuredUnit;
        referenceValue: number;
    }

    interface Video extends Node, Media {
        sources: VideoSource[];
    }

    interface VideoSource {
        format: string;
        height: number;
        mimeType: string;
        url: string;
        width: number;
    }

    /**
     * Config
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/config.js
     */
    interface ConfigAttrs {
        apiVersion?: string;
        domain: string;
        language?: string;
        source?: string;
        storefrontAccessToken: string;
        /**
         * @deprecated
         */
        accessToken?: string;
        /**
         * @deprecated
         */
        apiKey?: string;
    }

    class Config {
        apiVersion: string;
        domain: string;
        language?: string;
        source?: string;
        storefrontAccessToken: string;

        constructor(attrs: ConfigAttrs);
    }

    /**
     * GraphQL client
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/graphql-client.js
     */

    // TODO: implement from graphql-js-client
    type GraphQLJSClient = unknown;

    /**
     * Collection resource
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/collection-resource.js
     */
    class CollectionResource extends Resource {
        /**
         * Fetches all collections on the shop, not including products.
         * To fetch collections with products use [fetchAllsWithProducts]{@link Client#fetchAllsWithProducts}.
         */
        fetchAll(first?: number): Promise<Collection[]>;

        /**
         * Fetches all collections on the shop, including products.
         */
        fetchAllWithProducts(options?: { first?: number; productsFirst?: number }): Promise<Collection[]>;

        /**
         * Fetches a single collection by ID on the shop, not including products.
         * To fetch the collection with products use [fetchWithProducts]{@link Client#fetchWithProducts}.
         */
        fetch(id: ID): Promise<Collection>;

        /**
         * Fetches a single collection by ID on the shop, including products.
         */
        fetchWithProducts(id: ID, options?: { productsFirst?: number }): Promise<Collection>;

        /**
         * Fetches a collection by handle on the shop.
         */
        fetchByHandle(handle: string): Promise<Collection>;

        /**
         * Fetches all collections on the shop that match the query.
         */
        fetchQuery(options?: {
            first?: number;
            sortKey?: CollectionSortKeys;
            query?: string;
            reverse?: boolean;
        }): Promise<Collection[]>;
    }

    /**
     * Collection resource
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/collection-resource.js
     */
    class CheckoutResource extends Resource {
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
        updateLineItems(checkoutId: ID, lineItems: CheckoutLineItemUpdateInput[]): Promise<Checkout>;

        /**
         * Updates shipping address on an existing checkout.
         */
        updateShippingAddress(checkoutId: ID, shippingAddress: MailingAddressInput): Promise<Checkout>;
    }

    /**
     * Image resource
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/image-resource.js
     */
    class ImageResource extends Resource {
        helpers: {
            /**
             * Generates the image src for a resized image with maximum dimensions `maxWidth` and `maxHeight`.
             * Images do not scale up.
             */
            imageForSize(image: Image, options: { maxWidth: number; maxHeight: number }): string;
        };
    }

    /**
     * Product resource
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/product-resource.js
     */
    class ProductResource extends Resource {
        /**
         * Fetches all products on the shop.
         */
        fetchAll(first?: number): Promise<Product[]>;

        /**
         * Fetches a single product by ID on the shop.
         */
        fetch(id: ID): Promise<Product>;

        /**
         * Fetches multiple products by ID on the shop.
         */
        fetchMultiple(ids: ID[]): Promise<Product[]>;

        /**
         * Fetches a single product by handle on the shop.
         */
        fetchByHandle(handle: string): Promise<Product>;

        /**
         * Fetches all products on the shop that match the query.
         */
        fetchQuery(options?: {
            first?: number;
            sortKey?: ProductSortKeys;
            query?: string;
            reverse?: boolean;
        }): Promise<Product[]>;

        /**
         * Find recommended products related to a given productId.
         * To learn more about how recommendations are generated, see https://shopify.dev/themes/product-merchandising/recommendations.
         */
        fetchRecommendations(productId: ID): Promise<Product[]>;
    }

    /**
     * Resource
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/resource.js
     */
    class Resource {
        graphQLClient: GraphQLJSClient;

        constructor(client: GraphQLJSClient);
    }

    /**
     * Shop Resource
     *
     * @see https://github.com/Shopify/js-buy-sdk/blob/master/src/shop-resource.js
     */
    class ShopResource extends Resource {
        /**
         * Fetches shop information (`currencyCode`, `description`, `moneyFormat`, `name`, and `primaryDomain`).
         * See the {@link https://help.shopify.com/api/storefront-api/reference/object/shop|Storefront API reference} for more information.
         */
        fetchInfo(): Promise<Shop>;

        /**
         * Fetches shop policies (privacy policy, terms of service and refund policy).
         */
        fetchPolicies(): Promise<Shop>;
    }
}

interface FetchOptions {
    body: string;
    method: string;
    mode: string;
    headers: Record<string, string>;
}

type FetchFunction = (url: string, options: FetchOptions) => Promise<unknown>;

declare class ShopifyBuy {
    collection: ShopifyBuy.CollectionResource;
    checkout: ShopifyBuy.CheckoutResource;
    image: ShopifyBuy.ImageResource;
    product: ShopifyBuy.ProductResource;
    shop: ShopifyBuy.ShopResource;

    graphQLClient: ShopifyBuy.GraphQLJSClient;

    /**
     * Primary entry point for building a new Client.
     */
    static buildClient(config: ShopifyBuy.Config, fetchFunction?: FetchFunction): ShopifyBuy;

    constructor(
        config: ShopifyBuy.Config,
        GraphQLClientClass?: ShopifyBuy.GraphQLJSClient,
        fetchFunction?: FetchFunction,
    );

    /**
     * Fetches the next page of models
     */
    fetchNextPage<T extends ShopifyBuy.Node>(models: T[]): Promise<T[]>;
}

export = ShopifyBuy;
export as namespace ShopifyBuy;
