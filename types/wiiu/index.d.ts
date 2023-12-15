declare namespace wiiu {
    const enum TPValidity {
        VALID = 0,
        X_INVALID = 1,
        Y_INVALID = 2,
        INVALID = 3,
    }
    const enum Button {
        MINUS = 0x00000004,
        SELECT = MINUS,
        PLUS = 0x00000008,
        START = PLUS,
        R = 0x00000010,
        L = 0x00000020,
        ZR = 0x00000040,
        ZL = 0x00000080,
        DOWN = 0x00000100,
        UP = 0x00000200,
        RIGHT = 0x00000400,
        LEFT = 0x00000800,
        Y = 0x00001000,
        X = 0x00002000,
        B = 0x00004000,
        A = 0x00008000,
        R_STICK = 0x00020000,
        L_STICK = 0x00040000,
        R_STICK_DOWN = 0x00800000,
        R_STICK_UP = 0x01000000,
        R_STICK_RIGHT = 0x02000000,
        R_STICK_LEFT = 0x04000000,
        L_STICK_DOWN = 0x08000000,
        L_STICK_UP = 0x10000000,
        L_STICK_RIGHT = 0x20000000,
        L_STICK_LEFT = 0x40000000,
    }

    interface WiiuGamePad {
        isEnabled: boolean;
        isDataValid: boolean;
        tpTouch: boolean;
        tpValidity: number;
        contentX: number;
        contentY: number;
        lStickX: number;
        lStickY: number;
        rStickX: number;
        rStickY: number;
        hold: number;
        accX: number;
        accY: number;
        accZ: number;
        gyroX: number;
        gyroY: number;
        gyroZ: number;
        angleX: number;
        angleY: number;
        angleZ: number;
        dirXx: number;
        dirXy: number;
        dirYx: number;
        dirXz: number;
        dirYy: number;
        dirYz: number;
        dirZx: number;
        dirZz: number;
        dirZy: number;

        update(): WiiuGamePad;
    }

    interface VideoPlayer {
        viewMode: number;

        end(): boolean;
    }

    const enum ImageViewErrorCode {
        UNSUPPORTED_FORMAT = 202,
        DIMENSIONS_TOO_LARGE = 203,
        FILE_SIZE_TOO_LARGE = 204,
        TOO_MANY_PIXELS_PROGRESSIVE_JPEG = 205,
    }

    interface ImageView {
        viewMode: number;

        end(): boolean;
        getErrorCode(): number;
    }

    var gamepad: WiiuGamePad;
    var videoplayer: VideoPlayer;
    var imageview: ImageView;
}

interface HTMLElement {
    addEventListener(type: "wiiu_videoplayer_end", listener: (ev: CustomEvent) => any, useCapture?: boolean): void;
}

interface Window {
    wiiu: typeof wiiu;
    addEventListener(type: "wiiu_imageview_start", listener: (ev: CustomEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wiiu_imageview_end", listener: (ev: CustomEvent) => any, useCapture?: boolean): void;
    addEventListener(
        type: "wiiu_imageview_change_viewmode",
        listener: (ev: CustomEvent) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(
        type: "wiiu_imageview_change_content",
        listener: (ev: CustomEvent) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: "wiiu_imageview_error", listener: (ev: CustomEvent) => any, useCapture?: boolean): void;
}
