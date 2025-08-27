import * as React from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";

<Camera />;

<Camera
    onCameraStart={(mediaStream) => {
        // $ExpectType MediaStream
        mediaStream;
    }}
    onCameraStop={() => {}}
    onCameraError={(error) => {
        // $ExpectType Error
        error;
    }}
    onTakePhoto={(dataUri) => {
        // $ExpectType string
        dataUri;
    }}
    onTakePhotoAnimationDone={(dataUri) => {
        // $ExpectType string
        dataUri;
    }}
    idealFacingMode={FACING_MODES.USER}
    idealResolution={{ width: 800, height: 600 }}
    isMaxResolution
    isImageMirror
    isSilentMode
    isFullscreen
    isDisplayStartCameraError
    sizeFactor={0.5}
    imageType={IMAGE_TYPES.PNG}
    imageCompression={0.8}
/>;

<Camera
    idealFacingMode={FACING_MODES.ENVIRONMENT}
    imageType={IMAGE_TYPES.JPG}
/>;

<Camera
    // @ts-expect-error
    idealFacingMode={"back"}
    // @ts-expect-error
    imageType={"tiff"}
/>;
