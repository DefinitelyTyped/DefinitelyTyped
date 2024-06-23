import { VideoJsPlayer } from "video.js";

declare module "video.js" {
    interface VideoJsPlayer {
        hotkeys(options?: VideoJsHotkeysOptions): void;
    }
}

export interface VideoJsHotkeysOptions {
    volumeStep?: number | undefined;
    seekStep?: number | undefined;
    enableMute?: boolean | undefined;
    enableVolumeScroll?: boolean | undefined;
    enableHoverScroll?: boolean | undefined;
    enableFullscreen?: boolean | undefined;
    enableNumbers?: boolean | undefined;
    enableModifiersForNumbers?: boolean | undefined;
    alwaysCaptureHotkeys?: boolean | undefined;
    enableInactiveFocus?: boolean | undefined;
    skipInitialFocus?: boolean | undefined;
    captureDocumentHotkeys?: boolean | undefined;
    documentHotkeysFocusElementFilter?: ((element: HTMLElement) => boolean) | undefined;
    enableJogStyle?: boolean | undefined;
    playPauseKey?: ((event: KeyboardEvent, player: VideoJsPlayer) => boolean) | undefined;
    rewindKey?: ((event: KeyboardEvent, player: VideoJsPlayer) => boolean) | undefined;
    forwardKey?: ((event: KeyboardEvent, player: VideoJsPlayer) => boolean) | undefined;
    volumeUpKey?: ((event: KeyboardEvent, player: VideoJsPlayer) => boolean) | undefined;
    volumeDownKey?: ((event: KeyboardEvent, player: VideoJsPlayer) => boolean) | undefined;
    muteKey?: ((event: KeyboardEvent, player: VideoJsPlayer) => boolean) | undefined;
    fullscreenKey?: ((event: KeyboardEvent, player: VideoJsPlayer) => boolean) | undefined;
    customKeys?: VideoJsCustomHotkeyOptions | undefined;
}

export interface VideoJsCustomHotkeyOptions {
    [key: string]: VideoJsCustomHotkey;
}

export interface VideoJsCustomHotkey {
    key: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    handler: (player: VideoJsPlayer, options: VideoJsHotkeysOptions, event: KeyboardEvent) => void;
}
