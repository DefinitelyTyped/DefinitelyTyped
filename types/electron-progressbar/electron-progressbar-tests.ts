import ProgressBar from "electron-progressbar";

const progressBar = new ProgressBar({
    title: 'Test'
});

progressBar.value = 10;

progressBar.on('ready', () => {
    return;
});
