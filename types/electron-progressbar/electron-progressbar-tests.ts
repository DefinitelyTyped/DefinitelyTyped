import ProgressBar = require("electron-progressbar");

const progressBar = new ProgressBar({
    debug: true,
    title: "Test",
    lang: "ko",
    browserWindow: {
        webPreferences: {
            nodeIntegration: false,
        },
    },
    indeterminate: false,
    customHTML: "<h1>Hello</h1>",
});

progressBar.on("ready", () => {
    return;
});

progressBar.on("progress", () => {
    progressBar.detail = "progress called 1st time without values";
});

progressBar.on("progress", (value: number) => {
    progressBar.detail += ` and 2nd time with value ${value}`;
});

progressBar.value = 10;
