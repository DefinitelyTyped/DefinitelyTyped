// Type definitions for react-webcam 1.1
// Project: https://github.com/mozmorris/react-webcam
// Definitions by: Lucas Servén Marín <https://github.com/squat>
//                 Søren Englund <https://github.com/englund92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

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
        onUserMedia?(): void;
        onUserMediaError?(): void;
        height?: number|string;
        width?: number|string;
        screenshotFormat?: 'image/jpeg' | 'image/png' | 'image/webp';
        style?: React.CSSProperties;
        className?: string;
        screenshotQuality?: number;
        minScreenshotWidth?: number;
        minScreenshotHeight?: number;
        audioConstraints?: MediaStreamConstraints["audio"];
        videoConstraints?: MediaStreamConstraints["video"];
        imageSmoothing?: boolean;
    }

    interface WebcamState {
        hasUserMedia: boolean;
        src?: string;
    }
}
