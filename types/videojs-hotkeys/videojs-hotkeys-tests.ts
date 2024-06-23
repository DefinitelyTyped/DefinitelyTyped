import videojs from "video.js";

const video = videojs("myvideo", {
    autoplay: true,
});

video.ready(function() {
    this.hotkeys({
        volumeStep: 0.1,
        seekStep: 1,
        enableMute: false,
        enableVolumeScroll: true,
        enableHoverScroll: true,
        enableFullscreen: true,
        enableNumbers: false,
        enableModifiersForNumbers: false,
        alwaysCaptureHotkeys: false,
        enableInactiveFocus: false,
        skipInitialFocus: false,
        captureDocumentHotkeys: false,
        documentHotkeysFocusElementFilter: (e: HTMLElement) => e.tagName === "main",
        enableJogStyle: false,
        playPauseKey: (e: KeyboardEvent) => e.key === "f",
        rewindKey: (e: KeyboardEvent) => e.key === "f",
        forwardKey: (e: KeyboardEvent) => e.key === "f",
        volumeUpKey: (e: KeyboardEvent) => e.key === "f",
        volumeDownKey: (e: KeyboardEvent) => e.key === "f",
        muteKey: (e: KeyboardEvent) => e.key === "f",
        fullscreenKey: (event, player) => {
            return !player.isFullscreen() && (event.key === "F" || (event.ctrlKey && event.key === "Enter"));
        },
        customKeys: {
            ctrldKey: {
                key: event => {
                    return event.ctrlKey && event.key === "D";
                },
                handler: (player, options, event) => {
                    if (options.enableMute && event.shiftKey) {
                        player.muted(!player.muted());
                    }
                },
            },
        },
    });
});
