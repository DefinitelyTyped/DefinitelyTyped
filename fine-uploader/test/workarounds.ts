function workaroundsTest() {
    const workaroundOptions: qq.WorkaroundOptions = {
        iosEmptyVideos: false,
        ios8BrowserCrash: false,
        ios8SafariUploads: false
    };

    const config: qq.BasicOptions = {
        workarounds: workaroundOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
