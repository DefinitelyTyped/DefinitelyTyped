export as namespace DPlayer;

export type Lang = "en" | "zh-cn" | "zh-tw";
export type Preload = "none" | "metadata" | "auto";
export type VideoType = "auto" | "hls" | "flv" | "dash" | "webtorrent" | "normal";
export type SubTitleType = "webvtt" | "ass";
export type DirectionType = "top" | "right" | "bottom";
export type FullScreenType = "web" | "browser";

export enum DPlayerEvents {
    abort = "abort",
    canplay = "canplay",
    canplaythrough = "canplaythrough",
    durationchange = "durationchange",
    emptied = "emptied",
    ended = "ended",
    error = "error",
    loadeddata = "loadeddata",
    loadedmetadata = "loadedmetadata",
    loadstart = "loadstart",
    mozaudioavailable = "mozaudioavailable",
    pause = "pause",
    play = "play",
    playing = "playing",
    progress = "progress",
    ratechange = "ratechange",
    seeked = "seeked",
    seeking = "seeking",
    stalled = "stalled",
    suspend = "suspend",
    timeupdate = "timeupdate",
    volumechange = "volumechange",
    waiting = "waiting",
    screenshot = "screenshot",
    thumbnails_show = "thumbnails_show",
    thumbnails_hide = "thumbnails_hide",
    danmaku_show = "danmaku_show",
    danmaku_hide = "danmaku_hide",
    danmaku_clear = "danmaku_clear",
    danmaku_loaded = "danmaku_loaded",
    danmaku_send = "danmaku_send",
    danmaku_opacity = "danmaku_opacity",
    contextmenu_show = "contextmenu_show",
    contextmenu_hide = "contextmenu_hide",
    notice_show = "notice_show",
    notice_hide = "notice_hide",
    quality_start = "quality_start",
    quality_end = "quality_end",
    destroy = "destroy",
    resize = "resize",
    fullscreen = "fullscreen",
    fullscreen_cancel = "fullscreen_cancel",
    subtitle_show = "subtitle_show",
    subtitle_hide = "subtitle_hide",
    subtitle_change = "subtitle_change",
}

export interface DPlayerOptions {
    [key: string]: any;

    container: HTMLElement | null;
    live?: boolean | undefined;
    autoplay?: boolean | undefined;
    theme?: string | undefined;
    loop?: boolean | undefined;
    lang?: Lang | string | undefined;
    screenshot?: boolean | undefined;
    hotkey?: boolean | undefined;
    preload?: Preload | undefined;
    logo?: string | undefined;
    volume?: number | undefined;
    mutex?: boolean | undefined;
    video?: DPlayerVideo | undefined;
    subtitle?: DPlayerSubTitle | undefined;
    danmaku?: DPlayerDanmaku | undefined;
    contextmenu?: DPlayerContextMenuItem[] | undefined;
    highlight?: DPlayerHighLightItem[] | undefined;
    apiBackend?: DPlayerAPIBackend | undefined;
}

export interface DPlayerDanmakuItem {
    text: string;
    color: string;
    type: DirectionType;
}

export interface DPlayerContextMenuItem {
    text: string;
    link?: string | undefined;
    click?: (() => void) | undefined;
}

export interface DPlayerHighLightItem {
    text: string;
    time: number;
}

export interface DPlayerVideoQuality {
    name: string;
    url: string;
    type?: string | undefined;
}

export interface DPlayerVideo {
    url: string;
    pic?: string | undefined;
    thumbnails?: string | undefined;
    type?: VideoType | string | undefined;
    customType?: any;
    quality?: DPlayerVideoQuality[] | undefined;
    defaultQuality?: number | undefined;
}

export interface DPlayerSubTitle {
    url: string;
    type?: SubTitleType | undefined;
    fontSize?: string | undefined;
    bottom?: string | undefined;
    color?: string | undefined;
}

export interface DPlayerDanmaku {
    id: string;
    api: string;
    token?: string | undefined;
    maximum?: string | undefined;
    addition?: string[] | undefined;
    user?: string | undefined;
    bottom?: string | undefined;
    unlimited?: boolean | undefined;
}

export interface DPlayerAPIBackend {
    read(endpoint: any, callback: () => void): void;

    send(endpoint: any, danmakuData: DPlayerDanmakuItem, callback: () => void): void;
}

export interface Danmaku {
    send(danmaku: DPlayerDanmakuItem, callback: () => void): void;

    draw(danmaku: DPlayerDanmakuItem): void;

    opacity(percentage: number): void;

    clear(): void;

    hide(): void;

    show(): void;
}

export interface FullScreen {
    request(type: FullScreenType): void;

    cancel(type: FullScreenType): void;
}

export default class DPlayer {
    events: any;
    video: HTMLVideoElement;
    danmaku: Danmaku;
    fullScreen: FullScreen;

    constructor(options: DPlayerOptions);

    play(): void;

    pause(): void;

    seek(time: number): void;

    toggle(): void;

    on(event: DPlayerEvents, handler: () => void): void;

    switchVideo(video: DPlayerVideo, danmaku: DPlayerDanmaku): void;

    notice(text: string, time: number, opacity: number): void;

    switchQuality(index: number): void;

    destroy(): void;

    speed(rate: number): void;

    volume(percentage: number, nostorage: boolean, nonotice: boolean): void;
}
