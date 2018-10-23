

var Unity = external.getUnityObject(1.0);
var settings = new UnitySettings();
Unity.init(settings);

// Actions
Unity.addAction("boom", function() {});
Unity.removeAction("boom");
Unity.removeActions();

// Notification
Unity.Notification.showNotification("sum", "body");
Unity.Notification.showNotification("sum", "body", "optional");

// Messaging
var props = new UnityIndicatorProperties();
props.count = 0;
props.time = new Date();

Unity.MessagingIndicator.showIndicator("boom", props);
Unity.MessagingIndicator.clearIndicator("boom");
Unity.MessagingIndicator.clearIndicators();

Unity.MessagingIndicator.addAction("boom", function() {});
Unity.MessagingIndicator.removeAction("boom");
Unity.MessagingIndicator.removeActions();
Unity.MessagingIndicator.onPresenceChanged(function() {});

// Launcher
Unity.Launcher.setCount(1);
Unity.Launcher.clearCount();

Unity.Launcher.setProgress(100);
Unity.Launcher.clearProgress();

Unity.Launcher.setUrgent(true);

Unity.Launcher.addAction("boom", function(){});
Unity.Launcher.removeAction("boom");
Unity.Launcher.removeActions();


// MediaPlayer
var metadata = new UnityTrackMetadata();
Unity.MediaPlayer.setTrack(metadata);

Unity.MediaPlayer.onPrevious(function(){});
Unity.MediaPlayer.onNext(function(){});
Unity.MediaPlayer.onPlayPause(function(){});

Unity.MediaPlayer.getPlaybackstate(function(){});
Unity.MediaPlayer.setPlaybackstate(UnityPlaybackState.Playing);

Unity.MediaPlayer.setCanGoNext(true);
Unity.MediaPlayer.setCanGoPrev(true);
Unity.MediaPlayer.setCanPlay(true);
Unity.MediaPlayer.setCanPause(true);