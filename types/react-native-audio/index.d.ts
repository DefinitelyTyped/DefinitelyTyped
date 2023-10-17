export type AudioEncodingAndroidType = "aac_eld" | "amr_nb" | "amr_wb" | "he_aac" | "vorbis";

export type AudioEncodingIOSType = "lpcm" | "ima4" | "MAC3" | "MAC6" | "ulaw" | "alaw" | "mp1" | "mp2" | "alac" | "amr";

export type AudioEncodingType = "aac" | AudioEncodingAndroidType | AudioEncodingIOSType;

export interface RecordingOptions {
    SampleRate?: number | undefined;
    Channels?: number | undefined;
    AudioQuality?: "Low" | "Medium" | "High" | undefined;
    AudioEncoding?: AudioEncodingType | undefined;
    OutputFormat?: string | undefined;
    MeteringEnabled?: boolean | undefined;
    MeasurementMode?: boolean | undefined;
    AudioEncodingBitRate?: number | undefined;
    IncludeBase64?: boolean | undefined;
    AudioSource?: number | undefined;
}

export const AudioRecorder: {
    requestAuthorization(): Promise<boolean>;
    prepareRecordingAtPath(path: string, options: RecordingOptions): void | Promise<string>;
    startRecording(): Promise<string>;
    stopRecording(): Promise<string>;
    resumeRecording(): Promise<string>;
    pauseRecording(): Promise<string>;
    checkAuthorizationStatus(): Promise<boolean>;
    onProgress(res: { currentTime: number }): void;
    onFinished(res: { audioFileURL: string; base64: string; status: string }): void;
};

export const AudioUtils: {
    CachesDirectoryPath: string;
    DocumentDirectoryPath: string;
    DownloadsDirectoryPath: string;
    LibraryDirectoryPath: string;
    MainBundlePath: string;
    MusicDirectoryPath: string;
    PicturesDirectoryPath: string;
};

export const AudioSource: {
    CAMCORDER: number;
    DEFAULT: number;
    MIC: number;
    REMOTE_SUBMIX: number;
    UNPROCESSED: number;
    VOICE_CALL: number;
    VOICE_COMMUNICATION: number;
    VOICE_DOWNLINK: number;
    VOICE_RECOGNITION: number;
    VOICE_UPLINK: number;
};
