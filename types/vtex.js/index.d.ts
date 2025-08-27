declare namespace vtexjs {
    const catalog: InstanceType<typeof Catalog>;
    const checkout: InstanceType<typeof Checkout>;

    class Catalog {
        constructor(options: { hostURL?: string; ajax?: unknown; promise?: unknown });
        getProductWithVariations: (productId: number) => Promise<SkuJson>;
        getCurrentProductWithVariations: () => Promise<SkuJson>;
    }

    class Checkout {
        constructor(options: { hostURL?: string; ajax?: unknown; promise?: unknown });
        CHECKOUT_ID: "checkout";
        orderForm: OrderForm;
        orderFormId: string;

        addBundleItemAttachment: (
            itemIndex: number,
            bundleItemId: string,
            attachmentName: string,
            content: string,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        addDiscountCoupon: (couponCode: string, expectedOrderFormSections?: OrderFormSections[]) => Promise<OrderForm>;
        addItemAttachment: (
            itemIndex: number,
            attachmentName: string,
            content: string,
            expectedOrderFormSections?: OrderFormSections[],
            splitItem?: boolean,
        ) => Promise<OrderForm>;
        addOffering: (
            offeringId: string,
            itemIndex: number,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        addOfferingWithInfo: (
            offeringId: string,
            offeringInfo: unknown,
            itemIndex: number,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        addToCart: (items: Item[], expectedOrderFormSections?: string[], salesChannel?: string) => Promise<OrderForm>;
        calculateShipping: (address: Address) => Promise<OrderForm>;
        changeItemsOrdination: (
            criteria: string,
            ascending: boolean,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        clearMessages: (expectedOrderFormSections?: OrderFormSections[]) => Promise<OrderForm>;
        cloneItem: (
            itemIndex: number,
            newItemsOptions: Partial<Item>,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        finishTransaction: (
            orderGroupId: string,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        getAddressInformation: (address: Address) => Promise<OrderForm>;
        getChangeToAnonymousUserURL: () => string;
        getLogoutURL: () => string;
        getOrderForm: () => Promise<OrderForm>;
        getOrders: (orderGroupId: string) => Promise<OrderForm>;
        getProfileByEmail: (email: string, salesChannel?: string) => Promise<OrderForm>;
        removeAccountId: (accountId: string, expectedOrderFormSections?: OrderFormSections[]) => Promise<OrderForm>;
        removeAllItems: (expectedOrderFormSections?: OrderFormSections[]) => Promise<OrderForm>;
        removeBundleItemAttachment: (
            itemIndex: number,
            bundleItemId: string,
            attachmentName: string,
            content: string,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        removeDiscountCoupon: (expectedOrderFormSections?: OrderFormSections[]) => Promise<OrderForm>;
        removeGiftRegistry: (expectedOrderFormSections?: OrderFormSections[]) => Promise<OrderForm>;
        removeItemAttachment: (
            itemIndex: number,
            attachmentName: string,
            content: string,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        removeItems: (
            items: PartialItemUpdate[],
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        removeManualPrice: (itemIndex: number) => Promise<OrderForm>;
        removeOffering: (
            offeringId: string,
            itemIndex: number,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        replaceSKU: (
            items: Item[],
            expectedOrderFormSections?: OrderFormSections[],
            splitItem?: boolean,
        ) => Promise<OrderForm>;
        sendAttachment: (
            attachmentId: string,
            attachment: string,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
        sendLocale: (locale: string) => Promise<OrderForm>;
        setCustomData: (params: { value: unknown; app: string; field: string }) => Promise<OrderForm>;
        setManualPrice: (itemIndex: number, manualPrice: any) => Promise<OrderForm>;
        simulateShipping:
            | ((
                items: Item[],
                postalCode: string,
                country: string,
                salesChannel?: number,
            ) => Promise<{ LogisticsInfo: LogisticsInfo }>)
            | ((
                shippingData: unknown,
                orderFormId: string,
                country: string,
                salesChannel?: number,
            ) => Promise<{ LogisticsInfo: LogisticsInfo }>);
        updateItems: (
            items: PartialItemUpdate[],
            expectedOrderFormSections?: OrderFormSections[],
            splitItem?: boolean,
        ) => Promise<OrderForm>;
        updateSelectableGifts: (
            list: string,
            selectedGifts: unknown,
            expectedOrderFormSections?: OrderFormSections[],
        ) => Promise<OrderForm>;
    }

    interface OrderFormMarketingData {
        utmCampaign?: string;
        utmMedium?: string;
        utmSource?: string;
        utmiCampaign?: string;
        utmiPart?: string;
        utmipage?: string;
        marketingTags?: string;
        coupon?: string;
    }

    interface CheckoutAddress {
        addressId: string;
        addressType: string;
        city?: string;
        complement?: string;
        country: string;
        geoCoordinates: number[];
        neighborhood?: string;
        number?: string;
        postalCode?: string;
        receiverName?: string;
        reference?: string;
        state?: string;
        street?: string;
        isDisposable: boolean;
    }

    type AddressFields = keyof CheckoutAddress;

    interface CountryDataSchema {
        countryISO: string;
        addressFields: AddressFieldsSchema;
        phone: PhoneSchema;
    }

    type AddressFieldsSchema = {
        [field in AddressFields]: AddressFieldSchema;
    };

    interface PostalCodeSchema {
        forgottenURL?: string;
    }

    interface AddressFieldSchema {
        label: string;
        name?: AddressFields | "addressType";
        hidden?: boolean;
        maxLength?: number;
        size?: string;
        required?: boolean;
        autoComplete?: string;
        optionsCaption?: string;
        options?: AddressOption[];
        elementName?: string;
        mask?: string;
    }

    interface AddressOption {
        label: string;
        value: string;
    }

    interface BusinessHour {
        DayOfWeek: number;
        ClosingTime: string;
        OpeningTime: string;
    }

    interface NormalizedBusinessHour {
        dayNumber: string | number;
        closed: boolean;
        closingTime: string;
        openingTime: string;
    }

    interface PhoneSchema {
        countryCode: string;
        mask?: string;
        pattern: string;
    }

    interface ItemAdditionalInfo {
        dimension: string;
        brandName: string;
        brandId: string;
        offeringInfo?: string;
        offeringType?: string;
        offeringTypeId?: string;
    }

    interface Attachment {
        name: string;
        content: unknown;
    }
    interface OrderFormItem {
        id: string;
        name: string;
        detailUrl: string;
        imageUrl: string;
        skuName: string;
        quantity: number;
        uniqueId: string;
        productId: string;
        refId: string;
        ean: string;
        priceValidUntil: string;
        price: number;
        tax: number;
        listPrice: number;
        sellingPrice: number;
        rewardValue: number;
        isGift: boolean;
        parentItemIndex?: number;
        parentAssemblyBinding?: string;
        productCategoryIds: string;
        priceTags: string[];
        manualPrice: number;
        measurementUnit: string;
        additionalInfo: ItemAdditionalInfo;
        productCategories: Record<string, string>;
        productRefId: string;
        seller: string;
        sellerChain: string[];
        availability: string;
        unitMultiplier: number;
        skuSpecifications: SKUSpecification[];
        priceDefinition: priceDefinition;
        attachments?: Attachment[];
    }

    interface priceDefinition {
        calculatedSellingPrice: number;
        sellingPrices: SellingPrice[];
        total: number;
        reason?: unknown;
    }

    interface SellingPrice {
        quantity: number;
        value: number;
    }

    interface SKUSpecification {
        fieldName: string;
        fieldValues: string[];
    }

    interface CompositionItem {
        id: string;
        minQuantity: number;
        maxQuantity: number;
        initialQuantity: number;
        priceTable: string;
        seller: string;
    }

    interface Composition {
        minQuantity: number;
        maxQuantity: number;
        items: CompositionItem[];
    }

    interface AssemblyOption {
        id: string;
        name: string;
        composition?: Composition;
    }

    interface SubscriptionDataEntry {
        executionCount: number;
        itemIndex: number;
        plan: {
            frequency: {
                interval: number;
                periodicity: "YEAR" | "MONTH" | "WEEK" | "DAY";
            };
            type: string;
            validity: {};
        };
    }

    interface SubscriptionData {
        subscriptions: SubscriptionDataEntry[];
    }

    interface MetadataItem {
        id: string;
        name: string;
        imageUrl: string;
        detailUrl: string;
        seller: string;
        assemblyOptions: AssemblyOption[];
        skuName: string;
        productId: string;
        refId: string;
        ean?: string;
    }
    interface AddedItem {
        choiceType: string;
        compositionItem: CompositionItem;
        extraQuantity: number;
        item: OrderFormItem;
        normalizedQuantity: number;
    }

    interface RemovedItem {
        initialQuantity: number;
        name: string;
        removedQuantity: number;
    }

    interface AvailableGift {
        items: Item[];
        isSelected: boolean;
    }

    interface SelectableGift {
        id: string;
        availableQuantity: string;
        availableGifts: AvailableGift[];
    }

    interface OrderForm {
        orderFormId: string;
        salesChannel: string;
        loggedIn: boolean;
        isCheckedIn: boolean;
        storeId?: string;
        checkedInPickupPointId?: string;
        allowManualPrice: boolean;
        canEditData: boolean;
        userProfileId?: string;
        userType?: string;
        ignoreProfileData: boolean;
        value: number;
        messages: Message[];
        items: OrderFormItem[];
        selectableGifts: SelectableGift[];
        totalizers: Totalizer[];
        shippingData?: ShippingData;
        clientProfileData?: ClientProfileData;
        paymentData: PaymentData;
        marketingData?: OrderFormMarketingData;
        sellers: Seller[];
        clientPreferencesData: ClientPreferencesData;
        commercialConditionData?: any;
        storePreferencesData: storePreferencesData;
        giftRegistryData?: GiftRegistryData;
        openTextField?: OpenTextField;
        invoiceData?: any;
        customData?: any;
        itemMetadata?: {
            items: MetadataItem[];
        };
        hooksData?: any;
        ratesAndBenefitsData: {
            rateAndBenefitsIdentifiers: any[];
            teaser: any[];
        };
        subscriptionData?: SubscriptionData;
        itemsOrdination?: ItemsOrdinationArgs;
    }

    interface GiftRegistryData {
        attachmentId: string;
        giftRegistryId: string;
        giftRegistryType: string;
        giftRegistryTypeName: string;
        addressId: string;
        description: string;
    }

    interface storePreferencesData {
        countryCode: string;
        currencyCode: string;
        currencyFormatInfo: CurrencyFormatInfo;
        currencyLocale: number;
        currencySymbol: string;
        saveUserData: boolean;
        timeZone: string;
    }

    interface CurrencyFormatInfo {
        currencyDecimalDigits: number;
        currencyDecimalSeparator: string;
        currencyGroupSeparator: string;
        currencyGroupSize: number;
        startsWithCurrencySymbol: boolean;
    }

    interface Seller {
        id: string;
        name: string;
        logo: string;
    }

    interface Message {
        code: string;
        status: string;
        text: string;
    }

    interface Totalizer {
        id: "Items" | "Shipping" | "Tax" | "Discounts";
        name: string;
        value: number;
    }

    interface ClientProfileData {
        email: string;
        firstName: string;
        lastName: string;
        document: string;
        documentType: string;
        phone: string;
        corporateName: string;
        tradeName: string;
        corporateDocument: string;
        stateInscription: string;
        corporatePhone: string;
        isCorporate: boolean;
        profileCompleteOnLoading: boolean;
        profileErrorOnLoading: boolean;
        customerClass: string;
    }

    interface sellerMerchantInstallments {
        count: number;
        hasInterestRate: boolean;
        interestRate: number;
        value: number;
        total: number;
    }

    interface Installment {
        count: number;
        hasInterestRate?: boolean;
        interestRate?: number;
        value?: number;
        total: number;
        sellerMerchantInstallments: sellerMerchantInstallments[];
    }

    interface InstallmentOption {
        paymentSystem: string;
        bin?: string;
        paymentName?: string;
        paymentGroupName?: string;
        value: number;
        installments: Installment[];
    }

    interface GiftCard {
        redemptionCode: string;
        value: number;
        balance: number;
        name: string;
        id: string;
        inUse: boolean;
        isSpecialCard: boolean;
    }

    interface AvailableAccount {
        accountId: string;
        paymentSystem: string;
        paymentSystemName: string;
        cardNumber: string;
        availableAddresses: string[];
    }

    interface PaymentData {
        installmentOptions: InstallmentOption[];
        paymentSystems: PaymentSystem[];
        payments: Payment[];
        giftCards: GiftCard[];
        giftCardMessages: any[];
        availableAccounts: AvailableAccount[];
        availableTokens: any[];
    }

    interface PaymentSystem {
        id: number;
        name: string;
        groupName: string;
        validator: Validator;
        stringId: string;
        template: string;
        requiresDocument: boolean;
        selected: boolean;
        isCustom: boolean;
        description: string;
    }

    interface Validator {
        regex: string;
        mask: string;
        cardCodeRegex: string;
        cardCodeMask: string;
        weights: number[];
    }

    interface ShippingData {
        address?: CheckoutAddress;
        logisticsInfo: LogisticsInfo[];
        selectedAddresses: CheckoutAddress[];
        availableAddresses: CheckoutAddress[];
        pickupPoints: PickupPoint[];
    }

    interface PickupPoint {
        friendlyName: string;
        address: CheckoutAddress;
        additionalInfo: string;
        id: string;
        businessHours: BusinessHour[];
    }

    interface LogisticsInfo {
        addressId?: string;
        deliveryChannels: DeliveryChannel[];
        itemId: string;
        itemIndex: number;
        shipsTo: string[];
        slas: SLA[];
        selectedDeliveryChannel?: string;
        selectedSla?: string;
    }

    interface DeliveryChannel {
        id: "pickup-in-point" | "delivery";
    }

    interface AvailableDeliveryWindow {
        endDateUtc: string;
        listprice: number;
        startDateUtc: string;
        tax: number;
    }

    interface SLA {
        id: string;
        deliveryChannel: string;
        name: string;
        deliveryIds: DeliveryId[];
        shippingEstimate: string;
        shippingEstimateDate?: string;
        lockTTL?: string;
        availableDeliveryWindows: AvailableDeliveryWindow[];
        deliveryWindow?: string;
        price: number;
        listPrice: number;
        tax: number;
        pickupStoreInfo: PickupStoreInfo;
        pickupPointId?: string;
        pickupDistance?: number;
        polygonName?: string;
        transitTime?: string;
    }

    interface PickupStoreInfo {
        isPickupStore: boolean;
        friendlyName?: string;
        address?: CheckoutAddress;
        additionalInfo?: any;
        dockId?: string;
    }

    interface DeliveryId {
        courierId: string;
        warehouseId: string;
        dockId: string;
        courierName: string;
        quantity: number;
    }

    interface ShippingDataRequest {
        logisticsInfo: LogisticsInfo[];
        selectedAddresses: CheckoutAddress[];
        clearAddressIfPostalCodeNotFound?: boolean;
    }

    interface OrderFormItemInput {
        id?: number;
        index?: number;
        quantity?: number;
        seller?: string;
        uniqueId?: string;
        options?: AssemblyOptionInput[];
    }

    interface AssemblyOptionInput {
        id: string;
        quantity: number;
        assemblyId: string;
        seller: string;
        inputValues: Record<string, string>;
        options?: AssemblyOptionInput[];
    }

    interface Item {
        additionalInfo: {
            dimension?: string;
            brandName: string;
            brandId: string;
            offeringInfo?: any;
            offeringType?: any;
            offeringTypeId?: any;
        };
        availability: string;
        detailUrl: string;
        id: string;
        imageUrls?: {
            at1x: string;
            at2x: string;
            at3x: string;
        };
        isGift: boolean;
        listPrice: number;
        measurementUnit: string;
        name: string;
        price: number;
        productId: string;
        productCategories: Record<string, string>;
        productCategoryIds: string;
        productRefId: string;
        quantity: number;
        sellingPrice: number;
        skuName: string;
        skuSpecifications: SKUSpecification[];
        uniqueId: string;
    }

    interface Shipping {
        availableAddresses: CheckoutAddress[];
        countries: string[];
        deliveryOptions: DeliveryOption[];
        pickupOptions: PickupOption[];
        selectedAddress?: CheckoutAddress;
    }

    interface DeliveryOption {
        id: string;
        price: number;
        estimate: string;
        isSelected: boolean;
    }

    interface PickupOption {
        id: string;
        price: number;
        estimate: string;
        isSelected: boolean;
    }

    interface OrderFormMessages {
        couponMessages: Message[];
        generalMessages: Message[];
    }

    interface Message {
        code: string;
        text: string;
        status: string;
    }

    interface PaymentSession {
        id: string;
        name: string;
        expiresAt: string;
    }

    interface SavePaymentTokenPayload {
        status: string;
    }

    interface UserProfileInput {
        email?: string;
        firstName?: string;
        lastName?: string;
        document?: string;
        phone?: string;
        documentType?: string;
        isCorporate?: boolean;
        corporateName?: string;
        tradeName?: string;
        corporateDocument?: string;
        stateInscription?: string;
    }

    interface ClientPreferencesDataInput {
        optInNewsletter?: boolean;
        locale?: string;
    }

    interface ClientPreferencesData {
        optinNewsLetter?: boolean;
        locale?: string;
    }

    interface PaymentInput {
        paymentSystem?: string;
        bin?: string;
        accountId?: string;
        tokenId?: string;
        installments?: number;
        referenceValue?: number;
        value?: number;
    }

    interface PaymentDataInput {
        payments: PaymentInput[];
    }

    interface ItemsOrdinationArgs {
        ascending: boolean;
        criteria: ItemsOrdinationCriteria;
    }

    enum ItemsOrdinationCriteria {
        name,
        add_time,
    }

    interface OpenTextField {
        value?: string;
    }

    interface Payment {
        paymentSystem: string;
        bin: string;
        accountId: string;
        tokenId: string;
        installments: number;
        referenceValue: number;
        value: number;
    }

    type OrderFormSections =
        | "items"
        | "totalizers"
        | "clientProfileData"
        | "shippingData"
        | "paymentData"
        | "sellers"
        | "messages"
        | "marketingData"
        | "clientPreferencesData"
        | "storePreferencesData"
        | "giftRegistryData"
        | "ratesAndBenefitsData"
        | "openTextField"
        | "commercialConditionData"
        | "customData";

    interface GeoCoordinates {
        latitude: string;
        longitude: string;
    }

    interface Address {
        addressId?: string;
        addressType?: string;
        city?: string;
        complement?: string;
        country: string;
        geoCoordinates?: GeoCoordinates;
        isDisposable?: boolean;
        neighborhood?: string;
        number?: string;
        postalCode: string;
        receiverName?: string;
        reference?: string;
        state?: string;
        street?: string;
        completed?: boolean;
        selectedSlaId?: string;
    }

    interface PartialItemUpdate {
        index: number;
        quantity: number;
    }

    interface SkuJson {
        productId: number;
        name: string;
        salesChannel: string;
        available: boolean;
        displayMode: string;
        dimensions: any[];
        dimensionsInputType: any;
        dimensionsMap: any;
        skus: SkuJsonSku[];
    }

    interface Measures {
        cubicweight: number;
        height: number;
        length: number;
        weight: number;
        width: number;
    }

    interface SkuJsonSku {
        sku: number;
        skuname: string;
        dimensions: any;
        available: boolean;
        availablequantity: number;
        cacheVersionUsedToCallCheckout: string;
        listPriceFormated: string;
        fullSellingPrice: string;
        listPrice: number;
        taxFormated: string;
        taxAsInt: number;
        bestPriceFormated: string;
        bestPrice: number;
        spotPrice: number;
        installments: number;
        installmentsValue: number;
        installmentsInsterestRate: number;
        image: string;
        sellerId: string;
        seller: string;
        measures: Measures;
        unitMultiplier: number;
        rewardValue: number;
        values: any[];
        discount?: number;
        hasDiscount?: boolean;
        validListPrice: boolean;
        validBestPrice: boolean;
    }
}
