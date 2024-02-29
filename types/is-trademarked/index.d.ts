export = isTrademarked;

declare function isTrademarked(
    searchTerm: string,
    opts?: isTrademarked.Options,
): Promise<false | isTrademarked.TrademarkedData[]>;

declare namespace isTrademarked {
    interface Options {
        token?: string | undefined;
    }

    interface TrademarkedData {
        wordmark: string;
        reg: Date;
        description: string;
        sn: string;
        serviceCode: string;
    }
}
