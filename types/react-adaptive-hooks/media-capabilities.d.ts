export interface AudioMediaConfiguration {
    contentType: string;
    channels: number;
    bitrate: number;
    samplerate: number;
}

export interface VideoMediaConfiguration {
    contentType: string;
    width: number;
    height: number;
    bitrate: number;
    framerate: number;
}

export type MediaConfiguration = {
    type: 'file' | 'record' | 'transmission' | 'media-source';
} & ({ audio: AudioMediaConfiguration } | { video: VideoMediaConfiguration });

export interface MediaConfigurationInfo {
    supported: boolean;
    smooth: boolean;
    powerEfficient: boolean;
}

export function useMediaCapabilities<T = Partial<MediaConfigurationInfo>>(
    mediaConfig: MediaConfiguration,
    initialMediaCapabilities: T,
): {
    mediaCapabilities:
        | ({ supported: boolean; hasMediaConfig: boolean } & T) | ({ hasMediaConfig?: undefined} & MediaConfigurationInfo);
};
