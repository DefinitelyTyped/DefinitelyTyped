export = CEconItem;

declare function CEconItem(item: any, description: any, contextID: any): void;

/**
 * A class which represents an item within the Steam Economy. Returned by calls to {@link CSteamUser#getInventory} or {@link SteamCommunity#getUserInventory}.
 */
declare class CEconItem {
    constructor(item: any, description: any, contextID: any);

    currencyid: any;
    is_currency: boolean;
    owner: any;
    market_fee_app: number;
    cache_expiration: any;
    actions: any[];

    /** The item's unique ID within its app+context. */
    id: any;
    /** Alias of id. */
    assetid: any;
    /** The ID of the context within the app in which the item resides. */
    contextid: any;
    /** The ID of the app which owns the item. */
    appid: any;
    /** The first half of the item cache identifier. The classid is enough to get you basic details about the item. */
    classid: any;
    /** The second half of the item cache identifier. */
    instanceid: any;
    /** How much of this item is in this stack. */
    amount: number;
    /** The item's position within the inventory (starting at 1). Not defined if this item wasn't retrieved directly from an inventory (e.g. from a trade offer or inventory history). */
    pos: any;
    /** The item's display name. */
    name: any;
    /** The item's universal market name. This identifies the item's market listing page. */
    market_hash_name: any;
    /** The render color of the item's name, in hexadecimal. */
    name_color: any;
    /** The displayed background color, in hexadecimal. */
    background_color: any;
    /** The "type" that's shown under the game name to the right of the game icon. */
    type: any;
    /** true if the item can be traded, false if not. */
    tradable: boolean;
    /** true if the item can be listed on the Steam Community Market, false if not. */
    marketable: boolean;
    /** true if, on the Steam Community Market, this item will use buy orders. false if not. */
    commodity: boolean;
    /** How many days for which the item will be untradable after being sold on the market. */
    market_tradable_restriction: number;
    /** How many days for which the item will be unmarketable after being sold on the market. */
    market_marketable_restriction: number;
    /** An array of objects containing information about the item. Displayed under the item's type. */
    descriptions: any[];
    /**
     * An array of strings containing "fraud warnings" about the item.
     * In inventories and trades, items with fraud warnings have a red (!) symbol, and fraud warnings are displayed in red under the item's name.
     */
    fraudwarnings: any[];
    /** An array of objects containing the item's inventory tags. */
    tags: any;
    /** Not always present. An object containing arbitrary data as reported by the game's item server. */
    app_data: any;

    /**
     * Returns a URL where this item's image can be downloaded.
     */
    getImageURL(): string;

    /**
     * Same as getImageURL(), except for the item's large image, if present.
     */
    getLargeImageURL(): string;

    /**
     * Returns a specific tag from the item, or null if it doesn't exist.
     *
     * @param category A string containing the tag's category (the category property of the tag object).
     */
    getTag(category: string): any;
}
