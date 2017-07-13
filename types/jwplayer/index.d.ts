// Type definitions for JW Player 7.7.4
// Definitions by: Alex Frazer <https://github.com/AlexFrazer/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// JW Player is the leading HTML5 & Flash video player, optimized for mobile and the desktop. Easy enough for beginners, advanced enough for pros.

declare enum Primary { 'flash', 'html5' }
declare enum Preload { 'none', 'metadata', 'auto' }
declare enum TrackKind { 'captions', 'chapters', 'thumbnails' }
declare enum Stretching { 'uniform', 'exactfit', 'fill', 'none' }
declare enum LogoPosition { 'top-left', 'top-right', 'bottom-left', 'bottom-right' }
declare enum SharingSites { 'facebook', 'twitter', 'interest', 'email', 'tumblr', 'googleplus', 'reddit', 'linkedin' }
declare enum RelatedComplete { 'hide', 'show', 'autoplay' }
declare enum AdvertisingClient { 'vast', 'googima', 'freewheel' }
declare enum PlayState { 'idle', 'buffering', 'playing', 'paused' }
declare enum QualityReason { 'initial choice', 'auto', 'api' }
declare enum Events {
  'ready',
  'setupError',
  'playlist',
  'playlistItem',
  'playlistComplete',
  'bufferChange',
  'play',
  'pause',
  'buffer',
  'idle',
  'complete',
  'error',
  'seek',
  'seeked',
  'time',
  'mute',
  'volume',
  'fullscreen',
  'resize',
  'levels',
  'levelsChanged',
  'captionsList',
  'captionsChange',
  'controls',
  'displayClick',
  'adClick',
  'adCompanions',
  'adComplete',
  'adError',
  'adimpression',
  'adTime',
  'adSkipped',
  'beforePlay',
  'beforeComplete',
  'meta',
}

interface Track {
  file?: string;
  kind?: TrackKind;
  label?: string;
  default?: boolean;
}

interface Source {
  file: string;
  label?: string;
  type?: string;
  default?: boolean;
  drm?: DRM;
}

interface AdSchedule {
  [adbreak: string]: {
    offset?: string|number;
    tag?: string;
  };
}

interface Skin {
  name?: string;
  active?: string;
  inactive?: string;
  background?: string;
  url?: string;
}

interface PlaylistItem {
  file: string;
  withCredentials?: boolean;
  title?: string;
  description?: string;
  image?: string;
  mediaid?: string;
  recommendations?: string;
  minDvrWindow?: number;
  stereomode?: string;
  sources?: Source[];
  tracks?: Track[];
  adschedule?: AdSchedule;
}

interface Captions {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontOpacity?: number;
  backgroundColor?: string;
  backgroundOpacity?: number;
  edgeStyle?: string;
  windowColor?: string;
  windowOpacity?: string;
}

interface RTMP {
  bufferlength?: number;
  subscribe?: boolean;
  securetoken?: string;
}

interface Logo {
  file?: string;
  hide?: boolean;
  link?: string;
  margin?: number;
  position?: LogoPosition;
}

interface Sharing {
  link?: string;
  code?: string;
  heading?: string;
  sites?: SharingSites[];
}

interface GoogleAnalytics {
  label?: string;
}

interface Related {
  file: string;
  oncomplete?: RelatedComplete;
  heading?: string;
  autoplaytimer?: string;
  autoplaymessage?: string;
}

interface CompanionDiv {
  height?: number;
  width?: number;
  id?: string;
}

interface Advertising {
  client: AdvertisingClient;
  tag?: string;
  admessage?: string;
  skipoffset?: string;
  cuetext?: string;
  skipmessage?: string;
  skiptext?: string;
  vpaidmode?: string;
  schedule?: string|AdSchedule;
  companiondiv?: CompanionDiv;
  autoplayadsmuted?: boolean;
  enablepreloading?: boolean;
  vpaidcontrols?: boolean;
  forceNonLinearFullSlot?: boolean;
  setLocale?: string;
  creativeTimeout?: string;
  requestTimeout?: string;
}

interface DRMHeader {
  name: string;
  value: string;
}

interface PlayReady {
  url: string;
  headers?: DRMHeader[];
}

interface WideVine {
  url: string;
  serverCertificateUrl: string;
  headers?: DRMHeader[];
}

interface FairPlay {
  certificateUrl: string;
  processSpcUrl(): string|string;
  extractContentId?(initData: string): string;
  licenseRequestHeaders?: DRMHeader[];
  licenseResponseType?: string;
  extractKey?(ckc: string): string|Promise<string>;
}

interface ClearKey {
  key: string;
  keyId: string;
}

interface DRM {
  playready?: PlayReady;
  widevine?: WideVine;
  fairplay?: FairPlay;
  clearkey?: ClearKey;
}

interface Localization {
  nextUp?: string;
  playlist?: string;
  related?: string;
}

interface JWPlayerConfig {
  file: string;
  image?: string;
  title?: string;
  description?: string;
  mediaid?: string;
  mute?: boolean;
  autostart?: string;
  nextupoffset?: number;
  repeat?: boolean;
  abouttext?: string;
  aboutlink?: string;
  playbackRateControls?: boolean|number[];
  controls?: boolean;
  localization?: Localization;
  aspectratio?: string;
  height?: number;
  width?: number|string;
  displaytitle?: boolean;
  displaydescription?: boolean;
  stretching: Stretching;
  timeSliderAbove?: boolean;
  nextUpDisplay?: boolean;
  qualityLabels?: Array<{ [quality: string]: string }>;
  primary?: Primary;
  flashplayer?: string;
  base?: string;
  preload?: Preload;
  playlist?: PlaylistItem[];
  skin?: Skin;
  captions?: Captions;
  rtmp?: RTMP;
  logo?: Logo;
  sharing?: Sharing;
  ga?: GoogleAnalytics;
  related?: Related;
  drm?: DRM;
}

interface QualityLevels {
  bitrate: number;
  height: number;
  width: number;
  label: string;
}

interface VisualQuality {
  mode: string;
  level: QualityReason;
  reason: string;
}

interface AudioTrack {
  autoselect: boolean;
  defaulttrack: boolean;
  language: string;
  name: string;
}

interface SafeRegion {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface JWPlayerInstance {
  on(event: Events, callback: (args: any) => void): void;
  once(event: Events, callback: (args: any) => void): void;
  off(event: Events, callback: (args: any) => void): void;
  trigger(event: Events, callback: (args: any) => void): void;
  getViewable(): number;
  next(): void;
  getPlaylist(): PlaylistItem[];
  getPlaylistItem(index: number): PlaylistItem;
  getPlaylistIndex(): number;
  load(playlist: PlaylistItem[]): void;
  playlistitem(index: number): void;
  getBuffer(): number;
  play(state: boolean): void;
  pause(state: boolean): void;
  stop(): void;
  getState(): PlayState;
  getPlaybackRate(): number;
  getPosition(): number;
  getDuration(): number;
  seek(position: number): void;
  getMute(): boolean;
  getVolume(): number;
  setMute(state: boolean): void;
  setVolume(state: number): void;
  getFullscreen(): boolean;
  getHeight(): number;
  getWidth(): number;
  resize(width: number, height: number): void;
  getQualityLevels(): QualityLevels[];
  getCurrentQuality(): number;
  getVisualQuality(): VisualQuality;
  setCurrentQuality(index: number): void;
  getAudioTracks(): AudioTrack[];
  getCurrentAudioTrack(): AudioTrack;
  setCurrentAudioTrack(index: number): void;
  setCaptions(styles: Captions): void;
  getCaptionList(): Array<{ id: string, label: string }>;
  getCurrentCaptions(): number;
  setCurrentCaptions(index: number): void;
  getControls(): boolean;
  getSafeRegion(): SafeRegion;
  addButton(o: { icon: string, label: string, handler: string, id: string }): void;
  removeButton(id: string): void;
  setControls(state: boolean): void;
  playAd(tag: string): void;
  getPlugin(plugin: string): any;
}
