    var fileName = "PointerEventsCordovaPlugin.wmv",
        uriString = "http://media.ch9.ms/ch9/8c03/f4fe2512-59e5-4a07-bded-124b06ac8c03/PointerEventsCordovaPlugin.wmv";
    
    // open target file for download
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
        fileSystem.root.getFile(fileName, { create: true }, function (targetFile) {
            
			// plugin callbacks to track operation execution status and progress
            var onSuccess = function() {
                console.log('Done');
			};
			var onError = function (err) {
				console.log(err);
			};
			var onProgress = function(progress) {
				console.log((100 * progress.bytesReceived / progress.totalBytesToReceive) + '%');
			};
    
            var downloader = new BackgroundTransfer.BackgroundDownloader();
            // Create a new download operation.
            var download = downloader.createDownload(uriString, targetFile);
            // Start the download and persist the promise to be able to cancel the download.
            app.downloadPromise = download.startAsync().then(onSuccess, onError, onProgress);
        });
    });