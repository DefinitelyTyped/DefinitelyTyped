// Tests for Video.js API
/// <reference path="videojs.d.ts" />

_V_("example_video_1").ready(function(){

	var myPlayer:VideoJSPlayer = this;

	// EXAMPLE: Start playing the video.
	myPlayer.play();

	myPlayer.pause();

	var isPaused: bool = myPlayer.paused();
	var isPlaying: bool = !myPlayer.paused();

	myPlayer.src("http://www.example.com/path/to/video.mp4");

	myPlayer.src({ type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" });

	myPlayer.src([
	  { type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" },
	  { type: "video/webm", src: "http://www.example.com/path/to/video.webm" },
	  { type: "video/ogg", src: "http://www.example.com/path/to/video.ogv" }
	]);

	var whereYouAt: number = myPlayer.currentTime();

	myPlayer.currentTime(120); // 2 minutes into the video

	var howLongIsThis: number = myPlayer.duration();

	var bufferedTimeRange: TimeRanges = myPlayer.buffered();

	// Number of different ranges of time have been buffered. Usually 1.
	var numberOfRanges: number = bufferedTimeRange.length;

	// Time in seconds when the first range starts. Usually 0.
	var firstRangeStart: number = bufferedTimeRange.start(0);

	// Time in seconds when the first range ends
	var firstRangeEnd: number = bufferedTimeRange.end(0);

	// Length in seconds of the first time range
	var firstRangeLength: number = firstRangeEnd - firstRangeStart;

	var howMuchIsDownloaded: number = myPlayer.bufferedPercent();

	var howLoudIsIt: number = myPlayer.volume();

	myPlayer.volume(0.5); // Set volume to half

	var howWideIsIt: number = myPlayer.width();

	myPlayer.width(640);

	var howTallIsIt: number = myPlayer.height();

	myPlayer.height(480);

	myPlayer.size(640,480);

	myPlayer.requestFullScreen();

	myPlayer.cancelFullScreen();

	
	var myFunc = function(){
		var myPlayer: VideoJSPlayer = this;
		// Do something when the event is fired
	};
	myPlayer.addEvent("volumechange", myFunc);
	myPlayer.removeEvent("volumechange", myFunc);

});