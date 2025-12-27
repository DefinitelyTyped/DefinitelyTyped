// index.d.ts
/// <reference types="dom" />

export interface AnaLyConfig {
  anonymizeIP?: boolean;
  anonymizeUA?: boolean;
  anonymizeHardware?: boolean;
  autoSend?: boolean;
  url?: string | null;
  debounceMs?: number;
  verbose?: boolean;
  preferAsyncSnapshotForSend?: boolean;
  includeOnInit?: boolean;
  extraData?: Record<string, any>;
}

export interface BrowserInfo {
  name: string;
  version: string;
}

export interface JSFeatures {
  es6: boolean;
  promises: boolean;
  fetch: boolean;
  asyncAwait: boolean;
  dynamicImport: boolean;
  webAssembly: boolean;
  serviceWorker: boolean;
  notifications: boolean;
  clipboard: boolean;
  webGL: boolean;
}

export interface GPUInfo {
  vendor: string | null;
  renderer: string | null;
}

export interface HardwareInfo {
  cores: number | null;
  deviceMemory: number | null;
  gpu: GPUInfo;
}

export interface ScreenSnapshot {
  width: number | null;
  height: number | null;
  availWidth: number | null;
  availHeight: number | null;
  orientation: string | null;
  pixelRatio: number;
  viewportWidth: number | null;
  viewportHeight: number | null;
}

export interface NetworkSnapshot {
  online: boolean;
  effectiveType: string | null;
  downlink: number | null;
  rtt: number | null;
  saveData: boolean;
  ip: string | null;
}

export interface LocaleInfo {
  language: string | null;
  languages: string[] | null;
  timezone: string | null;
}

export interface PrivacyInfo {
  adblock: boolean | null;
  cspMeta: string | null;
  evalAllowed: boolean;
  secureOrigin: boolean;
}

export interface AudioCodecs {
  mpeg: boolean | null;
  opus: boolean | null;
  wav: boolean | null;
}

export interface VideoCodecs {
  h264_mp4: boolean | null;
  webm_vp9: boolean | null;
  webm_vp8: boolean | null;
}

export interface MediaDevicesInfo {
  devices: { kind: string; label: string | null; deviceId: string | null }[];
  hasCamera: boolean;
  hasMicrophone: boolean;
}

export interface MediaInfo {
  audioCodecs: AudioCodecs;
  videoCodecs: VideoCodecs;
  mediaDevicesQuick: MediaDevicesInfo | null;
}

export interface InputInfo {
  touch: number;
  pointer: boolean;
  hover: boolean | null;
  anyHover: boolean | null;
  gamepads: number;
}

export interface BatteryInfo {
  charging: boolean | null;
  level: number | null;
  chargingTime: number | null;
  dischargingTime: number | null;
}

export interface Snapshot {
  timestamp: string;
  userAgent: string;
  platform: string;
  browser: BrowserInfo;
  os: string;
  locale: LocaleInfo;
  features: Record<string, boolean>;
  jsFeatures: JSFeatures;
  hardware: HardwareInfo;
  battery?: BatteryInfo | null;
  screen: ScreenSnapshot;
  network: NetworkSnapshot;
  privacy: PrivacyInfo;
  media: MediaInfo;
  inputs: InputInfo;
  extra: Record<string, any>;
}

export interface SendOptions extends AnaLyConfig {}

export interface APIType {
  version: string;
  getSnapshot(extra?: Record<string, any>, config?: AnaLyConfig): Snapshot;
  getSnapshotAsync(extra?: Record<string, any>, config?: AnaLyConfig): Promise<Snapshot>;
  sendData(url: string, extraData?: Record<string, any>, options?: SendOptions): Promise<void>;
  setupRealtime(url: string, extraData?: Record<string, any>, config?: AnaLyConfig): void;
  stopRealtime(): void;
  init(config?: AnaLyConfig): Snapshot | Promise<Snapshot>;
  logAll(extra?: Record<string, any>, config?: AnaLyConfig): Snapshot;
  detectBrowser(): BrowserInfo;
  detectOS(): string;
  detectJSFeatures(): JSFeatures;
  detectHardware(): HardwareInfo;
  detectLocale(): LocaleInfo;
  detectMediaDevices(): Promise<MediaDevicesInfo | null>;
  detectStorageEstimate(): Promise<{ quota: number | null; usage: number | null; usagePercentage: number | null } | null>;
}

declare const AnaLy: APIType;

export default AnaLy;
