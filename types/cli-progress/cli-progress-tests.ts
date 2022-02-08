import progress = require('cli-progress');

function test0() {
    // Usage
    // Multiple examples are available e.g.example.js - just try it $ node example.js

    const _cliProgress = require('cli-progress');

    // create a new progress bar instance and use shades_classic theme
    const bar1 = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic);

    // start the progress bar with a total value of 200 and start value of 0
    bar1.start(200, 0);

    // update the current value in your application..
    bar1.update(100);

    // stop the progress bar
    bar1.stop();
}

function test1() {
    // Examples
    // Example 1 - Set Options

    // change the progress characters
    // set fps limit to 5
    // change the output stream and barsize
    const bar = new progress.SingleBar({
        barCompleteChar: '#',
        barIncompleteChar: '.',
        fps: 5,
        stream: process.stdout,
        barsize: 65,
        etaAsynchronousUpdate: true,
    });
    bar.calculateETA();
    bar.updateETA();
}

function test2() {
    // Example 2 - Change Styles defined by Preset
    // uee shades preset
    // change the barsize
    const bar = new progress.SingleBar(
        {
            barsize: 65,
        },
        progress.Presets.shades_grey,
    );
}

function test3() {
    // Example 3 - Custom Payload
    // create new progress bar with custom token "speed"
    const bar = new progress.SingleBar({
        format: 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | Speed: {speed} kbit',
    });

    // initialize the bar - set payload token "speed" with the default value "N/A"
    bar.start(200, 0, {
        speed: 'N/A',
    });

    // some code/update loop
    // ...

    // update bar value. set custom token "speed" to 125
    bar.update(5, {
        speed: '125',
    });

    // process finished
    bar.stop();
}

function test4() {
    // Example 4 - Custom Presets
    // File mypreset.js

    const _colors = require('colors');

    module.exports = {
        format: _colors.red(' {bar}') + ' {percentage}% | ETA: {eta}s | {value}/{total} | Speed: {speed} kbit',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
    };
}

function test5() {
    // Application

    const _mypreset = require('./mypreset.js');

    const bar = new progress.SingleBar(
        {
            barsize: 65,
        },
        _mypreset,
    );
}

function test6() {
    // SingleBar
    const bar2 = new progress.SingleBar({}, progress.Presets.shades_classic);
    bar2.increment();
    bar2.increment(10);
    bar2.increment({ speed: '42 kbps' });

    // MultiBar
    const multiBar = new progress.MultiBar({}, progress.Presets.shades_classic);
    const subBar1 = multiBar.create(100, 0, {});
    const subBar2 = multiBar.create(100, 30, {});
    subBar1.update(50);
    subBar1.update({ speed: '42 kbps' });

    subBar1.stop();

    const removed = multiBar.remove(subBar1);

    multiBar.stop();
}

// Options
function test7() {
    // defaults
    let singleBar = new progress.SingleBar({});
    // align
    singleBar = new progress.SingleBar({
        align: 'left',
    });
    singleBar = new progress.SingleBar({
        align: 'center',
    });
    singleBar = new progress.SingleBar({
        align: 'right',
    });
    // hideCursor
    singleBar = new progress.SingleBar({
        hideCursor: true,
    });
    singleBar = new progress.SingleBar({
        hideCursor: null,
    });
}

function test8() {
    // Check fixed typing https://github.com/DefinitelyTyped/DefinitelyTyped/pull/51492
    const singleBar = new progress.SingleBar({
        stopOnComplete: true,
        format: (options, params, payload) => {
            const elapsedTime = Math.round((Date.now() - params.startTime) / 1000);
            const speed = params.value / elapsedTime;
            payload.speed = isFinite(speed) ? speed.toFixed(2) : 0;

            return progress.Format.Formatter(
                {
                    ...options,
                    format: '{bar} {percentage}% | Remaining: {eta_formatted} | Speed: {speed}/s | {value}/{total}'
                },
                params,
                payload
            );
        }
    });

    singleBar.start(1000, 0);
    const interval = setInterval(() => {
        singleBar.increment(100);
    }, 100);
    singleBar.on('stop', () => {
        clearInterval(interval);
    });
}

progress.Format.BarFormat; // $ExpectType BarFormatter
progress.Format.Formatter; // $ExpectType GenericFormatter
progress.Format.TimeFormat; // $ExpectType TimeFormatter
progress.Format.ValueFormat; // $ExpectType ValueFormatter
