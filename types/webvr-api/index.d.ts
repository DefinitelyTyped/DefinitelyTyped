// Type definitions for WebVR API
// Project: https://w3c.github.io/webvr/
// Definitions by: six a <https://github.com/lostfictions>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class VRDisplay extends EventTarget {
  isConnected: boolean;
  isPresenting: boolean;

  /**
   * Dictionary of capabilities describing the VRDisplay.
   */
  capabilities: VRDisplayCapabilities;

  /**
   * If this VRDisplay supports room-scale experiences, the optional
   * stage attribute contains details on the room-scale parameters.
   */
  stageParameters: VRStageParameters;

  /* Return the current VREyeParameters for the given eye. */
  getEyeParameters(whichEye: VREye): VREyeParameters;

  /**
   * An identifier for this distinct VRDisplay. Used as an
   * association point in the Gamepad API.
   */
  displayId: number;

  /**
   * A display name, a user-readable name identifying it.
   */
  displayName: string;

  /**
   * Populates the passed VRFrameData with the information required to render
   * the current frame.
   */
  getFrameData(frameData: VRFrameData): boolean;

  /**
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
   * Reset the pose for this display, treating its current position and
   * orientation as the "origin/zero" values. VRPose.position,
   * VRPose.orientation, and VRStageParameters.sittingToStandingTransform may be
   * updated when calling resetPose(). This should be called in only
   * sitting-space experiences.
   */
  resetPose(): void;

  /**
   * z-depth defining the near plane of the eye view frustum
   * enables mapping of values in the render target depth
   * attachment to scene coordinates. Initially set to 0.01.
   */
  depthNear: number;

  /**
   * z-depth defining the far plane of the eye view frustum
   * enables mapping of values in the render target depth
   * attachment to scene coordinates. Initially set to 10000.0.
   */
  depthFar: number;

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
   * Passing the value returned by `requestAnimationFrame` to
   * `cancelAnimationFrame` will unregister the callback.
   */
  cancelAnimationFrame(handle: number): void;

  /**
   * Begin presenting to the VRDisplay. Must be called in response to a user gesture.
   * Repeat calls while already presenting will update the VRLayers being displayed.
   */
  requestPresent(layers: Array<VRLayer>): Promise<void>;

  /**
   * Stops presenting to the VRDisplay.
   */
  exitPresent(): Promise<void>;

  /**
   * Get the layers currently being presented.
   */
  getLayers(): Array<VRLayer>;

  /**
   * The VRLayer provided to the VRDisplay will be captured and presented
   * in the HMD. Calling this function has the same effect on the source
   * canvas as any other operation that uses its source image, and canvases
   * created without preserveDrawingBuffer set to true will be cleared.
   */
  submitFrame(pose?: VRPose): void;
}

type VRSource = HTMLCanvasElement;


type VRLayer = {
  source?: VRSource;

  leftBounds?: Array<number>;
  rightBounds?: Array<number>;
};

interface VRDisplayCapabilities {
  hasPosition: boolean;
  hasOrientation: boolean;
  hasExternalDisplay: boolean;
  canPresent: boolean;
  maxLayers: number;
}

type VREye = "left" | "right";

interface VRFieldOfView {
  upDegrees: number;
  rightDegrees: number;
  downDegrees: number;
  leftDegrees: number;
}

interface VRPose {
  timestamp: number;

  position: Float32Array;
  linearVelocity: Float32Array;
  linearAcceleration: Float32Array;

  orientation: Float32Array;
  angularVelocity: Float32Array;
  angularAcceleration: Float32Array;
}

declare class VRFrameData {
  timestamp: number; // Should be DOMHighResTimeStamp

  leftProjectionMatrix: Float32Array;
  leftViewMatrix: Float32Array;

  rightProjectionMatrix: Float32Array;
  rightViewMatrix: Float32Array;

  pose: VRPose;
}

interface VREyeParameters {
  offset: Float32Array;

  fieldOfView: VRFieldOfView;

  renderWidth: number;
  renderHeight: number;
}

interface VRStageParameters {
  sittingToStandingTransform: Float32Array;

  sizeX: number;
  sizeZ: number;
}

interface Navigator {
  getVRDisplays(): Promise<Array<VRDisplay>>;
  activeVRDisplays: Array<VRDisplay>;
}

interface Window {
  onvrdisplayconnected: (ev: Event) => any;
  onvrdisplaydisconnected: (ev: Event) => any;
  onvrdisplaypresentchange: (ev: Event) => any;
  addEventListener(type: "vrdisplayconnected", listener: (ev: Event) => any, useCapture?: boolean): void;
  addEventListener(type: "vrdisplaydisconnected", listener: (ev: Event) => any, useCapture?: boolean): void;
  addEventListener(type: "vrdisplaypresentchange", listener: (ev: Event) => any, useCapture?: boolean): void;
}

interface Gamepad {
  displayId: number;
}
