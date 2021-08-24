import ProgressBar = require('electron-progressbar');

const progressBar = new ProgressBar({
    title: 'Test',
    browserWindow: {
        webPreferences: {
            nodeIntegration: false
        }
    }
});

progressBar.value = 10;

progressBar.on('ready', () => {
    return;
});
