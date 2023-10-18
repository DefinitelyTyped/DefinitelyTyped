interface DigitalGoodsService {
    /**
     * Get details about specific SKUs from the payment provider.
     */
    getDetails: (skus: string[]) => Promise<DigitalGoodsProductDetails[]>;

    /**
     * Get a list of purchases made by the user.
     */
    listPurchases: () => Promise<PurchaseDetails[]>;

    /**
     * Get information about the latest purchases for each item type ever purchased by the user
     */
    listPurchaseHistory: () => Promise<PurchaseDetails[]>;

    /**
     * Consume (i.e. use up) a purchased item.
     */
    consume(purchaseToken: string): Promise<void>;
}

type ItemType = "product" | "subscription";

interface DigitalGoodsProductDetails {
    itemId: string;
    title: string;
    description: string;
    iconURLs: string[];
    subscriptionPeriod: string;
    freeTrialPeriod: string;
    introductoryPricePeriod: string;
    introductoryPriceCycles: number;
    price: PaymentCurrencyAmount;
    type: ItemType;
    introductoryPrice: PaymentCurrencyAmount;
}

interface PurchaseDetails {
    itemId: string;
    purchaseToken: string;
}

interface Window {
    /**
     * Get a DigitalGoodsService instance for the given service provider URL.
     * The URL should be given by your payment provider and support the Digital Goods API (e.g. "https://play.google.com/billing").
     */
    getDigitalGoodsService: (serviceProvider: string) => Promise<DigitalGoodsService>;
}
