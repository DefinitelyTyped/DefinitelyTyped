const targetURLs: Array<string | undefined> = [];
const files: FileSystemHandle[] = [];
const launchConsumer: LaunchConsumer = (params: LaunchParams) => {
    targetURLs.push(params.targetURL);
    params.files.forEach((file: FileSystemHandle) => files.push(file));
};

if (window.launchQueue) {
    // $ExpectType void
    window.launchQueue.setConsumer(launchConsumer);
}
