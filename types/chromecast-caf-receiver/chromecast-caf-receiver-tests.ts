import {
    PlayerData,
    PlayerDataBinder
} from "chromecast-caf-receiver/cast.framework.ui";
import {
    ReadyEvent,
    ApplicationData
} from "chromecast-caf-receiver/cast.framework.system";
import {
    RequestEvent,
    Event,
    BreaksEvent
} from "chromecast-caf-receiver/cast.framework.events";
import {
    QueueBase,
    TextTracksManager,
    QueueManager,
    PlayerManager
} from "chromecast-caf-receiver/cast.framework";
import {
    BreakSeekData,
    BreakClipLoadInterceptorContext,
    BreakManager
} from "chromecast-caf-receiver/cast.framework.breaks";
import {
    Break,
    BreakClip,
    LoadRequestData,
    Track,
    MediaMetadata
} from "chromecast-caf-receiver/cast.framework.messages";

const breaksEvent = new BreaksEvent('BREAK_STARTED');
breaksEvent.breakId = 'some-break-id';
breaksEvent.breakClipId = 'some-break-clip-id';

const track = new Track(1, "TEXT");
const breakClip = new BreakClip("id");
const adBreak = new Break("id", ["id"], 1);
const rEvent = new RequestEvent("BITRATE_CHANGED", { requestId: 2 });
const pManager = new PlayerManager();
pManager.addEventListener("STALLED", () => { });
const ttManager = new TextTracksManager();
const qManager = new QueueManager();
const qBase = new QueueBase();
const items = qBase.fetchItems(1, 3, 4);
const breakSeekData = new BreakSeekData(0, 100, []);
const breakClipLoadContext = new BreakClipLoadInterceptorContext(adBreak);
const breakManager: BreakManager = {
    getBreakById: () => adBreak,
    getBreakClipById: () => breakClip,
    getBreakClips: () => [breakClip],
    getBreaks: () => [adBreak],
    getPlayWatchedBreak: () => true,
    setBreakClipLoadInterceptor: () => { },
    setBreakSeekInterceptor: () => { },
    setPlayWatchedBreak: () => { },
    setVastTrackingInterceptor: () => { }
};

const lrd: LoadRequestData = {
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

const appData: ApplicationData = {
    id: () => "id",
    launchingSenderId: () => "launch-id",
    name: () => "name",
    namespaces: () => ["namespace"],
    sessionId: () => 1
};

const readyEvent = new ReadyEvent(appData);
const data = readyEvent.data;
const pData: PlayerData = {
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
    metadata: new MediaMetadata("GENERIC"),
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
const binder = new PlayerDataBinder(pData);
binder.addEventListener("ANY_CHANGE", e => { });
