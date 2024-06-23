const locale: string = FBInstant.getLocale()!;
const platform: string = FBInstant.getPlatform()!;
const sdkVersion: string = FBInstant.getSDKVersion();
FBInstant.initializeAsync().then(() => {});
FBInstant.setLoadingProgress(10);
const supportedAPIs = FBInstant.getSupportedAPIs();
const entryPointData = FBInstant.getEntryPointData();
FBInstant.getEntryPointAsync().then(entryPointName => {});
FBInstant.setSessionData({ sessionData: "sessionData" });
FBInstant.startGameAsync().then(() => {});

const sharePayload = {
    intent: "INVITE" as "INVITE",
    image: "",
    text: "text",
    data: { score: 10 },
};
FBInstant.shareAsync(sharePayload);

const customUpdatePayload = {
    action: "CUSTOM" as "CUSTOM",
    template: "template",
    cta: "cta",
    image: "image",
    text: {
        default: "Edgar played their move",
        localizations: {
            en_US: "Edgar played their move",
            es_LA: "\u00A1Edgar jug\u00F3 su jugada!",
        },
    },
};
FBInstant.updateAsync(customUpdatePayload).then(() => {});

const leaderboardUpdatePayload: FBInstant.LeaderboardUpdatePayload = {
    action: "LEADERBOARD",
    name: "name",
    text: "text",
};
FBInstant.updateAsync(leaderboardUpdatePayload).then(() => {});
FBInstant.switchGameAsync("appID").then(() => {});

FBInstant.canCreateShortcutAsync().then((canCreateShortcut: boolean) => {});
FBInstant.createShortcutAsync().then(() => {});
FBInstant.quit();
const apiError = FBInstant.logEvent("eventName", 10, { key1: "value1", key2: "value2" });
FBInstant.onPause(() => {});

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
FBInstant.postSessionScoreAsync(10);

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
FBInstant.player.getSignedPlayerInfoAsync("metadata").then(signedPlayerInfo => {
    const playerID: string = signedPlayerInfo.getPlayerID();
    const signature: string = signedPlayerInfo.getSignature();
});
FBInstant.player.getStatsAsync(["score"]).then(result => {
    const score: number = result["score"];
});
FBInstant.player.incrementStatsAsync({ score: 1 }).then(result => {
    const incrementedScore: number = result["score"];
});
FBInstant.player.setDataAsync({ score: 10 }).then(() => {});
FBInstant.player.setStatsAsync({ score: 10 }).then(() => {});
FBInstant.player.subscribeBotAsync().then(() => {});

const contextOptions: FBInstant.ContextOptions = {
    filters: ["NEW_CONTEXT_ONLY"],
    maxSize: 10,
    minSize: 1,
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
    const priceAmount: number = product.priceAmount;
});

/// Version 7.0

FBInstant.performHapticFeedbackAsync();

FBInstant.getTournamentAsync()
    .then((tournament) => {
        const contextId: string = tournament.getContextID();
        const endTime: number = tournament.getEndTime();
        const title: string = tournament.getTitle()!;
        const payload: any = tournament.getPayload();
        const id: string = tournament.getID();
    });

const createTournamentConfig: FBInstant.CreateTournamentConfig = {};

const createTournamentPayload: FBInstant.CreateTournamentPayload = {
    initialScore: 42,
    config: createTournamentConfig,
    data: { name: "Eleonora" },
};

FBInstant.tournament.createAsync(createTournamentPayload)
    .then(tournament => {
        const contextId: string = tournament.getContextID();
        const endTime: number = tournament.getEndTime();
        const title: string = tournament.getTitle()!;
        const payload: any = tournament.getPayload();
        const id: string = tournament.getID();
    });

FBInstant.tournament.postScoreAsync(43);

const shareTournamentPayload: FBInstant.ShareTournamentPayload = {
    score: 42,
    data: { name: "Ksu" },
};

FBInstant.tournament.shareAsync(shareTournamentPayload);

FBInstant.tournament.getTournamentsAsync()
    .then(tournaments => {
        tournaments.forEach(tournament => {
            const contextId: string = tournament.getContextID();
            const endTime: number = tournament.getEndTime();
            const title: string = tournament.getTitle()!;
            const payload: any = tournament.getPayload();
            const id: string = tournament.getID();
        });
    });

FBInstant.tournament.joinAsync("1122334455")
    .then(() => {
    });

FBInstant.canSwitchNativeGameAsync().then(canSwitchNativeGame => {
    if (canSwitchNativeGame) {
        FBInstant.switchNativeGameAsync({}).then(() => {
        });
    }
});

FBInstant.loadBannerAdAsync("my_placement_id").then(() => {
    // console.log('success');
});

FBInstant.hideBannerAdAsync().then(() => {
});

FBInstant.getRewardedInterstitialAsync("my_placement_id").then(adInstance => {
    adInstance.getPlacementID(); // 'my_placement_id'
});

FBInstant.graphApi.requestAsync("/me?fields=id,name", "GET", {}).then(response => {
});

FBInstant.player.getASIDAsync().then(asid => {
    // console.log(asid);
});

// Version 7.1

FBInstant.registerScreenshotProvider(submitAsync => {
    submitAsync({
        image: "myBase64Image",
        text: "my awesome screenshot",
        data: {
            custom_field: "my awesome data",
        },
    }).then(() => {
        // resumeGame();
    }).catch(error => {
        // log(error);
    });
});

FBInstant.shareLinkAsync({
    image: "base64Picture",
    text: "Come check out what Joe has built!",
    data: {
        customData: "...",
    },
}).then(() => {
    // continue with the game.
});

FBInstant.player.getSignedASIDAsync().then(signedAsid => {
    if (signedAsid) {
        const asid: string = signedAsid.getASID();
        const signature: string = signedAsid.getSignature();
    }
});

FBInstant.room.getCurrentMatchAsync().then(async match => {
    const id: string = match.getID();
    const contextId: string = match.getContextID();
    const status: FBInstant.LiveMatchStatusType = await match.getStatusAsync();
    const participants: FBInstant.LiveMatchPlayer[] = await match.getActiveParticipantsAsync().then(participants => {
        for (const participant of participants) {
            const id: string = participant.getID();
            const name: string | null = participant.getName();
            const photo: string | null = participant.getPhoto();
        }
        return participants;
    });
});

FBInstant.room.loadCameraEffectAsync({ effectID: "123" }).then(effect => {
    const id: string = effect.getID();
    effect.showAsync().then(() => {
    });
});

FBInstant.room.clearCameraEffectAsync().then(() => {
});

FBInstant.squads.createAsync({
    name: "squad name",
    image: "squad image",
    squadTerm: "squad term",
}).then(squad => {
    squad.joinAsync({ squadTerm: "squad term" }).then(() => {
    });
    squad.addToSquadAsync({ squadTerm: "squad term" }).then(() => {
    });
});

FBInstant.squads.getPlayerSquadsAsync().then(squads => {
    for (const squad of squads) {
        squad.leaveAsync({ squadTerm: "squad term" }).then(() => {
        });
    }
});

FBInstant.squads.canUseSquadsAsync().then(isEligible => {
    if (isEligible) {
        FBInstant.squads.getAsync("squad id").then(squad => {
            const id: string = squad.getID(); // 'squad id'
            const name: string = squad.getName();
            const image: string = squad.getImage();
            const contextId: string = squad.getContextID();
        });
    }
});

const allErrorCodes: FBInstant.ErrorCodeType[] = [
    "ADS_FREQUENT_LOAD",
    "ADS_NOT_LOADED",
    "ADS_NO_FILL",
    "ADS_TOO_MANY_INSTANCES",
    "ARENAS_NOT_FOUND",
    "ANALYTICS_POST_EXCEPTION",
    "CAMERA_EFFECT_NOT_FOUND",
    "CLIENT_REQUIRES_UPDATE",
    "CLIENT_UNSUPPORTED_OPERATION",
    "DUPLICATE_POST",
    "GAMING_SQUAD_NOT_FOUND",
    "GROUP_NOT_LINKED",
    "INVALID_OPERATION",
    "INVALID_PARAM",
    "LEADERBOARD_NOT_FOUND",
    "LEADERBOARD_WRONG_CONTEXT",
    "LIVE_MATCH_NOT_FOUND",
    "LIVE_STREAMS_NOT_FOUND",
    "NETWORK_FAILURE",
    "PAGE_NOT_LINKED",
    "PAYMENTS_NOT_INITIALIZED",
    "PAYMENTS_OPERATION_FAILURE",
    "PENDING_REQUEST",
    "RATE_LIMITED",
    "SAME_CONTEXT",
    "TOURNAMENT_NOT_FOUND",
    "UNKNOWN",
    "USER_INPUT",
    "VIDEO_NOT_FOUND",
];
