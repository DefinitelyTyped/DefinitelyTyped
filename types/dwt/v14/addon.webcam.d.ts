// tslint:disable:jsdoc-format

/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

/** -2400 to -2499 is webcam error code */
declare enum EnumDWT_ErrorCode {
    /** All error from directshow sdk */
    WCERR_SYSTEM = -2400,
    /** Create ICreateDevEnum interface failed. */
    WCERR_FAIL_ICREATEDEVENUM = -2401,
    /** Create IEnumMoniker interface failed. */
    WCERR_FAIL_IENUMMONIKER = -2402,
    /** The camera doesn't support IAMVideoProcAmp interface. */
    WCERR_NOT_IAMVIDEOPROPERTY = -2403,
    /** The camera doesn't support IAMCameraControl interface. */
    WCERR_NOT_IAMCAMERACONTROL = -2404,
    /** The property doesn't support auto capability. */
    WCERR_NOT_AUTOPROPERTY = -2405,
    /** No webcam device is found. */
    WCERR_NO_DEVICE = -2406,
    /** Could not get video window interface */
    WCERR_FAIL_VIDEOWINDOW = -2407,
    /** Could not create filter graph. */
    WCERR_FAIL_FILTERGRAPH = -2408,
    /** Could not create SampleGrabber (isqedit.all registered?). */
    WCERR_FAIL_SAMPLEGRABBER = -2409,
    /** Unable to make NULL renderer */
    WCERR_NULLRENDER = -2410,
    /** Can't add the filter to graph */
    WCERR_FAIL_ADDFILTER = -2411,
    /** Can't build the graph */
    WCERR_FAIL_BUILDGRAPH = -2412,
    /** Failed to register filter graph with ROT. */
    WCERR_FAIL_REGFILTERGRAPH = -2413,
    /** Time out */
    WCERR_GRAB_TIMEOUT = -2414
}

/** Specifies the video rotate mode on a video capture device. */
declare enum EnumDWT_VideoRotateMode {
    /** Don't rotate */
    VRM_NONE = 0,
    /** 90 deg Clockwise */
    VRM_90_DEGREES_CLOCKWISE = 1,
    /** 180 deg Clockwise */
    VRM_180_DEGREES_CLOCKWISE = 2,
    /** 270 deg Clockwise */
    VRM_270_DEGREES_CLOCKWISE = 3,
    /** Flip */
    VRM_FLIP_VERTICAL = 4,
    /** Mirror */
    VRM_FLIP_HORIZONTAL = 5
}

/** Specifies video properties on a video capture device. */
declare enum EnumDWT_VideoProperty {
    /** Specifies the brightness, also called the black level. For NTSC, the value is expressed in IRE units * 100. 
     *  For non-NTSC sources, the units are arbitrary, with zero representing blanking and 10,000 representing pure white. 
     *  Values range from -10,000 to 10,000.
     */
    VP_BRIGHTNESS = 0,
    /** Specifies the contrast, expressed as gain factor * 100. Values range from zero to 10,000. */
    VP_CONTRAST = 1,
    /** Specifies the hue, in degrees * 100. Values range from -180,000 to 180,000 (-180 to +180 degrees). */
    VP_HUE = 2,
    /** Specifies the saturation. Values range from 0 to 10,000. */
    VP_SATURATION = 3,
    /** Specifies the sharpness. Values range from 0 to 100. */
    VP_SHARPNESS = 4,
    /** Specifies the gamma, as gamma * 100. Values range from 1 to 500. */
    VP_GAMMA = 5,
    /** Specifies the color enable setting. The possible values are 0 (off) and 1 (on). */
    VP_COLORENABLE = 6,
    /** Specifies the white balance, as a color temperature in degrees Kelvin. The range of values depends on the device. */
    VP_WHITEBALANCE = 7,
    /** Specifies the backlight compensation setting. Possible values are 0 (off) and 1 (on). */
    VP_BACKLIGHTCOMPENSATION = 8,
    /** Specifies the gain adjustment. Zero is normal. Positive values are brighter and negative values are darker. 
     *  The range of values depends on the device.
     */
    VP_GAIN = 9
}

/** Specifies a setting on a camera. */
declare enum EnumDWT_CameraControlProperty {
    /** Specifies the camera's pan setting, in degrees. Values range from -180 to +180, with the default set to zero.
     *  Positive values are clockwise from the origin (the camera rotates clockwise when viewed from above), 
     *  and negative values are counterclockwise from the origin.
     */
    CCP_PAN = 0,
    /** Specifies the camera's tilt setting, in degrees. Values range from -180 to +180, with the default set to zero.
     *  Positive values point the imaging plane up, and negative values point the imaging plane down.
     */
    CCP_TILT = 1,
    /** Specifies the camera's roll setting, in degrees. Values range from -180 to +180, with the default set to zero. 
     *  Positive values cause a clockwise rotation of the camera along the image-viewing axis, and negative values cause a counterclockwise rotation of the camera.
     */
    CCP_ROLL = 2,
    /** Specifies the camera's zoom setting, in millimeters. Values range from 10 to 600, and the default is specific to the device. */
    CCP_ZOOM = 3,
    /** Specifies the exposure setting, in log base 2 seconds. In other words, for values less than zero, the exposure time is 1/2^n seconds, 
     *  and for values zero or above, the exposure time is 2^n seconds. For example:
     *  Value    Seconds
     *  -3    1/8
     *  -2    1/4
     *  -1    1/2
     *  0    1
     *  1    2
     *  2    4
     */
    CCP_EXPOSURE = 4,
    /** Specifies the camera's iris setting, in units of fstop* 10. */
    CCP_IRIS = 5,
    /** Specifies the camera's focus setting, as the distance to the optimally focused target, in millimeters. 
     *  The range and default value are specific to the device. 
     */
    CCP_FOCUS = 6
}

interface WebcamMediaType {
    GetCount(): number;
    Get(index: number): string;
    GetCurrent(): string;
}

interface WebcamResolution {
    GetCount(): number;
    Get(index: number): string;
    GetCurrent(): string;
}

interface WebcamFrameRate {
    GetCount(): number;
    Get(index: number): string;
    GetCurrent(): string;
}

interface CameraControlMoreSetting {
    GetMinValue(): number;
    GetMaxValue(): number;
    GetSteppingDelta(): number;
    GetDefaultValue(): number;
    GetIfAuto(): boolean;
}

interface CameraControlSetting {
    GetValue(): number;
    GetIfAuto(): boolean;
}

interface VideoPropertyMoreSetting {
    GetMinValue(): number;
    GetMaxValue(): number;
    GetSteppingDelta(): number;
    GetDefaultValue(): number;
    GetIfAuto(): boolean;
}

interface VideoPropertySetting {
    GetValue(): number;
    GetIfAuto(): boolean;
}

/**
 * @class
 */
interface Webcam {
    IsModuleInstalled(): boolean;
    GetFramePartURL(): string;
    GetFrameURL(): string;

    /**
     *  Download and install webcam add-on on the local system. 
     * @method Dynamsoft.WebTwain#Download 
     * @param {string} remoteFile:string specifies the value of which frame to get. 
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {boolean}
     */
    Download(remoteFile: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *  Return supported webcam source names. 
     * @method Dynamsoft.WebTwain#GetSourceList 
     * @return {string array}
     */
    GetSourceList(): string[];

    /**
     *  Select the source with the specified name. 
     * @method Dynamsoft.WebTwain#SelectSource 
     * @param {string} strSourceName The source name.
     * @return {boolean}
     */
    SelectSource(strSourceName: string): boolean;

    /**
     *  Close the selected source and release the webcam. 
     * @method Dynamsoft.WebTwain#CloseSource 
     * @return {boolean}
     */
    CloseSource(): boolean;

    /**
     *  Show video stream in a specified container
     * @method Dynamsoft.WebTwain#StopVideo 
     * @param {WebTwain} DWObject Specifies the WebTwain Object.
     * @param {number} quality Specifies the quality of each frame in the video stream. Only valid for the HTML5 edition.
     * @param {function} onFrameCaptured callback of the operation to capture
     * @return {void}
     */
    PlayVideo(DWObject: WebTwain, quality: number, onFrameCaptured: () => void): void;

    /**
     *  Stop the video stream in the specified container
     * @method Dynamsoft.WebTwain#StopVideo 
     * @return {boolean}
     */
    StopVideo(): boolean;

    /**
     *  Capture image from the specified webcam. 
     * @method Dynamsoft.WebTwain#CaptureImage 
     * @param {function} OnCaptureSuccess The function to call when the capture succeeds. Please refer to the function prototype OnCaptureSuccess.
     * @param {function} OnCaptureError The function to call when the capture fails. Please refer to the function prototype OnCaptureError.
     * @return {void}
     */
    CaptureImage(OnCaptureSuccess: () => void, OnCaptureError: () => void): void;

    /**
     *  Returns the media type for a camera. 
     * @method Dynamsoft.WebTwain#GetMediaType 
     * @return {class MediaType}
     */
    GetMediaType(): WebcamMediaType;

    /**
     *  Returns the count in the media type list. 
     * @method Dynamsoft.WebTwain#GetResolution 
     * @return {class Resolution}
     */
    GetResolution(): WebcamResolution;

    /**
     *  Returns the frame rate for a camera. 
     * @method Dynamsoft.WebTwain#GetFrameRate 
     * @return {class FrameRate}
     */
    GetFrameRate(): WebcamFrameRate;

    /**
     *  Set the media type of the current selected source by the value. 
     * @method Dynamsoft.WebTwain#SetMediaType 
     * @param {string} value The new media type value.
     * @return {boolean}
     */
    SetMediaType(value: string): boolean;

    /**
     *  Set the resolution of the current camera source. 
     * @method Dynamsoft.WebTwain#SetResolution 
     * @param {string} value The new resolution value.
     * @return {boolean}
     */
    SetResolution(value: string): boolean;

    /**
     *  Set current frame rate. 
     * @method Dynamsoft.WebTwain#SetFrameRate 
     * @param {number} value The new frame rate value.
     * @return {boolean}
     */
    SetFrameRate(value: number): boolean;

    /**
     *  Gets the current setting of a video property. 
     * @method Dynamsoft.WebTwain#GetVideoPropertySetting 
     * @param {EnumDWT_VideoProperty} property The property.
     * @return {class VideoPropertySetting}
     */
    GetVideoPropertySetting(property: EnumDWT_VideoProperty): VideoPropertySetting;

    /**
     *  Gets the range and default value of a specified video property. 
     * @method Dynamsoft.WebTwain#GetVideoPropertyMoreSetting 
     * @param {EnumDWT_VideoProperty} property The property.
     * @return {class VideoPropertyMoreSetting}
     */
    GetVideoPropertyMoreSetting(property: EnumDWT_VideoProperty): VideoPropertyMoreSetting;

    /**
     *  Gets the current setting of a camera property. 
     * @method Dynamsoft.WebTwain#GetCameraControlPropertySetting 
     * @param {EnumDWT_CameraControlProperty} property The property.
     * @return {class CameraControlPropertySetting}
     */
    GetCameraControlPropertySetting(property: EnumDWT_CameraControlProperty): CameraControlSetting;

    /**
     *  Gets the range and default value of a specified camera property. 
     * @method Dynamsoft.WebTwain#GetVideoPropertyMoreSetting 
     * @param {EnumDWT_CameraControlProperty} property The property.
     * @return {class CameraControlPropertyMoreSetting}
     */
    GetCameraControlPropertyMoreSetting(property: EnumDWT_CameraControlProperty): CameraControlMoreSetting;

    /**
     *  Sets video quality for a specified property. 
     * @method Dynamsoft.WebTwain#SetVideoPropertySetting 
     * @param {EnumDWT_VideoProperty} property The property.
     * @param {number} value The new value of the property.
     * @param {boolean} auto The desired control setting, whether the setting is controlled manually or automatically.
     * @return {boolean}
     */
    SetVideoPropertySetting(property: EnumDWT_VideoProperty, value: number, auto: boolean): boolean;

    /**
     *  Sets video rotate mode.
     * @method Dynamsoft.WebTwain#SetVideoRotateMode 
     * @param {EnumDWT_VideoRotateMode} enumAngle The rotate angle.
     * @return {boolean}
     */
    SetVideoRotateMode(enumAngle: EnumDWT_VideoRotateMode): boolean;

    /**
     *  Sets a specified property on the camera. 
     * @method Dynamsoft.WebTwain#SetCameraControlPropertySetting 
     * @param {EnumDWT_CameraControlProperty} property The property.
     * @param {number} value The new value of the property.
     * @param {boolean} auto The desired control setting, whether the setting is controlled manually or automatically.
     * @return {boolean}
     */
    SetCameraControlPropertySetting(property: EnumDWT_CameraControlProperty, value: number, auto: boolean): boolean;
}

interface DynamsoftWebTwainAddon {
    Webcam: Webcam;
}
