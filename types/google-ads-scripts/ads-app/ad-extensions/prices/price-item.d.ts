declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface PriceItem {
            getAmount(): number;
            getCurrencyCode(): string;
            getDescription(): string;
            getFinalUrl(): string;
            getHeader(): string;
            getMobileFinalUrl(): string;
            getUnitType(): string;
            remove(): void;
        }

        interface PriceItemBuilder extends Base.Builder<PriceItemOperation> {
            withAmount(amount: number): this;
            withCurrencyCode(code: string): this;
            withDescription(description: string): this;
            withFinalUrl(finalUrl: string): this;
            withHeader(header: string): this;
            withMobileFinalUrl(mobileFinalUrl: string): this;
            withUnitType(unitType: string): this;
        }

        interface PriceItemIterator extends Base.Iterator<PriceItem> {}

        interface PriceItemOperation extends Base.Operation<PriceItem> {}
    }
}
