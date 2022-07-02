import RNBackgroundDownloader, { DownloadTask, DownloadTaskState } from 'react-native-background-downloader';

// Set global headers for downloader
RNBackgroundDownloader.setHeaders({
  'x-custom': 'Custom Header',
  'x-custom-2': 'Another Custom Header',
});

const task = RNBackgroundDownloader.download({
    id: 'file123',
    url: 'https://link-to-very.large/file.zip',
    destination: `${RNBackgroundDownloader.directories.documents}/file.zip`,
    headers: {
      'x-custom-3': 'a-third-header',
    },
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
    // Check task state
    switch (task.state) {
      case DownloadTaskState.DONE: {
        console.log('Task is in state DONE');
        break;
      }
      case DownloadTaskState.DOWNLOADING: {
        console.log('Task is in state DOWNLOADING');
        break;
      }
      case DownloadTaskState.PAUSED: {
        console.log('Task is in state PAUSED');
        break;
      }
      case DownloadTaskState.FAILED: {
        console.log('Task is in state FAILED');
        break;
      }
      case DownloadTaskState.STOPPED: {
        console.log('Task is in state STOPPED');
      }
    }

    // Pause the task
    task.pause();

    // Resume after pause
    task.resume();

    // Cancel the task
    task.stop();
};

taskFuncTest(task);
