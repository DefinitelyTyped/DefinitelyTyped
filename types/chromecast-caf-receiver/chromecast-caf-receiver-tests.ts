import { MediaMetadata } from "chromecast-caf-receiver/cast.framework.messages";

// The following test showcases how you can import individual types directly from the namespace:

const mediaMetadata = new MediaMetadata("GENERIC");
mediaMetadata.metadataType = "TV_SHOW";

// The following tests showcase how you can globally access 'cast' types using
// the nested namespace style. This is the preferred method as it
// conforms exactly to the CAF documentation.

// tslint:disable-next-line
const breaksEvent = new cast.framework.events.BreaksEvent("BREAK_STARTED");
breaksEvent.breakId = "some-break-id";
breaksEvent.breakClipId = "some-break-clip-id";

// tslint:disable-next-line
const track = new cast.framework.messages.Track(1, "TEXT");
// tslint:disable-next-line
const breakClip = new cast.framework.messages.BreakClip("id");
// tslint:disable-next-line
const adBreak = new cast.framework.messages.Break("id", ["id"], 1);
// tslint:disable-next-line
const rEvent = new cast.framework.events.RequestEvent("BITRATE_CHANGED", {
    requestId: 2
});
// tslint:disable-next-line
const pManager = new cast.framework.PlayerManager();
pManager.addEventListener("STALLED", () => {});
// tslint:disable-next-line
const ttManager = new cast.framework.TextTracksManager();
// tslint:disable-next-line
const qManager = new cast.framework.QueueManager();
// tslint:disable-next-line
const qBase = new cast.framework.QueueBase();
const items = qBase.fetchItems(1, 3, 4);
// tslint:disable-next-line
const breakSeekData = new cast.framework.breaks.BreakSeekData(0, 100, []);
// tslint:disable-next-line
const breakClipLoadContext = new cast.framework.breaks.BreakClipLoadInterceptorContext(
    adBreak
);
// tslint:disable-next-line
const breakManager: cast.framework.breaks.BreakManager = {
    getBreakById: () => adBreak,
    getBreakClipById: () => breakClip,
    getBreakClips: () => [breakClip],
    getBreaks: () => [adBreak],
    getPlayWatchedBreak: () => true,
    setBreakClipLoadInterceptor: () => {},
    setBreakSeekInterceptor: () => {},
    setPlayWatchedBreak: () => {},
    setVastTrackingInterceptor: () => {}
};

// tslint:disable-next-line
const lrd: cast.framework.messages.LoadRequestData = {
    requestId: 1,
    activeTrackIds: [1, 2],
    media: {
        tracks: [],
        textTrackStyle: {},
        streamType: "BUFFERED",
        metadata: { metadataType: "GENERIC" },
        hlsSegmentFormat: "AAC",
        contentId: "id",
        contentType: "type",
        breakClips: [breakClip],
        breaks: [adBreak]
    },
    queueData: {}
};

// tslint:disable-next-line
const appData: cast.framework.system.ApplicationData = {
    id: () => "id",
    launchingSenderId: () => "launch-id",
    name: () => "name",
    namespaces: () => ["namespace"],
    sessionId: () => 1
};

// tslint:disable-next-line
const readyEvent = new cast.framework.system.ReadyEvent(appData);
const data = readyEvent.data;
// tslint:disable-next-line
const pData: cast.framework.ui.PlayerData = {
    breakPercentagePositions: [1],
    contentType: "video",
    currentBreakClipNumber: 2,
    currentTime: 1234,
    displayStatus: true,
    duration: 222,
    isBreakSkippable: false,
    isLive: true,
    isPlayingBreak: false,
    isSeeking: true,
    // tslint:disable-next-line
    metadata: new cast.framework.messages.MediaMetadata("GENERIC"),
    nextSubtitle: "sub",
    nextThumbnailUrl: "url",
    nextTitle: "title",
    numberBreakClips: 3,
    preloadingNext: false,
    state: "paused",
    thumbnailUrl: "url",
    title: "title",
    whenSkippable: 321
};
// tslint:disable-next-line
const binder = new cast.framework.ui.PlayerDataBinder(pData);
binder.addEventListener("ANY_CHANGE", e => {});
