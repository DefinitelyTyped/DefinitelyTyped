import UI from "chromecast-caf-receiver/cast.framework.ui";
import System from "chromecast-caf-receiver/cast.framework.system";
import Events from "chromecast-caf-receiver/cast.framework.events";
import Framework from "chromecast-caf-receiver/cast.framework";
import Breaks from "chromecast-caf-receiver/cast.framework.breaks";
import Messages from "chromecast-caf-receiver/cast.framework.messages";

const breaksEvent = new Events.BreaksEvent('BREAK_STARTED');
breaksEvent.breakId = 'some-break-id';
breaksEvent.breakClipId = 'some-break-clip-id';

const track = new Messages.Track(1, "TEXT");
const breakClip = new Messages.BreakClip("id");
const adBreak = new Messages.Break("id", ["id"], 1);
const rEvent = new Events.RequestEvent("BITRATE_CHANGED", { requestId: 2 });
const pManager = new Framework.PlayerManager();
pManager.addEventListener("STALLED", () => { });
const ttManager = new Framework.TextTracksManager();
const qManager = new Framework.QueueManager();
const qBase = new Framework.QueueBase();
const items = qBase.fetchItems(1, 3, 4);
const breakSeekData = new Breaks.BreakSeekData(0, 100, []);
const breakClipLoadContext = new Breaks.BreakClipLoadInterceptorContext(adBreak);
const breakManager: Breaks.BreakManager = {
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

const lrd: Messages.LoadRequestData = {
    requestId: 1,
    activeTrackIds: [1, 2],
    media: {
        textTrackStyle: {},
        streamType: "BUFFERED",
        metadata: { metadataType: "GENERIC" },
        hlsSegmentFormat: "AAC",
        contentId: "id",
        contentType: "type"
    },
    queueData: {}
};

const appData: System.ApplicationData = {
    id: () => "id",
    launchingSenderId: () => "launch-id",
    name: () => "name",
    namespaces: () => ["namespace"],
    sessionId: () => 1
};

const readyEvent = new System.ReadyEvent(appData);
const data = readyEvent.data;
const pData: UI.PlayerData = {
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
    metadata: new Messages.MediaMetadata("GENERIC"),
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
const binder = new UI.PlayerDataBinder(pData);
binder.addEventListener("ANY_CHANGE", e => { });
