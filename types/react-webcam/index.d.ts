// Type definitions for react-webcam 1.0
// Project: https://github.com/mozmorris/react-webcam
// Definitions by: Lucas Servén Marín <https://github.com/squat>
//                 Andrey Skubarenko <https://github.com/skubarenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';

export = Webcam;

declare class Webcam extends React.Component<Webcam.WebcamProps, Webcam.WebcamState> {
    private static mountedInstances: Webcam[];
    private static userMediaRequested: boolean;
    static defaultProps: Webcam.WebCamDefaultProps;
    getScreenshot(): string | null;
    getCanvas(): HTMLCanvasElement | null;
    requestUserMedia(): void;
    handleUserMedia(error: Error, stream: MediaStream): void;
}

declare namespace Webcam {
    interface WebcamProps {
        audio?: boolean;
        onUserMedia?(): void;
        onUserMediaError?(error: Error): void;
        height?: number | string;
        width?: number | string;
        screenshotFormat?: 'image/jpeg' | 'image/png' | 'image/webp';
        style?: React.CSSProperties;
        className?: string;
        screenshotQuality?: number;
        screenshotWidth?: number;
        audioConstraints?: MediaTrackConstraints;
        videoConstraints?: MediaTrackConstraints;
    }

    interface WebCamDefaultProps {
        audio: true;
        className: '';
        height: 480;
        onUserMedia: () => {};
        onUserMediaError: () => {};
        screenshotFormat: 'image/webp';
        width: 640;
        screenshotQuality: 0.92;
    }

    interface WebcamState {
        hasUserMedia: boolean;
        src?: string;
    }
}
