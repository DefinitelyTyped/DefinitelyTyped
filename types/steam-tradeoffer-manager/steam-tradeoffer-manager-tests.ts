import TradeOfferManager = require("steam-tradeoffer-manager");
import TradeOffer = require("steam-tradeoffer-manager/lib/classes/TradeOffer");
import SteamCommunity = require("steamcommunity");
import SteamUser = require("steam-user");
import Steam = require("steam");
import CEconItem = require("steamcommunity/classes/CEconItem");

// ----- Common Definitions -----
const community = new SteamCommunity();
let manager = new TradeOfferManager();
const user = new SteamUser();
const steam = new Steam.SteamClient();
const offer = manager.createOffer("123");
const item = new CEconItem("a", "b", "c");

// ----- Enums -----

// $ExpectType 2
TradeOfferManager.ETradeOfferState.Active;

// $ExpectType "Active"
TradeOfferManager.ETradeOfferState[2];

// $ExpectType 2
TradeOfferManager.EConfirmationMethod.MobileApp;

// $ExpectType "MobileApp"
TradeOfferManager.EConfirmationMethod[2];

// $ExpectType 3
TradeOfferManager.EOfferFilter.All;

// $ExpectType 1
TradeOfferManager.EResult.OK;

// $ExpectType "OK"
TradeOfferManager.EResult[1];

// $ExpectType 3
TradeOfferManager.ETradeStatus.Complete;

// $ExpectType "Complete"
TradeOfferManager.ETradeStatus[3];

// ----- TradeOfferManager -----

manager = new TradeOfferManager({
    community,
    steam: user,
    domain: "localhost",
    language: "en",
    pollInterval: 60000,
    cancelTime: 60000,
    pendingCancelTime: 60000,
    cancelOfferCount: 5,
    cancelOfferCountMinAge: 60000,
    globalAssetCache: false,
    assetCacheMaxItems: 500,
    assetCacheGcInterval: 120000,
    pollData: "poll_data_object",
    dataDirectory: "/tmp",
    gzipData: true,
    savePollData: true,
});
manager = new TradeOfferManager({
    steam,
});

manager.setCookies(["a=b"]);
manager.setCookies(["a=b"], "123");
manager.setCookies(["a=b"], e => {
    if (e) {
        throw e;
    }
});

manager.shutdown();

manager.parentalUnlock("123");
manager.parentalUnlock("123", e => {
    if (e) {
        throw e;
    }
});

// $ExpectType TradeOffer
manager.createOffer("123");
manager.createOffer(new TradeOfferManager.SteamID("123"));
manager.createOffer("123", "456");

manager.getOffer("123", (err, offer: TradeOffer) => {
    if (err) {
        throw err;
    }
});

manager.getOffers(TradeOfferManager.EOfferFilter.ActiveOnly, (err, sent: TradeOffer[], received: TradeOffer[]) => {
});

manager.getOffers(TradeOfferManager.EOfferFilter.ActiveOnly, new Date(), (err, sent, received) => {
});

manager.getInventoryContents(440, 2, true, (err, inventory: CEconItem[], currencies: CEconItem[]) => {
});

manager.getUserInventoryContents("123", 440, 2, true, (err, inventory: CEconItem[], currencies: CEconItem[]) => {
});

manager.loadInventory(440, 2, true, (err, inventory, currencies) => {
});

manager.loadUserInventory("123", 440, 2, true, (err, inventory, currencies) => {
});

manager.getOfferToken((err, token: string) => {
});

manager.getOffersContainingItem(item, true, (err, sent: TradeOffer[], received: TradeOffer[]) => {
});

manager.getOffersContainingItem(item, (err, sent, received) => {
});

manager.doPoll();

// ----- TradeOffer -----

// $ExpectType boolean
offer.isGlitched();

offer.data("a");
offer.data("a", "b");

offer.getPartnerInventoryContents(440, 2, (err, inventory, currencies) => {
});

offer.loadPartnerInventory(440, 2, (err, inventory, currencies) => {
});

// $ExpectType boolean
offer.addMyItem(item);

// $ExpectType number
offer.addMyItems([item, item]);

// $ExpectType boolean
offer.removeMyItem(item);

// $ExpectType number
offer.removeMyItems([item, item]);

// $ExpectType boolean
offer.addTheirItem(item);

// $ExpectType number
offer.addTheirItems([item, item]);

// $ExpectType boolean
offer.removeTheirItem(item);

// $ExpectType number
offer.removeTheirItems([item, item]);

// $ExpectType boolean
offer.containsItem(item);

offer.setMessage("a");

offer.setToken("a");

offer.getUserDetails((err, me, them) => {
});

offer.send((err, status) => {
    // $ExpectType EResult | undefined
    err?.eresult;
    // $ExpectType "TradeBan" | "NewDevice" | "TargetCannotTrade" | "OfferLimitExceeded" | "ItemServerUnavailable" | undefined
    err?.cause;
});

offer.send();

offer.cancel(err => {
    // $ExpectType EResultError | null
    err;
    // $ExpectType EResult | undefined
    err?.eresult;
});

offer.cancel();

offer.decline(err => {
    // $ExpectType EResultError | null
    err;
    // $ExpectType EResult | undefined
    err?.eresult;
});

offer.decline();

offer.accept(true, (err, status) => {
    // $ExpectType EResult | undefined
    err?.eresult;
    // $ExpectType "TradeBan" | "NewDevice" | "TargetCannotTrade" | undefined
    err?.cause;
});

offer.accept((err, status) => {
    // $ExpectType EResult | undefined
    err?.eresult;
    // $ExpectType "TradeBan" | "NewDevice" | "TargetCannotTrade" | undefined
    err?.cause;
});

offer.accept();

// $ExpectType TradeOffer
offer.duplicate();

// $ExpectType TradeOffer
offer.counter();

offer.update(err => {
    // $ExpectType EResultError | null
    err;
    // $ExpectType EResult | undefined
    err?.eresult;
});

offer.getReceivedItems(true, (err, items) => {
    // $ExpectType Error | null
    err;
});

offer.getReceivedItems((err, items) => {
    // $ExpectType Error | null
    err;
});

offer.getExchangeDetails(false, (err, status, tradeInitTime, receivedItems, sentItems) => {
    // $ExpectType Error | null
    err;
});

offer.getExchangeDetails((err, status, tradeInitTime, receivedItems, sentItems) => {
    // $ExpectType Error | null
    err;
});
