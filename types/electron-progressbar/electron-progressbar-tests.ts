import * as progressbar from "electron-progressbar";

const progressBar = new progressbar.ProgressBar({
    title: 'Test'
});

progressBar.value = 10;

progressBar.on('ready', () => {
    return;
});
