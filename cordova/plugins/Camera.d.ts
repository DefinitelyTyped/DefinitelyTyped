// Type definitions for Apache Cordova Camera plugin.
// Project: https://github.com/apache/cordova-plugin-camera
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Navigator {
    /**
     * This plugin provides an API for taking pictures and for choosing images from the system's image library.
     */
    camera: Camera;
}

/**
 * This plugin provides an API for taking pictures and for choosing images from the system's image library.
 */
interface Camera {
    /**
     * Removes intermediate photos taken by the camera from temporary storage.
     * @param onSuccess Success callback, that called when cleanup succeeds.
     * @param onError Error callback, that get an error message.
     */
    cleanup(
        onSuccess: () => void,
        onError: (message: string) => void): void;
    /**
     * Takes a photo using the camera, or retrieves a photo from the device's image gallery.
     * @param cameraSuccess Success callback, that get the image
     * as a base64-encoded String, or as the URI for the image file.
     * @param cameraError Error callback, that get an error message.
     * @param cameraOptions Optional parameters to customize the camera settings.
     */
    getPicture(
        cameraSuccess: (data: string) => void,
        cameraError: (message: string) => void,
        cameraOptions?: CameraOptions): void;
    // Next will work only on iOS
    //getPicture(
    //    cameraSuccess: (data: string) => void,
    //    cameraError: (message: string) => void,
    //    cameraOptions?: CameraOptions): CameraPopoverHandle;
}

interface CameraOptions {
    /** Picture quality in range 0-100. Default is 50 */
    quality?: number;
    /**
     * Choose the format of the return value.
     * Defined in navigator.camera.DestinationType. Default is FILE_URI.
     *      DATA_URL : 0,   Return image as base64-encoded string
     *      FILE_URI : 1,   Return image file URI
     *      NATIVE_URI : 2  Return image native URI
     *          (e.g., assets-library:// on iOS or content:// on Android)
     */
    destinationType?: number;
    /**
     * Set the source of the picture.
     * Defined in navigator.camera.PictureSourceType. Default is CAMERA.
     *      PHOTOLIBRARY : 0,
     *      CAMERA : 1,
     *      SAVEDPHOTOALBUM : 2
     */
    sourceType?: number;
    /** Allow simple editing of image before selection. */
    allowEdit?: boolean;
    /**
     * Choose the returned image file's encoding.
     * Defined in navigator.camera.EncodingType. Default is JPEG
     *      JPEG : 0    Return JPEG encoded image
     *      PNG : 1     Return PNG encoded image
     */
    encodingType?: number;
    /**
     * Width in pixels to scale image. Must be used with targetHeight.
     * Aspect ratio remains constant.
    */
    targetWidth?: number;
    /**
     * Height in pixels to scale image. Must be used with targetWidth.
     * Aspect ratio remains constant.
     */
    targetHeight?: number;
    /**
     * Set the type of media to select from. Only works when PictureSourceType
     * is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in nagivator.camera.MediaType
     *      PICTURE: 0      allow selection of still pictures only. DEFAULT.
     *          Will return format specified via DestinationType
     *      VIDEO: 1        allow selection of video only, WILL ALWAYS RETURN FILE_URI
     *      ALLMEDIA : 2    allow selection from all media types
     */
    mediaType?: number;
    /** Rotate the image to correct for the orientation of the device during capture. */
    correctOrientation?: boolean;
    /** Save the image to the photo album on the device after capture. */
    saveToPhotoAlbum?: boolean;
    /**
     * Choose the camera to use (front- or back-facing).
     * Defined in navigator.camera.Direction. Default is BACK.
     *      FRONT: 0
     *      BACK: 1
     */
    cameraDirection?: number;
    /** iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions. */
    popoverOptions?: CameraPopoverOptions;
}

/**
 * A handle to the popover dialog created by navigator.camera.getPicture. Used on iOS only.
 */
interface CameraPopoverHandle {
    /**
     * Set the position of the popover.
     * @param popoverOptions the CameraPopoverOptions that specify the new position.
     */
    setPosition(popoverOptions: CameraPopoverOptions): void;
}

/**
 * iOS-only parameters that specify the anchor element location and arrow direction
 * of the popover when selecting images from an iPad's library or album.
 */
interface CameraPopoverOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection
     * Matches iOS UIPopoverArrowDirection constants.
     *      ARROW_UP : 1,        
     *      ARROW_DOWN : 2,
     *      ARROW_LEFT : 4,
     *      ARROW_RIGHT : 8,
     *      ARROW_ANY : 15
     */
    arrowDir : number;
}

declare var Camera: {
    // Camera constants, defined in Camera plugin
    DestinationType: {
        DATA_URL: number;
        FILE_URI: number;
        NATIVE_URI: number
    }
    Direction: {
        BACK: number;
        FRONT: number;
    }
    EncodingType: {
        JPEG: number;
        PNG: number;
    }
    MediaType: {
        PICTURE: number;
        VIDEO: number;
        ALLMEDIA: number;
    }
    PictureSourceType: {
        PHOTOLIBRARY: number;
        CAMERA: number;
        SAVEDPHOTOALBUM: number;
    }
    // Used only on iOS
    PopoverArrowDirection: {
        ARROW_UP: number;
        ARROW_DOWN: number;
        ARROW_LEFT: number;
        ARROW_RIGHT: number;
        ARROW_ANY: number;
    }
};