if (googletag && googletag.apiReady) {
    // GPT API can be called safely.
}

googletag.cmd.push(() => {
    googletag
        .defineSlot("/1234567/sports", [160, 600])
        .addService(googletag.pubads());
});

googletag.defineOutOfPageSlot("/1234567/sports", "div-1");

googletag.defineSlot("/1234567/sports", [728, 90], "div-1");

// The calls to construct an ad and display contents.
let slot1 =
    googletag.pubads().display("/1234567/sports", [728, 90], "div-1");
let slot2 =
    googletag.pubads().display("/1234567/news", [160, 600], "div-2");
let slot3 =
    googletag.pubads().display("/1234567/weather", [160, 600], "div-3");

// This call to destroy only slot1.
googletag.destroySlots([slot1]);

// This call to destroy both slot1 and slot2.
googletag.destroySlots([slot1, slot2]);

// This call to destroy all slots.
googletag.destroySlots();

googletag.cmd.push(() => {
    googletag.display("div-1");
});

// Calling with div id
googletag.openConsole("div-1");

// Calling without div id
googletag.openConsole();

googletag.setAdIframeTitle("title");

googletag.cmd.push(() => {
    googletag.defineSlot("/1234567/sports", [160, 600]).
            addService(googletag.pubads());
});

googletag.companionAds().setRefreshUnfilledSlots(true);

let slot = googletag.defineSlot("/1234567/sports", [728, 90], "div-1").
        addService(googletag.content());
googletag.enableServices();

let content = "<a href=\"www.mydestinationsite.com\"><img src=\"www.mysite.com/img.png\"></img></a>";
googletag.content().setContent(slot, content);

googletag.pubads().definePassback("/1234567/sports", [468, 60]).display();

googletag.pubads().definePassback("/1234567/sports", [468, 60])
        .setClickUrl("%%CLICK_URL_UNESC%%")
        .display();

googletag.pubads().definePassback("/1234567/sports", [468, 60])
        .setForceSafeFrame(true)
        .display();

googletag.pubads().definePassback("/1234567/sports", [468, 60])
        .setTagForChildDirectedTreatment(1)
        .display();

googletag.pubads().definePassback('/1234567/sports', [468, 60])
        .setTagForUnderAgeOfConsent(1)
        .display();

googletag.pubads().definePassback("/1234567/sports", [468, 60]).
        setTargeting("color", "red").
        setTargeting("sport", ["rugby", "rowing"]).
            display();

googletag.pubads().definePassback("/1234567/sports", [160, 600]).
    updateTargetingFromMap({color: "red",
                            interests: ["sports", "music", "movies"]}).
            display();

googletag.pubads().enableLazyLoad();
googletag.pubads().enableLazyLoad({
    fetchMarginPercent: 500,
    renderMarginPercent: 200,
    mobileScaling: 2.0
});

// The calls to construct an ad and display contents.
slot1 = googletag.pubads().display("/1234567/sports", [728, 90], "div-1");
slot2 = googletag.pubads().display("/1234567/news", [160, 600], "div-2");
slot3 = googletag.pubads().display("/1234567/weather", [160, 600], "div-3");

// This call to clear only slot1.
googletag.pubads().clear([slot1]);

// This call to clear both slot1 and slot2.
googletag.pubads().clear([slot1, slot2]);

// This call to clear all slots.
googletag.pubads().clear();

// Set category exclusion to exclude ads with "AirlineAd" labels.
googletag.pubads().setCategoryExclusion("AirlineAd");

// Make ad requests. No ad with "AirlineAd" label will be returned.

// Clear category exclusions so all ads can be returned.
googletag.pubads().clearCategoryExclusions();

// Mark ad requests as child-directed.
googletag.pubads().setTagForChildDirectedTreatment(1);

// Clear child-directed setting and return to initial not-set value.
googletag.pubads().clearTagForChildDirectedTreatment();

// Mark ad requests as coming from users under the age of consent.
googletag.pubads().setTagForUnderAgeOfConsent(1);

// Clear the tag value that configures whether to mark ad requests as
// coming from users under the age of consent.
googletag.pubads().setTagForUnderAgeOfConsent();

googletag.pubads().setTargeting("interests", "sports");
googletag.pubads().setTargeting("colors", "blue");
googletag.pubads().setTargeting("fruits", "apple");

googletag.pubads().clearTargeting("interests");
// Targeting "colors" and "fruits" are still present, while "interests" was
// cleared.

googletag.pubads().clearTargeting();
// All targeting has been cleared.

googletag.pubads().defineOutOfPagePassback("/1234567/sports").display();

googletag.pubads().definePassback("/1234567/sports", [468, 60]).display();

googletag.pubads().display("/1234567/sports", [728, 90], "div-1");

googletag.pubads().set("adsense_background_color", "#FFFFFF");
let color = googletag.pubads().get("adsense_background_color");
// color == "#FFFFFF".

googletag.pubads().set("adsense_background_color", "#FFFFFF");
googletag.pubads().set("adsense_border_color", "#AABBCC");
let keys = googletag.pubads().getAttributeKeys();
// Keys are ["adsense_background_color", "adsense_border_color"].

googletag.pubads().setTargeting("interests", "sports");

let param = googletag.pubads().getTargeting("interests");
// param is ["sports"]

param = googletag.pubads().getTargeting("age");
// param is [] (empty array)

googletag.pubads().setTargeting("interests", "sports");
googletag.pubads().setTargeting("colors", "blue");

keys = googletag.pubads().getTargetingKeys();
// keys are ["interests", "colors"].

// The calls to construct slots and display contents.
slot1 = googletag.defineSlot("/1234567/sports", [728, 90], "div-1");
slot2 = googletag.defineSlot("/1234567/news", "fluid", "div-2");
slot3 = googletag.defineSlot("/1234567/weather", [160, 600], "div-3");

// This call to refresh fetches a new ad for slot1 only.
googletag.pubads().refresh([slot1]);

// This call to refresh fetches a new ad for both slot1 and slot2.
googletag.pubads().refresh([slot1, slot2]);

// This call to refresh fetches a new ad for each slot.
googletag.pubads().refresh();

// This call to refresh fetches a new ad for slot1, without changing the
// correlator.
googletag.pubads().refresh([slot1], {changeCorrelator: false});

// This call to refresh fetches a new ad for each slot, without changing
// the correlator.
googletag.pubads().refresh(undefined, {changeCorrelator: false});

// Label = AirlineAd.
googletag.pubads().setCategoryExclusion("AirlineAd");

// Make DFP ads centered.
googletag.pubads().setCentering(true);

googletag.pubads().setCookieOptions(1);

googletag.pubads().setForceSafeFrame(true);

// The following slot will be opted-out of the page-level force
// safeframe instruction.
googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
    setForceSafeFrame(false).
    addService(googletag.pubads());

// The following slot will have safeframe forced.
googletag.defineSlot("/1234567/news", [160, 600], "div-2").
    addService(googletag.pubads());

// Latitude, longitude:
googletag.pubads().setLocation(34, -45.12);

// Latitude, longitude, and precision in millimeters:
googletag.pubads().setLocation(34, -45.12, 10000);

// Postal code:
googletag.pubads().setLocation("10001,US");

googletag.pubads().setPublisherProvidedId("AB123456789");

googletag.pubads().setForceSafeFrame(true);

let pageConfig = {
    allowOverlayExpansion: true,
    allowPushExpansion: true,
    sandbox: true
};

let slotConfig = {allowOverlayExpansion: false};

googletag.pubads().setSafeFrameConfig(pageConfig);

// The following slot will not allow for expansion by overlay.
googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
    setSafeFrameConfig(slotConfig).
    addService(googletag.pubads());

// The following slot will inherit the page level settings, and hence
// would allow for expansion by overlay.
googletag.defineSlot("/1234567/news", [160, 600], "div-2").
    addService(googletag.pubads());

googletag.display();

googletag.pubads().getSlots();

googletag.pubads().setTagForChildDirectedTreatment(1);

// Example with a single value for a key.
googletag.pubads().setTargeting("interests", "sports");

// Example with multiple values for a key inside in an array.
googletag.pubads().setTargeting("interests", ["sports", "music", "movies"]);

// Assume that the correlator is currently 12345. All ad requests made by
// this page will currently use that value.

// Replace the current correlator with a new correlator.
googletag.pubads().updateCorrelator();

// 1. Slot render ended listener.
// The listener will be called only when the pubads service renders a slot.
// To listen to companion ads, add a similar listener to
// googletag.companionAds().
googletag.pubads().addEventListener("slotRenderEnded", (event) => {
    console.log("Slot has been rendered:");
    console.log(event.isEmpty);
    console.log(event.lineItemId);
    console.log(event.creativeId);
});

// 2. Slot render ended listener, slot specific logic.
// Listeners operate at service level, which means that you cannot add a
// listener for a slotRenderEnded event for a specific slot only. You can,
// however, programmatically filter a listener to respond only to a certain
// ad slot, using this pattern:
let targetSlot = slot1;
googletag.pubads().addEventListener("slotRenderEnded", (event) => {
    if (event.slot === targetSlot) {
        // Slot specific logic.
    }
});

// 3. Impression viewable listener, slot specific logic.
// The listener will be called when the impression is considered viewable.
// This event also operates at service level, but, as above, you can filter
// to respond only to a certain ad slot by using this pattern:
googletag.pubads().addEventListener("impressionViewable", (event) => {
    if (event.slot === targetSlot) {
        // Slot specific logic.
    }
});

googletag.pubads().addEventListener("slotRequested", (event) => {
    if (event.slot === targetSlot) {
        // Slot specific logic.
    }
});

googletag.pubads().addEventListener("slotResponseReceived", (event) => {
    if (event.slot === targetSlot) {
        // Slot specific logic.
    }
});

googletag.pubads().addEventListener("slotVisibilityChanged", (event) => {
    if (event.slot === targetSlot) {
        console.log(event.inViewPercentage);
    }
});

let mapping1 = googletag.sizeMapping().
        addSize([1024, 768], [970, 250]).
        addSize([980, 690], [728, 90]).
        addSize([640, 480], "fluid").
        addSize([0, 0], [88, 31]). // Fits browsers of any size smaller than 640x480.
        build();
let mapping2 = googletag.sizeMapping().
        addSize([1024, 768], [970, 250]).
        addSize([980, 690], []).
        addSize([640, 480], [120, 60]).
        addSize([0, 0], []).
        build();

googletag.defineSlot("/1234567/sports", [160, 600]).
        addService(googletag.pubads());

// Set category exclusion to exclude ads with "AirlineAd" labels.
slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setCategoryExclusion("AirlineAd").
        addService(googletag.pubads());

// Make an ad request. No ad with "AirlineAd" label will be returned for the slot.

// Clear category exclusions so all ads can be returned.
slot.clearCategoryExclusions();

// Make an ad request. Any ad can be returned for the slot.

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setTargeting("allow_expandable", "true").
        setTargeting("interests", ["sports", "music", "movies"]).
        setTargeting("color", "red").
        addService(googletag.pubads());

slot.clearTargeting("color");
// Targeting "allow_expandable" and "interests" are still present, while
// "color" was cleared.

slot.clearTargeting();
// All targeting has been cleared.

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        addService(googletag.pubads());
let mapping = googletag.sizeMapping().
        addSize([100, 100], [88, 31]).
        addSize([320, 400], [[320, 50], [300, 50]]).
        build();
slot.defineSizeMapping(mapping);

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        set("adsense_background_color", "#FFFFFF").
        addService(googletag.pubads());

color = googletag.pubads().get("adsense_background_color");
// color == "#FFFFFF".

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        addService(googletag.pubads());

let path = slot.getAdUnitPath();
// path is "/1234567/sports"

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        set("adsense_background_color", "#FFFFFF").
        set("adsense_border_color", "#AABBCC").
        addService(googletag.pubads());

keys = googletag.pubads().getAttributeKeys();
// Keys are ["adsense_background_color", "adsense_border_color"].

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setCategoryExclusion("AirlineAd").
        setCategoryExclusion("TrainAd").
        addService(googletag.pubads());

let exclusions = slot.getCategoryExclusions();
// exclusions are ["AirlineAd", "TrainAd"]

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        addService(googletag.pubads());

let slotElementId = slot.getSlotElementId();
// slotElementId is "div-1"

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setTargeting("allow_expandable", "true").
        addService(googletag.pubads());

param = slot.getTargeting("allow_expandable");
// param is ["true"]

param = slot.getTargeting("age");
// param is [] (empty array)

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setTargeting("allow_expandable", "true").
        setTargeting("interests", ["sports", "music", "movies"]).
        addService(googletag.pubads());

keys = slot.getTargetingKeys();
// keys are ["interests", "allow_expandable"].

// Setting an attribute on a single ad slot.
googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        set("adsense_background_color", "#FFFFFF").
        addService(googletag.pubads());

// Label = AirlineAd
googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setCategoryExclusion("AirlineAd").
        addService(googletag.pubads());

googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setClickUrl("http://www.example.com").
        addService(googletag.pubads());

googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setCollapseEmptyDiv(true, true).
        addService(googletag.pubads());
// The above will cause the div for this slot to be collapsed
// when the page is loaded, before ads are requested.

googletag.defineSlot("/1234567/sports", [160, 600], "div-2").
        setCollapseEmptyDiv(true).
        addService(googletag.pubads());
// The above will cause the div for this slot to be collapsed
    // only after GPT detects that no ads are available for the slot.

googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        setForceSafeFrame(true).
        addService(googletag.pubads());

googletag.pubads().setForceSafeFrame(true);

// The following slot will have a sandboxed safeframe that only disallows
// top-level navigation.
googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
    setSafeFrameConfig({sandbox: true}).
    addService(googletag.pubads());

googletag.defineSlot("/1234567/news", [160, 600], "div-2").
    addService(googletag.pubads());

googletag.display();

slot = googletag.defineSlot("/1234567/sports", [160, 600], "div-1").
        addService(googletag.pubads());

// Example with a single value for a key.
slot.setTargeting("allow_expandable", "true");

// Example with multiple values for a key inside in an array.
slot.setTargeting("interests", ["sports", "music", "movies"]);

// googletag.display accepts a div element as well as a div ID.
googletag.display(new HTMLElement());

// googletag.display accepts a slot
googletag.display(slot);

// pubads.display accepts a div element.
googletag.pubads().display("/1234567/science", [300, 250], new HTMLElement());

// A named size can be a string or an array of strings.
googletag.pubads().display("/1234567/science/physics", [[300, 250], "fluid"], "div-1");
googletag.pubads().display("/1234567/science/physics", [[300, 250], ["fluid"]], "div-1");

// Request non-personalized ads
googletag.pubads().setRequestNonPersonalizedAds(1);

// Set Privact Settings
googletag.pubads().setPrivacySettings({
    restrictDataProcessing: true,
});
