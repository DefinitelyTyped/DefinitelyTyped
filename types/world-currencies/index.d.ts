// Type definitions for world-currencies 0.0
// Project: https://github.com/wiredmax/world-currencies
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = worldCurrencies;

declare const worldCurrencies: Record<string, worldCurrencies.Currency>;

declare namespace worldCurrencies {
    interface Currency {
        name: string;
        iso: IsoData;
        units: {
            major: Unit;
            minor: MinorUnit;
            minor2?: MinorUnit;
        };
        banknotes: CashValues;
        coins: CashValues;
    }

    interface IsoData {
        code: string;
        number: string;
    }

    interface Unit {
        name: string;
        symbol: string;
    }

    interface MinorUnit extends Unit {
        majorValue: number;
    }

    interface CashValues {
        frequent: string[];
        rare: string[];
    }
}
