async function Advertisement() {
    // $ExpectType SDK
    const ysdk = await YaGames.init();

    // $ExpectType Promise<{ stickyAdvIsShowing: boolean; reason?: StickyAdvError | undefined; }>
    ysdk.adv.getBannerAdvStatus();

    // $ExpectType Promise<{ reason?: StickyAdvError | undefined }>
    ysdk.adv.showBannerAdv();

    // $ExpectType Promise<{ stickyAdvIsShowing: boolean }>
    ysdk.adv.hideBannerAdv();

    // $ExpectType void
    ysdk.adv.showFullscreenAdv();

    // $ExpectType void
    ysdk.adv.showRewardedVideo();
}

async function Payments() {
    // $ExpectType SDK
    const ysdk = await YaGames.init();

    // $ExpectType Payments<false>
    const paymentsUnsigned = await ysdk.getPayments({ signed: false });

    // $ExpectType Promise<Purchase[]>
    const purchasesUnsigned = paymentsUnsigned.getPurchases();

    // @ts-expect-error
    purchasesUnsigned.signature;

    // $ExpectType Promise<Purchase>
    const purchaseUnsigned = paymentsUnsigned.purchase({ id: "test" });

    // @ts-expect-error
    purchaseUnsigned.signature;

    // $ExpectType Promise<Product[]>
    paymentsUnsigned.getCatalog();

    // $ExpectType Promise<void>
    paymentsUnsigned.consumePurchase("test");

    // $ExpectType Payments<true>
    const paymentsSigned = await ysdk.getPayments({ signed: true });

    // $ExpectType Signed<Purchase[]>
    const purchases = await paymentsSigned.getPurchases();

    // $ExpectType string
    purchases.signature;

    const purchase = await paymentsSigned.purchase({ id: "test" });

    // $ExpectType string
    purchase.productID;

    // $ExpectType string
    purchase.purchaseToken;

    // $ExpectType string | undefined
    purchase.developerPayload;

    // $ExpectType string
    purchase.signature;
}

async function Leaderboards() {
    // $ExpectType SDK
    const ysdk = await YaGames.init();

    // $ExpectType Leaderboards
    const leaderboards = await ysdk.getLeaderboards();

    // $ExpectType LeaderboardDescription
    const description = await leaderboards.getLeaderboardDescription("top");

    // $ExpectType string
    description.appID;

    // $ExpectType boolean
    description.default;

    // $ExpectType string
    description.name;

    // $ExpectType Record<string, string>
    description.title;

    // $ExpectType "numberic" | "time"
    description.description.type;

    // $ExpectType number
    description.description.score_format.options.decimal_offset;

    // $ExpectType boolean
    description.description.invert_sort_order;

    // $ExpectType Promise<LeaderboardEntriesData>
    leaderboards.getLeaderboardEntries("top");

    // $ExpectType Promise<LeaderboardEntriesData>
    leaderboards.getLeaderboardEntries("top", { includeUser: true });

    // $ExpectType Promise<LeaderboardEntriesData>
    leaderboards.getLeaderboardEntries("top", { includeUser: true, quantityAround: 10 });

    // $ExpectType Promise<LeaderboardEntriesData>
    leaderboards.getLeaderboardEntries("top", { includeUser: true, quantityAround: 10, quantityTop: 10 });

    // $ExpectType LeaderboardEntriesData
    const entries = await leaderboards.getLeaderboardEntries("top");

    // $ExpectType number
    entries.entries[0].score;

    // $ExpectType string | undefined
    entries.entries[0].extraData;

    // $ExpectType number
    entries.entries[0].rank;

    // $ExpectType string
    entries.entries[0].player.getAvatarSrc("small");

    // $ExpectType string
    entries.entries[0].player.getAvatarSrc("medium");

    // $ExpectType string
    entries.entries[0].player.getAvatarSrc("large");

    // $ExpectType string
    entries.entries[0].player.getAvatarSrcSet("small");

    // $ExpectType string
    entries.entries[0].player.getAvatarSrcSet("medium");

    // $ExpectType string
    entries.entries[0].player.getAvatarSrcSet("large");

    // $ExpectType string
    entries.entries[0].player.lang;

    // $ExpectType string
    entries.entries[0].player.publicName;

    // $ExpectType { avatar: string; public_name: string; }
    entries.entries[0].player.scopePermissions;

    // $ExpectType string
    entries.entries[0].player.uniqueID;

    // $ExpectType string
    entries.entries[0].formattedScore;

    // $ExpectType LeaderboardEntry
    const playerEntry = await leaderboards.getLeaderboardPlayerEntry("top");

    // $ExpectType number
    playerEntry.rank;

    // $ExpectType number
    playerEntry.score;

    // $ExpectType string
    playerEntry.formattedScore;

    // $ExpectType string | undefined
    playerEntry.extraData;

    // $ExpectType string
    playerEntry.player.getAvatarSrc("small");

    // $ExpectType string
    playerEntry.player.getAvatarSrc("medium");

    // $ExpectType string
    playerEntry.player.getAvatarSrc("large");

    // $ExpectType string
    playerEntry.player.lang;

    // $ExpectType string
    playerEntry.player.publicName;

    // $ExpectType { avatar: string; public_name: string; }
    playerEntry.player.scopePermissions;

    // $ExpectType string
    playerEntry.player.uniqueID;

    // $ExpectType Promise<void>
    leaderboards.setLeaderboardScore("top", 123);

    // $ExpectType Promise<void>
    leaderboards.setLeaderboardScore("top", 123, "test");
}

async function Player() {
    // $ExpectType SDK
    const ysdk = await YaGames.init();

    // $ExpectType Promise<void>
    ysdk.auth.openAuthDialog();

    // $ExpectType Promise<Player>
    ysdk.getPlayer();

    // $ExpectType Signed<Player>
    const player = await ysdk.getPlayer({ signed: true });

    // $ExpectType "" | "lite"
    player.getMode();

    // $ExpectType "paying" | "partially_paying" | "not_paying" | "unknown"
    player.getPayingStatus();

    // $ExpectType string
    player.signature;

    // $ExpectType string
    player.getUniqueID();

    // $ExpectType string
    player.getName();

    // $ExpectType string
    player.getPhoto("small");

    // $ExpectType string
    player.getPhoto("medium");

    // $ExpectType string
    player.getPhoto("large");

    // $ExpectType Promise<{ appID: number; userID: string; }[]>
    player.getIDsPerGame();

    // $ExpectType Promise<Partial<Record<string, Serializable>>>
    player.getData();

    // $ExpectType Promise<Partial<Record<"id" | "name", Serializable>>>
    player.getData(["id", "name"]);

    // $ExpectType Promise<void>
    player.setData({ test: "test" });

    // $ExpectType Promise<Partial<Record<string, number>>>
    player.getStats();

    // $ExpectType Promise<Partial<Record<"test", number>>>
    player.getStats(["test"]);

    // $ExpectType Promise<IncrementedStats<{ test: number; }>>
    player.incrementStats({ test: 123 });

    // $ExpectType Promise<void>
    player.setStats({ test: 123 });
}

async function Misc() {
    // $ExpectType SDK
    const ysdk = await YaGames.init();

    // $ExpectType string
    ysdk.environment.app.id;

    // $ExpectType string
    ysdk.environment.browser.lang;

    // $ExpectType ISO_639_1
    ysdk.environment.i18n.lang;

    // $ExpectType TopLevelDomain
    ysdk.environment.i18n.tld;

    // $ExpectType string | null
    ysdk.environment.payload;

    // $ExpectType Promise<unknown>
    ysdk.dispatchEvent("EXIT");

    // $ExpectType () => void
    ysdk.onEvent("EXIT", () => {});

    // $ExpectType string
    ysdk.deviceInfo.type;

    // $ExpectType boolean
    ysdk.deviceInfo.isDesktop();

    // $ExpectType boolean
    ysdk.deviceInfo.isMobile();

    // $ExpectType boolean
    ysdk.deviceInfo.isTablet();

    // $ExpectType boolean
    ysdk.deviceInfo.isTV();

    // $ExpectType void
    ysdk.features.LoadingAPI.ready();

    // $ExpectType void
    ysdk.features.GameplayAPI.start();

    // $ExpectType void
    ysdk.features.GameplayAPI.stop();

    // $ExpectType Promise<{ games: Game[]; developerURL: string; }>
    ysdk.features.GamesAPI.getAllGames();

    // $ExpectType Promise<{ game?: Game | undefined; isAvailable: boolean; }>
    ysdk.features.GamesAPI.getGameByID(100000);

    // $ExpectType Promise<{ value: boolean; reason?: FeedbackError | undefined; }>
    ysdk.feedback.canReview();

    // $ExpectType Promise<{ feedbackSent: boolean; }>
    ysdk.feedback.requestReview();

    // $ExpectType Promise<{ canShow: boolean }>
    ysdk.shortcut.canShowPrompt();

    // $ExpectType Promise<{ outcome: "accepted" | "rejected" }>
    ysdk.shortcut.showPrompt();

    // $ExpectType void
    ysdk.clipboard.writeText("test");

    // $ExpectType Promise<boolean>
    ysdk.isAvailableMethod("leaderboards.setLeaderboardScore");

    // $ExpectType "on"
    ysdk.screen.fullscreen.STATUS_ON;

    // $ExpectType "off"
    ysdk.screen.fullscreen.STATUS_OFF;

    // $ExpectType "on" | "off"
    ysdk.screen.fullscreen.status;

    // $ExpectType Promise<void>
    ysdk.screen.fullscreen.request();

    // $ExpectType Promise<void>
    ysdk.screen.fullscreen.exit();

    // $ExpectType Promise<Storage>
    ysdk.getStorage();

    // $ExpectType Promise<Record<string, string>>
    ysdk.getFlags({
        clientFeatures: [{
            name: "feature-name",
            value: "feature-value",
        }],
        defaultFlags: {
            "test-flag": "default-value",
        },
    });

    // $ExpectType "EXIT"
    ysdk.EVENTS.EXIT;

    // $ExpectType "HISTORY_BACK"
    ysdk.EVENTS.HISTORY_BACK;

    // $ExpectType number
    ysdk.serverTime();
}
