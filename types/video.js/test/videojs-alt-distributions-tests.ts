import { default as videojsnovtt } from 'video.js/dist/alt/video.core.novtt.js';
import { default as videojscore } from 'video.js/dist/alt/video.core.js';

test(videojsnovtt);
test(videojscore);

function test(videojs: typeof videojsnovtt | typeof videojscore) {
    videojs('example_video_1').ready(function() {
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

        const whereYouAt: number = this.currentTime();

        this.currentTime(120); // 2 minutes into the video

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

        const readyState: videojsnovtt.ReadyState = this.readyState();
        const readyState2: videojscore.ReadyState = this.readyState();

        this.requestFullscreen();

        const networkState: videojsnovtt.NetworkState = this.networkState();
        const networkState2: videojscore.NetworkState = this.networkState();

        testEvents(this);

        testComponents(this);

        testPlugin(this, {});

        testLogger();
    });

    function testEvents(player: videojsnovtt.Player | videojscore.Player) {
        const myFunc = function(this: videojscore.Player) {
            // Do something when the event is fired
        };
        player.on('error', myFunc);
        // Removes the specified listener only.
        player.off('error', myFunc);

        const myFuncWithArg = function(this: videojscore.Player, e: Event) {
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

    function testComponents(player: videojscore.Player) {
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

    function testPlugin(player: videojscore.Player, options: {}) {
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
    }

    function testLogger() {
        const mylogger = videojs.log.createLogger('mylogger');
        const anotherlogger = mylogger.createLogger('anotherlogger');

        videojs.log('hello');
        mylogger('how are you');
        anotherlogger('today');
    }
}
