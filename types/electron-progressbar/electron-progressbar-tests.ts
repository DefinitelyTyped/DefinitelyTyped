import ProgressBar = require("electron-progressbar");

const progressBar = new ProgressBar({
    title: "Test",
    browserWindow: {
        webPreferences: {
            nodeIntegration: false,
        },
    },
    indeterminate: false,
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
