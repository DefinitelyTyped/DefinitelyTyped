import { Callback } from '../index';

/*
 * Inventory history in a nutshell.
 *
 * There are no more page numbers. Now you have to request after_time and optionally after_trade.
 * Without "prev" set, you will request 30 trades that were completed FURTHER IN THE PAST than after_time (and optionally after_trade)
 * With "prev" set, you will request 30 trades that were completed MORE RECENTLY than after_time (and optionally after_trade)
 */
export interface InventoryHistory {
    /**
     * @deprecated Use GetTradeHistory instead: https://lab.xpaw.me/steam_api_documentation.html#IEconService_GetTradeHistory_v1
     * @param options
     * @param callback
     */
    getInventoryHistory(options: object, callback: Callback): void;
}
