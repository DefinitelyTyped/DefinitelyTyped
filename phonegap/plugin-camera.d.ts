interface CameraPopoverOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    arrowDir?: number;
}
declare var CameraPopoverOptions: {
    new(x: number, y: number, width: number, height: number, arrowDir: number): CameraPopoverOptions;
}

interface CameraOptions {
    quality?: number;
    destinationType?: number;
    sourceType?: number;
    allowEdit?: boolean;
    encodingType?: number;
    targetWidth?: number;
    targetHeight?: number;
    mediaType?: number;
    correctOrientation?: boolean;
    saveToPhotoAlbum?: boolean;
    popoverOptions?: number;
}

interface CameraPictureSourceTypeObject {
    CAMERA: number;
    PHOTOLIBRARY: number;
    SAVEDPHOTOALBUM: number;
}

interface CameraDestinationTypeObject {
    FILE_URI: number;
    DATA_URL: number;
}

interface CameraEncodingTypeObject {
    JPEG: number;
    PNG: number;
}

interface CameraMediaTypeObject {
    PICTURE: number;
    VIDEO: number;
    ALLMEDIA: number;
}

interface CameraPopoverArrowDirectionObject {
    ARROW_UP: number;
    ARROW_DOWN: number;
    ARROW_LEFT: number;
    ARROW_RIGHT: number;
    ARROW_ANY: number;
}

interface Camera {
    sourceType: any;
    PictureSourceType: CameraPictureSourceTypeObject;
    DestinationType: CameraDestinationTypeObject;
    EncodingType: CameraEncodingTypeObject;
    MediaType: CameraMediaTypeObject;
    PopoverArrowDirection: CameraPopoverArrowDirectionObject;
    getPicture(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void , cameraOptions?: CameraOptions): void;
    cleanup(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void ): void;
}

interface Navigator {
    camera: Camera;
}