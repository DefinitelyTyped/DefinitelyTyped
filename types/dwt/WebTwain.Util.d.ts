import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";

export interface WebTwainUtil {
    /**
     * Return the error code.
     */
    readonly ErrorCode: number;
    /**
     * Return the error string.
     */
    readonly ErrorString: string;
    /**
     * Return or set the log level for debugging.
     */
    LogLevel: number;
    /**
     * Manufacturer in the identity string of the Dynamic Web TWAIN library.
     */
    readonly Manufacturer: string;
    /**
     * ProductFamily in the identity string of the Dynamic Web TWAIN library.
     */
    readonly ProductFamily: string;
    /**
     * Return or set the ProductKey.
     */
    ProductKey: string;
    /**
     * ProductName in the identity string of the Dynamic Web TWAIN library.
     */
    readonly ProductName: string;
    /**
     * Generate a URL to be used by a FileUpoader instance to fetch the data to upload.
     * @param indices Specify the images to upload.
     * @param type Specify the file type.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument resultURL The generated URL.
     * @argument indices The indices of the images.
     * @argument type The file type.
     */
    GenerateURLForUploadData(
        indices: number[],
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: (
            resultURL: string,
            indices: number[],
            type: Dynamsoft.EnumDWT_ImageType | number
        ) => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Specify an event listener for the specified built-in event.
     * @param name Specify the event
     * @param callback The event listener
     */
    RegisterEvent(name: string, callback: (...arg: any[]) => void): boolean;
    /**
     * Set the language for the authorization dialogs.
     * @param language Specify the language.
     */
    SetLanguage(
        language: Dynamsoft.EnumDWT_Language | number
    ): boolean;
    /**
     * Remove an event listener from the specified built-in event.
     * @param name Specify the event
     * @param callback The event listener
     */
    UnregisterEvent(name: string, callback: () => void): boolean;
    /**
     * VersionInfo in the identity string of the Dynamic Web TWAIN library.
     */
    readonly VersionInfo: string;
    /**
     * Update / set the ProductKey.
     * @param productKey the ProductKey.
     */
    SetProductKeyAsync(productKey: string): Promise<Authorization>;
}

export interface Authorization {
    /**
     * The domain bound in the product key.
     */
    Domain: string;
    /**
     * Details of the authorization.
     */
    Detail: any;
}
