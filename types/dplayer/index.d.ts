// Type definitions for dplayer 1.24
// Project: https://github.com/DIYgod/DPlayer#readme
// Definitions by: Guanyunhan <https://github.com/Guanyunhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export type Lang = 'en' | 'zh-cn' | 'zh-tw';
export type Preload = 'none' | 'metadata' | 'auto';
export type VideoType = 'auto' | 'hls' | 'flv' | 'dash' | 'webtorrent' | 'normal';
export type SubTitleType = 'webvtt' | 'ass';
export type DirectionType = 'top' | 'right' | 'bottom';

export enum DPlayerEvents {
  abort = 'abort',
  canplay = 'canplay',
  canplaythrough = 'canplaythrough',
  durationchange = 'durationchange',
  emptied = 'emptied',
  ended = 'ended',
  error = 'error',
  loadeddata = 'loadeddata',
  loadedmetadata = 'loadedmetadata',
  loadstart = 'loadstart',
  mozaudioavailable = 'mozaudioavailable',
  pause = 'pause',
  play = 'play',
  playing = 'playing',
  progress = 'progress',
  ratechange = 'ratechange',
  seeked = 'seeked',
  seeking = 'seeking',
  stalled = 'stalled',
  suspend = 'suspend',
  timeupdate = 'timeupdate',
  volumechange = 'volumechange',
  waiting = 'waiting',
  screenshot = 'screenshot',
  thumbnails_show = 'thumbnails_show',
  thumbnails_hide = 'thumbnails_hide',
  danmaku_show = 'danmaku_show',
  danmaku_hide = 'danmaku_hide',
  danmaku_clear = 'danmaku_clear',
  danmaku_loaded = 'danmaku_loaded',
  danmaku_send = 'danmaku_send',
  danmaku_opacity = 'danmaku_opacity',
  contextmenu_show = 'contextmenu_show',
  contextmenu_hide = 'contextmenu_hide',
  notice_show = 'notice_show',
  notice_hide = 'notice_hide',
  quality_start = 'quality_start',
  quality_end = 'quality_end',
  destroy = 'destroy',
  resize = 'resize',
  fullscreen = 'fullscreen',
  fullscreen_cancel = 'fullscreen_cancel',
  subtitle_show = 'subtitle_show',
  subtitle_hide = 'subtitle_hide',
  subtitle_change = 'subtitle_change'
}

export interface DPlayerOptions {
  [key: string]: any;

  container: HTMLElement | null;
  live?: boolean;
  autoplay?: boolean;
  theme?: string;
  loop?: boolean;
  lang?: Lang | string;
  screenshot?: boolean;
  hotkey?: boolean;
  preload?: Preload;
  logo?: string;
  volume?: number;
  mutex?: boolean;
  video?: DPlayerVideo;
  subtitle?: DPlayerSubTitle;
  danmaku?: DPlayerDanmaku;
  contextmenu?: DPlayerContextMenuItem[];
  highlight?: DPlayerHighLightItem[];
  apiBackend?: DPlayerAPIBackend;
}

export interface DPlayerDanmakuItem {
  text: string;
  color: string;
  type: DirectionType;
}

export interface DPlayerContextMenuItem {
  text: string;
  link?: string;
  click?: () => void;
}

export interface DPlayerHighLightItem {
  text: string;
  time: number;
}

export interface DPlayerVideo {
  url: string;
  pic?: string;
  thumbnails?: string;
  type?: VideoType | string;
  customType?: any;
}

export interface DPlayerSubTitle {
  url: string;
  type?: SubTitleType;
  fontSize?: string;
  bottom?: string;
  color?: string;
}

export interface DPlayerDanmaku {
  id: string;
  api: string;
  token?: string;
  maximum?: string;
  addition?: string[];
  user?: string;
  bottom?: string;
  unlimited?: boolean;
}

export interface DPlayerAPIBackend {
  read(endpoint: any, callback: () => void): void;

  send(endpoint: any, danmakuData: DPlayerDanmakuItem, callback: () => void): void;
}

export default class DPlayer {
  events: any;

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
