// $ExpectType string
jwplayer.version;
// $ExpectType string
jwplayer.key;

const sliderCue: jwplayer.SliderCue = {
    begin: new Date().getTime(),
    cueType: "type",
    text: "Label",
};

const config: jwplayer.SetupConfig = {
    aspectratio: "16:9",
    autostart: true,
};

// $ExpectType JWPlayer
const player = jwplayer("id");

// $ExpectType SliderCue[]
player.getCues();

// $ExpectType boolean
player.getFloating();

// $ExpectType void
player.setFloating(true);

// $ExpectType JWPlugin
player.getPlugin("pluginName");

// $ExpectType void
player.addPlugin("pluginName", {});

// $ExpectType boolean
player.getAdBlock();

// $ExpectType void
player.pauseAd(true);

// $ExpectType void
player.skipAd();

// $ExpectType JWPlayer
player
    .addCues([sliderCue])
    .on("userActive", () => {})
    .on("userInactive", () => {})
    .resize("50%", 100)
    .resize(40, 40)
    .setCues([sliderCue]);

// $ExpectType PlaylistItem
player.getPlaylistItem();

// $ExpectType Promise<PlaylistItem>
player.getPlaylistItemPromise(0);

// $ExpectType PlaylistItem[]
const playlist = player.getPlaylist();

// $ExpectType JWPlayer
player
    .setup({ mute: false, repeat: true, stretching: "exactfit" })
    .load(playlist)
    .pause()
    .play()
    .next()
    .seek(20)
    .setMute()
    .setMute(false)
    .setVolume(20)
    .trigger("adBlock")
    .trigger("adClick", { client: "vast", creativetype: "creativetest", tag: "tagtest" })
    .setAllowFullscreen()
    .setAllowFullscreen(true)
    .setCaptions({ color: "#dbdbdb", edgeStyle: "depressed" })
    .setConfig(config)
    .setControls(false)
    .setCues([{ begin: 5, cueType: "testType", text: "testText" }])
    .setPlaybackRate(0.25)
    .setPlaybackRate()
    .addButton("testIcon", "testLabel", () => {}, "testId", "testClass")
    .removeButton("testId")
    .on("adBlock", () => {})
    .on("adClick", e => e.client)
    .once("beforePlay", () => {})
    .once("error", e => e.message)
    .off("adBlock")
    .off("adClick")
    .playlistItem(1)
    .playlistNext()
    .playlistPrev()
    .playToggle()
    .castToggle()
    .setPip()
    .stopCasting()
    .stop()
    .remove();

// $ExpectType AudioTrack[]
player.getAudioTracks();

// $ExpectType string | null
player.getAbsolutePosition();

// $ExpectType number
player.getBuffer();

// $ Caption[]
player.getCaptionsList();

// $ExpectType PlayerConfig
player.getConfig();

// $ExpectType HTMLElement
player.getContainer();

// $ExpectType number
player.getContainerPercentViewable();

// $ExpectType 0 | 1
player.getContainerViewable();

// $ExpectType boolean
player.getControls();

// $ExpectType SliderCue[]
player.getCues();

// $ExpectType number
player.getCurrentAudioTrack();

// $ExpectType number
player.getCurrentCaptions();

// $ExpectType number
player.getCurrentQuality();

// $ExpectType number
player.getCurrentTime();

// $ExpectType number
player.getDuration();

// $ExpectType Environment
player.getEnvironment();

// $ExpectType boolean
player.getFullscreen();

// $ExpectType number
player.getHeight();

// $ExpectType boolean
player.getMute();

// $ExpectType number | void
player.getPercentViewable();

// $ExpectType number
player.getPlaybackRate();

// $ExpectType number
player.getPlaylistIndex();

// $ExpectType number | void
player.getPercentViewable();

// $ExpectType JWPlugin
player.getPlugin("sharing");

// $ExpectType number
player.getPosition();

// $ExpectType Provider
player.getProvider();

// $ExpectType QualityLevel[]
player.getQualityLevels();

// $ExpectType string
player.getRenderingMode();

// $ExpectType Region
player.getSafeRegion();

// $ExpectType PlayState
player.getState();

// $ExpectType Stretching
player.getStretching();

// $ExpectType 0 | 1
player.getViewable();

// $ExpectType VisualQuality | undefined
player.getVisualQuality();

// $ExpectType number
player.getVolume();

// $ExpectType number
player.getWidth();

// $ExpectType number
player.getWidth();

// $ExpectType void
player.pauseAd(true);

// $ExpectType void
player.playAd("testTag");

// $ExpectType void
player.playAd(["testTag", "testTag2", "testTag3"]);

// $ExpectType void
player.registerPlugin("testId", "testTarget", () => {});

// $ExpectType void
player.removePlaylistItemCallback();

// $ExpectType void
player.setCurrentAudioTrack(0);

// $ExpectType void
player.setCurrentCaptions(0);

// $ExpectType void
player.setCurrentQuality(0);

// $ExpectType void
player.setFullscreen(true);

// $ExpectType void
player.setPlaylistItemCallback(item => {
    item;
});
