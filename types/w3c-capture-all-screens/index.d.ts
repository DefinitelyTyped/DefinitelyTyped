/**
 * @see https://screen-share.github.io/capture-all-screens
 */

declare global {
    interface MediaDevices {
        getAllScreensMedia(): Promise<MediaStream[]>;
    }
}

declare global {
    interface ScreenCaptureMediaStreamTrack extends MediaStreamTrack {
        screenDetailed(): ScreenDetailed;
    }
}

export interface ScreenDetailed extends Screen {
    readonly availLeft: number;
    readonly availTop: number;
    readonly left: number;
    readonly top: number;
    readonly isPrimary: boolean;
    readonly isInternal: boolean;
    readonly devicePixelRatio: number;
    readonly label: string;
}
