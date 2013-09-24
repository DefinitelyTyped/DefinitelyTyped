interface CaptureAudioOptions {
    limit?: number;
    duration?: number;
    mode?: number;
}

interface CaptureImageOptions {
    limit?: number;
    mode?: number;
}

interface CaptureError {
    code: number;
    message: string;
}

declare var CaptureError: {
    CAPTURE_INTERNAL_ERR: number;
    CAPTURE_APPLICATION_BUSY: number;
    CAPTURE_INVALID_ARGUMENT: number;
    CAPTURE_NO_MEDIA_FILES: number;
    CAPTURE_NOT_SUPPORTED: number;
}

interface MediaFile {
    name: string;
    fullPath: string;
    type: string;
    lastModifiedDate: Date;
    size: number;

    getFormatData(successCallback: (data: MediaFileData) => void, errorCallback?: (error: CaptureError) => void): void;
}

interface MediaFileData {
    codecs: string;
    bitrate: number;
    height: number;
    width: number;
    duration: number;
}

interface Capture {
    captureAudio(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureAudioOptions);
    captureImage(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureImageOptions);
    captureVideo(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureImageOptions);
}

interface Device {
    capture: Capture;
}

declare var device: Device;