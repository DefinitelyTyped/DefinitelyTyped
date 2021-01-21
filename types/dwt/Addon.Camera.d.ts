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
    /**
     * Start streaming video from the current camera in the viewer.
     * @param deviceId Specify a camera.
     * @param resolution Specify the initial resolution.
     * @param mode Specify the mode. Allowed values are 'picture' and 'document'. Setting to 'document' mode will enable border detection.
     * @param fill Whether to leave blank margins when showing
     */
    showVideo(deviceId?: string,
        resolution?: Resolution,
		mode?: string,
		fill?: boolean
    ): Promise<Resolution>;
    /**
     * Close the camera and hide the video streaming UI.
     */
    closeVideo(): void;
    /**
     * Specify an event listener for the specified built-in viewer event.
     * @param name Specify the event name.
     * @param callback The event listener.
     */
	on(name: string, callback: (event: ViewerEvent) => void): void;
    /**
     * Remove a built-in viewer event handler.
     * @param eventName Specify the event name.
     */
	off(eventName: string, callback?: (event: ViewerEvent) => void): boolean;
}
export interface DeviceInfo {
    deviceId: string;
    label: string;
}
export interface Resolution {
    width: number;
    height: number;
}
export interface ViewerEvent {
    /**
     * The index of the current image.
     */
    index: number;
    /**
     * The x-coordinate of the upper-left corner of the image.
     */
    imageX: number;
    /**
     * The y-coordinate of the upper-left corner of the image.
     */
    imageY: number;
    /**
     * The x-coordinate relative to the browser page.
     */
    pageX: number;
    /**
     * The y-coordinate relative to the browser page.
     */
    pageY: number;
}
