import Gauge = require("gauge");
import gaugeDefault = require("gauge/themes");
import ThemeSet = require("gauge/theme-set");

{ // basic constructor
    const gauge = new Gauge();
    gauge.show("test", 0.20);
    gauge.pulse("this");
    gauge.hide();
}

// constructor with stream
new Gauge(process.stdout);

// constructor with options
new Gauge({ cleanupOnExit: false, hideCursor: true });

// constructor with stream and options
new Gauge(process.stdout, { cleanupOnExit: false, hideCursor: true });

{ // themes
    // fetch the default color unicode theme for this platform
    gaugeDefault({ hasUnicode: true, hasColor: true });

    // fetch the default non-color unicode theme for osx
    gaugeDefault({ hasUnicode: true, hasColor: false, platform: 'darwin' });

    // create a new theme based on the color ascii theme for this platform
    // that brackets the progress bar with arrows
    gaugeDefault.newTheme(gaugeDefault({ hasUnicode: false, hasColor: true }), {
        preProgressbar: '→',
        postProgressbar: '←',
    });

    // creates a new themeset based on the default themes
    gaugeDefault.newThemeSet();

    new ThemeSet();
}
{
    let activeGauge;

    let themes = gaugeDefault.getThemeNames();

    const nextBar = () => {
        let themeName = themes.shift();

        console.log('Demoing output for ' + themeName);

        let gt = new Gauge(process.stderr, {
            updateInterval: 50,
            theme: themeName,
            cleanupOnExit: false
        });
        activeGauge = gt;

        let progress = 0;

        let cnt = 0;
        let pulse = setInterval(() => {
            gt.pulse('this is a thing that happened ' + (++cnt));
        }, 110);
        let prog = setInterval(() => {
            progress += 0.04;
            gt.show(themeName + ':' + Math.round(progress * 1000), progress);
            if (progress >= 1) {
                clearInterval(prog);
                clearInterval(pulse);
                gt.disable();
                if (themes.length) nextBar();
            }
        }, 100);
        gt.show();
    };
    nextBar();
}
