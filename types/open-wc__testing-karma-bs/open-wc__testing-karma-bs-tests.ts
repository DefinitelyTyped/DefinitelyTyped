import karma = require("karma");
import bsSettings = require("@open-wc/testing-karma-bs");

module.exports = (config: karma.Config) => {
    config.set(bsSettings());

    config.set({
        browserStack: {
            accessKey: process.env.BROWSERSTACK_KEY,
            project: "open-wc",
            username: process.env.BROWSERSTACK_USERNAME,
        },
        browsers: [
            "bs_win10_chrome_latest",
            "bs_win10_firefox_latest",
            "bs_win10_edge_latest",
            "bs_osxmojave_safari_latest",
            "bs_win10_ie_11",
        ],
    });
};
