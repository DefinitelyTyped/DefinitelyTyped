import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";
import { WebTwain } from "./WebTwain";

export interface Webcam {
    /**
     * Return whether the Webcam module has been installed.
     */
    IsModuleInstalled(): boolean;
    /**
     * Capture an image from the current camera.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error String
     */
    CaptureImage(
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Return a list of all available cameras.
     */
    GetSourceList(): string[];
    /**
     * Select a camera to use.
     * @param name Specify the camera.
     */
    SelectSource(name: string): boolean;
    /**
     * Close the current camera.
     */
    CloseSource(): boolean;
    /**
     * Start to play the video stream from the current camera.
     * @param DWObject Specify a WebTwain instance to show the video.
     * @param quality Specify the quality of the video.
     * @param frameDidShow A callback function that is triggered after each video frame is shown.
     */
    PlayVideo(
        DWObject: WebTwain,
        quality: number,
        frameDidShow?: () => void
    ): boolean;
    /**
     * Pause the video.
     */
    PauseVideo(): boolean;
    /**
     * Stop the video.
     */
    StopVideo(): boolean;
    /**
     * Return information about the specified camera property.
     * @param property Specify the property.
     */
    GetCameraControlPropertySetting(
        property: Dynamsoft.EnumDWT_CameraControlProperty | number
    ): CameraControlProperty;
    /**
     * Return detailed information about the specified camera property.
     * @param property Specify the property.
     */
    GetCameraControlPropertyMoreSetting(
        property: Dynamsoft.EnumDWT_CameraControlProperty | number
    ): CameraControlPropertyExtra;
    /**
     * Set the specified camera property.
     * @param property Specify the property.
     * @param value Specify the value.
     * @param auto Specify whether the propery should change automatically.
     */
    SetCameraControlPropertySetting(
        property: Dynamsoft.EnumDWT_CameraControlProperty | number,
        value: number,
        auto: boolean
    ): boolean;
    /**
     * Return information about the specified video property.
     * @param property Specify the property.
     */
    GetVideoPropertySetting(
        property: Dynamsoft.EnumDWT_VideoProperty | number
    ): VideoControlProperty;
    /**
     * Return detailed information about the specified video property.
     * @param property Specify the property.
     */
    GetVideoPropertyMoreSetting(
        property: Dynamsoft.EnumDWT_VideoProperty | number
    ): VideoControlPropertyExtra;
    /**
     * Set the specified video property.
     * @param property Specify the property.
     * @param value Specify the value.
     * @param auto Specify whether the propery should change automatically.
     */
    SetVideoPropertySetting(
        property: Dynamsoft.EnumDWT_VideoProperty | number,
        value: number,
        auto: boolean
    ): boolean;
    /**
     * Return the frame rates supported by the current camera.
     */
    GetFrameRate(): FrameRate;
    /**
     * Return the media types supported by the current camera.
     */
    GetMediaType(): MediaType;
    /**
     * Return the resolutions supported by the current camera.
     */
    GetResolution(): Resolution;
    /**
     * Set the frame rate.
     * @param rate Specify the frame rate.
     */
    SetFrameRate(rate: number): boolean;
    /**
     * Set the media type.
     * @param type Sepcify the media type.
     */
    SetMediaType(type: string): boolean;
    /**
     * Set the resolution.
     * @param resolution Specify the resolution.
     */
    SetResolution(resolution: string): boolean;
    /**
     * Rotate the video.
     * @param mode Specify the rotate mode
     */
    SetVideoRotateMode(
        mode: Dynamsoft.EnumDWT_VideoRotateMode | number
    ): boolean;
    /**
     * Return the URL (http(s)://) for the latest frame.
     */
    GetFrameURL(): string;
    /**
     * Return the internal URL (dwt://) for the latest frame.
     */
    GetFramePartURL(): string;
}
export interface FrameRate {
    /**
     * Return the number of available frame rates.
     */
    GetCount(): number;
    /**
     * Return the specified frame rate.
     */
    Get(index: number): number;
    /**
     * Return the current frame rate.
     */
    GetCurrent(): number;
}
export interface MediaType {
    /**
     * Return the number of available media types.
     */
    GetCount(): number;
    /**
     * Return the specified media type.
     */
    Get(index: number): string;
    /**
     * Return the current media type.
     */
    GetCurrent(): string;
    /**
     * internal use
     */
    _resultlist: any;
}
export interface Resolution {
    /**
     * Return the number of available resolutions.
     */
    GetCount(): number;
    /**
     * Return the specified resolution.
     */
    Get(index: number): string;
    /**
     * Return the current resolution.
     */
    GetCurrent(): string;
}
export interface VideoControlProperty {
    /**
     * Return the value of the property.
     */
    GetValue(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}
export interface VideoControlPropertyExtra {
    /**
     * Return the minimum value of the property.
     */
    GetMinValue(): number;
    /**
     * Return the maximum value of the property.
     */
    GetMaxValue(): number;
    /**
     * Return the default value of the property.
     */
    GetDefaultValue(): number;
    /**
     * Return the smallest increment by which the property can change.
     */
    GetSteppingDelta(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}
export interface CameraControlProperty {
    /**
     * Return the value of the property.
     */
    GetValue(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}
export interface CameraControlPropertyExtra {
    /**
     * Return the minimum value of the property.
     */
    GetMinValue(): number;
    /**
     * Return the maximum value of the property.
     */
    GetMaxValue(): number;
    /**
     * Return the default value of the property.
     */
    GetDefaultValue(): number;
    /**
     * Return the smallest increment by which the property can change.
     */
    GetSteppingDelta(): number;
    /**
     * Return whether the property is set autmatically or not.
     */
    GetIfAuto(): boolean;
}
