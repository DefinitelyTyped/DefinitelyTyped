// Type definitions for sales-tax 2.3
// Project: https://github.com/valeriansaliou/node-sales-tax
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace SalesTax {
    interface SalesTaxResult {
        type: string;
        rate: number;
        area: "worldwide" | "national" | "regional";
        exchange: "business" | "consumer";
        charge: {
            direct: boolean;
            reverse: boolean;
        };
        details: Array<{ type: string; rate: number }>;
    }

    interface SalesTaxAmountResult extends SalesTaxResult {
        price: number;
        total: number;
    }

    interface TaxExchangeStatus {
        exchange: "business" | "consumer";
        area: "worldwide" | "national" | "regional";
        exempt: boolean;
    }

    class SalesTax {
        hasSalesTax(countryCode: string): boolean;
        hasStateSalesTax(countryCode: string, stateCode: string): boolean;
        getSalesTax(countryCode: string, stateCode?: string | null, taxNumber?: string): Promise<SalesTaxResult>;
        getAmountWithSalesTax(
            countryCode: string,
            stateCode?: string | null,
            amount?: number,
            taxNumber?: string,
        ): Promise<SalesTaxAmountResult>;
        getTaxExchangeStatus(
            countryCode: string,
            stateCode?: string | null,
            taxNumber?: string,
        ): Promise<TaxExchangeStatus>;
        validateTaxNumber(countryCode: string, taxNumber: string): Promise<boolean>;

        setTaxOriginCountry(countryCode: string, useRegionalTax?: boolean): void;
        toggleEnabledTaxNumberFraudCheck(isEnabled: boolean): void;
        toggleEnabledTaxNumberValidation(isEnabled: boolean): void;
    }
}

declare const salesTax: InstanceType<typeof SalesTax.SalesTax>;

export = salesTax;
export as namespace SalesTax;
