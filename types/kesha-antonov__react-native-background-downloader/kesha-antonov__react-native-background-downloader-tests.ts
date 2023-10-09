import RNBackgroundDownloader, {
    checkForExistingDownloads,
    DownloadTask,
    ensureDownloadsAreRunning,
} from "@kesha-antonov/react-native-background-downloader";

// Set global headers for downloader
RNBackgroundDownloader.setHeaders({
    "x-custom": "Custom Header",
    "x-custom-2": "Another Custom Header",
});

const task = RNBackgroundDownloader.download({
    id: "file123",
    url: "https://link-to-very.large/file.zip",
    destination: `${RNBackgroundDownloader.directories.documents}/file.zip`,
    headers: {
        "x-custom-3": "a-third-header",
    },
})
    .begin(({ expectedBytes }) => {})
    .progress(percent => {})
    .done(() => {})
    .error(error => {});

const taskFuncTest = (task: DownloadTask) => {
    // Check task state
    switch (task.state) {
        case "DONE":
        case "DOWNLOADING":
        case "PAUSED":
        case "FAILED":
        case "STOPPED":
            break;
    }

    // Pause the task
    task.pause();

    // Resume after pause
    task.resume();

    // Cancel the task
    task.stop();
};

checkForExistingDownloads();
ensureDownloadsAreRunning();

taskFuncTest(task);
