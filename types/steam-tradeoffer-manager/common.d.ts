import TradeOfferManager = require("./index");
import CEconItem = require('steamcommunity/classes/CEconItem');

export type EResultError = Error & { eresult?: TradeOfferManager.EResult; };

export type InventoryCallback = (
    err: Error | null,
    inventory: CEconItem[],
    currencies: CEconItem[]
) => void;
