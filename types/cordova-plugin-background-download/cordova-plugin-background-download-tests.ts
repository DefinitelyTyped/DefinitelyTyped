    let fileName = "PointerEventsCordovaPlugin.wmv";
    let uriString = "http://media.ch9.ms/ch9/8c03/f4fe2512-59e5-4a07-bded-124b06ac8c03/PointerEventsCordovaPlugin.wmv";

    // open target file for download
    (window as any).requestFileSystem(1, 0, (fileSystem: any) => {
        fileSystem.root.getFile(fileName, { create: true }, (targetFile: File) => {
			// plugin callbacks to track operation execution status and progress
            const onSuccess = () => {
                console.log('Done');
			};
			const onError = (err: any) => {
				console.log(err);
			};
			const onProgress = (progress: BackgroundTransfer.Progress) => {
				console.log((100 * progress.bytesReceived / progress.totalBytesToReceive) + '%');
			};

            const downloader = new BackgroundTransfer.BackgroundDownloader();
            // Create a new download operation.
            const download = downloader.createDownload(uriString, targetFile);
            // Start the download and persist the promise to be able to cancel the download.
            const downloadPromise = download.startAsync().then(onSuccess, onError, onProgress);
        });
	});
