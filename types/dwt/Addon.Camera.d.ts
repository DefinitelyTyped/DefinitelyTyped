export interface Camera {
    /**
     * Hide the camera interface.
     */
    hide(): void;
    /**
     * Show the camera interface.
     */
    show(): void;
    /**
     * Return a list of all available cameras.
     */
    getSourceList(): Promise<DeviceInfo[]>;
    /**
     * Select a camera to use.
     * @param deviceId Specify the camera with its deviceId.
     */
    selectSource(deviceId: string): Promise<DeviceInfo>;
    /**
     * Return the info about the current camera.
     */
    getCurrentSource(): DeviceInfo;
    /**
     * Close the current camera.
     */
    closeSource(): Promise<DeviceInfo>;
    /**
     * Return the resolutions supported by the current camera.
     */
    getResolution(): Promise<Resolution[]>;
    /**
     * Set the resolution for the current camera.
     * @param resolution Specify the resolution.
     */
    setResolution(resolution: Resolution): Promise<Resolution>;
    /**
     * Return the resolution of the current camera.
     */
    getCurrentResolution(): Promise<Resolution>;
    /**
     * Start streaming video from the current camera.
     * @param element Specify an HTML element to put the video stream in.
     * @param resolution Specify the initial resolution.
     */
    play(element?: HTMLElement,
        resolution?: Resolution
    ): Promise<Resolution>;
    /**
     * Pause the video stream.
     */
    pause(): void;
    /**
     * Resume the video stream.
     */
    resume(): void;
    /**
     * Stop the video stream.
     */
    stop(): void;
    /**
     * Return the status of the current camera.
     */
    getStatus(): string;
    /**
     * Capture a frame from the video stream.
     */
    capture(): Promise<Blob>;
}
export interface DeviceInfo {
    deviceId: string;
    label: string;
}
export interface Resolution {
    width: number;
    height: number;
}
