// Type definitions for dinero.js 1.4
// Project: https://sarahdayan.github.io/dinero.js
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace Dinero;

export = DineroFactory;

declare function DineroFactory(options?: Dinero.Options): DineroFactory.Dinero;

declare namespace DineroFactory {
    let globalExchangeRatesApi: ExchangeRatesApiOptions;
    let globalFormat: string;
    let globalLocale: string;
    let globalRoundingMode: string;
    function normalizePrecision(objects: Dinero[]): Dinero[];

    interface Options {
        amount?: number;
        currency?: string;
        precision?: number;
    }

    interface Dinero {
        getAmount(): number;
        getCurrency(): string;
        getLocale(): string;
        setLocale(newLocale: string): Dinero;
        getPrecision(): number;
        convertPrecision(newPrecision: number): Dinero;
        add(addend: Dinero): Dinero;
        subtract(subtrahend: Dinero): Dinero;
        multiply(multiplier: number, roundingMode?: RoundingMode): Dinero;
        divide(divisor: number, roundingMode?: RoundingMode): Dinero;
        percentage(percentage: number): Dinero;
        allocate(ratios: number[]): Dinero[];
        convert(currency: string, options?: ExchangeRatesApiOptions): Promise<Dinero>;
        equalsTo(comparator: Dinero): boolean;
        lessThan(comparator: Dinero): boolean;
        lessThanOrEqual(comparator: Dinero): boolean;
        greaterThan(comparator: Dinero): boolean;
        greaterThanOrEqual(comparator: Dinero): boolean;
        isZero(): boolean;
        isPositive(): boolean;
        isNegative(): boolean;
        hasSubUnits(): boolean;
        /**
         * @deprecated since version 2.0
         */
        hasCents(): boolean;
        hasSameCurrency(comparator: Dinero): boolean;
        hasSameAmount(comparator: Dinero): boolean;
        toFormat(format?: string, roundingMode?: RoundingMode): string;
        toUnit(): number;
        toRoundedUnit(digits: number, roundingMode?: RoundingMode): number;
        toObject(): DineroObject;
    }

    type RoundingMode =
        | "HALF_ODD"
        | "HALF_EVEN"
        | "HALF_UP"
        | "HALF_DOWN"
        | "HALF_TOWARDS_ZERO"
        | "HALF_AWAY_FROM_ZERO";

    interface ExchangeRatesApiOptions {
        endpoint: string;
        propertyPath: string;
        headers?: { [header: string]: string };
        roundingMode?: RoundingMode;
    }

    interface DineroObject {
        amount: number;
        currency: string;
        precision: number;
    }
}
