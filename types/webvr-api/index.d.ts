// Typescript doesn't allow redefinition of type aliases even if they match,
// thus the _dt_alias to signal this being an alias for the use of DefinitelyTyped
type VRDisplayEventReason_dt_alias = "mounted" | "navigation" | "requested" | "unmounted";

// Typescript doesn't allow redefinition of type aliases even if they match,
// thus the _dt_alias to signal this being an alias for the use of DefinitelyTyped
type VREye_dt_alias = "left" | "right";

interface VRDisplay extends EventTarget {
    /**
     * Dictionary of capabilities describing the VRDisplay.
     */
    readonly capabilities: VRDisplayCapabilities;

    /**
     * z-depth defining the far plane of the eye view frustum
     * enables mapping of values in the render target depth
     * attachment to scene coordinates. Initially set to 10000.0.
     */
    depthFar: number;

    /**
     * z-depth defining the near plane of the eye view frustum
     * enables mapping of values in the render target depth
     * attachment to scene coordinates. Initially set to 0.01.
     */
    depthNear: number;

    /**
     * An identifier for this distinct VRDisplay. Used as an
     * association point in the Gamepad API.
     */
    readonly displayId: number;

    /**
     * A display name, a user-readable name identifying it.
     */
    readonly displayName: string;
    readonly isConnected: boolean;
    readonly isPresenting: boolean;

    /**
     * If this VRDisplay supports room-scale experiences, the optional
     * stage attribute contains details on the room-scale parameters.
     */
    readonly stageParameters: VRStageParameters | null;

    /**
     * Passing the value returned by `requestAnimationFrame` to
     * `cancelAnimationFrame` will unregister the callback.
     */
    cancelAnimationFrame(handle: number): void;

    /**
     * Stops presenting to the VRDisplay.
     */
    exitPresent(): Promise<void>;

    /* Return the current VREyeParameters for the given eye. */
    getEyeParameters(whichEye: VREye_dt_alias): VREyeParameters;

    /**
     * Populates the passed VRFrameData with the information required to render
     * the current frame.
     */
    getFrameData(frameData: VRFrameData): boolean;

    /**
     * Get the layers currently being presented.
     */
    getLayers(): VRLayer[];

    /**
     * @deprecated
     * Return a VRPose containing the future predicted pose of the VRDisplay
     * when the current frame will be presented. The value returned will not
     * change until JavaScript has returned control to the browser.
     *
     * The VRPose will contain the position, orientation, velocity,
     * and acceleration of each of these properties.
     */
    getPose(): VRPose;

    /**
     * Return the current instantaneous pose of the VRDisplay, with no
     * prediction applied.
     */
    getImmediatePose(): VRPose;

    /**
     * The callback passed to `requestAnimationFrame` will be called
     * any time a new frame should be rendered. When the VRDisplay is
     * presenting the callback will be called at the native refresh
     * rate of the HMD. When not presenting this function acts
     * identically to how window.requestAnimationFrame acts. Content should
     * make no assumptions of frame rate or vsync behavior as the HMD runs
     * asynchronously from other displays and at differing refresh rates.
     */
    requestAnimationFrame(callback: FrameRequestCallback): number;

    /**
     * Begin presenting to the VRDisplay. Must be called in response to a user gesture.
     * Repeat calls while already presenting will update the VRLayers being displayed.
     */
    requestPresent(layers: VRLayer[]): Promise<void>;

    /**
     * Reset the pose for this display, treating its current position and
     * orientation as the "origin/zero" values. VRPose.position,
     * VRPose.orientation, and VRStageParameters.sittingToStandingTransform may be
     * updated when calling resetPose(). This should be called in only
     * sitting-space experiences.
     */
    resetPose(): void;

    /**
     * The VRLayer provided to the VRDisplay will be captured and presented
     * in the HMD. Calling this function has the same effect on the source
     * canvas as any other operation that uses its source image, and canvases
     * created without preserveDrawingBuffer set to true will be cleared.
     */
    submitFrame(pose?: VRPose): void;
}

declare var VRDisplay: {
    prototype: VRDisplay;
    new(): VRDisplay;
};

interface VRLayer {
    leftBounds?: number[] | Float32Array | null | undefined;
    rightBounds?: number[] | Float32Array | null | undefined;
    source?: HTMLCanvasElement | null | undefined;
}

interface VRDisplayCapabilities {
    readonly canPresent: boolean;
    readonly hasExternalDisplay: boolean;
    readonly hasOrientation: boolean;
    readonly hasPosition: boolean;
    readonly maxLayers: number;
}

declare var VRDisplayCapabilities: {
    prototype: VRDisplayCapabilities;
    new(): VRDisplayCapabilities;
};

interface VREyeParameters {
    /** @deprecated */
    readonly fieldOfView: VRFieldOfView;
    readonly offset: Float32Array;
    readonly renderHeight: number;
    readonly renderWidth: number;
}

declare var VREyeParameters: {
    prototype: VREyeParameters;
    new(): VREyeParameters;
};

interface VRFieldOfView {
    readonly downDegrees: number;
    readonly leftDegrees: number;
    readonly rightDegrees: number;
    readonly upDegrees: number;
}

declare var VRFieldOfView: {
    prototype: VRFieldOfView;
    new(): VRFieldOfView;
};

interface VRFrameData {
    readonly leftProjectionMatrix: Float32Array;
    readonly leftViewMatrix: Float32Array;
    readonly pose: VRPose;
    readonly rightProjectionMatrix: Float32Array;
    readonly rightViewMatrix: Float32Array;
    readonly timestamp: number;
}

declare var VRFrameData: {
    prototype: VRFrameData;
    new(): VRFrameData;
};

interface VRPose {
    readonly angularAcceleration: Float32Array | null;
    readonly angularVelocity: Float32Array | null;
    readonly linearAcceleration: Float32Array | null;
    readonly linearVelocity: Float32Array | null;
    readonly orientation: Float32Array | null;
    readonly position: Float32Array | null;
    readonly timestamp: number;
}

declare var VRPose: {
    prototype: VRPose;
    new(): VRPose;
};

interface VRStageParameters {
    sittingToStandingTransform?: Float32Array | undefined;
    sizeX?: number | undefined;
    sizeY?: number | undefined;
}

interface Navigator {
    getVRDisplays(): Promise<VRDisplay[]>;
    readonly activeVRDisplays: ReadonlyArray<VRDisplay>;
}

interface VRDisplayEventInit extends EventInit {
    display: VRDisplay;
    reason?: VRDisplayEventReason_dt_alias | undefined;
}

interface VRDisplayEvent extends Event {
    readonly display: VRDisplay;
    readonly reason: VRDisplayEventReason_dt_alias | null;
}

declare var VRDisplayEvent: {
    prototype: VRDisplayEvent;
    new(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent;
};

interface Window {
    onvrdisplayactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplayblur: ((this: Window, ev: Event) => any) | null;
    onvrdisplayconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplayfocus: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null;
    addEventListener(type: "vrdisplayactivate", listener: (this: Window, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "vrdisplayblur", listener: (this: Window, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "vrdisplayconnect", listener: (this: Window, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(
        type: "vrdisplaydeactivate",
        listener: (this: Window, ev: Event) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(
        type: "vrdisplaydisconnect",
        listener: (this: Window, ev: Event) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: "vrdisplayfocus", listener: (this: Window, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(
        type: "vrdisplaypointerrestricted",
        listener: (this: Window, ev: Event) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(
        type: "vrdisplaypointerunrestricted",
        listener: (this: Window, ev: Event) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(
        type: "vrdisplaypresentchange",
        listener: (this: Window, ev: Event) => any,
        useCapture?: boolean,
    ): void;
}

interface Gamepad {
    readonly displayId: number;
}
