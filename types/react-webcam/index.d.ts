// Type definitions for react-webcam 1.0.4
// Project: https://github.com/mozmorris/react-webcam
// Definitions by: Lucas Servén Marín <https://github.com/squat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export = Webcam;

declare class Webcam extends React.Component<Webcam.WebcamProps, Webcam.WebcamState> {
    private static mountedInstances: Webcam[];
    private static userMediaRequested: boolean;
    getScreenshot(): string|null;
    getCanvas(): HTMLCanvasElement|null;
    requestUserMedia(): void;
    handleUserMedia(error: Error, stream: MediaStream): void;
}

declare namespace Webcam {
    interface WebcamProps {
        audio?: boolean;
        height?: number|string;
        width?: number|string;
        screenshotFormat?: 'image/jpeg' | 'image/png' | 'image/webp';
        style?: React.CSSProperties;
        className?: string;
        screenshotQuality?: number;
        screenshotWidth?: number;
        audioConstraints?: {
            deviceId?: string;
            groupId?: string;
            autoGainControl?: boolean;
            channelCount?: number|string;
            latency?: number|string;
            noiseSuppression?: boolean;
            sampleRate?: number|string;
            sampleSize?: number|string;
            volume?: number|string;
        };
        videoConstraints?: {
            deviceId?: string;
            groupId?: string;
            aspectRatio?: number|string;
            facingMode?: string;
            frameRate?: number|string;
            height?: number|string;
            width?: number|string;
        };
        onUserMedia?(): void;
        onUserMediaError?(): void;
    }

    interface WebcamState {
        hasUserMedia: boolean;
        src?: string;
    }
}
