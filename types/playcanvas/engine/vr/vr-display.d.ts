type NativeVRDisplay = typeof VRDisplay;
type NativeVRDisplayCapabilities = typeof VRDisplayCapabilities;

declare namespace pc {

    /**
     * @name pc.VrDisplay
     * @class Represents a single Display for VR content. This could be a Head Mounted display that can present content on a separate screen
     * or a phone which can display content full screen on the same screen. This object contains the native `navigator.VRDisplay` object
     * from the WebVR API.
     * @description Represents a single Display for VR content. This could be a Head Mounted display that can present content on a separate screen
     * or a phone which can display content full screen on the same screen. This object contains the native `navigator.VRDisplay` object
     * from the WebVR API.
     * @property {Number} id An identifier for this distinct VRDisplay
     * @property {VRDisplay} display The native VRDisplay object from the WebVR API
     * @property {Boolean} presenting True if this display is currently presenting VR content
     * @property {VRDisplayCapabilities} capabilities Returns the <a href="https://w3c.github.io/webvr/#interface-vrdisplaycapabilities" target="_blank">VRDisplayCapabilities</a> object from the VRDisplay.
     * This can be used to determine what features are available on this display.
     * @returns {pc.VrDisplay} A new pc.VrDisplay.
     */
    class VrDisplay {
        constructor(app: pc.Application, display: NativeVRDisplay)

        id: number;
        display: NativeVRDisplay;
        presenting: boolean;
        capabilities: NativeVRDisplayCapabilities;

        /**
        * @function
        * @name pc.VrDisplay#destroy
        * @description Destroy this display object
        */
        destroy(): void;

        /**
        * @function
        * @name pc.VrDisplay#poll
        * @description Called once per frame to update the current status from the display. Usually called by {@link pc.VrManager}.
        */
        poll(): void;

        /**
        * @function
        * @name pc.VrDisplay#requestPresent
        * @description Try to present full screen VR content on this display
        * @param {Function} callback Called when the request is completed. Callback takes a single argument (err) that is the error message return
        * if presenting fails, or null if the call succeeds. Usually called by {@link pc.CameraComponent#enterVr}.
        */
        requestPresent(callback: Function): void;

        /**
        * @function
        * @name pc.VrDisplay#exitPresent
        * @description Try to stop presenting VR content on this display
        * @param {Function} callback Called when the request is completed. Callback takes a single argument (err) that is the error message return
        * if presenting fails, or null if the call succeeds. Usually called by {@link pc.CameraComponent#exitVr}.
        */
        exitPresent(callback: Function): void;

        /**
        * @function
        * @name pc.VrDisplay#requestAnimationFrame
        * @description Used in the main application loop instead of the regular `window.requestAnimationFrame`. Usually only called from inside {@link pc.Application}
        * @param {Function} fn Function called when it is time to update the frame.
        */
        requestAnimationFrame(fn: Function): void;

        /**
        * @function
        * @name pc.VrDisplay#submitFrame
        * @description Called when animation update is complete and the frame is ready to be sent to the display. Usually only called from inside {@link pc.Application}.
        */
        submitFrame(): void;

        /**
        * @function
        * @name pc.VrDisplay#reset
        * @description Called to reset the pose of the pc.VrDisplay. Treating its current pose as the origin/zero. This should only be called in 'sitting' experiences.
        */
        reset(): void;

        /**
        * @function
        * @name pc.VrDisplay#setClipPlanes
        * @description Set the near and far depth plans of the display. This enables mapping of values in the
        * render target depth attachment to scene coordinates
        * @param {Number} n The near depth distance
        * @param {Number} f The far depth distance
        */
        setClipPlanes(n: number, f: number): void;

        /**
        * @function
        * @name pc.VrDisplay#getFrameData
        * @description Return the current frame data that is updated during polling.
        * @returns {VRFrameData} The frame data object
        */
        getFrameData(): void;    
    }
}
