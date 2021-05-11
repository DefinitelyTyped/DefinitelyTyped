import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

const audioElement = document.createElement('audio');

const playerOptions: VideoJsPlayerOptions = {
    autoplay: 'muted',
    bigPlayButton: false,
    controls: true,
    controlBar: {
        playToggle: false,
        captionsButton: false,
        chaptersButton: false,
        pictureInPictureToggle: audioElement.tagName !== "AUDIO"
    },
    height: 10,
    loop: true,
    muted: true,
    poster: 'https://example.com/poster.png',
    preload: 'auto',
    src: 'https://example.com/video.mp4',
    width: 10,
    aspectRatio: '16:9',
    children: [{ name: 'name' }],
    fluid: false,
    inactivityTimeout: 42,
    language: 'en',
    languages: {
        en: {
            someKey: 'someTranslation',
        },
    },
    liveui: true,
    nativeControlsForTouch: true,
    notSupportedMessage: 'Oh no! :(',
    playbackRates: [0.5, 1],
    plugins: {
        myPlugin: {
            myOption: true,
        },
    },
    responsive: false,
    sources: [
        {
            src: 'https://example.com/video.mp4',
            type: 'video/mp4',
        },
    ],
    techOrder: ['html5', 'anotherTech'],
    userActions: {
        doubleClick: event => {},
        hotkeys: true,
    },
};

playerOptions.userActions!.hotkeys = event => {
    console.log(event.which);
};

playerOptions.userActions!.hotkeys = {
    fullscreenKey: event => {
        return event.which === 42;
    },
    muteKey: event => {
        return event.which === 42;
    },
    playPauseKey: event => {
        return event.which === 42;
    },
};

playerOptions.controlBar! = {
    pictureInPictureToggle: false,
    currentTimeDisplay: false,
    timeDivider: false,
};

videojs('example_video_1', playerOptions).ready(function() {
    // EXAMPLE: Start playing the video.
    const playPromise = this.play();

    if (playPromise) {
        playPromise.then(() => {});
    }

    this.pause();

    const isPaused: boolean = this.paused();
    const isPlaying: boolean = !this.paused();

    this.src('http://www.example.com/path/to/video.mp4');

    this.src({ type: 'video/mp4', src: 'http://www.example.com/path/to/video.mp4' });

    this.src([
        { type: 'video/mp4', src: 'http://www.example.com/path/to/video.mp4' },
        { type: 'video/webm', src: 'http://www.example.com/path/to/video.webm' },
        { type: 'video/ogg', src: 'http://www.example.com/path/to/video.ogv' },
    ]);

    const liveTracker = this.liveTracker;
    liveTracker.on('seekableendchange', () => {});
    liveTracker.on('liveedgechange', () => {});
    const windowOrDuration = liveTracker.isLive() ? liveTracker.liveWindow() : this.duration();
    const liveCurrentTime: number = liveTracker.liveCurrentTime();
    const liveWindow: number = liveTracker.liveWindow();
    const seekableStart: number = liveTracker.seekableStart();
    const seekableEnd: number = liveTracker.seekableEnd();
    const atLiveEdge: boolean = liveTracker.atLiveEdge();
    const behindLiveEdge: boolean = liveTracker.behindLiveEdge();
    const pastSeekEnd: number = liveTracker.pastSeekEnd();
    const isLive: boolean = liveTracker.isLive();
    liveTracker.seekToLiveEdge();
    liveTracker.startTracking();
    liveTracker.stopTracking();
    const isTracking: boolean = liveTracker.isTracking();

    const whereYouAt: number = this.currentTime();

    const howLongIsThis: number = this.duration();

    const bufferedTimeRange: TimeRanges = this.buffered();

    // Number of different ranges of time have been buffered. Usually 1.
    const numberOfRanges: number = bufferedTimeRange.length;

    // Time in seconds when the first range starts. Usually 0.
    const firstRangeStart: number = bufferedTimeRange.start(0);

    // Time in seconds when the first range ends
    const firstRangeEnd: number = bufferedTimeRange.end(0);

    // Length in seconds of the first time range
    const firstRangeLength: number = firstRangeEnd - firstRangeStart;

    const howMuchIsDownloaded: number = this.bufferedPercent();

    const howLoudIsIt: number = this.volume();

    this.volume(0.5); // Set volume to half

    const howWideIsIt: number = this.width();

    this.width(640);

    const howTallIsIt: number = this.height();

    this.height(480);

    const readyState: videojs.ReadyState = this.readyState();

    this.requestFullscreen();

    const networkState: videojs.NetworkState = this.networkState();

    const responsive: boolean = this.responsive();

    this.responsive(false);

    testEvents(this);

    testComponents(this);

    testPlugin(this, {});

    testLogger();

    testMiddleware();
});

function testEvents(player: videojs.Player) {
    const myFunc = function(this: videojs.Player) {
        // Do something when the event is fired
    };
    player.on('error', myFunc);
    // Removes the specified listener only.
    player.off('error', myFunc);

    const myFuncWithArg = function(this: videojs.Player, e: Event) {
        // Do something when the event is fired
    };
    player.on('volumechange', myFuncWithArg);
    // Removes all listeners for the given event type.
    player.off('volumechange');

    player.on('loadeddata', () => {
        /* Some handler. */
    });
    // Removes all listeners.
    player.off();
}

function testComponents(player: videojs.Player) {
    class MyWindow extends videojs.getComponent('ModalDialog') {
        myFunction() {
            this.player().play();
        }
    }

    const myWindow = new MyWindow(player, {});
    myWindow.controlText('My text');
    myWindow.open();
    myWindow.close();
    myWindow.myFunction();
}

function testPlugin(player: videojs.Player, options: {}) {
    if (player.usingPlugin('uloztoExample')) {
        return;
    }

    videojs.registerPlugin('uloztoExample', function({}: typeof options) {
        this.play();
        this.one('ended', () => {
            // do something
        });
    });
    (player as any).uloztoExample(options);

    const Plugin = videojs.getPlugin('plugin');

    interface ExamplePluginOptions {
        customClass: string;
    }

    class ExamplePlugin extends Plugin {
        constructor(player: VideoJsPlayer, options: ExamplePluginOptions) {
            super(player, options);

            if (options.customClass) {
                player.addClass(options.customClass);
            }

            player.on('playing', () => {
                videojs.log('playback began!');
            });

            this.player.on('pause', () => {
                videojs.log('playback ended');
            });

            const media = this.player.getMedia();

            this.player.loadMedia(
                {
                    src: 'http://www.example.com/path/to/video.mp4',
                    poster: 'http://www.example.com/path/to/image.jpg',
                },
                () => {
                    videojs.log('loadMedia ready!');
                },
            );
        }
    }

    videojs.registerPlugin('ExamplePlugin', ExamplePlugin);
}

function testLogger() {
    const mylogger = videojs.log.createLogger('mylogger');
    const anotherlogger = mylogger.createLogger('anotherlogger');

    videojs.log('hello');
    mylogger('how are you');
    anotherlogger('today');

    const currentLevel = videojs.log.level();
    videojs.log.level(videojs.log.levels.DEFAULT);
}

function testMiddleware() {
    videojs.use('*', () => ({
        setSource: (srcObj, next) => next(null, srcObj),
    }));
}
