const breaksEvent = new cast.framework.events.BreaksEvent('BREAK_STARTED');
breaksEvent.breakId = 'some-break-id';
breaksEvent.breakClipId = 'some-break-clip-id';

const track = new cast.framework.messages.Track(1, "TEXT");
const breakClip = new cast.framework.messages.BreakClip("id");
const adBreak = new cast.framework.messages.Break("id", ["id"], 1);
const rEvent = new cast.framework.events.RequestEvent("BITRATE_CHANGED", { requestId: 2 });
const pManager = new cast.framework.PlayerManager();
pManager.addEventListener("STALLED", () => { });
const ttManager = new cast.framework.TextTracksManager();
const qManager = new cast.framework.QueueManager();
const qBase = new cast.framework.QueueBase();
const items = qBase.fetchItems(1, 3, 4);
const breakSeekData = new cast.framework.breaks.BreakSeekData(0, 100, []);
const breakClipLoadContext = new cast.framework.breaks.BreakClipLoadInterceptorContext(adBreak);
const breakManager: cast.framework.breaks.BreakManager = {
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

const appData: cast.framework.system.ApplicationData = {
    id: () => "id",
    launchingSenderId: () => "launch-id",
    name: () => "name",
    namespaces: () => ["namespace"],
    sessionId: () => 1
};

const readyEvent = new cast.framework.system.ReadyEvent(appData);
const data = readyEvent.data;
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
const binder = new cast.framework.ui.PlayerDataBinder(pData);
binder.addEventListener("ANY_CHANGE", e => { });
