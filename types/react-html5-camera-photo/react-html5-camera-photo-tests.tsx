import * as React from 'react';
import Camera from 'react-html5-camera-photo';

const CameraBasicApp: React.FC = () => {
    return (
        <Camera

        />
    );
};

const OptionsCameraApp: React.FC = () => {
    return (
        <Camera
            onCameraStart={() => { }}
            onCameraStop={() => { }}
            onCameraError={(_error) => { }}
            onTakePhoto={(_dataUri) => { }}
            onTakePhotoAnimationDone={(_dataUri) => { }}
            idealFacingMode="user"
            idealResolution={{ width: 800, height: 600 }}
            isMaxResolution
            isImageMirror
            isSilentMode
            isFullscreen
            isDisplayStartCameraError
            sizeFactor={0.5}
            imageType="png"
            imageCompression={0.8}
        />
    );
};

const OtherOptionsCameraApp: React.FC = () => {
    return (
        <Camera
            idealFacingMode="environment"
            imageType="jpg"
        />
    );
};
