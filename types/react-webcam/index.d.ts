// Type definitions for react-webcam 0.3
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
        muted?: boolean;
        height?: number|string;
        width?: number|string;
        screenshotFormat?: 'image/jpeg' | 'image/png' | 'image/webp';
        style?: React.CSSProperties;
        className?: string;
        audioSource?: string;
        videoSource?: string;
        onUserMedia?(): void;
    }

    interface WebcamState {
        hasUserMedia: boolean;
        src?: string;
    }
}
