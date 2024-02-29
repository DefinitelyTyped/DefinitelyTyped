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
        output?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        quality?: number | undefined;
        latest?: string | undefined;
        timeout?: number | undefined;
        thumb?: string | undefined;
        demo?: number | undefined;
        encoding?: string | undefined;
        timelapse?: number | undefined;
        framerate?: number | undefined;
        rotation?: number | undefined;
        preview?: string | undefined;
        opacity?: number | undefined;
        annotate?: string | number | undefined;
        exif?: string | undefined;
        brightness?: number | undefined;
        contrast?: number | undefined;
        shutter?: number | undefined;
        saturation?: number | undefined;
        raw?: boolean | undefined;
        verbose?: boolean | undefined;
        fullscreen?: boolean | undefined;
        nopreview?: boolean | undefined;
        vstab?: boolean | undefined;
        hflip?: boolean | undefined;
        vflip?: boolean | undefined;
        timestamp?: boolean | undefined;
        datetime?: boolean | undefined;
    }
}

export = PiCamera;
