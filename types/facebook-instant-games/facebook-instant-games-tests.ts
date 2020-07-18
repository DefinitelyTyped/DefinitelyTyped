const locale: string = FBInstant.getLocale()!;
const platform: string = FBInstant.getPlatform()!;
const sdkVersion: string = FBInstant.getSDKVersion();
FBInstant.initializeAsync().then(() => {});
FBInstant.setLoadingProgress(10);
const supportedAPIs = FBInstant.getSupportedAPIs();
const entryPointData = FBInstant.getEntryPointData();
FBInstant.getEntryPointAsync().then(entryPointName => {});
FBInstant.setSessionData({sessionData: "sessionData"});
FBInstant.startGameAsync().then(() => {});

const sharePayload = {
    intent: "INVITE" as "INVITE",
    image: "",
    text: "text",
    data: {score: 10},
};
FBInstant.shareAsync(sharePayload);

const customUpdatePayload = {
    action: "CUSTOM" as "CUSTOM",
    template: "template",
    cta: "cta",
    image: "image",
    text: {
        default: 'Edgar played their move',
        localizations: {
            en_US: 'Edgar played their move',
            es_LA: '\u00A1Edgar jug\u00F3 su jugada!'
        }
    },
};
FBInstant.updateAsync(customUpdatePayload).then(() => {});

const leaderboardUpdatePayload: FBInstant.LeaderboardUpdatePayload = {
    action: "LEADERBOARD",
    name: "name",
    text: "text"
};
FBInstant.updateAsync(leaderboardUpdatePayload).then(() => {});
FBInstant.switchGameAsync("appID").then(() => {});

FBInstant.canCreateShortcutAsync().then((canCreateShortcut: boolean) => {});
FBInstant.createShortcutAsync().then(() => {});
FBInstant.quit();
const apiError = FBInstant.logEvent("eventName", 10, {key1: "value1", key2: "value2"});
FBInstant.onPause(() => { });

FBInstant.getInterstitialAdAsync("placementID").then(adInstance => {});
FBInstant.getRewardedVideoAsync("placementID").then(adInstance => {
    const placementID: string = adInstance.getPlacementID();
    adInstance.loadAsync().then(() => {});
    adInstance.showAsync().then(() => {});
});

FBInstant.matchPlayerAsync("matchTag", false, false).then(() => {});
FBInstant.checkCanPlayerMatchAsync().then((canPlayerMatchAsync: boolean) => {});
FBInstant.getLeaderboardAsync("name").then((leaderboard: FBInstant.Leaderboard) => {
    leaderboard.getConnectedPlayerEntriesAsync(10, 0).then(leaderboardEntries => {
        const leaderboardEntry = leaderboardEntries[0];
        const extraData: string = leaderboardEntry.getExtraData()!;
        const formattedScore: string = leaderboardEntry.getFormattedScore();

        const leaderboardPlayer = leaderboardEntry.getPlayer();
        const leaderboardPlayerID: string = leaderboardPlayer.getID()!;
        const leaderboardPlayerName: string = leaderboardPlayer.getName();
        const leaderboardPlayerPhoto: string = leaderboardPlayer.getPhoto()!;

        const rank: number = leaderboardEntry.getRank();
        const score: number = leaderboardEntry.getScore();
        const timestamp: number = leaderboardEntry.getTimestamp();
    });
    const contextID: string = leaderboard.getContextID()!;
    leaderboard.getEntriesAsync(10, 10).then(entries => {});
    leaderboard.getEntryCountAsync().then((entryCount: number) => {});
    const name: string = leaderboard.getName();
    leaderboard.getPlayerEntryAsync().then(playerEntry => {});
    leaderboard.setScoreAsync(10).then(leaderboardEntry => {});
});
FBInstant.postSessionScore(10);

FBInstant.player.canSubscribeBotAsync().then((canSubscribeBot: boolean) => {});
FBInstant.player.flushDataAsync().then(() => {});
FBInstant.player.getConnectedPlayersAsync().then((connectedPlayers: FBInstant.ConnectedPlayer[]) => {
    const connectedPlayer: FBInstant.ConnectedPlayer = connectedPlayers[0];
    const id: string = connectedPlayer.getID();
    const name: string = connectedPlayer.getName()!;
    const photo: string = connectedPlayer.getPhoto()!;
});
FBInstant.player.getDataAsync(["score"]).then(data => {
    const score: number = data["score"] as number;
});
const playerID: string = FBInstant.player.getID()!;
const playerName: string = FBInstant.player.getName()!;
const playerPhoto: string = FBInstant.player.getPhoto()!;
FBInstant.player.getSignedPlayerInfoAsync('metadata').then(signedPlayerInfo => {
    const playerID: string = signedPlayerInfo.getPlayerID();
    const signature: string = signedPlayerInfo.getSignature();
});
FBInstant.player.getStatsAsync(["score"]).then(result => {
    const score: number = result["score"];
});
FBInstant.player.incrementStatsAsync({score: 1}).then(result => {
    const incrementedScore: number = result["score"];
});
FBInstant.player.setDataAsync({score: 10}).then(() => {});
FBInstant.player.setStatsAsync({score: 10}).then(() => {});
FBInstant.player.subscribeBotAsync().then(() => {});

const contextOptions: FBInstant.ContextOptions = {
    filters: ["NEW_CONTEXT_ONLY"],
    maxSize: 10,
    minSize: 1
};
FBInstant.context.chooseAsync(contextOptions);
FBInstant.context.createAsync("playerID").then(() => {});
const contextID: string = FBInstant.context.getID()!;
FBInstant.context.getPlayersAsync().then((contextPlayers: FBInstant.ContextPlayer[]) => {
    const contextPlayer: FBInstant.ContextPlayer = contextPlayers[0];
    const id: string = contextPlayer.getID();
    const name: string = contextPlayer.getName()!;
    const photo: string = contextPlayer.getPhoto()!;
});
const type = FBInstant.context.getType();
const contextSizeResponse = FBInstant.context.isSizeBetween(1, 10)!;
const sizeIsBetween: boolean = contextSizeResponse.answer;
const maxSize: number = contextSizeResponse.maxSize!;
const minSize: number = contextSizeResponse.minSize!;

FBInstant.context.switchAsync("id").then(() => {});

FBInstant.payments.consumePurchaseAsync("purchaseToken").then(() => {});
FBInstant.payments.getCatalogAsync().then((products: FBInstant.Product[]) => {
    const product = products[0];
    const description: string = product.description!;
    const imageURI: string = product.imageURI!;
    const price: string = product.price;
    const priceCurrencyCode: string = product.priceCurrencyCode;
    const productID: string = product.productID;
    const title: string = product.title;
});
