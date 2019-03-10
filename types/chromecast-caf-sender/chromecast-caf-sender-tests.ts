cast.framework.VERSION === "1.0.06";
cast.framework.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);

const context = cast.framework.CastContext.getInstance();
context.getCastState() === cast.framework.CastState.CONNECTED;
context.getSessionState() === cast.framework.SessionState.NO_SESSION;

context.setOptions({
  autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
  language: "en-US",
  receiverApplicationId: "test",
  resumeSavedSession: true
});

context.addEventListener(
  cast.framework.CastContextEventType.CAST_STATE_CHANGED,
  event => {
    const { castState } = event;
  }
);
context.addEventListener(
  cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
  event => {
    const { sessionState } = event;
  }
);

const handleSessionStateChange = (
  event: cast.framework.SessionStateEventData
) => {};
context.removeEventListener(
  cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
  handleSessionStateChange
);

context.requestSession().then(err => {
  if (err === chrome.cast.ErrorCode.CHANNEL_ERROR) return;

  const session = cast.framework.CastContext.getInstance().getCurrentSession();
  if (!session) return;

  const handleError = (err?: chrome.cast.ErrorCode) => {};

  session.getSessionObj().sessionId === session.getSessionId();
  session.getSessionState() === cast.framework.SessionState.SESSION_STARTED;
  session.getCastDevice().friendlyName;
  session.getApplicationMetadata().applicationId;
  session.getApplicationStatus() === "";
  session.getActiveInputState() ===
    cast.framework.ActiveInputState.ACTIVE_INPUT_STATE_UNKNOWN;
  session.endSession(false);
  session.setVolume(0.5).then(handleError);
  session.getVolume() === 0.5;
  session.setMute(true).then(handleError);
  session.isMute();
  session.sendMessage("namespace", { obj: 1 }).then(handleError);
  session.sendMessage("namespace", "string");
  session.sendMessage("namespace", 2);

  session.addMessageListener("namespace", (namespace, message) => {});
  session.removeMessageListener("namespace", (namespace, message) => {});

  const req = new chrome.cast.media.LoadRequest(
    new chrome.cast.media.MediaInfo("id", "type")
  );
  session.loadMedia(req);

  const media = session.getMediaSession();
  if (media && media.sessionId) {
  }

  session.addEventListener(
    cast.framework.SessionEventType.ACTIVE_INPUT_STATE_CHANGED,
    ({ activeInputState }) => {}
  );
  session.addEventListener(
    cast.framework.SessionEventType.APPLICATION_METADATA_CHANGED,
    ({ metadata }) => {}
  );
  session.addEventListener(
    cast.framework.SessionEventType.APPLICATION_STATUS_CHANGED,
    ({ status }) => {}
  );
  session.addEventListener(
    cast.framework.SessionEventType.MEDIA_SESSION,
    ({ mediaSession }) => {}
  );
  session.addEventListener(
    cast.framework.SessionEventType.VOLUME_CHANGED,
    ({ volume }) => {}
  );
  session.removeEventListener(
    cast.framework.SessionEventType.VOLUME_CHANGED,
    ({ volume }) => {}
  );
});

const player = new cast.framework.RemotePlayer();
{
  const bool: boolean =
    player.isConnected &&
    player.isMediaLoaded &&
    player.canControlVolume &&
    player.isPaused &&
    player.isMuted &&
    player.canPause &&
    player.canSeek;
  const sum: number = player.duration + player.currentTime + player.volumeLevel;
  const str: string =
    player.displayName + player.statusText + player.title + player.displayName;
}
player.mediaInfo && player.mediaInfo.contentId;
player.imageUrl && player.imageUrl === "";
player.playerState && player.playerState === chrome.cast.media.PlayerState.IDLE;
player.savedPlayerState && player.savedPlayerState.currentTime;
player.controller === null;

const playerCtrl = new cast.framework.RemotePlayerController(player);
player.controller === playerCtrl;
playerCtrl.playOrPause();
playerCtrl.stop();
playerCtrl.seek();
playerCtrl.muteOrUnmute();
playerCtrl.setVolumeLevel();
playerCtrl.getFormattedTime(60);
playerCtrl.getSeekPosition(1, 60) === playerCtrl.getSeekTime(1, 60);
playerCtrl.addEventListener(
  cast.framework.RemotePlayerEventType.ANY_CHANGE,
  () => {}
);
playerCtrl.removeEventListener(
  cast.framework.RemotePlayerEventType.ANY_CHANGE,
  () => {}
);
