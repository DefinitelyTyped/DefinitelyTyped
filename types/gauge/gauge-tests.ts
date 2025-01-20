import Gauge = require("gauge");
import themes = require("gauge/themes");
import ThemeSet = require("gauge/theme-set");
import Plumbing = require("gauge/plumbing");

const gauge = new Gauge({
    themes,
    Plumbing,
    tty: process.stdout,
    updateInterval: 50,
    enabled: true,
    hideCursor: true,
    cleanupOnExit: true,
    fixedFramerate: true,
    theme: "colorBrailleSpinner",
    template: [{ type: "section", align: "left", length: 1 }],
});

// @ts-expect-error
new Gauge({ enabled: "yes" });

// $ExpectType boolean
gauge.isEnabled();

// $ExpectType ThemeObject
themes();

// $ExpectType Themes
themes.newThemeSet();

// $ExpectType Themes
const themeSet = new ThemeSet();

// $ExpectType ThemeObject
themeSet.getDefault({ hasColor: true, hasUnicode: true, platform: "linux" });
