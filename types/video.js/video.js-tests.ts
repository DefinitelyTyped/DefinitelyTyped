import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

// $ExpectType boolean
window.HELP_IMPROVE_VIDEOJS;
// $ExpectType boolean | undefined
window.VIDEOJS_NO_DYNAMIC_STYLE;

const videoElement = document.createElement('video');
// $ExpectType VideoJsPlayer
videojs(videoElement);

const audioElement = document.createElement('audio');

const playerOptions: VideoJsPlayerOptions = {
    aspectRatio: '16:9',
    autoplay: 'muted',
    bigPlayButton: false,
    controlBar: {
        playToggle: false,
        captionsButton: false,
        chaptersButton: false,
        pictureInPictureToggle: audioElement.tagName !== 'AUDIO',
    },
    textTrackSettings: {
        persistTextTrackSettings: false,
    },
    controls: true,
    defaultVolume: 100,
    fill: false,
    fluid: false,
    height: 10,
    html5: {
    },
    inactivityTimeout: 42,
    language: 'en',
    languages: {
        en: {
            someKey: 'someTranslation',
        },
    },
    liveui: true,
    loop: true,
    muted: true,
    nativeControlsForTouch: true,
    notSupportedMessage: 'Oh no! :(',
    playbackRates: [0.5, 1],
    playsinline: false,
    noUITitleAttributes: true,
    plugins: {
        myPlugin: {
            myOption: true,
        },
    },
    poster: 'https://example.com/poster.png',
    preload: 'auto',
    responsive: false,
    sourceOrder: false,
    sources: [
        {
            src: 'https://example.com/video.mp4',
            type: 'video/mp4',
        },
    ],
    src: 'https://example.com/video.mp4',
    techOrder: ['html5', 'anotherTech'],
    tracks: [],
    userActions: {
        click: event => {},
        doubleClick: event => {},
        hotkeys: true,
    },
    width: 10,
    children: [{ name: 'name' }],
    audioOnlyMode: false,
    audioPosterMode: false,
    autoSetup: false,
    breakpoints: {
        xsmall: 20
    },
    fullscreen: {
        options: {
            navigationUI: 'hide',
        }
    },
    id: 'some-id',
    liveTracker: {
        trackingThreshold: 100,
        liveTolerance: 100
    },
    normalizeAutoplay: false,
    preferFullWindow: false,
    restoreEl: false,
    suppressNotSupportedError: false,
    techCanOverridePoster: false,
    "vtt.js": 'https://example.com/vtt.js',
    disablePictureInPicture: false,
    enableSourceset: true,
    retryOnError: true
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

videojs('example_video_1', playerOptions).ready(function playerReady() {
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

    // the option passed when initializing player is a string
    const preload: videojs.Preload | undefined = this.options_.preload;
    // but the option when setting preload later is boolean
    this.preload(false);

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
    liveTracker.nextSeekedFromUser();
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

    // $ExpectType TimeRanges
    const timeRanges = this.played();

    const howLoudIsIt: number = this.volume();

    this.volume(0.5); // Set volume to half

    const howWideIsIt: number = this.width();

    this.width(640);

    const howTallIsIt: number = this.height();

    this.height(480);

    const readyState: videojs.ReadyState = this.readyState();

    this.playbackRates([1, 1.5, 2]);

    // $ExpectType number[]
    const playbackRates: number[] = this.playbackRates();

    // $ExpectType string
    const currentBreakPoint = this.currentBreakpoint();

    // $ExpectType string
    const currentBreakpointClass: string = this.currentBreakpointClass();

    this.requestFullscreen();

    this.requestPictureInPicture().then(pipWindow => {
        // $ExpectType PictureInPictureWindow
        pipWindow;
    });

    // $ExpectType string | undefined
    this.requestNamedAnimationFrame('animationFrameName', () => {});

    // $ExpectType void
    this.cancelNamedAnimationFrame('animationFrameName');

    // $ExpectType Promise<void>
    this.exitPictureInPicture();

    const networkState: videojs.NetworkState = this.networkState();

    const responsive: boolean = this.responsive();

    this.responsive(false);

    const fill: boolean = this.fill();

    this.fill(false);

    const autoplay: videojs.Autoplay = this.autoplay();

    this.autoplay(false);

    const audioOnlyMode: boolean | Promise<void>  = this.audioOnlyMode();

    this.audioOnlyMode(true);

    const audioPosterMode: boolean | Promise<void> = this.audioPosterMode();

    this.audioPosterMode(true);

    const breakpoints: videojs.Breakpoint = this.breakpoints();

    this.breakpoints({ huge: 1000 });

    const crossOrigin: string = this.crossOrigin();

    this.crossOrigin('anonymous');

    this.debug(true);

    this.disablePictureInPicture(false);

    const isInPictureInPicture: boolean = this.isInPictureInPicture();

    this.isInPictureInPicture(false);

    testEvents(this);

    testComponents(this);

    testPlugin(this, {});

    testLogger();

    testMiddleware();

    // $ExpectType CanPlayTypeResult
    this.canPlayType('video/mp4');

    testTracks(this);

    testVideoElement(this);

    testControlBarElements(this);
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
    myWindow.isDisposed(); // $ExpectType boolean
    myWindow.dispose(); // $ExpectType void

    const MyOtherWindow = videojs.extend(videojs.getComponent('ModalDialog'), {
        myFunction() {
            this.player().play();
        },
        myOtherFunction(arg: string) {
            console.log(arg);
            return arg;
        },
    });

    const myOtherWindow = new MyOtherWindow(player, {});
    myOtherWindow.controlText('My text');
    myOtherWindow.open();
    myOtherWindow.close();
    myOtherWindow.myFunction(); // $ExpectType void
    myOtherWindow.myOtherFunction('test'); // $ExpectType string

    const MyClickableComponent = videojs.extend(videojs.getComponent('clickablecomponent'));
    const myClickable = new MyClickableComponent(player, {
        clickHandler: () => {},
    });
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
    const myLogger = videojs.log.createLogger('mylogger');
    const anotherLogger = myLogger.createLogger('anotherlogger');

    videojs.log('hello');
    myLogger('how are you');
    anotherLogger('today');

    const currentLevel = videojs.log.level();
    videojs.log.level(videojs.log.levels.DEFAULT);
}

function testMiddleware() {
    videojs.use('*', () => ({
        setSource: (srcObj, next) => next(null, srcObj),
    }));
}

function testTech() {
    // $ExpectType CanPlayTypeResult
    videojs.Tech.canPlaySource(
        {
            src: 'http://www.example.com/path/to/video.mp4',
            type: 'video/mp4',
        },
        {},
    );
    // $ExpectType CanPlayTypeResult
    videojs.Tech.canPlayType('video/mp4');
}

function testTracks(player: VideoJsPlayer) {
    // $ExpectType AudioTrackList
    player.audioTracks();

    // $ExpectType TextTrackList
    player.textTracks();
}

function testVideoElement(player: VideoJsPlayer) {
    // $ExpectType HTMLVideoElement | HTMLAudioElement
    player.tech(true).el();
}

function testControlBarElements(player: VideoJsPlayer) {
    // $ExpectType PlaybackRateMenuButton | undefined
    const child = player.controlBar.getChild('playbackRateMenuButton');

    if (child) {
        // $ExpectType HTMLDivElement
        child.el();
    }
}

function testGetDescendants(player: VideoJsPlayer) {
    // $ExpectType Component | undefined
    player.getDescendant('string');

    // $ExpectType Component | undefined
    player.getDescendant('multiple', 'strings');

    // $ExpectType Component | undefined
    player.getDescendant(['string', 'in', 'array']);

    // $ExpectType Component | undefined
    player.getDescendant(['string', 'in', 'array'], 'and', 'strings');
}

videojs.Vhs.xhr.beforeRequest = (options) => {
    /*
     * Modifications to requests that will affect every player.
     */

    return options;
};
