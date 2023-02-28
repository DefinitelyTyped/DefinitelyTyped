function testCreateLoadRequest() {
    // MediaInfo is required to create LoadRequest
    // @ts-expect-error
    const badRequest = new chrome.cast.media.LoadRequest();

    const mediaInfo = new chrome.cast.media.MediaInfo('https://storage.googleapis.com/cpe-sample-media/content/big_buck_bunny/prog/big_buck_bunny_prog.mp4', 'video/mp4');
    const loadRequest = new chrome.cast.media.LoadRequest(mediaInfo);
    loadRequest.playbackRate = 1.0;

    // playbackRate must be type number
    // @ts-expect-error
    loadRequest.playbackRate = 'foo';
}
