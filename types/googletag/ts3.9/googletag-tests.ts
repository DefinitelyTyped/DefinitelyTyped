// Use examples from https://developers.google.cn/publisher-tag/reference

// Load the GPT library by adding the following to the <head> of the HTML document.
// <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
// <script>window.googletag = window.googletag || {cmd: []};</script>
(window as any).googletag = (window as any).googletag || { cmd: [] };

// DEMO 1
// <script>
if ((window as any).googletag && googletag.apiReady) {
    // GPT API can be called safely.
}
// </script>

// DEMO 2
googletag.cmd.push(() => {
    googletag.defineSlot('/1234567/sports', [160, 600]).addService(googletag.pubads());
});

// DEMO 3
// Define a custom out-of-page ad slot.
googletag.defineOutOfPageSlot('/1234567/sports', 'div-1');

// Define a GPT managed web interstitial ad slot.
googletag.defineOutOfPageSlot('/1234567/sports', googletag.enums.OutOfPageFormat.INTERSTITIAL);

// DEMO 4
googletag.defineSlot('/1234567/sports', [728, 90], 'div-1');

// DEMO 5
// The calls to construct an ad and display contents.
let slot1: googletag.Slot;
let slot2: googletag.Slot;
let slot3: googletag.Slot | null;

slot1 = googletag.defineSlot('/1234567/sports', [728, 90]);
slot2 = googletag.defineSlot('/1234567/news', [160, 600]);
slot3 = googletag.defineSlot('/1234567/weather', [160, 600], 'div-3');

// This call to destroy only slot1.
googletag.destroySlots([slot1]);

// This call to destroy both slot1 and slot2.
googletag.destroySlots([slot1, slot2]);

// This call to destroy all slots.
googletag.destroySlots();

// DEMO 6
// <div id="div-1" style="width: 728px; height: 90px">
// <script type="text/javascript">
googletag.cmd.push(() => {
    googletag.display('div-1');
});
// </script>
// </div>

// DEMO 7
// Calling with div id
googletag.openConsole('div-1');

// Calling without div id
googletag.openConsole();

// DEMO 8
googletag.setAdIframeTitle('title');

// DEMO 9
googletag.cmd.push(() => {
    googletag.defineSlot('/1234567/sports', [160, 600]).addService(googletag.pubads());
});

// DEMO 10
googletag.companionAds().setRefreshUnfilledSlots(true);

// DEMO 11
let slot: googletag.Slot;

slot = googletag.defineSlot('/1234567/sports', [728, 90], 'div-1').addService(googletag.content());
googletag.enableServices();

if (slot) {
    const content = '<a href="www.mydestinationsite.com"><img src="www.mysite.com/img.png"></img></a>';
    googletag.content().setContent(slot, content);
}

// DEMO 12

// This call to clear only slot1.
googletag.pubads().clear([slot1]);

// This call to clear both slot1 and slot2.
googletag.pubads().clear([slot1, slot2]);

// This call to clear all slots.
googletag.pubads().clear();

// DEMO 13
// Set category exclusion to exclude ads with 'AirlineAd' labels.
googletag.pubads().setCategoryExclusion('AirlineAd');

// Make ad requests. No ad with 'AirlineAd' label will be returned.

// Clear category exclusions so all ads can be returned.
googletag.pubads().clearCategoryExclusions();

// Make ad requests. Any ad can be returned.

// DEMO 14
googletag.pubads().setTargeting('interests', 'sports');
googletag.pubads().setTargeting('colors', 'blue');
googletag.pubads().setTargeting('fruits', 'apple');

googletag.pubads().clearTargeting('interests');
// Targeting 'colors' and 'fruits' are still present, while 'interests' was
// cleared.

googletag.pubads().clearTargeting();
// All targeting has been cleared.

// DEMO 15
googletag.pubads().display('/1234567/sports', [728, 90], 'div-1');

// DEMO 16
// A) Enable with defaults.
googletag.pubads().enableLazyLoad();
// B) Enable without lazy fetching. Additional calls override previous ones.
googletag.pubads().enableLazyLoad({ fetchMarginPercent: -1 });
// C) Enable lazy loading with...
googletag.pubads().enableLazyLoad({
    fetchMarginPercent: 500, // Fetch slots within 5 viewports.
    renderMarginPercent: 200, // Render slots within 2 viewports.
    mobileScaling: 2.0, // Double the above values on mobile.
});

// DEMO 17
googletag.pubads().set('adsense_background_color', '#FFFFFF');
let color = googletag.pubads().get('adsense_background_color');
// color == '#FFFFFF'.

// DEMO 18
googletag.pubads().set('adsense_background_color', '#FFFFFF');
googletag.pubads().set('adsense_border_color', '#AABBCC');
let keys = googletag.pubads().getAttributeKeys();
// Keys are ['adsense_background_color', 'adsense_border_color'].

// DEMO 19
googletag.pubads().setTargeting('interests', 'sports');

let param = googletag.pubads().getTargeting('interests');
// param is ['sports']

param = googletag.pubads().getTargeting('age');
// param is [] (empty array)

// DEMO 20
googletag.pubads().setTargeting('interests', 'sports');
googletag.pubads().setTargeting('colors', 'blue');

keys = googletag.pubads().getTargetingKeys();
// keys are ['interests', 'colors'].

// DEMO 21

// This call to refresh fetches a new ad for slot1 only.
googletag.pubads().refresh([slot1]);

// This call to refresh fetches a new ad for both slot1 and slot2.
googletag.pubads().refresh([slot1, slot2]);

// This call to refresh fetches a new ad for each slot.
googletag.pubads().refresh();

// This call to refresh fetches a new ad for slot1, without changing the
// correlator.
googletag.pubads().refresh([slot1], { changeCorrelator: false });

// This call to refresh fetches a new ad for each slot, without changing
// the correlator.
googletag.pubads().refresh(undefined, { changeCorrelator: false });

// DEMO 22
googletag.pubads().set('adsense_background_color', '#FFFFFF');

// DEMO 23
// Label = AirlineAd.
googletag.pubads().setCategoryExclusion('AirlineAd');

// DEMO 24
// Make ads centered.
googletag.pubads().setCentering(true);

// DEMO 25
// Ignores Google Ad Manager cookies.
googletag.pubads().setCookieOptions(1);

// DEMO 26
googletag.pubads().setForceSafeFrame(true);

// The following slot will be opted-out of the page-level force
// safeframe instruction.
googletag.defineSlot('/1234567/sports', [160, 600], 'div-1').setForceSafeFrame(false).addService(googletag.pubads());

// The following slot will have safeframe forced.
googletag.defineSlot('/1234567/news', [160, 600], 'div-2').addService(googletag.pubads());

// googletag.display();

// DEMO 27
// Postal code:
googletag.pubads().setLocation('10001,US');

// DEMO 28
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

// DEMO 29
googletag.pubads().setPublisherProvidedId('AB123456789');

// DEMO 30
// Mark ad requests to request non-personalized ads.
googletag.pubads().setRequestNonPersonalizedAds(1);

// DEMO 31
googletag.pubads().setForceSafeFrame(true);

let pageConfig: googletag.SafeFrameConfig = {
    allowOverlayExpansion: true,
    allowPushExpansion: true,
    sandbox: true,
    useUniqueDomain: true,
};

let slotConfig: googletag.SafeFrameConfig = { allowOverlayExpansion: false };

googletag.pubads().setSafeFrameConfig(pageConfig);

// The following slot will not allow for expansion by overlay.
googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setSafeFrameConfig(slotConfig)
    .addService(googletag.pubads());

// The following slot will inherit the page level settings, and hence
// would allow for expansion by overlay.
googletag.defineSlot('/1234567/news', [160, 600], 'div-2').addService(googletag.pubads());

// googletag.display();

// DEMO 32
// Example with a single value for a key.
googletag.pubads().setTargeting('interests', 'sports');

// Example with multiple values for a key inside in an array.
googletag.pubads().setTargeting('interests', ['sports', 'music', 'movies']);

// DEMO 33
// Assume that the correlator is currently 12345. All ad requests made by
// this page will currently use that value.

// Replace the current correlator with a new correlator.
googletag.pubads().updateCorrelator();

// The correlator will now be a new randomly selected value, different
// from 12345. All subsequent ad requests made by this page will use
// the new value.

// DEMO 34
// 1. Adding an event listener for the PubAdsService.
googletag.pubads().addEventListener('slotOnload', event => {
    console.log('Slot has been loaded:');
    console.log(event);
});

// 2. Adding an event listener with slot specific logic.
// Listeners operate at service level, which means that you cannot add a
// listener for an event for a specific slot only. You can, however,
// programmatically filter a listener to respond only to a certain ad slot,
// using this pattern:
let targetSlot = {};
googletag.pubads().addEventListener('slotOnload', event => {
    if (event.slot === targetSlot) {
        // Slot specific logic.
    }
});

// 1. Define a callback function.
const onViewableListener = (event: googletag.events.Event) => {
    setTimeout(() => {
        googletag.pubads().refresh([event.slot]);
    }, 30000);

    // Remove the event listener after executing this callback once.
    googletag.pubads().removeEventListener('impressionViewable', onViewableListener);
};
// 2. Add an event listener to execute the callback.
googletag.pubads().addEventListener('impressionViewable', onViewableListener);

// DEMO 35
let mapping1 = googletag
    .sizeMapping()
    .addSize([1024, 768], [970, 250])
    .addSize([980, 690], [728, 90])
    .addSize([640, 480], 'fluid')
    .addSize([0, 0], [88, 31]) // Fits browsers of any size smaller than 640x480.
    .build();
let mapping2 = googletag
    .sizeMapping()
    .addSize([1024, 768], [970, 250])
    .addSize([980, 690], [])
    .addSize([640, 480], [120, 60])
    .addSize([0, 0], [])
    .build();

// mapping2 will not show any ads for the following viewport sizes:
// [1024, 768] > size >= [980, 690] and
// [640, 480] > size >= [0, 0]

// DEMO 36
googletag.defineSlot('/1234567/sports', [160, 600]).addService(googletag.pubads());

// DEMO 37
// Set category exclusion to exclude ads with 'AirlineAd' labels.
slot = googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setCategoryExclusion('AirlineAd')
    .addService(googletag.pubads());

// Make an ad request. No ad with 'AirlineAd' label will be returned for the slot.

// Clear category exclusions so all ads can be returned.
slot.clearCategoryExclusions();

// Make an ad request. Any ad can be returned for the slot.

// DEMO 38
slot = googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setTargeting('allow_expandable', 'true')
    .setTargeting('interests', ['sports', 'music', 'movies'])
    .setTargeting('color', 'red')
    .addService(googletag.pubads());

slot.clearTargeting('color');
// Targeting 'allow_expandable' and 'interests' are still present, while
// 'color' was cleared.

slot.clearTargeting();
// All targeting has been cleared.

// DEMO 39
slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1').addService(googletag.pubads());
let mapping = googletag
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
slot.defineSizeMapping([
    [
        [100, 100],
        [88, 31],
    ],
    [
        [320, 400],
        [
            [320, 50],
            [300, 50],
        ],
    ],
    [[0, 0], 'fluid'],
]);

// DEMO 40
slot = googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .set('adsense_background_color', '#FFFFFF')
    .addService(googletag.pubads());

color = googletag.pubads().get('adsense_background_color');
// color == '#FFFFFF'.

// DEMO 41
slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1').addService(googletag.pubads());

let path = slot.getAdUnitPath();
// path is '/1234567/sports'

// DEMO 42
slot = googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .set('adsense_background_color', '#FFFFFF')
    .set('adsense_border_color', '#AABBCC')
    .addService(googletag.pubads());

keys = googletag.pubads().getAttributeKeys();
// Keys are ['adsense_background_color', 'adsense_border_color'].

// DEMO 43
slot = googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setCategoryExclusion('AirlineAd')
    .setCategoryExclusion('TrainAd')
    .addService(googletag.pubads());

let exclusions = slot.getCategoryExclusions();
// exclusions are ['AirlineAd', 'TrainAd']

// DEMO 44
slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1').addService(googletag.pubads());

let slotElementId = slot.getSlotElementId();
// slotElementId is 'div-1'

// DEMO 45
slot = googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setTargeting('allow_expandable', 'true')
    .addService(googletag.pubads());

param = slot.getTargeting('allow_expandable') || [];
// param is ['true']

param = slot.getTargeting('age') || [];
// param is [] (empty array)

// DEMO 46
slot = googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setTargeting('allow_expandable', 'true')
    .setTargeting('interests', ['sports', 'music', 'movies'])
    .addService(googletag.pubads());

keys = slot.getTargetingKeys() || [];
// keys are ['interests', 'allow_expandable'].

// DEMO 47
// Setting an attribute on a single ad slot.
googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .set('adsense_background_color', '#FFFFFF')
    .addService(googletag.pubads());

// DEMO 48
// Label = AirlineAd
googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setCategoryExclusion('AirlineAd')
    .addService(googletag.pubads());

// DEMO 49
googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setClickUrl('http://www.example.com?original_click_url=')
    .addService(googletag.pubads());

// DEMO 50
googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setCollapseEmptyDiv(true, true)
    .addService(googletag.pubads());
// The above will cause the div for this slot to be collapsed
// when the page is loaded, before ads are requested.

googletag.defineSlot('/1234567/sports', [160, 600], 'div-2').setCollapseEmptyDiv(true).addService(googletag.pubads());
// The above will cause the div for this slot to be collapsed
// only after GPT detects that no ads are available for the slot.

// DEMO 51
googletag.defineSlot('/1234567/sports', [160, 600], 'div-1').setForceSafeFrame(true).addService(googletag.pubads());

// DEMO 52
googletag.pubads().setForceSafeFrame(true);

// The following slot will have a sandboxed safeframe that only disallows
// top-level navigation.
googletag
    .defineSlot('/1234567/sports', [160, 600], 'div-1')
    .setSafeFrameConfig({ sandbox: true })
    .addService(googletag.pubads());

googletag.defineSlot('/1234567/news', [160, 600], 'div-2').addService(googletag.pubads());

// googletag.display();

// DEMO 53
slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1').addService(googletag.pubads());

// Example with a single value for a key.
slot.setTargeting('allow_expandable', 'true');

// Example with multiple values for a key inside in an array.
slot.setTargeting('interests', ['sports', 'music', 'movies']);

// DEMO 54
slot = googletag.defineSlot('/1234567/sports', [160, 600], 'div-1');
slot.updateTargetingFromMap({
    color: 'red',
    interests: ['sports', 'music', 'movies'],
});

// DEMO 55
// This listener will be called when an impression becomes viewable.
targetSlot = {};
googletag.pubads().addEventListener('impressionViewable', event => {
    slot = event.slot;
    console.log('Impression for slot', slot.getSlotElementId(), 'became viewable.');

    if (slot === targetSlot) {
        // Slot specific logic.
    }
});

// DEMO 56
// This listener will be called when a creative iframe load event fires.
targetSlot = {};
googletag.pubads().addEventListener('slotOnload', event => {
    slot = event.slot;
    console.log('Creative iframe for slot', slot.getSlotElementId(), 'has loaded.');

    if (slot === targetSlot) {
        // Slot specific logic.
    }
});

// DEMO 57
// This listener will be called when a slot has finished rendering.
targetSlot = {};
googletag.pubads().addEventListener('slotRenderEnded', event => {
    slot = event.slot;
    console.group('Slot', slot.getSlotElementId(), 'finished rendering.');

    // Log details of the rendered ad.
    console.log('Advertiser ID:', event.advertiserId);
    console.log('Campaign ID: ', event.campaignId);
    console.log('Creative ID: ', event.creativeId);
    console.log('Is empty?:', event.isEmpty);
    console.log('Line Item ID:', event.lineItemId);
    console.log('Size:', event.size);
    console.log('Source Agnostic Creative ID:', event.sourceAgnosticCreativeId);
    console.log('Source Agnostic Line Item ID:', event.sourceAgnosticLineItemId);
    console.groupEnd();

    if (slot === targetSlot) {
        // Slot specific logic.
    }
});

// DEMO 58
// This listener will be called when the specified service issues an ad
// request for a slot. Each slot will fire this event, even though they may
// be batched together in a single request if single request architecture
// (SRA) is enabled.
targetSlot = {};
googletag.pubads().addEventListener('slotRequested', event => {
    slot = event.slot;
    console.log('Slot', slot.getSlotElementId(), 'has been requested.');

    if (slot === targetSlot) {
        // Slot specific logic.
    }
});

// DEMO 59
// This listener will be called when an ad response has been received for
// a slot.
targetSlot = {};
googletag.pubads().addEventListener('slotResponseReceived', event => {
    slot = event.slot;
    console.log('Ad response for slot', slot.getSlotElementId(), 'received.');

    if (slot === targetSlot) {
        // Slot specific logic.
    }
});

// DEMO 60
// This listener will be called whenever the on-screen percentage of an ad
// slot's area changes.
targetSlot = {};
googletag.pubads().addEventListener('slotVisibilityChanged', event => {
    slot = event.slot;
    console.group('Visibility of slot', slot.getSlotElementId(), 'changed.');

    // Log details of the event.
    console.log('Visible area:', event.inViewPercentage + '%');
    console.groupEnd();

    if (slot === targetSlot) {
        // Slot specific logic.
    }
});

// DEMO 61
// Test for definitions not declared by GPT Reference
googletag.pubads().clearTagForChildDirectedTreatment().setTagForChildDirectedTreatment(1).setTagForUnderAgeOfConsent(2);
googletag.pubads().enableAsyncRendering();
googletag.pubads().isSRA();
googletag.pubads().enableSyncRendering();
let imaContent = {
    vid: 'imaContentId?',
    cmsid: 'imaCmsId?',
};
googletag.pubads().setImaContent(imaContent.vid, imaContent.cmsid);
imaContent = googletag.pubads().getImaContent();
googletag.pubads().setVideoContent(imaContent.vid, imaContent.cmsid);
imaContent = googletag.pubads().getVideoContent();
googletag.pubads().getCorrelator();
googletag.pubads().getTagSessionCorrelator();
googletag.pubads().getName();
googletag.pubads().getVersion();
googletag.pubads().markAsAmp();
googletag.pubads().defineOutOfPagePassback('/1234567/sports');
googletag.pubads().definePassback('/1234567/sports', [300, 250]);

const slotIdMap = googletag.pubads().getSlotIdMap();
Object.keys(slotIdMap).forEach(slotId => {
    slot = slotIdMap[slotId];
    console.log(slotId, slot);
});
googletag
    .pubads()
    .getSlots()
    .forEach(slot => {
        console.log(
            slot.getClickUrl(),
            slot.getCollapseEmptyDiv(),
            slot.getContentUrl(),
            slot.getDivStartsCollapsed(),
            slot.getEscapedQemQueryId(),
            slot.getFirstLook(),
            slot.getHtml(),
            slot.getName(),
            slot.getOutOfPage(),
            slot.getServices(),
            slot.getSizes(),
            slot.getSlotId(),
            slot.getTargetingMap(),
        );
    });
