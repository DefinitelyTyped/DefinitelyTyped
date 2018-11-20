// Type definitions for react-webcam 1.0
// Project: https://github.com/mozmorris/react-webcam
// Definitions by: Lucas Servén Marín <https://github.com/squat>
// Definitions by: Lauri Pekkarinen <https://github.com/krakenpine>
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
        className?: string;
        audio?: boolean;
        height?: number;
        width?: number;
        screenshotWidth?: number;
        style?: React.CSSProperties;
        screenshotFormat?: 'image/jpeg' | 'image/png' | 'image/webp';
        onUserMedia?(): void;
        onUserMediaError?(): void;
        screenshotQuality?: number;
        audioConstraints?: object;
        videoConstraints?: object;
    }

    interface WebcamState {
        hasUserMedia: boolean;
        src?: string;
    }
}
