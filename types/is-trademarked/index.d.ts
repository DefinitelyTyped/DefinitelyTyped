// Type definitions for is-trademarked 1.2
// Project: https://github.com/egoist/is-trademarked#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isTrademarked;

declare function isTrademarked(
    searchTerm: string,
    opts?: isTrademarked.Options
): Promise<false | isTrademarked.TrademarkedData[]>;

declare namespace isTrademarked {
    interface Options {
        token?: string;
    }

    interface TrademarkedData {
        wordmark: string;
        reg: Date;
        description: string;
        sn: string;
        serviceCode: string;
    }
}
