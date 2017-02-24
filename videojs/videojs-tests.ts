// Tests for Video.js API

import * as videojs from 'videojs';

videojs("example_video_1").ready(function() {
	// EXAMPLE: Start playing the video.
	this.play();

	this.pause();

	var isPaused: boolean = this.paused();
	var isPlaying: boolean = !this.paused();

	this.src("http://www.example.com/path/to/video.mp4");

	this.src({ type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" });

	this.src([
	  { type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" },
	  { type: "video/webm", src: "http://www.example.com/path/to/video.webm" },
	  { type: "video/ogg", src: "http://www.example.com/path/to/video.ogv" }
	]);

	var whereYouAt: number = this.currentTime();

	this.currentTime(120); // 2 minutes into the video

	var howLongIsThis: number = this.duration();

	var bufferedTimeRange: TimeRanges = this.buffered();

	// Number of different ranges of time have been buffered. Usually 1.
	var numberOfRanges: number = bufferedTimeRange.length;

	// Time in seconds when the first range starts. Usually 0.
	var firstRangeStart: number = bufferedTimeRange.start(0);

	// Time in seconds when the first range ends
	var firstRangeEnd: number = bufferedTimeRange.end(0);

	// Length in seconds of the first time range
	var firstRangeLength: number = firstRangeEnd - firstRangeStart;

	var howMuchIsDownloaded: number = this.bufferedPercent();

	var howLoudIsIt: number = this.volume();

	this.volume(0.5); // Set volume to half

	var howWideIsIt: number = this.width();

	this.width(640);

	var howTallIsIt: number = this.height();

	this.height(480);

	this.size(640, 480);

	this.requestFullScreen();

	testEvents(this);
});

function testEvents(myPlayer: videojs.Player) {
	const myFunc = function(this: videojs.Player) {
		// Do something when the event is fired
	};
	myPlayer.on("error", myFunc);
	// Removes the specified listener only.
	myPlayer.off("error", myFunc);


	const myFuncWithArg = function(this: videojs.Player, e: Event) {
		// Do something when the event is fired
	};
	myPlayer.on("volumechange", myFuncWithArg);
	// Removes all listeners for the given event type.
	myPlayer.off("volumechange");

	myPlayer.on("loadeddata", () => { /* Some handler. */ });
	// Removes all listeners.
	myPlayer.off();
}
