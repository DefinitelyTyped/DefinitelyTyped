///<reference path="playerFramework.d.ts" />

var el = document.createElement("div");
var player = new PlayerFramework.MediaPlayer(el);
player.decreasePlaybackRate();
player.increasePlaybackRate();
player.load();
player.pause();
player.play();
player.playResume();
player.replay();
player.retry();
player.stop();

player.volume = 50;

var duration = player.duration;
var volume = player.volume;
var audioAllowed = player.isAudioAllowed
var audioEnabled = player.isAudioEnabled;
var audioVisible = player.isAudioVisible;
var captionsAllowed = player.isCaptionsAllowed
var captionsEnabled = player.isCaptionsEnabled;
var captionsVisible = player.isCaptionsVisible;