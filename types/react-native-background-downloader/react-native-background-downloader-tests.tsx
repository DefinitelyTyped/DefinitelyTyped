import RNBackgroundDownloader, { DownloadTask } from 'react-native-background-downloader';

const task = RNBackgroundDownloader.download({
    id: 'file123',
    url: 'https://link-to-very.large/file.zip',
    destination: `${RNBackgroundDownloader.directories.documents}/file.zip`,
})
    .begin(expectedBytes => {
        console.log(`Going to download ${expectedBytes} bytes!`);
    })
    .progress(percent => {
        console.log(`Downloaded: ${percent * 100}%`);
    })
    .done(() => {
        console.log('Download is done!');
    })
    .error(error => {
        console.log('Download canceled due to error: ', error);
    });

const taskFuncTest = (task: DownloadTask) => {
    // Pause the task
    task.pause();

    // Resume after pause
    task.resume();

    // Cancel the task
    task.stop();
};

taskFuncTest(task);
