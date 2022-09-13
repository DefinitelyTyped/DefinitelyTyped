import { appid, assetid, Callback, CallbackError } from '../index';

export interface Market {
    /**
     * Requests a list of all apps which support the Steam Community Market (this list is scraped from the app buttons on the right side of the market home page).
     *
     * @param callback Called when the requested data is available.
     */
    getMarketApps(callback: (
        err: CallbackError,
        // ** An object whose keys are AppIDs and whose values are the names of the apps.
        apps: object,
    ) => any): void;

    /**
     * Check if an item is eligible to be turned into gems and if so, get its gem value.
     * Note that the AppID you need to provide is the AppID of the game to which the item belongs, not 753 (which is the AppID to which Steam Community items actually belong).
     *
     * @param appid
     * @param assetid
     * @param callback
     */
    getGemValue(appid: appid, assetid: assetid, callback: (
        err: CallbackError,
        res: {
            // ** A string containing the title which goes in the prompt shown in the Steam UI, e.g. "Turn into gems?".
            promptTitle: string
            // ** How many gems you'd get if you gemified this item.
            gemValue: number
        },
    ) => any): void;

    /**
     * Turn an eligible item into gems.
     * @param appid
     * @param assetid
     * @param expectedGemsValue
     * @param callback
     */
    turnItemIntoGems(appid: appid, assetid: assetid, expectedGemsValue: number, callback: (
        err: CallbackError,
        res: {
            // ** How many gems you got for this item.
            gemsReceived: number,
            // ** How many gems you have now.
            totalGems: number,
        },
    ) => any): void;

    /**
     * Unpacks a booster pack in your inventory.
     *
     * @param appid The AppID of the game to which the booster pack in question belongs.
     * @param assetid The AssetID of the booster pack in question.
     * @param callback A function to be called when the request completes.
     */
    openBoosterPack(appid: appid, assetid: assetid, callback: (
        err: CallbackError,
        items: Array<{
            image: string,
            name: string,
            series: any,
            foil: boolean
        }>,
    ) => any): void;

    /**
     * Get details about a gift in your Steam Gifts inventory.
     *
     * @param giftID A string containing the assetid of the gift in your inventory.
     * @param callback A function to be called when the requested data is available
     */
    getGiftDetails(giftID: string, callback: (
        err: CallbackError,
        res: {
            // ** The name of this gift.
            giftName: string,
            // ** The ID of the Steam package that you'll be granted if you redeem this gift.
            packageID: any,
            // ** A bool indicating whether your account already owns this package (if true, you can't redeem it because you own it already).
            owned: boolean
        },
    ) => any): void;

    /**
     * Redeem a gift in your Steam Gifts inventory and add it to your library.
     *
     * @param giftID A string containing the assetid of the gift in your inventory.
     * @param callback A function to be called when the request completes.
     */
    redeemGift(giftID: string, callback: Callback): void;

    /**
     * Packs some gems into sacks. If you have multiple gem stacks in your inventory, this can only be used to pack one stack at a time.
     * If you have multiple sack stacks in your inventory, there is no way to specify which stack the newly-acquired stacks should be added to.
     *
     * @param assetid - ID of gem stack you want to pack into sacks
     * @param desiredSackCount - How many sacks you want. You must have at least this amount * 1000 gems in the stack you're packing
     * @param callback A function to be called when the request completes.
     */
    packGemSacks(assetid: assetid, desiredSackCount: number, callback: Callback): void;

    /**
     * Unpacks some sacks of gems. You will receive 1000 gems for eaach sack you unpack.
     * If you have multiple gem stacks in your inventory, there is no way to specify which stack newly-acquired gems should be added to.
     * @param assetid - ID of sack stack you want to unpack (say that 5 times fast).
     * @param sacksToUnpack How many sacks in the stack you want to unpack.
     * @param callback A function to be called when the request completes.
     */
    unpackGemSacks(assetid: assetid, sacksToUnpack: number, callback: Callback): void;
}
