import { appid } from '../index';

export = CMarketSearchResult;

declare function CMarketSearchResult(row: any): void;

/**
 * A class which represents a search result on the Steam Community Market. Returned in the callback to marketSearch.
 */
declare class CMarketSearchResult {
    constructor(row: any);

    /** The AppID of the game to which this item belongs. */
    appid: appid;
    /** The market_hash_name of the item, otherwise known as the English version of the item's name on the market. */
    market_hash_name: string;
    /** A URL to a 512x512 image of this item. You can get custom sizes by simply appending your desired size to this URL. For example, to get a 64x64 image, just use item.image + '64x64'. */
    image: string;
    /** The lowest price of this item on the market, in the lowest denomination of your currency (e.g. USD cents). */
    price: number;
    /** How many of this item there are currently listed on the market. */
    quantity: number;
}
