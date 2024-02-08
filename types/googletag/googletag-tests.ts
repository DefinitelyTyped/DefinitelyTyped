/**
 * Test for {@link googletag}
 */
function test_googletag() {
    // <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    window.googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(() => {
        // GPT API can be called safely.
    });
}

/**
 * Test for {@link googletag.apiReady}
 */
function test_googletag_apiReady() {
    if (window.googletag && googletag.apiReady) {
        // GPT API can be called safely.
    }
}

/**
 * Test for {@link googletag.cmd}
 */
function test_googletag_cmd() {
    googletag.cmd.push(() => {
        googletag.defineSlot("/1234567/sports", [160, 600])!.addService(googletag.pubads());
    });
}

/**
 * Test for {@link googletag.secureSignalProviders}
 */
function test_googletag_secureSignalProviders() {
    window.googletag = window.googletag || { cmd: [], secureSignalProviders: [] };
    window.googletag.secureSignalProviders.push({
        id: "collector123",
        collectorFunction: () => {
            return Promise.resolve("signal");
        },
    });
}

/**
 * Test for {@link googletag.defineOutOfPageSlot}
 */
function test_googletag_defineOutOfPageSlot() {
    // Define a custom out-of-page ad slot.
    googletag.defineOutOfPageSlot("/1234567/sports", "div");
    // Define a GPT managed web interstitial ad slot.
    googletag.defineOutOfPageSlot("/1234567/sports", googletag.enums.OutOfPageFormat.INTERSTITIAL);
}

/**
 * Test for {@link googletag.defineSlot}
 */
function test_googletag_defineSlot() {
    googletag.defineSlot("/1234567/sports", [728, 90], "div");
}

/**
 * Test for {@link googletag.destroySlots}
 */
function test_googletag_destroySlots() {
    // The calls to construct an ad and display contents.
    const slot1 = googletag.defineSlot("/1234567/sports", [728, 90], "div-1")!;
    googletag.display("div-1");
    const slot2 = googletag.defineSlot("/1234567/news", [160, 600], "div-2")!;
    googletag.display("div-2");
    // This call to destroy only slot1.
    googletag.destroySlots([slot1]);
    // This call to destroy both slot1 and slot2.
    googletag.destroySlots([slot1, slot2]);
    // This call to destroy all slots.
    googletag.destroySlots();
}

/**
 * Test for {@link googletag.display}
 */
function test_googletag_display() {
    // <div id="div" style="width: 728px; height: 90px"></div>
    googletag.cmd.push(() => {
        googletag.display("div");
    });
}

/**
 * Test for {@link googletag.openConsole}
 */
function test_googletag_openConsole() {
    // Calling with div ID.
    googletag.openConsole("div");
    // Calling without div ID.
    googletag.openConsole();
}

/**
 * Test for {@link googletag.setAdIframeTitle}
 */
function test_googletag_setAdIframeTitle() {
    googletag.setAdIframeTitle("title");
}

/**
 * Test for {@link googletag.CommandArray.push}
 */
function test_googletag_CommandArray_push() {
    googletag.cmd.push(() => {
        googletag.defineSlot("/1234567/sports", [160, 600])!.addService(googletag.pubads());
    });
}

/**
 * Test for {@link googletag.CompanionAdsService.setRefreshUnfilledSlots}
 */
function test_googletag_CompanionAdsService_setRefreshUnfilledSlots() {
    googletag.companionAds().setRefreshUnfilledSlots(true);
}

/**
 * Test for {@link googletag.PrivacySettingsConfig.trafficSource}
 */
function test_googletag_PrivacySettingsConfig_trafficSource() {
    // Indicate requests represent organic traffic.
    googletag.pubads().setPrivacySettings({
        trafficSource: googletag.enums.TrafficSource.ORGANIC,
    });
    // Indicate requests represent purchased traffic.
    googletag.pubads().setPrivacySettings({
        trafficSource: googletag.enums.TrafficSource.PURCHASED,
    });
}

/**
 * Test for {@link googletag.PubAdsService.clear}
 */
function test_googletag_PubAdsService_clear() {
    const slot1 = googletag.defineSlot("/1234567/sports", [728, 90], "div-1")!;
    googletag.display("div-1");
    const slot2 = googletag.defineSlot("/1234567/news", [160, 600], "div-2")!;
    googletag.display("div-2");
    // This call to clear only slot1.
    googletag.pubads().clear([slot1]);
    // This call to clear both slot1 and slot2.
    googletag.pubads().clear([slot1, slot2]);
    // This call to clear all slots.
    googletag.pubads().clear();
}

/**
 * Test for {@link googletag.PubAdsService.clearCategoryExclusions}
 */
function test_googletag_PubAdsService_clearCategoryExclusions() {
    // Set category exclusion to exclude ads with 'AirlineAd' labels.
    googletag.pubads().setCategoryExclusion("AirlineAd");
    // Make ad requests. No ad with 'AirlineAd' label will be returned.
    // Clear category exclusions so all ads can be returned.
    googletag.pubads().clearCategoryExclusions();
    // Make ad requests. Any ad can be returned.
}

/**
 * Test for {@link googletag.PubAdsService.clearTargeting}
 */
function test_googletag_PubAdsService_clearTargeting() {
    googletag.pubads().setTargeting("interests", "sports");
    googletag.pubads().setTargeting("colors", "blue");
    googletag.pubads().setTargeting("fruits", "apple");
    googletag.pubads().clearTargeting("interests");
    // Targeting 'colors' and 'fruits' are still present, while 'interests' was cleared.
    googletag.pubads().clearTargeting();
    // All targeting has been cleared.
}

/**
 * Test for {@link googletag.PubAdsService.display}
 */
function test_googletag_PubAdsService_display() {
    googletag.pubads().display("/1234567/sports", [728, 90], "div");
}

/**
 * Test for {@link googletag.PubAdsService.enableLazyLoad}
 */
function test_googletag_PubAdsService_enableLazyLoad() {
    googletag.pubads().enableLazyLoad({
        // Fetch slots within 5 viewports.
        fetchMarginPercent: 500,
        // Render slots within 2 viewports.
        renderMarginPercent: 200,
        // Double the above values on mobile.
        mobileScaling: 2.0,
    });
}

/**
 * Test for {@link googletag.PubAdsService.get}
 */
function test_googletag_PubAdsService_get() {
    googletag.pubads().set("adsense_background_color", "#FFFFFF");
    googletag.pubads().get("adsense_background_color");
    // Returns '#FFFFFF'
}

/**
 * Test for {@link googletag.PubAdsService.getAttributeKeys}
 */
function test_googletag_PubAdsService_getAttributeKeys() {
    googletag.pubads().set("adsense_background_color", "#FFFFFF");
    googletag.pubads().set("adsense_border_color", "#AABBCC");
    googletag.pubads().getAttributeKeys();
    // Returns ['adsense_background_color', 'adsense_border_color']
}

/**
 * Test for {@link googletag.PubAdsService.getTargeting}
 */
function test_googletag_PubAdsService_getTargeting() {
    googletag.pubads().setTargeting("interests", "sports");
    googletag.pubads().getTargeting("interests");
    // Returns ['sports']
    googletag.pubads().getTargeting("age");
    // Returns [] (empty array)
}

/**
 * Test for {@link googletag.PubAdsService.getTargetingKeys}
 */
function test_googletag_PubAdsService_getTargetingKeys() {
    googletag.pubads().setTargeting("interests", "sports");
    googletag.pubads().setTargeting("colors", "blue");
    googletag.pubads().getTargetingKeys();
    // Returns ['interests', 'colors']
}

/**
 * Test for {@link googletag.PubAdsService.refresh}
 */
function test_googletag_PubAdsService_refresh() {
    const slot1 = googletag.defineSlot("/1234567/sports", [728, 90], "div-1")!;
    googletag.display("div-1");
    const slot2 = googletag.defineSlot("/1234567/news", [160, 600], "div-2")!;
    googletag.display("div-2");
    // This call to refresh fetches a new ad for slot1 only.
    googletag.pubads().refresh([slot1]);
    // This call to refresh fetches a new ad for both slot1 and slot2.
    googletag.pubads().refresh([slot1, slot2]);
    // This call to refresh fetches a new ad for each slot.
    googletag.pubads().refresh();
    // This call to refresh fetches a new ad for slot1, without changing
    // the correlator.
    googletag.pubads().refresh([slot1], { changeCorrelator: false });
    // This call to refresh fetches a new ad for each slot, without
    // changing the correlator.
    googletag.pubads().refresh(null, { changeCorrelator: false });
}

/**
 * Test for {@link googletag.PubAdsService.set}
 */
function test_googletag_PubAdsService_set() {
    googletag.pubads().set("adsense_background_color", "#FFFFFF");
}

/**
 * Test for {@link googletag.PubAdsService.setCategoryExclusion}
 */
function test_googletag_PubAdsService_setCategoryExclusion() {
    // Label = AirlineAd.
    googletag.pubads().setCategoryExclusion("AirlineAd");
}

/**
 * Test for {@link googletag.PubAdsService.setCentering}
 */
function test_googletag_PubAdsService_setCentering() {
    // Make ads centered.
    googletag.pubads().setCentering(true);
}

/**
 * Test for {@link googletag.PubAdsService.setForceSafeFrame}
 */
function test_googletag_PubAdsService_setForceSafeFrame() {
    googletag.pubads().setForceSafeFrame(true);
    // The following slot will be opted-out of the page-level force
    // SafeFrame instruction.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-1")!
        .setForceSafeFrame(false)
        .addService(googletag.pubads());
    // The following slot will have SafeFrame forced.
    googletag.defineSlot("/1234567/news", [160, 600], "div-2")!.addService(googletag.pubads());
    googletag.display("div-1");
    googletag.display("div-2");
}

/**
 * Test for {@link googletag.PubAdsService.setLocation}
 */
function test_googletag_PubAdsService_setLocation() {
    // Postal code:
    googletag.pubads().setLocation("10001,US");
}

/**
 * Test for {@link googletag.PubAdsService.setPrivacySettings}
 */
function test_googletag_PubAdsService_setPrivacySettings() {
    googletag.pubads().setPrivacySettings({
        restrictDataProcessing: true,
    });
    // Set multiple privacy settings at the same time.
    googletag.pubads().setPrivacySettings({
        childDirectedTreatment: true,
        underAgeOfConsent: true,
    });
    // Clear the configuration for childDirectedTreatment.
    googletag.pubads().setPrivacySettings({
        childDirectedTreatment: null,
    });
}

/**
 * Test for {@link googletag.PubAdsService.setPublisherProvidedId}
 */
function test_googletag_PubAdsService_setPublisherProvidedId() {
    googletag.pubads().setPublisherProvidedId("12JD92JD8078S8J29SDOAKC0EF230337");
}

/**
 * Test for {@link googletag.PubAdsService.setSafeFrameConfig}
 */
function test_googletag_PubAdsService_setSafeFrameConfig() {
    googletag.pubads().setForceSafeFrame(true);
    const pageConfig = {
        allowOverlayExpansion: true,
        allowPushExpansion: true,
        sandbox: true,
    };
    const slotConfig = { allowOverlayExpansion: false };
    googletag.pubads().setSafeFrameConfig(pageConfig);
    // The following slot will not allow for expansion by overlay.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-1")!
        .setSafeFrameConfig(slotConfig)
        .addService(googletag.pubads());
    // The following slot will inherit the page level settings, and hence
    // would allow for expansion by overlay.
    googletag.defineSlot("/1234567/news", [160, 600], "div-2")!.addService(googletag.pubads());
    googletag.display("div-1");
    googletag.display("div-2");
}

/**
 * Test for {@link googletag.PubAdsService.setTargeting}
 */
function test_googletag_PubAdsService_setTargeting() {
    // Example with a single value for a key.
    googletag.pubads().setTargeting("interests", "sports");
    // Example with multiple values for a key inside in an array.
    googletag.pubads().setTargeting("interests", ["sports", "music"]);
}

/**
 * Test for {@link googletag.PubAdsService.updateCorrelator}
 */
function test_googletag_PubAdsService_updateCorrelator() {
    // Assume that the correlator is currently 12345. All ad requests made
    // by this page will currently use that value.
    // Replace the current correlator with a new correlator.
    googletag.pubads().updateCorrelator();
    // The correlator will now be a new randomly selected value, different
    // from 12345. All subsequent ad requests made by this page will use
    // the new value.
}

/**
 * Test for {@link googletag.Service.addEventListener}
 */
function test_googletag_Service_addEventListener() {
    // 1. Adding an event listener for the PubAdsService.
    googletag.pubads().addEventListener("slotOnload", (event) => {
        console.log("Slot has been loaded:");
        console.log(event);
    });
    // 2. Adding an event listener with slot specific logic.
    // Listeners operate at service level, which means that you cannot add
    // a listener for an event for a specific slot only. You can, however,
    // programmatically filter a listener to respond only to a certain ad
    // slot, using this pattern:
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotOnload", (event) => {
        if (event.slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.Service.removeEventListener}
 */
function test_googletag_Service_removeEventListener() {
    googletag.cmd.push(() => {
        // Define a new ad slot.
        googletag.defineSlot("/6355419/Travel", [728, 90], "div-for-slot")!.addService(googletag.pubads());
        // Define a new function that removes itself via removeEventListener
        // after the impressionViewable event fires.
        const onViewableListener = (event: googletag.events.ImpressionViewableEvent) => {
            googletag.pubads().removeEventListener("impressionViewable", onViewableListener);
            setTimeout(() => {
                googletag.pubads().refresh([event.slot]);
            }, 30000);
        };
        // Add onViewableListener as a listener for impressionViewable events.
        googletag.pubads().addEventListener("impressionViewable", onViewableListener);
        googletag.enableServices();
    });
}

/**
 * Test for {@link googletag.SizeMappingBuilder.addSize}
 */
function test_googletag_SizeMappingBuilder_addSize() {
    // Mapping 1
    googletag
        .sizeMapping()
        .addSize([1024, 768], [970, 250])
        .addSize([980, 690], [728, 90])
        .addSize([640, 480], "fluid")
        .addSize([0, 0], [88, 31]) // All viewports < 640x480
        .build();
    // Mapping 2
    googletag
        .sizeMapping()
        .addSize([1024, 768], [970, 250])
        .addSize([980, 690], [])
        .addSize([640, 480], [120, 60])
        .addSize([0, 0], [])
        .build();
    // Mapping 2 will not show any ads for the following viewport sizes:
    // [1024, 768] > size >= [980, 690] and
    // [640, 480] > size >= [0, 0]
}

/**
 * Test for {@link googletag.Slot.addService}
 */
function test_googletag_Slot_addService() {
    googletag.defineSlot("/1234567/sports", [160, 600])!.addService(googletag.pubads());
}

/**
 * Test for {@link googletag.Slot.clearCategoryExclusions}
 */
function test_googletag_Slot_clearCategoryExclusions() {
    // Set category exclusion to exclude ads with 'AirlineAd' labels.
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setCategoryExclusion("AirlineAd")
        .addService(googletag.pubads());
    // Make an ad request. No ad with 'AirlineAd' label will be returned
    // for the slot.
    // Clear category exclusions so all ads can be returned.
    slot.clearCategoryExclusions();
    // Make an ad request. Any ad can be returned for the slot.
}

/**
 * Test for {@link googletag.Slot.clearTargeting}
 */
function test_googletag_Slot_clearTargeting() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setTargeting("allow_expandable", "true")
        .setTargeting("interests", ["sports", "music"])
        .setTargeting("color", "red")
        .addService(googletag.pubads());
    slot.clearTargeting("color");
    // Targeting 'allow_expandable' and 'interests' are still present,
    // while 'color' was cleared.
    slot.clearTargeting();
    // All targeting has been cleared.
}

/**
 * Test for {@link googletag.Slot.defineSizeMapping}
 */
function test_googletag_Slot_defineSizeMapping() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());
    const mapping = googletag
        .sizeMapping()
        .addSize([100, 100], [88, 31])
        .addSize(
            [320, 400],
            [
                [320, 50],
                [300, 50],
            ],
        )
        .build();
    slot.defineSizeMapping(mapping);
}

/**
 * Test for {@link googletag.Slot.get}
 */
function test_googletag_Slot_get() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .set("adsense_background_color", "#FFFFFF")
        .addService(googletag.pubads());
    slot.get("adsense_background_color");
    // Returns '#FFFFFF'
}

/**
 * Test for {@link googletag.Slot.getAdUnitPath}
 */
function test_googletag_Slot_getAdUnitPath() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());
    slot.getAdUnitPath();
    // Returns '/1234567/sports'
}

/**
 * Test for {@link googletag.Slot.getAttributeKeys}
 */
function test_googletag_Slot_getAttributeKeys() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .set("adsense_background_color", "#FFFFFF")
        .set("adsense_border_color", "#AABBCC")
        .addService(googletag.pubads());
    slot.getAttributeKeys();
    // Returns ['adsense_background_color', 'adsense_border_color']
}

/**
 * Test for {@link googletag.Slot.getCategoryExclusions}
 */
function test_googletag_Slot_getCategoryExclusions() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setCategoryExclusion("AirlineAd")
        .setCategoryExclusion("TrainAd")
        .addService(googletag.pubads());
    slot.getCategoryExclusions();
    // Returns ['AirlineAd', 'TrainAd']
}

/**
 * Test for {@link googletag.Slot.getSlotElementId}
 */
function test_googletag_Slot_getSlotElementId() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());
    slot.getSlotElementId();
    // Returns 'div'
}

/**
 * Test for {@link googletag.Slot.getTargeting}
 */
function test_googletag_Slot_getTargeting() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setTargeting("allow_expandable", "true")
        .addService(googletag.pubads());
    slot.getTargeting("allow_expandable");
    // Returns ['true']
    slot.getTargeting("age");
    // Returns [] (empty array)
}

/**
 * Test for {@link googletag.Slot.getTargetingKeys}
 */
function test_googletag_Slot_getTargetingKeys() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setTargeting("allow_expandable", "true")
        .setTargeting("interests", ["sports", "music"])
        .addService(googletag.pubads());
    slot.getTargetingKeys();
    // Returns ['interests', 'allow_expandable']
}

/**
 * Test for {@link googletag.Slot.set}
 */
function test_googletag_Slot_set() {
    // Setting an attribute on a single ad slot.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .set("adsense_background_color", "#FFFFFF")
        .addService(googletag.pubads());
}

/**
 * Test for {@link googletag.Slot.setCategoryExclusion}
 */
function test_googletag_Slot_setCategoryExclusion() {
    // Label = AirlineAd
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setCategoryExclusion("AirlineAd")
        .addService(googletag.pubads());
}

/**
 * Test for {@link googletag.Slot.setClickUrl}
 */
function test_googletag_Slot_setClickUrl() {
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setClickUrl("http://www.example.com?original_click_url=")
        .addService(googletag.pubads());
}

/**
 * Test for {@link googletag.Slot.setCollapseEmptyDiv}
 */
function test_googletag_Slot_setCollapseEmptyDiv() {
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setCollapseEmptyDiv(true, true)
        .addService(googletag.pubads());
    // The above will cause the div for this slot to be collapsed
    // when the page is loaded, before ads are requested.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-2")!
        .setCollapseEmptyDiv(true)
        .addService(googletag.pubads());
    // The above will cause the div for this slot to be collapsed
    // only after GPT detects that no ads are available for the slot.
}

/**
 * Test for {@link googletag.Slot.setForceSafeFrame}
 */
function test_googletag_Slot_setForceSafeFrame() {
    googletag.defineSlot("/1234567/sports", [160, 600], "div")!.setForceSafeFrame(true).addService(googletag.pubads());
}

/**
 * Test for {@link googletag.Slot.setSafeFrameConfig}
 */
function test_googletag_Slot_setSafeFrameConfig() {
    googletag.pubads().setForceSafeFrame(true);
    // The following slot will have a sandboxed safeframe that only
    // disallows top-level navigation.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-1")!
        .setSafeFrameConfig({ sandbox: true })
        .addService(googletag.pubads());
    // The following slot will inherit page-level settings.
    googletag.defineSlot("/1234567/news", [160, 600], "div-2")!.addService(googletag.pubads());
    googletag.display("div-1");
    googletag.display("div-2");
}

/**
 * Test for {@link googletag.Slot.setTargeting}
 */
function test_googletag_Slot_setTargeting() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());
    // Example with a single value for a key.
    slot.setTargeting("allow_expandable", "true");
    // Example with multiple values for a key inside in an array.
    slot.setTargeting("interests", ["sports", "music"]);
}

/**
 * Test for {@link googletag.Slot.updateTargetingFromMap}
 */
function test_googletag_Slot_updateTargetingFromMap() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!;
    slot.updateTargetingFromMap({
        color: "red",
        interests: ["sports", "music", "movies"],
    });
}

/**
 * Test for {@link googletag.config.AdExpansionConfig.enabled}
 */
function test_googletag_config_AdExpansionConfig_enabled() {
    // Enable ad slot expansion across the entire page.
    googletag.setConfig({
        adExpansion: { enabled: true },
    });
}

/**
 * Test for {@link googletag.config.ComponentAuctionConfig.auctionConfig}
 */
function test_googletag_config_ComponentAuctionConfig_auctionConfig() {
    const componentAuctionConfig = {
        // Seller URL should be https and the same as decisionLogicUrl's origin
        seller: "https://testSeller.com",
        decisionLogicUrl: "https://testSeller.com/ssp/decision-logic.js",
        interestGroupBuyers: ["https://example-buyer.com"],
        auctionSignals: { auction_signals: "auction_signals" },
        sellerSignals: { seller_signals: "seller_signals" },
        perBuyerSignals: {
            // listed on interestGroupBuyers
            "https://example-buyer.com": {
                per_buyer_signals: "per_buyer_signals",
            },
        },
    };
    const auctionSlot = googletag.defineSlot("/1234567/example", [160, 600])!;
    // To add configKey to the component auction:
    auctionSlot.setConfig({
        componentAuction: [
            {
                configKey: "https://testSeller.com",
                auctionConfig: componentAuctionConfig,
            },
        ],
    });
    // To remove configKey from the component auction:
    auctionSlot.setConfig({
        componentAuction: [
            {
                configKey: "https://testSeller.com",
                auctionConfig: null,
            },
        ],
    });
}

/**
 * Test for {@link googletag.config.InterstitialConfig.triggers}
 */
function test_googletag_config_InterstitialConfig_triggers() {
    // Define a GPT managed web interstitial ad slot.
    const interstitialSlot = googletag.defineOutOfPageSlot(
        "/1234567/sports",
        googletag.enums.OutOfPageFormat.INTERSTITIAL,
    )!;
    // Enable optional interstitial triggers.
    // Change this value to false to disable.
    const enableTriggers = true;
    interstitialSlot.setConfig({
        interstitial: {
            triggers: {
                unhideWindow: enableTriggers,
            },
        },
    });
}

/**
 * Test for {@link googletag.config.PrivacyTreatmentsConfig.treatments}
 */
function test_googletag_config_PrivacyTreatmentsConfig_treatments() {
    // Disable personalization across the entire page.
    googletag.setConfig({
        privacyTreatments: { treatments: ["disablePersonalization"] },
    });
}

/**
 * Test for {@link googletag.config.SlotSettingsConfig}
 */
function test_googletag_config_SlotSettingsConfig() {
    const slot = googletag.defineSlot("/1234567/example", [160, 600])!;
    // Configure all features.
    slot.setConfig({
        adExpansion: { enabled: true },
        componentAuction: [{ configKey: "https://testSeller.com", auctionConfig: null }],
        interstitial: { triggers: { unhideWindow: true } },
    });
    // Update feature componentAuction and clear feature interstitial, but feature adExpansion remains set.
    slot.setConfig({
        componentAuction: [{ configKey: "https://testSeller2.com", auctionConfig: null }],
        interstitial: null,
    });
}

/**
 * Test for {@link googletag.events.ImpressionViewableEvent}
 */
function test_googletag_events_ImpressionViewableEvent() {
    // This listener is called when an impression becomes viewable.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("impressionViewable", (event) => {
        const slot = event.slot;
        console.log("Impression for slot", slot.getSlotElementId(), "became viewable.");
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.RewardedSlotClosedEvent}
 */
function test_googletag_events_RewardedSlotClosedEvent() {
    // This listener is called when the user closes a rewarded ad slot.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("rewardedSlotClosed", (event) => {
        const slot = event.slot;
        console.log("Rewarded ad slot", slot.getSlotElementId(), "has been closed.");
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.RewardedSlotGrantedEvent}
 */
function test_googletag_events_RewardedSlotGrantedEvent() {
    // This listener is called whenever a reward is granted for a rewarded ad.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {
        const slot = event.slot;
        console.group("Reward granted for slot", slot.getSlotElementId(), ".");
        // Log details of the reward.
        console.log("Reward type:", event.payload?.type);
        console.log("Reward amount:", event.payload?.amount);
        console.groupEnd();
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.RewardedSlotReadyEvent}
 */
function test_googletag_events_RewardedSlotReadyEvent() {
    // This listener is called when a rewarded ad slot becomes ready to be displayed.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("rewardedSlotReady", (event) => {
        const slot = event.slot;
        console.log("Rewarded ad slot", slot.getSlotElementId(), "is ready to be displayed.");
        // Replace with custom logic.
        const userHasConsented = true;
        if (userHasConsented) {
            event.makeRewardedVisible();
        }
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.SlotOnloadEvent}
 */
function test_googletag_events_SlotOnloadEvent() {
    // This listener is called when a creative iframe load event fires.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotOnload", (event) => {
        const slot = event.slot;
        console.log("Creative iframe for slot", slot.getSlotElementId(), "has loaded.");
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.SlotRenderEndedEvent}
 */
function test_googletag_events_SlotRenderEndedEvent() {
    // This listener is called when a slot has finished rendering.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotRenderEnded", (event) => {
        const slot = event.slot;
        console.group("Slot", slot.getSlotElementId(), "finished rendering.");
        // Log details of the rendered ad.
        console.log("Advertiser ID:", event.advertiserId);
        console.log("Campaign ID:", event.campaignId);
        console.log("Company IDs:", event.companyIds);
        console.log("Creative ID:", event.creativeId);
        console.log("Creative Template ID:", event.creativeTemplateId);
        console.log("Is backfill?:", event.isBackfill);
        console.log("Is empty?:", event.isEmpty);
        console.log("Label IDs:", event.labelIds);
        console.log("Line Item ID:", event.lineItemId);
        console.log("Size:", event.size);
        console.log("Slot content changed?", event.slotContentChanged);
        console.log("Source Agnostic Creative ID:", event.sourceAgnosticCreativeId);
        console.log("Source Agnostic Line Item ID:", event.sourceAgnosticLineItemId);
        console.log("Yield Group IDs:", event.yieldGroupIds);
        console.groupEnd();
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.SlotRequestedEvent}
 */
function test_googletag_events_SlotRequestedEvent() {
    // This listener is called when the specified service issues an ad request for a slot.
    // Each slot will fire this event, even though they may be batched together in a single request
    // if single request architecture (SRA) is enabled.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotRequested", (event) => {
        const slot = event.slot;
        console.log("Slot", slot.getSlotElementId(), "has been requested.");
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.SlotResponseReceived}
 */
function test_googletag_events_SlotResponseReceived() {
    // This listener is called when an ad response has been received for a slot.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotResponseReceived", (event) => {
        const slot = event.slot;
        console.log("Ad response for slot", slot.getSlotElementId(), "received.");
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.events.SlotVisibilityChangedEvent}
 */
function test_googletag_events_SlotVisibilityChangedEvent() {
    // This listener is called whenever the on-screen percentage of an
    // ad slot's area changes.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotVisibilityChanged", (event) => {
        const slot = event.slot;
        console.group("Visibility of slot", slot.getSlotElementId(), "changed.");
        // Log details of the event.
        console.log("Visible area:", `${event.inViewPercentage}%`);
        console.groupEnd();
        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

/**
 * Test for {@link googletag.secureSignals.BidderSignalProvider}
 */
function test_googletag_secureSignals_BidderSignalProvider() {
    // id is provided
    googletag.secureSignalProviders.push({
        id: "collector123",
        collectorFunction: () => {
            // ...custom signal generation logic...
            return Promise.resolve("signal");
        },
    });
}

/**
 * Test for {@link googletag.secureSignals.PublisherSignalProvider}
 */
function test_googletag_secureSignals_PublisherSignalProvider() {
    // networkCode is provided
    googletag.secureSignalProviders.push({
        networkCode: "123456",
        collectorFunction: () => {
            // ...custom signal generation logic...
            return Promise.resolve("signal");
        },
    });
}
