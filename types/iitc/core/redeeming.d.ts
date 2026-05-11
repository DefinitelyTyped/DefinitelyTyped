export {};

declare global {
    interface ResultData {
        other: string[];
        xm: string;
        ap: string;
        inventory: any;
    }
    var REDEEM_SHORT_NAMES: { [key: string]: string };

    /** These are HTTP status codes returned by the redemption API. */
    var REDEEM_STATUSES: { [key: number]: string };

    function handleRedeemResponse(data: ResultData, textStatus: any, jqXHR: JQuery.jqXHR): void;

    function formatPasscodeLong(data: ResultData): void;
    function formatPasscodeShort(data: ResultData): void;

    function setupRedeem(): void;
}
