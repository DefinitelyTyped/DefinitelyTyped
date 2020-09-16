import {
    MediaMetadata,
    LoadRequestData,
    StreamType,
    HlsSegmentFormat,
    TrackType,
    MessageType,
} from 'chromecast-caf-receiver/cast.framework.messages';
import { DetailedErrorCode, EventType } from 'chromecast-caf-receiver/cast.framework.events';

// The following test showcases how you can import individual types directly from the namespace:

const mediaMetadata = new MediaMetadata(cast.framework.messages.MetadataType.GENERIC);
mediaMetadata.metadataType = cast.framework.messages.MetadataType.TV_SHOW;

// The following tests showcase how you can globally access 'cast' types using
// the nested namespace style. This is the preferred method as it
// conforms exactly to the CAF documentation.

// tslint:disable-next-line
const breaksEvent = new cast.framework.events.BreaksEvent(EventType.BREAK_STARTED);
breaksEvent.breakId = 'some-break-id';
breaksEvent.breakClipId = 'some-break-clip-id';

// tslint:disable-next-line
const track = new cast.framework.messages.Track(1, TrackType.TEXT);
// tslint:disable-next-line
const breakClip = new cast.framework.messages.BreakClip('id');
// tslint:disable-next-line
const adBreak = new cast.framework.messages.Break('id', ['id'], 1);
// tslint:disable-next-line
const rEvent = new cast.framework.events.RequestEvent(EventType.LOAD_START, {
    requestId: 2,
    type: MessageType.LOAD,
    // TODO: Do some testing on the receiver and see what a real world
    // TODO: `RequestEvent` looks like.
});
// tslint:disable-next-line
const pManager = new cast.framework.PlayerManager();
pManager.addEventListener(EventType.STALLED, () => {});
pManager.addEventListener(cast.framework.events.category.CORE, () => {});
pManager.addEventListener(cast.framework.events.category.DEBUG, () => {});
pManager.addEventListener(cast.framework.events.category.FINE, () => {});
pManager.addEventListener(cast.framework.events.category.REQUEST, () => {});
pManager.addEventListener(
    EventType.MEDIA_FINISHED,
    (event: cast.framework.events.MediaFinishedEvent) => `${event.currentMediaTime} ${event.endedReason}`,
);
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
    streamType: StreamType.BUFFERED,
    metadata: {
        metadataType: cast.framework.messages.MetadataType.GENERIC,
    },
    hlsSegmentFormat: HlsSegmentFormat.AAC,
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
pData.state = cast.framework.ui.State.PAUSED;
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

cast.framework.CastReceiverContext.getInstance().addEventListener(
    [cast.framework.system.EventType.SENDER_CONNECTED, cast.framework.system.EventType.SENDER_DISCONNECTED],
    () => '¡hola!',
);

// send custom message to specific sender
cast.framework.CastReceiverContext.getInstance().sendCustomMessage('custom-namespace', 'sender-id', {});

// broadcast custom message to all connected senders
cast.framework.CastReceiverContext.getInstance().sendCustomMessage('custom-namespace', undefined, {});

const loadingError = new cast.framework.events.ErrorEvent(DetailedErrorCode.LOAD_FAILED, 'Loading failed!');

// PlayerManager message interceptors
cast.framework.CastReceiverContext.getInstance()
    .getPlayerManager()
    .setMessageInterceptor(cast.framework.messages.MessageType.LOAD, () => new Promise((resolve, reject) => {}));
cast.framework.CastReceiverContext.getInstance()
    .getPlayerManager()
    .setMessageInterceptor(cast.framework.messages.MessageType.LOAD, () => new LoadRequestData());
cast.framework.CastReceiverContext.getInstance()
    .getPlayerManager()
    .setMessageInterceptor(cast.framework.messages.MessageType.LOAD, () => null);
cast.framework.CastReceiverContext.getInstance()
    .getPlayerManager()
    .setMessageInterceptor(cast.framework.messages.MessageType.LOAD, null);
cast.framework.CastReceiverContext.getInstance()
    .getPlayerManager()
    .setMessageInterceptor(cast.framework.messages.MessageType.CUSTOM_COMMAND, customCommandRequestData => {
        const data = customCommandRequestData.data;
        return customCommandRequestData;
    });
cast.framework.CastReceiverContext.getInstance()
    .getPlayerManager()
    .setMessageInterceptor(cast.framework.messages.MessageType.SET_VOLUME, volumeRequestData => {
        const volume = volumeRequestData.volume;
        return volumeRequestData;
    });

// PlayerManager event listeners
cast.framework.CastReceiverContext.getInstance()
    .getPlayerManager()
    .addEventListener(cast.framework.events.EventType.BITRATE_CHANGED, bitrateChangedEvent => {
        const bitrate = bitrateChangedEvent.totalBitrate;
    });

// CastDebugLogger
const debugLogger = cast.debug.CastDebugLogger.getInstance();

debugLogger.loggerLevelByEvents = {
    'cast.framework.events.category.CORE': cast.framework.LoggerLevel.WARNING,
};

debugLogger.setEnabled(true);

debugLogger.showDebugLogs(true);

debugLogger.error(
    'REPORTING',
    'Track could not be reported',
    cast.framework.CastReceiverContext.getInstance().getPlayerManager().getMediaInformation(),
);

const controls = cast.framework.ui.Controls.getInstance();

controls.assignButton(cast.framework.ui.ControlsSlot.SLOT_SECONDARY_1, cast.framework.ui.ControlsButton.LIKE);
controls.assignButton(cast.framework.ui.ControlsSlot.SLOT_SECONDARY_2, cast.framework.ui.ControlsButton.DISLIKE);
