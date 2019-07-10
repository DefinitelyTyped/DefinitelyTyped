import { MediaMetadata } from 'chromecast-caf-receiver/cast.framework.messages';

// The following test showcases how you can import individual types directly from the namespace:

const mediaMetadata = new MediaMetadata(cast.framework.messages.MetadataType.GENERIC);
mediaMetadata.metadataType = cast.framework.messages.MetadataType.TV_SHOW;

// The following tests showcase how you can globally access 'cast' types using
// the nested namespace style. This is the preferred method as it
// conforms exactly to the CAF documentation.

// tslint:disable-next-line
const breaksEvent = new cast.framework.events.BreaksEvent('BREAK_STARTED');
breaksEvent.breakId = 'some-break-id';
breaksEvent.breakClipId = 'some-break-clip-id';

// tslint:disable-next-line
const track = new cast.framework.messages.Track(1, 'TEXT');
// tslint:disable-next-line
const breakClip = new cast.framework.messages.BreakClip('id');
// tslint:disable-next-line
const adBreak = new cast.framework.messages.Break('id', ['id'], 1);
// tslint:disable-next-line
const rEvent = new cast.framework.events.RequestEvent('BITRATE_CHANGED', {
    requestId: 2,
});
// tslint:disable-next-line
const pManager = new cast.framework.PlayerManager();
pManager.addEventListener('STALLED', () => {});
pManager.addEventListener(cast.framework.events.category.CORE, () => {});
pManager.addEventListener(cast.framework.events.category.DEBUG, () => {});
pManager.addEventListener(cast.framework.events.category.FINE, () => {});
pManager.addEventListener(cast.framework.events.category.REQUEST, () => {});
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
const breakClipLoadContext = new cast.framework.breaks.BreakClipLoadInterceptorContext(adBreak);
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
    setVastTrackingInterceptor: () => {},
};

// tslint:disable-next-line
const lrd = new cast.framework.messages.LoadRequestData();
lrd.requestId = 1;
lrd.activeTrackIds = [1, 2];
lrd.media = {
    tracks: [],
    textTrackStyle: {},
    streamType: 'BUFFERED',
    metadata: {
        metadataType: cast.framework.messages.MetadataType.GENERIC,
    },
    hlsSegmentFormat: 'aac',
    contentId: 'id',
    contentType: 'type',
    breakClips: [breakClip],
    breaks: [adBreak],
};
lrd.queueData = {};

// tslint:disable-next-line
const appData: cast.framework.system.ApplicationData = {
    id: () => 'id',
    launchingSenderId: () => 'launch-id',
    name: () => 'name',
    namespaces: () => ['namespace'],
    sessionId: () => 1,
};

// tslint:disable-next-line
const readyEvent = new cast.framework.system.ReadyEvent(appData);
const data = readyEvent.data;
// tslint:disable-next-line
const pData = new cast.framework.ui.PlayerData();
pData.breakPercentagePositions = [1];
pData.currentBreakClipNumber = 2;
pData.currentTime = 1234;
pData.displayStatus = true;
pData.duration = 222;
pData.isBreakSkippable = false;
pData.isLive = true;
pData.isPlayingBreak = false;
pData.isSeeking = true;
// tslint=disable-next-lin;
pData.metadata = new cast.framework.messages.MediaMetadata(cast.framework.messages.MetadataType.GENERIC);
pData.nextSubtitle = 'sub';
pData.nextThumbnailUrl = 'url';
pData.nextTitle = 'title';
pData.numberBreakClips = 3;
pData.preloadingNext = false;
pData.state = 'paused';
pData.thumbnailUrl = 'url';
pData.title = 'title';
pData.whenSkippable = 321;

// tslint:disable-next-line
const playerDataBinderWithPlayerData = new cast.framework.ui.PlayerDataBinder(pData);
const binder = new cast.framework.ui.PlayerDataBinder({});
binder.addEventListener(cast.framework.ui.PlayerDataEventType.ANY_CHANGE, e => {});
// tslint:disable-next-line
const supportedCommands: number =
    cast.framework.messages.Command.ALL_BASIC_MEDIA |
    cast.framework.messages.Command.QUEUE_NEXT |
    cast.framework.messages.Command.QUEUE_PREV;

const playbackConfig = new cast.framework.PlaybackConfig();
playbackConfig.protectionSystem = cast.framework.ContentProtection.WIDEVINE;
