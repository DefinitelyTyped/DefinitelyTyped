/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
import { Component } from "react";
import { ColorValue, ViewProps } from "react-native";

export interface SignatureCaptureProps extends ViewProps {
    /**
     * Sets the background color of the component.
     * Defaults to white. May be 'transparent'.
     *
     * @default 'white'
     */
    backgroundColor?: ColorValue;

    /**
     * Make this props true, if you want to save the image file in external storage.
     * Warning: Image file will be visible in gallery or any other image browsing app
     *
     * @default false
     */
    saveImageFileInExtStorage?: boolean | undefined;

    /**
     * If this props is made to false, it will hide the dashed border (the border is shown on iOS only).
     *
     * @default false
     */
    showBorder?: boolean | undefined;

    /**
     * If this props is made to true, it will display the native buttons "Save" and "Reset".
     *
     * @default false
     */
    showNativeButtons?: boolean | undefined;

    /**
     * If this props is made to true, it will display the "x_ _ _ _ _ _ _ _ _ _ _" placeholder indicating where to sign.
     *
     * @default false
     */
    showTitleLabel?: boolean | undefined;

    /**
     * Change the screen orientation based on boolean value
     * "portrait" or "landscape"
     */
    viewMode?: "portrait" | "landscape" | undefined;

    /**
     * sets the max size of the image maintains aspect ratio,
     *
     * @default 500
     */
    maxSize?: number | undefined;

    /**
     * Sets the color of the signature. Defaults to black.
     *
     * @default "#000000"
     */
    strokeColor?: string | undefined;

    /**
     * Triggered when saveImage() is called, which return Base64 Encoded String and image file path.
     *
     * @param params - the file path and encoded png
     */
    onSaveEvent?(params: SaveEventParams): void;

    /**
     * Triggered when user marks their signature on the canvas.
     * This will not be called when the user does not perform any action on canvas.
     *
     * @param event - the event when a drag is performed
     */
    onDragEvent?(event: any): void;
}

export interface SaveEventParams {
    /**
     * The file path name
     */
    pathName: string;

    /**
     * The base64 encoded png
     */
    encoded: string;
}

declare class SignatureCapture extends Component<SignatureCaptureProps> {
    /**
     * When called it will save the image and returns the base 64 encoded string on onSaveEvent() callback
     */
    saveImage(): void;

    /**
     * When called it will clear the image on the canvas
     */
    resetImage(): void;
}

export default SignatureCapture;
