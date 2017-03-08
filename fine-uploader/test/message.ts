function messageTest() {
    const messageOptions: qq.MessagesOptions = {
        emptyError: "emptyError",
        maxHeightImageError: "maxHeightImageError",
        maxWidthImageError: "error occurred",
        minHeightImageError: "error occurred",
        minWidthImageError: "error occurred",
        minSizeError: "error occurred",
        noFilesError: "error occurred",
        onLeave: "error occurred",
        retryFailTooManyItemsError: "error occurred",
        typeError: "error occurred",
        unsupportedBrowserIos8Safari: "error occurred"
    };

    const config: qq.BasicOptions = {
        messages: messageOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
