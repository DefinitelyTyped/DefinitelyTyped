export = CMarketItem;

declare function CMarketItem(appid: any, hashName: any, community: any, body: any, $: any): void;

declare class CMarketItem {
    constructor(appid: any, hashName: any, community: any, body: any, $: any);

    /** `true` if this is a commodity item (buy/sell orders) or `false` otherwise. */
    commodity: boolean;
    /** If this is a commodity item, this will be the item's commodity ID. Not defined otherwise. */
    commodityID: number;
    medianSalePrices: Array<{
        /** A Date object representing the hour that this object contains data for. */
        hour: Date,
        /** The median price at which this item was sold during this hour (as a float). */
        price: number,
        /** The amount of this item which was sold during this hour. */
        quantity: number,
    }>;
    firstAsset: any;
    assets: any;
    /** How many copies of this item are currently available on the market. */
    quantity: number;
    /** The lowest price at which this item is sold, in cents. */
    lowestPrice: number;

    /**
     * If this is a commodity item, you can call this to fetch the latest prices.
     * If not a commodity, this will throw an Error. Once complete, quantity, lowestPrice, buyQuantity, and highestBuyOrder will be updated.
     *
     * @param currency
     * @param callback Optional. Fired when the data is updated.
     */
    updatePrice(currency: string, callback?: any): void;
}
