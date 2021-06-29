// Type definitions for pi-camera 1.5
// Project: https://github.com/stetsmando/pi-camera
// Definitions by: Ata Berk YILMAZ <https://github.com/ataberkylmz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class PiCamera {
    constructor(config?: PiCamera.CameraConfig);
    snap(): Promise<string>;
    /** @async */
    snapDataUrl(maxBuffer?: number): Promise<string>;
    record(): Promise<string>;
    get(prop: PiCamera.ConfigKey): PiCamera.ConfigValue;
    set(prop: PiCamera.ConfigKey, value: PiCamera.ConfigValue): PiCamera.ConfigValue;

    private configToArray(): Array<string | PiCamera.ConfigValue>;
}

declare namespace PiCamera {
    type ConfigKey = keyof CameraConfig;
    type ConfigValue = CameraConfig[keyof CameraConfig];
    type Mode = "photo" | "video";

    interface CameraConfig {
        mode: Mode;
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
        brightness?: number;
        contrast?: number;
        shutter?: number;
        saturation?: number;
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
}

export = PiCamera;
