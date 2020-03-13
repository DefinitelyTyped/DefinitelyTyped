// Type definitions for pi-camera 1.3
// Project: https://github.com/stetsmando/pi-camera
// Definitions by: Ata Berk YILMAZ <https://github.com/ataberkylmz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface cameraConfig {
  mode: 'photo' | 'video';
  output?: string;
  width?: number;
  height?: number;
  quality?: number;
  latest?: string;
  timeout?: number;
  thumb?: string;
  demo?: number;
  encoding?: string;
  timelapse?: number;
  framerate?: number;
  rotation?: number;
  preview?: string;
  opacity?: number;
  annotate?: string | number;
  exif?: string;
  raw?: boolean;
  verbose?: boolean;
  fullscreen?: boolean;
  nopreview?: boolean;
  vstab?: boolean;
  hflip?: boolean;
  vflip?: boolean;
  timestamp?: boolean;
  datetime?: boolean;
}

declare class PiCamera {
  constructor(config: cameraConfig);
  snap(): Promise<string>;
  record(): Promise<string>;
  get(prop: string): string | number | boolean;
  set(prop: string, value: string | number | boolean): string | number | boolean;
}

export = PiCamera;
